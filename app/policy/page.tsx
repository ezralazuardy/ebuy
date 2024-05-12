import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Page() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-14">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              At {process.env.NEXT_PUBLIC_APP_NAME}, we are committed to
              protecting the privacy and security of your personal information.
              This privacy policy outlines how we collect, use, and safeguard
              your data.
            </p>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Data Collection</h2>
              <p className="text-gray-500 dark:text-gray-400">
                We collect personal information, such as your name, email
                address, and payment details, when you sign up for our services
                or make a purchase. We also collect usage data, such as the
                pages you visit and the actions you take on our website.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Data Usage</h2>
              <p className="text-gray-500 dark:text-gray-400">
                We use your personal information to provide and improve our
                services, process payments, and communicate with you. We may
                also use your data for analytics and marketing purposes, but we
                will always obtain your consent before doing so.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Data Sharing</h2>
              <p className="text-gray-500 dark:text-gray-400">
                We may share your personal information with third-party service
                providers who assist us in operating our business, such as
                payment processors and web hosting providers. We will never sell
                or rent your personal information to any third party without
                your explicit consent.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">User Rights</h2>
              <p className="text-gray-500 dark:text-gray-400">
                You have the right to access, update, and delete your personal
                information at any time. You can also opt-out of marketing
                communications and request a copy of your data. If you have any
                concerns or questions about our privacy practices, please
                don&apos;t hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
