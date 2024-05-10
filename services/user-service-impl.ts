import "reflect-metadata";
import { injectable } from "inversify";
import { User, currentUser } from "@clerk/nextjs/server";
import UserService from "@/services/interfaces/user-service";

@injectable()
export default class UserServiceImpl implements UserService {
  async getAuthenticatedUser(): Promise<User> {
    const user = await currentUser();

    if (!user) {
      throw new Error("You must be signed in to access.");
    }

    return user;
  }

  async getEmailFrom(user: User): Promise<string> {
    const emailID = user.primaryEmailAddressId;

    for (let i = 0; i < user.emailAddresses.length; i++) {
      if (user.emailAddresses[i].id === emailID) {
        return user.emailAddresses[i].emailAddress;
      }
    }

    return "";
  }
}
