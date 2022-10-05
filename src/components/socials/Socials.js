import './Socials.css';
import { github, linkin } from '../../assets/icons';

const Socials = () => {
    const template = `
        <div class="socials">
            <div><a href="https://github.com/nimjakaaa">${github}</a></div>
            <div><a href="https://www.linkedin.com/in/mohamed-kaabouchi-30848624a/">${linkin}</a></div>
        </div>
    `;

    return template;
}

export default Socials;