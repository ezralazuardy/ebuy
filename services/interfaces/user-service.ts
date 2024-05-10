import { User } from "@clerk/nextjs/server";

export default interface UserService {
  getAuthenticatedUser(): Promise<User>;
  getEmailFrom(user: User): Promise<string>;
}
