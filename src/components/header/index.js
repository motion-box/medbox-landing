import Container from "./style";
import Logo from "../../resources/logo";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <Container>
      <Link href="/">
        <a className="header_logo">
          <Logo />
        </a>
      </Link>

      <div className="nav_cont">
        <nav className="header_nav">
          <ul className="header__list">
            <li className="header__nav-item">
              <Link href="/">
                <a
                  className={`header__nav-link header__nav-link${
                    router.asPath === "/" ? "--active" : ""
                  }`}
                >
                  Для клиентa
                </a>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link href="/clinic">
                <a
                  className={`header__nav-link header__nav-link${
                    router.asPath.includes("clinic") ? "--active" : ""
                  }`}
                >
                  Для клиник
                </a>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link href="/">
                <a
                  className={`header__nav-link header__nav-link${
                    router.asPath.includes("about") ? "--active" : ""
                  }`}
                >
                  Про нас
                </a>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link href="/">
                <a
                  className={`header__nav-link header__nav-link${
                    router.asPath.includes("pricelist") ? "--active" : ""
                  }`}
                >
                  Цены
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="auth_cont">
          <Link href="/test">
            <a className="header__sign-in">Вход</a>
          </Link>
          <Link href="/test">
            <a className="header__reg-link">Регистрация</a>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Header;
