export const metadata = {
  title: "Cookie Policy | Galleria",
  description: "Cookie Policy for Galleria - Information about how we use cookies",
};

export default function CookiePolicyPage() {
  return (
    <div className="cookie-policy">
      {/* Cookie Policy Header */}
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Cookie Policy</h1>
        <p className="text-gray-400">Last updated: April 19, 2025</p>
      </div>

      {/* Cookie Policy Content */}
      <article id="cookies" className="space-y-6">
        <section>
          <h2 className="mb-6 border-b border-gray-700 pb-2 text-2xl font-bold">Cookies</h2>

          <h3 className="mb-3 text-xl font-semibold">1. What Are Cookies</h3>
          <p>
            As is common practice with almost all professional websites, this site uses cookies, which are tiny files
            that are downloaded to your computer, to improve your experience. This page describes what information they
            gather, how we use it and why we sometimes need to store these cookies. We will also share how you can
            prevent these cookies from being stored however this may downgrade or &apos;break&apos; certain elements of
            the site&apos;s functionality.
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-xl font-semibold">2. How We Use Cookies</h3>
          <p className="mb-4">
            We use cookies for a variety of reasons detailed below. Unfortunately, in most cases there are no industry
            standard options for disabling cookies without completely disabling the functionality and features they add
            to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or
            not in case they are used to provide a service that you use.
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-xl font-semibold">3. The Cookies We Set</h3>
          <h4 className="mb-2 text-lg font-medium">Account related cookies</h4>
          <p className="mb-4">
            If you create an account with us then we will use cookies for the management of the signup process and
            general administration. These cookies will usually be deleted when you log out however in some cases they
            may remain afterwards to remember your site preferences when logged out.
          </p>

          <h4 className="mb-2 text-lg font-medium">Login related cookies</h4>
          <p className="mb-4">
            We use cookies when you are logged in so that we can remember this fact. This prevents you from having to
            log in every single time you visit a new page. These cookies are typically removed or cleared when you log
            out to ensure that you can only access restricted features and areas when logged in.
          </p>

          <h4 className="mb-2 text-lg font-medium">Site preferences cookies</h4>
          <p>
            In order to provide you with a great experience on this site we provide the functionality to set your
            preferences for how this site runs when you use it. In order to remember your preferences we need to set
            cookies so that this information can be called whenever you interact with a page is affected by your
            preferences.
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-xl font-semibold">4. Third Party Cookies</h3>
          <p className="mb-4">
            In some special cases we also use cookies provided by trusted third parties. The following section details
            which third party cookies you might encounter through this site.
          </p>
          <ul className="mb-4 list-disc space-y-1 pl-8">
            <li>
              This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the
              web for helping us to understand how you use the site and ways that we can improve your experience. These
              cookies may track things such as how long you spend on the site and the pages that you visit so we can
              continue to produce engaging content.
            </li>
            <li>
              From time to time we test new features and make subtle changes to the way that the site is delivered. When
              we are still testing new features these cookies may be used to ensure that you receive a consistent
              experience whilst on the site whilst ensuring we understand which optimizations our users appreciate the
              most.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="mb-3 text-xl font-semibold">5. More Information</h3>
          <p className="mb-4">
            Hopefully that has clarified things for you and as was previously mentioned if there is something that you
            aren&apos;t sure whether you need or not it&apos;s usually safer to leave cookies enabled in case it does
            interact with one of the features you use on our site.
          </p>
          <p>
            If you are still looking for more information then you can contact us via email at
            contactgalleri4@gmail.com.
          </p>
        </section>
      </article>
    </div>
  );
}
