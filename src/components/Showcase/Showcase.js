import './Showcase.css';

const Showcase = () => {
    const template = `
        <div>
           <h3 class="greeting">Hi, my name is</h3>
        </div>
        <div class="my-name">
            <h3>Mohamed Kaabouchi</h3>
        </div>
        <div class="whoami">
            <h3>I'm a Frontend Web Developer.</h3>
        </div>
        <div class="intro">
            <p>I design and code beautifully simple things, and craft solid and scalable frontend products with great user experiences. Currently Learning Backend, so I can be a Fullstack developer.</p>
        </div>
    `;

    return template;
}

export default Showcase;