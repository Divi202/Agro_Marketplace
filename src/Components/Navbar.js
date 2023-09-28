import Link from "next/link";
export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body "
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          Agro Marketplace
        </Link>

        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/services">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/contact">
              Contact-Us
            </Link>
          </li>
        </ul>
        <div className="social">
          <div className="fb"></div>
          <div className="insta"></div>
          <div className="linkedin"></div>
        </div>
      </div>
    </nav>
  );
}
