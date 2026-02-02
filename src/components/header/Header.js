import './Header.css'

export default function Header() {
  return (
    <nav class="header">
      <div class="logo">A</div>
      <div class="nav_items">
        <div class="nav_item"><a>Home</a></div>
        <div class="nav_item"><a href="https://www.google.com" target="_blank">Google</a></div>
        <div class="nav_item"><a href="https://www.youtube.com" target="_blank">Youtube</a></div>
        <div class="nav_item"><a href="https://www.instagram.com" target="_blank">Instagram</a></div>
        <div class="nav_item"><a href="https://www.facebook.com" target="_blank">facebook</a></div>
      </div>
      <div class="login_button"><a>Login</a></div>
    </nav>
  );
};