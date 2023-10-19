import '../styles/index.scss';


import { useState } from 'react';
import callToApi from '../services/api';
import Header from './Header';
import Footer from './Footer';
import Preview from './Preview';
import Landing from './landing'; 

import { Route, Routes } from "react-router-dom"


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
    image: 'https://placehold.co/600x400',
    photo: 'https://placehold.co/600x400',

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
      inputId === 'technologies' ||
      inputId === 'demo' ||
      inputId === 'repo'
    ) {
      setData({ ...data, [inputId]: value });
    } else if (inputId === 'autor' || inputId === 'job') {
      if (regex.test(value)) {
        setData({ ...data, [inputId]: value });
        setError('');
      } else {
        console.log('error');
        setError('*Este campo debe contener una URL válida')
      }
    }
  }

  const handleCreateBtn = () => {
    validateUrl();
    callToApi(data).then((response) => {
      setCardUrl(response);
      if (response !== undefined) {
        setShowUrl(true);
        setData({
          name: '',
          slogan: '',
          repo: '',
          demo: '',
          technologies: '',
          desc: '',
          autor: '',
          job: '',
          image: 'https://placehold.co/600x400',
          photo: 'https://placehold.co/600x400',
        });
        setError('');
        setErrorUrl('');

      } else { setShowUrl(false) }

    })

  };

  const validateUrl = () => {
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

  const handleForm = (ev) => {
    ev.preventDefault();
  }

  return (
    <div className='container'>
      <header>
        <Header />
      </header>
     {/*<Routes>
        <Route
          path="/"
          element={<Landing cards={cards} setCards={setCards} />}
        />
        <Route
          path="/CreateProject"
          element={<CreateProject cards={cards} setCards={setCards} />}
        />
  </Routes>*/}
      <main className='main'>
        <section className='preview'>
          <Preview name={data.name} slogan={data.slogan} demo={data.demo} repo={data.repo} technologies={data.technologies} desc={data.desc} autor={data.autor} job={data.job} image={data.image} photo={data.photo} />
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
        <Footer />
      </footer>
    </div>
  );
}
export default App;
