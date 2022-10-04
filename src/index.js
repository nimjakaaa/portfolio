import Header from './components/header/Header';
import Socials from './components/socials/Socials';
import EmailContact from './components/emailContact/EmailContact';
import Showcase from './components/Showcase/Showcase';
import AboutMe from './components/abouMe/AboutMe';
import Works from './components/Works/Works';

import { headerRef, socialsRef, emailContactRef, showcaseRef, aboutMeRef, worksRef } from './domRefs';
import './styles.css';

const App = () => {
    headerRef.innerHTML = Header();

    showcaseRef.innerHTML = Showcase();
    aboutMeRef.innerHTML = AboutMe();
    worksRef.innerHTML = Works();


    socialsRef.innerHTML = Socials();
    emailContactRef.innerHTML = EmailContact();
}

App();