import { Link, Outlet } from "react-router-dom";

export const LoginLayout = () => {
  return (
    <>
      <header className="header-wrapper">
        I AM LOGIN LOGO
        <Link to="/">Home</Link>
      </header>
      <main style={{ height: "calc(100vh - 170px)" }}>{<Outlet />}</main>
      <footer style={{ borderTop: "2px solid lightgrey" }}>
        <h1>HELLO I AM LOGIN FOOTER</h1>
      </footer>
    </>
  );
};
