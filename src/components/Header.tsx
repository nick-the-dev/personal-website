export default function () {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">NT</div>
        <nav className="header__nav">
          <ol className="header__nav-list">
            {/* <li className="header__nav-item">
              <a href="#about" className="header__nav-link">
                About
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#experience" className="header__nav-link">
                Experience
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#work" className="header__nav-link">
                Work
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#contact" className="header__nav-link">
                Contact
              </a>
            </li> */}
            <li className="header__nav-item">
              <a
                href="/cv-nick-taran.pdf"
                className="header__nav-link header__nav-link--btn"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  )
}
