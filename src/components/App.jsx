// Fichero src/components/App.jsx
import '../styles/App.scss';
import cover from '../images/cover.jpeg';
//import cover2 from '../images/cover_2.jpeg';
import logo from '../images/logo-adalab.png';
import user from '../images/user.jpeg';
import { useState } from 'react';


function App() {
  const [name, setName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [repo, setRepo] = useState('');
  const [demo, setDemo] = useState('');
  const [tecno, setTecno] = useState('');
  const [desc, setDesc] = useState('');
  const [autor, setAutor] = useState('');
  const [job, setJob] = useState('');
  let [error, setError] = useState('');
  let regex = /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ ]*$/;

  const handleInput = (ev) => {
    ev.preventDefault();
      
    const value = ev.target.value;
    console.log(value);
    // Utiliza una expresión regular para verificar si el valor contiene números
    if (regex.test(value)) {
      console.log('letras validas');
      const inputId = ev.target.id;
    if (inputId === 'name') {
      setError('');
      setName(ev.target.value);
    } else if (inputId === 'slogan') {
      setError('');
      setSlogan(ev.target.value);
    ///} else if (inputId === 'repo') {
      //setRepo(ev.target.value);
    //} else if (inputId === 'demo') {
      //setDemo(ev.target.value);
    } else if (inputId === 'technologies') {
      setError('');
      setTecno(ev.target.value);
    } else if (inputId === 'desc') {
      setError('');
      setDesc(ev.target.value);
    } else if (inputId === 'autor') {
      if (regex.test(value)) {
      setError('');
      setAutor(ev.target.value);
    } else {
      console.log('error');
      setError('Este campo no admite números');
    }
  }  else if (inputId === 'job') {
    if (regex.test(value)) {
      setError('');
      setJob(ev.target.value);
    } else {
      console.log('error');
      setError('Este campo no admite números');
      ev.target.value = '';
    }
      setJob(ev.target.value);
    }
    } else {
      console.log('error');
      setError('Este campo no admite números');
    }
    
    
    
  };

  return (
    <div className="container">
      <header className="header">
        <p className="text">Proyectos Molones</p>
        <img src={logo} alt="" />
      </header>
      <main className="main">
        <section className="preview">
          <img className="image" src={cover} alt="" />

          <section className="autor">
            <section className="info-project">
              <p className="subtitle">{repo || 'Personal Project Card'}</p>
              <hr className="line" />

              <h2 className="title">{name || 'Elegant Workspace'}</h2>
              <p className="slogan">{slogan || 'Diseños Exclusivos'}</p>
              <p className="desc">
                {desc ||
                  `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Libero, delectus Voluptates at hic aliquam porro ad suscipit
                harum laboriosam saepe earum doloribus aperiam, ullam culpa
                accusantium placeat odit corrupti ipsum`}
              </p>
              <section className="technologies">
                <p className="text">{tecno || 'React JS, MongoDB'}</p>
              </section>
            </section>

            <section className="info-autor">
              <img className="image" src={user} alt="" />
              <p className="job">{job || 'Full Stack Developer'}</p>
              <p className="name">{autor || 'Emmelie Björklund'}</p>
            </section>
          </section>
        </section>

        <section className="form">
          <h2 className="title">Información</h2>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre el proyecto</p>
            <hr className="line" />
          </section>

          <fieldset className="project">
            <input
              className="input"
              type="text"
              placeholder="Nombre del proyecto"
              name="name"
              id="name"
              onChange={handleInput}
              value={name}
              
            />
            <input
              className="input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
              onChange={handleInput}
              value={slogan}
            />
            <input
              className="input"
              type="text"
              name="repo"
              id="repo"
              placeholder="Repo"
              onChange={handleInput}
              value={repo}
            />
            <input
              className="input"
              type="text"
              placeholder="Demo"
              name="demo"
              id="demo"
              onChange={handleInput}
              value={demo}
            />
            <input
              className="input"
              type="text"
              placeholder="Tecnologías"
              name="technologies"
              id="technologies"
              onChange={handleInput}
              value={tecno}
            />
            <textarea
              className="textarea"
              type="text"
              placeholder="Descripción"
              name="desc"
              id="desc"
              onChange={handleInput}
              value={desc}
            ></textarea>
          </fieldset>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre la autora</p>
            <hr className="line" />
          </section>

          <fieldset className="autor">
            <input
              className="input"
              type="text"
              placeholder="Nombre"
              name="autor"
              id="autor"
              onChange={handleInput}
              value={autor}
              pattern='/^[A-Za-záéíóúÁÉÍÓÚüÜñÑ ]*$/'
            />
            <input
              className="input"
              type="text"
              placeholder="Trabajo"
              name="job"
              id="job"
              onChange={handleInput}
              value={job}
              pattern='/^[A-Za-záéíóúÁÉÍÓÚüÜñÑ ]*$/'
            />
            <p>{error}</p>
          </fieldset>

          <section className="buttons-img">
            <button className="btn">Subir foto de proyecto</button>
            <button className="btn">Subir foto de autora</button>
          </section>
          <section className="buttons-img">
            <button className="btn-large">Crear Tarjeta</button>
          </section>

          <section className="card">
            <span className=""> La tarjeta ha sido creada: </span>
            <a href="" className="" target="_blank" rel="noreferrer">
              {' '}
            </a>
          </section>
        </section>
      </main>
      <footer>
        <img src={logo} alt="" />
      </footer>
    </div>
  );
}
export default App;
