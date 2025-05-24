import { Globe, Mail, Phone } from "lucide-react";

export default function CTA1() {
  return (
    <section id="help" className="w-full">
      <section className="mx-auto max-w-7xl px-4 py-6 lg:px-8 lg:py-20">
        <div
          className="relative isolate w-full overflow-hidden rounded-2xl"
          style={{
            background:
              "linear-gradient(to top right, rgb(255, 102, 60), rgb(7 16 45))",
          }}
        >
          <img
            alt="bg"
            loading="lazy"
            width="1840"
            height="694"
            className="absolute top-0"
            src="https://blocks.mvp-subha.me/assets/cta/grid.svg"
          />
          <div className="relative isolate overflow-hidden px-4 py-12 sm:px-24">
            <p className="w-fit rounded-xl bg-white px-4 py-1 text-center text-base font-semibold uppercase leading-7 text-black lg:text-left">
              Get in touch
            </p>
            <h2 className="mt-3 max-w-md text-4xl font-semibold text-white md:text-6xl">
              How Can You <span className="text-primary-2"> Reach Us</span>?
            </h2>
            <p className="my-auto mt-3 max-w-2xl text-base text-gray-300 md:text-lg">
              If you need to get in touch, there are several ways to contact us.
            </p>
            <div className="mt-8 flex w-full flex-col justify-between gap-4 text-lg md:flex-row">
              <a
                className="flex items-center gap-2 text-white"
                href="mailto:subha9.5roy350@gmail.com"
              >
                <Mail className="h-7 w-7 text-red-500" />
                kiranamin005@gmail.com
              </a>
              <a className="flex items-center gap-2 text-white" href="#">
                <Phone className="h-7 w-7 text-green-500" />
                +91-India-Only
              </a>
              <a className="flex items-center gap-2 text-white" href="/">
                <Globe className="h-7 w-7 text-blue-500" />
                kiranamin.portfolio
              </a>
            </div>
            <ul className="ml-4 mt-8 list-disc text-sm text-gray-300 md:text-base">
              <li>
                Share your feedback and suggestions to help us enhance the app's
                features and functionality.
              </li>
              <li>
                Connect with us to report issues or propose improvements for a
                better user experience.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
