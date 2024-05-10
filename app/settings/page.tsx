import { getUser, getEmailFrom } from "@/libraries/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

import { User } from "@clerk/nextjs/server";

export default async function Settings() {
  const user: User = await getUser();

  const email: string = await getEmailFrom(user);

  return (
    <>
      <Header />
      <main className="container mx-auto py-12 px-4 md:px-6 flex flex-col items-center justify-center">
        <div className="grid gap-6 w-full max-w-2xl">
          <h1 className="text-3xl font-bold">Settings</h1>
          <Card className="w-full">
            <CardHeader className="flex flex-col items-center space-y-4 p-6">
              <Avatar className="h-20 w-20">
                <AvatarImage alt={email} src={user.imageUrl} />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input defaultValue={user.firstName ?? ""} id="firstName" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input defaultValue={user.lastName ?? ""} id="lastName" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input defaultValue={email} id="email" type="email" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end p-6">
              <Button>Update</Button>
            </CardFooter>
          </Card>
          <Card className="w-full">
            <CardHeader className="flex flex-col items-center space-y-4 p-6">
              <h3 className="text-lg font-bold">Update Account Password</h3>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end p-6">
              <Button>Update</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
