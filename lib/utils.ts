import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { currentUser } from "@clerk/nextjs/server";

import type { User } from "@clerk/backend";
import type { EmailAddress } from "@clerk/backend";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getUser(): Promise<User> {
  const user = await currentUser();

  if (!user) {
    throw new Error("You must be signed in to access.");
  }

  return user;
}

export async function getEmailFrom(user: User): Promise<string> {
  const emailID = user.primaryEmailAddressId;

  for (let i = 0; i < user.emailAddresses.length; i++) {
    if (user.emailAddresses[i].id === emailID) {
      return user.emailAddresses[i].emailAddress;
    }
  }

  return "";
}
