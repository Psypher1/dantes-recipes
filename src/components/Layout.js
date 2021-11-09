import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Dante's Recipes</span>
              <span>Here is what I like making</span>
            </h1>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright 2021 Dante's Recipes :)</p>
      </footer>
    </div>
  );
}
