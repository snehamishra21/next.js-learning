import Link from "next/link";

export default function Navigation() {
  return (
    <header className="grid grid-cols-2">
      <div className="">Sneha Logo</div>

      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home Page</Link>
          </li>

          <li>
            <Link href="/about">About Page</Link>
          </li>

          <li>
            <Link href="/clientcomponent">Client Component</Link>
          </li>

          <li>
            <Link href="/servercomponent">Server Component</Link>
          </li>

          <li>
            <Link href="/datafetch/clientcomp">Client Data Fetch</Link>
          </li>

          <li>
            <Link href="/datafetch/servercomp">Server Data Fetch</Link>
          </li>

          <li>
            <Link href="/team">Team Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
