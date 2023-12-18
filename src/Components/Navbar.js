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
            <Link className="nav-link " href="/">
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
            <Link className="nav-link" href="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/login">
              Login
            </Link>
          </li>
        </ul>
        <div className="social">
          <div>
            {" "}
            <Link className="nav-link text-white" href="/cart">
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
