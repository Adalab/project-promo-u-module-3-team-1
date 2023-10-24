
import '../styles/layout/CardSmall.scss'
import Preview from './Preview';


function Landing() {
    return (

        <section className="section_landing">
            <Preview className="landingCard" name={'Harvard Computers'} slogan={'Cracking the secrets of the universe'} technologies={'Photographic plates'} desc={'Processing of astronomical data and classifying of stars accounting for factors like atmospheric refraction'} autor={'Williamina Fleming'} job={'Astronomer'} image={'image'} photo={'photo'}/>
           
            <Preview className="landingCard" name={'Analytical Engine'} slogan={'Envisioning the future'} technologies={'Punched cards'} desc={'Mechanical general-purpose computer. Has applications beyond pure calculation and  is recognized today as the first algorithm intended to be processed by a machine.'} autor={'Ada Lovelace'} job={'Mathematician'} image={'image'} photo={'photo'}/>
           
            <Preview className="landingCard" name={'Spread Spectrum Technology'} slogan={'Revolutioning communications'} technologies={'Frequency hopping'} desc={'Early version of spread spectrum communication, specifically frequency-hopping spread spectrum, to prevent torpedoes from being jammed.'} autor={'Hedy Lamarr'} job={'Actress and Inventor'} image={'image'} photo={'photo'}/>
           
            <Preview className="landingCard" name={'Common Business-Oriented Language'} slogan={'Laying the groundwork'} technologies={'Mark I'} desc={'One of the first high-level programming languages, COBOL is still in use today and has influenced many other languages.'} autor={'Grace Hopper'} job={'Computer Scientist'} image={'image'} photo={'photo'}/>
        </section>
    );
}

export default Landing;







