import { database } from "@/libraries/drizzle/db";
import { injectable } from "inversify";

@injectable()
export class UserRepository {
  constructor(private db: any) {
    this.db = database;
  }

  async getUsers() {
    return this.db.query.users.findMany();
  }
}
