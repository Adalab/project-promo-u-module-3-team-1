// Fichero src/components/App.jsx
import '../styles/index.scss';
import cover from '../images/cover.jpeg';
//import cover2 from '../images/cover_2.jpeg';
import logo from '../images/logo-adalab.png';
import user from '../images/user.jpeg';
import { useState } from 'react';
import callToApi from '../services/api';

function App() {
  const [data, setData] = useState({
    name: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    desc: '',
    autor: '',
    job: '',
    image:'https://placehold.co/600x400',
    photo:'https://placehold.co/600x400',

  });
  const [cardUrl, setCardUrl] = useState('');
  const [error, setError] = useState('');
  const [errorUrl, setErrorUrl] = useState('');
  const [showUrl, setShowUrl] = useState(false);
  const regex = /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ ]*$/;
 
  
   const handleInput = (ev) => { 
    ev.preventDefault();
    const inputId = ev.target.id
    const value = ev.target.value;

    if (
      inputId === 'name' ||
      inputId === 'slogan' ||
      inputId === 'desc' ||
      inputId === 'technologies'||
      inputId === 'demo'||
      inputId === 'repo'
    ){ 
      setData({ ...data, [inputId]: value });
    }else if (inputId === 'autor' || inputId === 'job') {
      if (regex.test(value)) {
      setData({ ...data, [inputId]: value });
      setError('');
    } else {
      console.log('error');
      setError('*Este campo debe contener una URL válida')
    }
   }
  }

  const handleCreateBtn = () =>{
     validateUrl();
     callToApi(data).then((response) => {
      setCardUrl(response);
      if(response !== undefined) {
         setShowUrl(true);
         setData({name: '',
         slogan: '',
         repo: '',
         demo: '',
         technologies: '',
         desc: '',
         autor: '',
         job: '',
         image:'https://placehold.co/600x400',
         photo:'https://placehold.co/600x400',});
         setError('');
         setErrorUrl('');
  
      } else {setShowUrl(false)}
    
    })

    };

const validateUrl = () =>{
let urlRegex = /^(http|https):\/\/[^ "]+$/;
  if (urlRegex.test(data.demo) && urlRegex.test(data.repo)) {
    setErrorUrl('');
    return true;
  } else {
    console.log('error');
    setErrorUrl('*Este campo debe contener una URL válida');
    return false;
  }

 }

 const handleForm = (ev) =>{
  ev.preventDefault();
 }

  return (
    <div className='container'>
      <header>
        <div className='header'>
          <section className='header__section'>
            <i className='header__section--icon fa-solid fa-laptop-code'></i>
            <p className='header__section--text'>Proyectos Molones</p>
        </section>
        <img className='header__logo' src={logo} alt='' />
        </div>
        <div className= 'header__presentation'>
          <h1 className= 'header__presentation--h1'>Proyectos Molones</h1>
          <p className= 'header__presentation--p'>Escaparate en línea para recoger ideas a través de la tecnología.</p>
          <button className= 'header__presentation--btn'>Ver proyectos</button>
        </div>
      </header>
      <main className='main'>
        <section className='preview'>
          <img className='image preview__cover' src={cover} alt='' />

          <article className='preview__autor'>
            <section className='preview__autor--project'>
              <p className='line-word'>Personal Project Card</p>
              <hr className='line' />
              <h2 className='title'>{data.name || 'Elegant Workspace'}</h2>
              <p className='slogan'>{data.slogan || 'Diseños Exclusivos'}</p>
              <p className='desc'>
                {data.desc ||
                  `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Libero, delectus Voluptates at hic aliquam porro ad suscipit
                harum laboriosam saepe earum `}
              </p>
    
              <p className='technologies'>
                {data.technologies || 'React JS, MongoDB'}
                <a href={data.demo} target="_blank"rel='noreferrer'><i className="globe fa-solid fa-globe"></i></a>
                <a href={data.repo} target="_blank"rel='noreferrer'><i className="github fa-brands fa-github"></i></a>
              </p>
              
            </section>

            <figure className='preview__autor--figure'>
              <img className='image' src={user} alt='' />
              <figcaption>
                <h3 className='job'>{data.job || 'Full Stack Developer'}</h3>
                <h2 className='name'>{data.autor || 'Emmelie Björklund'}</h2>
              </figcaption>
            </figure>
          </article>
        </section>

        <form className='form' onSubmit={handleForm}>
          <h2 className='form__title'>Información</h2>

          <fieldset className='fieldset'>
            <legend className='fieldset__legend'>
              <p className='fieldset__legend--subtitle'>
                Cuéntanos sobre el proyecto
              </p>
              <hr className='fieldset__legend--line' />
            </legend>
            <input
              className='input'
              type='text'
              placeholder='Nombre del proyecto'
              name='name'
              id='name'
              onChange={handleInput}
              value={data.name}
            />
            <input
              className='input'
              type='text'
              name='slogan'
              id='slogan'
              placeholder='Slogan'
              onChange={handleInput}
              value={data.slogan}
            />
            <input
              className='input'
              type='text'//url
              name='repo'
              id='repo'
              placeholder='Repositorio'
              onChange={handleInput}
              value={data.repo}
            />

            <input
              className='input'
              type='text'
              placeholder='Demo'
              name='demo'
              id='demo'
              onChange={handleInput}
              value={data.demo}
            />
            <p className='error'>{errorUrl}</p>
            <input
              className='input'
              type='text'
              placeholder='Tecnologías'
              name='technologies'
              id='technologies'
              onChange={handleInput}
              value={data.technologies}
            />
            <textarea
              className='textarea'
              type='text'
              placeholder='Descripción'
              name='desc'
              id='desc'
              onChange={handleInput}
              value={data.desc}
            ></textarea>
          </fieldset>

          <fieldset className='fieldset'>
            <legend className='fieldset__legend'>
              <p className='fieldset__legend--subtitle'>
                Cuéntanos sobre la autora
              </p>
              <hr className='fieldset__legend--line' />
            </legend>
            <input
              className='input'
              type='text'
              placeholder='Nombre'
              name='autor'
              id='autor'
              onChange={handleInput}
              value={data.autor}
            />
            <input
              className='input'
              type='text'
              placeholder='Trabajo'
              name='job'
              id='job'
              onChange={handleInput}
              value={data.job}
            />
            <p className='error'>{error}</p>
          </fieldset>

          <section className='btn'>
            <button className='btn__project'>Subir foto de proyecto</button>
            <button className='btn__author'>Subir foto de autora</button>
          </section>
          <section className='create__box'>
            <button className='create__box--btn' onClick={handleCreateBtn}>Crear Tarjeta </button>
          </section>

          <section className={`card ${showUrl ? 'show' : 'hidden'}`}>
             <span > La tarjeta ha sido creada: </span> 
            <a href={cardUrl} className='' target='_blank' rel='noreferrer'>
              {cardUrl}
            </a>
          </section>
        </form>
      </main>
      <footer className='footer'>
        <img className='footer__logo' src={logo} alt='' />
      </footer>
    </div>
  );
}
export default App;
