const Admin = async () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="gradient-text text-3xl font-bold sm:text-4xl">
        Admin Dashboard
      </h1>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { label: "Users", value: "1,240" },
          { label: "Posts", value: "356" },
          { label: "Comments", value: "2,891" },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="hover-card rounded-2xl border border-border bg-surface p-6"
          >
            <p className="text-sm text-muted">{label}</p>
            <p className="gradient-text mt-1 text-3xl font-bold">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
