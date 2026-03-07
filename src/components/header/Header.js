import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const socials = [
  { label: 'Instagram', url: 'https://instagram.com/' },
  { label: 'YouTube',   url: 'https://youtube.com/' },
  { label: 'TikTok',    url: 'https://tiktok.com/' },
  { label: 'Twitter',   url: 'https://twitter.com/' },
];

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 300); // 300ms delay — adjust this number to stay longer
  };

  return (
    <header className="header">
      <div className="logo">Teoxon</div>

      <nav className="nav_items">
        <div className="nav_item">
          <Link to="/">Home</Link>
        </div>

        <div
          className="nav_item socials_wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="socials_trigger">Socials ▾</span>

          {showDropdown && (
            <div
              className="dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {socials.map(({ label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="dropdown_item"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="login_button">
        <Link to="/login">Login</Link>
      </div>
    </header>
  );
}