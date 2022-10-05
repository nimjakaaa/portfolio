import Header from './components/header/Header';
import Socials from './components/socials/Socials';
import EmailContact from './components/emailContact/EmailContact';
import Showcase from './components/Showcase/Showcase';
import AboutMe from './components/abouMe/AboutMe';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import { addNavClickScrolls } from './controller';

import { headerRef, socialsRef, emailContactRef, showcaseRef, aboutMeRef, worksRef, contactRef, footerRef } from './domRefs';
import './styles.css';

const App = () => {
    headerRef.innerHTML = Header();
    addNavClickScrolls('.li-about', 1000)
    addNavClickScrolls('.li-works', 1400)
    addNavClickScrolls('.li-contact', 2000)

    showcaseRef.innerHTML = Showcase();
    aboutMeRef.innerHTML = AboutMe();

    worksRef.innerHTML = Works();
    contactRef.innerHTML = Contact();

    footerRef.innerHTML = Footer();
    socialsRef.innerHTML = Socials();
    emailContactRef.innerHTML = EmailContact();

}

App();