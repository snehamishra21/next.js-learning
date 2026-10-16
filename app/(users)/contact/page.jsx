const Contact = async () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="gradient-text text-3xl font-bold sm:text-4xl">Contact</h1>

      <p className="mt-4 text-muted">Hello Contact — get in touch!</p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { label: "Email", value: "hello@sneha.dev", icon: "✉" },
          { label: "Phone", value: "+91 98765 43210", icon: "☎" },
          { label: "Location", value: "India", icon: "⌂" },
        ].map(({ label, value, icon }) => (
          <div
            key={label}
            className="hover-card flex items-center gap-4 rounded-2xl border border-border bg-surface p-5"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xl text-primary">
              {icon}
            </span>

            <div>
              <p className="text-sm text-muted">{label}</p>
              <p className="font-semibold">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
