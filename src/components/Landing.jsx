import '../styles/index.scss';
import Header from './Header';
import Footer from './Footer';
import Preview from './Preview';
import { Link } from 'react-router-dom';


function Landing() {
    return (
        <>
            <button><Link to="./"></Link></button>
            <Preview />
    
        </>
    );
}

export default Landing;