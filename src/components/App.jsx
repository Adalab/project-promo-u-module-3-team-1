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



  return (
    <div className='container'>
      <header>
        <Header />
      </header>

      <main className='main'>

        <Routes>
          <Route
            path="/"
            element={<Landing data={data} setData={setData} />}
          />

        </Routes>

      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}
export default App;
