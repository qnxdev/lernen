import Button from "./Button";

export default function Page({ children }) {
  return (
    <div className="page">
      <header className="flex">
        <h1>Lernen</h1>
        <Button >Sign Up Now</Button>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Lernen.
      </footer>
    </div>
  );
}
