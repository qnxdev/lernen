import Button from "./Button";

export default function Page({ children }) {
  return (
    <div className="page">
      <header className="flex stretch">
        <a href="/">
          <h1>
            L<span>e</span>rn<span>e</span>n
          </h1>
        </a>
        <div className="flex">
          <a className="button contact" href="/">
            Contact Us
          </a>
          <a href="/signup">
            <Button>Sign Up Now</Button>
          </a>
        </div>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Lernen.
      </footer>
    </div>
  );
}
