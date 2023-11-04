import '../styles/layout/CardSmall.scss';
import Preview from './Preview';
import api from '../services/api';
import { useEffect, useState } from 'react';

function Landing() {
  const [listProject, setListProject] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getDataProjects();
      console.log(data);
      setListProject(data);
    };
    fetchData();
  }, []);

  const dataPreview1 = {
    name: 'Harvard Computers',
    slogan: 'Cracking the secrets of the universe',
    repo: '#',
    demo: '#',
    technologies: 'Photographic plates',
    desc: 'Processing of astronomical data and classifying of stars accounting for factors like atmospheric refraction',
    autor: 'Williamina Fleming',
    job: 'Astronomer',
    image: 'https://www.famousbirthdays.com/faces/fleming-williamina-image.jpg',
    photo: 'photo',
  };
  const dataPreview2 = {
    name: 'Analytical Engine',
    slogan: 'Envisioning the future',
    repo: '#',
    demo: '#',
    technologies: 'Punched cards',
    desc: 'Mechanical general-purpose computer. Has applications beyond pure calculation and  is recognized today as the first algorithm intended to be processed by a machine.',
    autor: 'Ada Lovelace',
    job: 'Mathematician',
    image:
      'https://pilarsabariego.com/wp-content/uploads/2018/11/ada-lovelace-20825279-1-402.jpg',
    photo: 'photo',
  };
  const dataPreview3 = {
    name: 'Spread Spectrum Technology',
    slogan: 'Revolutioning communications',
    repo: '#',
    demo: '#',
    technologies: 'Frequency hopping',
    desc: 'Early version of spread spectrum communication, specifically frequency-hopping spread spectrum, to prevent torpedoes from being jammed.',
    autor: 'Hedy Lamarr',
    job: 'Actress and Inventor',
    image:
      'https://www.kth.se/polopoly_fs/1.979357.1600722698!/image/Hedy_lamarr.jpg',
    photo: 'photo',
  };
  const dataPreview4 = {
    name: 'Common Business-Oriented Language',
    slogan: 'Laying the groundwork',
    repo: '#',
    demo: '#',
    technologies: 'Mark I',
    desc: 'One of the first high-level programming languages, COBOL is still in use today and has influenced many other languages.',
    autor: 'Grace Hopper',
    job: 'Computer Scientist',
    image:
      'https://iuploads.scribblecdn.net/ffe8e2ab-75f9-4bb4-99d8-d622902e2419/global/imagelib/women_at_technology/500x500_grace-hopper-1806479303ea40a62cbfc0571db3df4ef405d919.png?v=03052021202502',
    photo: 'photo',
  };
  return (
    <section className="section_landing">
      {listProject.map((project) => {
        return <Preview className="preview" data={project} />;
      })}

      {/* <Preview
        className="preview"
        data={dataPreview1}
      />

      <Preview
        className="preview"
        data={dataPreview2}
      />

      <Preview
        className="preview"
        data={dataPreview3}
      />

      <Preview
        className="preview"
        data={dataPreview4}
      /> */}
    </section>
  );
}

export default Landing;
