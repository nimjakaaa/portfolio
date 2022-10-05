import './Socials.css';
import { github, linkin } from '../../assets/icons';

const Socials = () => {
    const template = `
        <div class="socials">
            <div>${github}</div>
            <div>${linkin}</div>
        </div>
    `;

    return template;
}

export default Socials;