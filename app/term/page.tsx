export default function Page() {
  return (
    <main className="container mx-auto px-4 md:px-6 py-14">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Welcome to {process.env.NEXT_PUBLIC_APP_NAME} By using our services,
            you agree to be bound by these terms of service.
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Acceptance of Terms</h2>
            <p className="text-gray-500 dark:text-gray-400">
              By accessing or using our website, mobile application, or any
              other {process.env.NEXT_PUBLIC_APP_NAME} services, you agree to be
              bound by these terms of service, our privacy policy, and any
              additional terms and conditions that may apply to specific
              services or features.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">User Accounts</h2>
            <p className="text-gray-500 dark:text-gray-400">
              To use certain {process.env.NEXT_PUBLIC_APP_NAME} services, you
              may be required to create an account. You are responsible for
              maintaining the confidentiality of your account credentials and
              for any activity that occurs under your account.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Intellectual Property</h2>
            <p className="text-gray-500 dark:text-gray-400">
              The {process.env.NEXT_PUBLIC_APP_NAME} website, mobile
              application, and all of its content, features, and functionality
              are owned by {process.env.NEXT_PUBLIC_APP_NAME} and are protected
              by copyright, trademark, and other intellectual property laws.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Prohibited Conduct</h2>
            <p className="text-gray-500 dark:text-gray-400">
              You agree not to engage in any unlawful or unauthorized use of our
              services, including but not limited to: violating any applicable
              laws or regulations, infringing on our or any third party&apos;s
              intellectual property rights, or engaging in any activity that
              could harm or interfere with the proper functioning of our
              services.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Termination</h2>
            <p className="text-gray-500 dark:text-gray-400">
              We reserve the right to suspend or terminate your access to our
              services at any time, for any reason, including if we reasonably
              believe that you have violated these terms of service.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Limitation of Liability</h2>
            <p className="text-gray-500 dark:text-gray-400">
              In no event shall {process.env.NEXT_PUBLIC_APP_NAME} be liable for
              any indirect, special, incidental, or consequential damages
              arising out of or in connection with your use of our services. Our
              total liability shall not exceed $100.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Governing Law</h2>
            <p className="text-gray-500 dark:text-gray-400">
              These terms of service shall be governed by and construed in
              accordance with the laws of the state of California, without
              giving effect to any principles of conflicts of law.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Changes to Terms</h2>
            <p className="text-gray-500 dark:text-gray-400">
              We reserve the right to modify these terms of service at any time.
              Any changes will be effective immediately upon posting the updated
              terms on our website.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="text-gray-500 dark:text-gray-400">
              If you have any questions or concerns about these terms of
              service, please contact us at{" "}
              {process.env.NEXT_PUBLIC_APP_CONTACT_EMAIL}.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
