import Header from './components/header/Header';
import Socials from './components/socials/Socials';
import EmailContact from './components/emailContact/EmailContact';

import { headerRef, socialsRef, emailContact } from './domRefs';
import './styles.css';

const App = () => {
    headerRef.innerHTML = Header();
    socialsRef.innerHTML = Socials();
    emailContact.innerHTML = EmailContact();
}

App();