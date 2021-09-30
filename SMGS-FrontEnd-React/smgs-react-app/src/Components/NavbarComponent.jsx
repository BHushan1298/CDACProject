const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-sm py-0  bg-dark static-top">
      <div className="container">
        <a className="navbar-brand navbar-logo" href="/">
          {/* <img
            src="data:image/png;base64,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"
            alt="LOGO"
          /> */}
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
              Home
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="navbar-nav ml-auto">
          {/*
          <li className="nav-item">
              <a className="nav-link" href="/adminlogin">
                AdminLogin
              </a>
            </li>
          */}

            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/faq">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
