const About = async () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="gradient-text text-3xl font-bold sm:text-4xl">About</h1>

      <p className="mt-4 leading-relaxed text-muted">
        Sneha is a demo Next.js App Router project showcasing server and client
        components, dynamic routes, responsive design, themed branding, and live
        API integrations with DummyJSON and randomuser.me.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {[
          {
            title: "Next.js 16",
            body: "App Router with server components, streaming Suspense, and cached fetch.",
          },
          {
            title: "Tailwind v4",
            body: "CSS-first configuration with custom theme tokens and hover utilities.",
          },
        ].map(({ title, body }) => (
          <div
            key={title}
            className="hover-card rounded-2xl border border-border bg-surface p-6"
          >
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="mt-2 text-sm text-muted">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
