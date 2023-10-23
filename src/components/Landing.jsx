
import '../styles/layout/CardSmall.scss'
import Preview from './Preview';
import { Link } from 'react-router-dom';


function Landing() {
    return (
        <section className="section_landing">
            <Preview className="preview1" />
            <Preview className="preview" />
            <Preview className="preview" />
            <Preview className="preview" />
        </section>
    );
}

export default Landing;