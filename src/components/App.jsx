// Fichero src/components/App.jsx
import '../styles/App.scss';
import cover from '../images/cover.jpeg';
//import cover2 from '../images/cover_2.jpeg';
import logo from '../images/logo-adalab.png';
import user from '../images/user.jpeg';
import { useState } from 'react';


function App() {
  const [data, setData]=useState({
    name:"", 
    slogan:"", 
    repo:"",
    demo:"",
    tecno:"",
    desc:"",
    autor:"",
    job:"",

  });

  let [error, setError] = useState('');
  let regex = /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ ]*$/;

  const handleInput = (ev) => {
    ev.preventDefault();
    const inputId = ev.target.id;
    const value = ev.target.value;
    console.log(value);
    // Utiliza una expresión regular para verificar si el valor contiene números
    if (inputId==='autor'||inputId==='job'){
      if (regex.test(value)) {
        setData({...data,[inputId]:value})
        setError('');
      }else {
        console.log('error');
        setError('Este campo no admite números');
      }
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
              <p className="subtitle">{data.repo || 'Personal Project Card'}</p>
              <hr className="line" />

              <h2 className="title">{data.name || 'Elegant Workspace'}</h2>
              <p className="slogan">{data.slogan || 'Diseños Exclusivos'}</p>
              <p className="desc">
                {data.desc ||
                  `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Libero, delectus Voluptates at hic aliquam porro ad suscipit
                harum laboriosam saepe earum doloribus aperiam, ullam culpa
                accusantium placeat odit corrupti ipsum`}
              </p>
              <section className="technologies">
                <p className="text">{data.tecno || 'React JS, MongoDB'}</p>
              </section>
            </section>

            <section className="info-autor">
              <img className="image" src={user} alt="" />
              <p className="job">{data.job || 'Full Stack Developer'}</p>
              <p className="name">{data.autor || 'Emmelie Björklund'}</p>
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
              value={data.name}
              
            />
            <input
              className="input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
              onChange={handleInput}
              value={data.slogan}
            />
            <input
              className="input"
              type="text"
              name="repo"
              id="repo"
              placeholder="Repo"
              onChange={handleInput}
              value={data.repo}
            />
            <input
              className="input"
              type="text"
              placeholder="Demo"
              name="demo"
              id="demo"
              onChange={handleInput}
              value={data.demo}
            />
            <input
              className="input"
              type="text"
              placeholder="Tecnologías"
              name="technologies"
              id="technologies"
              onChange={handleInput}
              value={data.tecno}
            />
            <textarea
              className="textarea"
              type="text"
              placeholder="Descripción"
              name="desc"
              id="desc"
              onChange={handleInput}
              value={data.desc}
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
              value={data.autor}
              pattern='/^[A-Za-záéíóúÁÉÍÓÚüÜñÑ ]*$/'
            />
            <input
              className="input"
              type="text"
              placeholder="Trabajo"
              name="job"
              id="job"
              onChange={handleInput}
              value={data.job}
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
