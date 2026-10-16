const members = [
  { name: "Sneha", role: "Founder & Developer", emoji: "👩‍💻" },
  { name: "Ram", role: "Designer", emoji: "🎨" },
  { name: "Shyam", role: "DevOps Engineer", emoji: "⚙️" },
  { name: "Gita", role: "Product Manager", emoji: "📊" },
];

const Team = async () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="gradient-text text-center text-3xl font-bold sm:text-4xl">
        Our Team
      </h1>

      <p className="mx-auto mt-3 max-w-md text-center text-muted">
        Meet the people behind Sneha.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {members.map(({ name, role, emoji }) => (
          <div
            key={name}
            className="hover-card flex flex-col items-center rounded-2xl border border-border bg-surface p-6 text-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl">
              {emoji}
            </span>

            <h2 className="mt-4 text-lg font-bold">{name}</h2>
            <p className="mt-1 text-sm text-muted">{role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
