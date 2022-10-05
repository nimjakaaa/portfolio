import './Header.css';
import logoUrl from '../../assets/logo.png';

const Header = () => {
    const logo = document.createElement('img');
    logo.src = logoUrl;

    const template = `
        <nav class="header-nav">
            <div class="logo">
                ${logo.outerHTML}
            </div>
            <div class="nav-right">
                <ol class="menu">
                    <li><span class="li-number">01.</span>ABOUT</li>
                    <li><span class="li-number">03.</span>WORKS</li>
                    <li><span class="li-number">04.</span>CONTACT</li>
                </ol>
                <button class="resume">
                    Resume
                </button>
            </div>
        </nav>
    `;

    return template;
}

export default Header;