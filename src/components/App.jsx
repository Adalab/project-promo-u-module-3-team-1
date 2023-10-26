import '../styles/index.scss';

import { useState } from 'react';
import callToApi from '../services/api';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import CreatePage from './CreatePage';
import ButtonRoute from './ButtonRoute';

import { Route, Routes } from 'react-router-dom';
import ls from '../services/localStorage';

function App() {
  const [data, setData] = useState(
    ls.get('dataLs', {
      name: '',
      slogan: '',
      repo: '',
      demo: '',
      technologies: '',
      desc: '',
      autor: '',
      job: '',
      image: '',
      photo: 'https://c.pxhere.com/images/ce/61/9857aa81faffceffb291c74502ff-1602352.jpg!d',
    })
  );

  const [cardUrl, setCardUrl] = useState('');
  const [error, setError] = useState('');
  const [errorUrl, setErrorUrl] = useState('');
  const [showUrl, setShowUrl] = useState(false);
  const regex = /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ ]*$/;
  const [avatar, setAvatar] = useState('');
  const [project, setProject] = useState('');

  const updateAvatar = (avatar) => {
    setAvatar(avatar);
    data.image = avatar;
    ls.set('dataLs', { ...data, image: avatar });
  };

  const updateProject = (project) => {
    setProject(project);
    data.photo = project;
    ls.set('dataLs', { ...data, photo: project });
  };

  const handleChangeInput = (inputId, value) => {
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
        setError('*Este campo no admite números');
      }
      ls.set('dataLs', data);
    }
  };

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
          image: '',
          photo: 'https://c.pxhere.com/images/ce/61/9857aa81faffceffb291c74502ff-1602352.jpg!d',
        });
        setError('');
        setErrorUrl('');
      } else {
        setShowUrl(false);
      }
    });
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
  };

  return (
    <div className="container">
      <header>
        <Header />
      </header>

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ButtonRoute text="Nuevo Proyecto" route="/CreatePage" />
                <Landing data={data} setData={setData} />
              </>
            }
          />

          <Route
            path="/CreatePage"
            element={
              <>
                <ButtonRoute text="Ver Proyectos" route="/" />
                <CreatePage
                  data={data}
                  error={error}
                  cardUrl={cardUrl}
                  errorUrl={errorUrl}
                  showUrl={showUrl}
                  handleCreateBtn={handleCreateBtn}
                  handleChangeInput={handleChangeInput}
                  avatar={avatar}
                  updateAvatar={updateAvatar}
                  project={project}
                  updateProject={updateProject}
                />
              </>
            }
          />
        </Routes>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
export default App;
