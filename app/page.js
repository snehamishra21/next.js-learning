import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Client Components",
    body: "Interactive UI rendered in the browser with live data fetching.",
    href: "/clientcomponent",
    cta: "Explore",
  },
  {
    title: "Server Components",
    body: "Fast, SEO-friendly pages rendered on the server with DummyJSON.",
    href: "/servercomponent",
    cta: "Explore",
  },
  {
    title: "Random Profiles",
    body: "Fetch a random user profile from randomuser.me — photo, gender & location.",
    href: "/datafetch/clientcomp",
    cta: "Try it",
  },
];

const Home = () => {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <Image
          src="/images/hanumanji.jpg"
          alt="Hanumanji background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 text-center sm:px-6">
          <h1 className="hero-float gradient-text text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Jai Shri Ram
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
            Welcome to <span className="font-semibold text-white">Sneha</span> —
            a fully responsive Next.js playground with themed branding, animated
            hover effects, and live API data.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/clientcomponent"
              className="btn-primary w-full rounded-full px-8 py-3 font-semibold sm:w-auto"
            >
              Get Started
            </Link>

            <Link
              href="/about"
              className="w-full rounded-full border-2 border-white/70 px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-stone-900 sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="gradient-text text-center text-3xl font-bold sm:text-4xl">
          Explore the Demos
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-center text-muted sm:text-base">
          Every card is themed and responsive — hover to feel the effect.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, body, href, cta }) => (
            <Link
              key={href}
              href={href}
              className="hover-card group flex flex-col rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                {title}
              </h3>

              <p className="mt-3 flex-1 text-sm text-muted">{body}</p>

              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                {cta}
                <span className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
