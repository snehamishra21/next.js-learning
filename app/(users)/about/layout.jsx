export default function About({ children }) {
  return (
    <section>
      <div className="border-b border-border bg-primary/5">
        <p className="mx-auto max-w-4xl px-4 py-3 text-sm font-medium text-primary sm:px-6">
          Hello About Layout
        </p>
      </div>
      {children}
    </section>
  );
}
