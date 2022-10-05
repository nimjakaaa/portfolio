import meUrl from '../../assets/me.jpg'; 
import './AboutMe.css';

const AboutMe = () => {
    const template = `
        <div class="about-me-heading"><h3><span class="number-code">01.</span>About Me</h3></div>
        <div class="about-me-card">
            <div class="my-info">
                <p>Hello!! My name is <span class="highlight">Mohamed Kaabouchi</span>, from <span class="highlight">Taza</span>, I enjoy creating stuff, and I have a serious passion for Web development.</p>
                <p>Well-organised person, problem solver, independent employee with high attention to detail. practitioner of MMA and a competitive gamer.</p>
                <p>Interested in the entire <span class="highlight">Frontend</span> spectrum and would love to work on ambitious projects with positive people.</p>
                <p>Here are a few <span class="highlight">technologies</span> I've been working with recently:</p>
                <ul>
                    <li>HTML/CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>.NET</li>
                </ul>
            </div>
            <div class="img-wrapper">
                <div class="my-image">
                    <img src="${meUrl}" alt="me">
                </div>
            </div>
        </div>
    `;

    return template;
}

export default AboutMe;