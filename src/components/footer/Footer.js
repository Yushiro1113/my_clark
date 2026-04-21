import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <h3>clothing atbp</h3>
          
        </div>

        <div className="footer__social" aria-label="Social links">
          <a
            className="footer__social-link"
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            className="footer__social-link"
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            Facebook
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>&copy; 2026 clothing atbp</span>
        <span>Wear your story. Express your style. Only at clothing atbp.</span>
      </div>
    </footer>
  );
}
