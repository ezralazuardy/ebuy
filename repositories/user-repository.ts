import { db } from "@/lib/drizzle/db";

export const getUsers = async () => {
  return db.query.users.findMany();
};
