import Container from './style';
import Logo from '../../resources/logo';
import Link from 'next/link';


const Header = () => {
    return (
        <Container>

            <Link href='/'>
                <a className='header_logo'>
                    <Logo />
                </a>
            </Link>

            <div className='nav_cont'>
                <nav className='header_nav'>
                    <ul className='header__list'>
                        <li className="header__nav-item">
                            <Link href='/test'>
                                <a className="header__nav-link header__nav-link--active">Для клиентa</a>
                            </Link>
                        </li>
                        <li className="header__nav-item">
                            <Link href='/test'>
                                <a className="header__nav-link ">Для клиник</a>
                            </Link>
                        </li>
                        <li className="header__nav-item">
                            <Link href='/test'>
                                <a className="header__nav-link ">Про нас</a>
                            </Link>
                        </li>
                        <li className="header__nav-item">
                            <Link href='/test'>
                                <a className="header__nav-link ">Цены</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className='auth_cont'>
                    <Link href='/test'>
                        <a className='header__sign-in'>Вход</a>
                    </Link>
                    <Link href='/test'>
                        <a className='header__reg-link'>Регистрация</a>
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default Header;