import logo from '../assets/img/logo-carlos.png';

export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-center">
      <img src={logo} alt="Coach Carlos Herrán" className="h-14 w-auto" />
    </header>
  );
}
