import Button from "./Button";

export default function Page({ children }) {
  return (
    <div className="page">
      <header className="flex stretch">
        <h1>L<span>e</span>rn<span>e</span>n</h1>
        <Button >Sign Up Now</Button>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Lernen.
      </footer>
    </div>
  );
}
