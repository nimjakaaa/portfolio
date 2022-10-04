import Header from './components/header/Header';
import Socials from './components/socials/Socials';
import EmailContact from './components/emailContact/EmailContact';
import Showcase from './components/Showcase/Showcase';

import { headerRef, socialsRef, emailContactRef, showcaseRef } from './domRefs';
import './styles.css';

const App = () => {
    headerRef.innerHTML = Header();
    showcaseRef.innerHTML += Showcase();


    socialsRef.innerHTML = Socials();
    emailContactRef.innerHTML = EmailContact();
}

App();