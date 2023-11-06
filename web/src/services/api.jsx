const callToApi = (data) => {
  return fetch('https://dev.adalab.es/api/projectCard', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        return data.cardURL;
      }
      console.log('Solicitud POST exitosa:', data);
    })
    .catch((error) => {
      console.error('*Error al realizar la solicitud POST:', error);
    });
};

const getDataProjects = async () => {
  const fetchData = await fetch('http://localhost:3500/authors/list');
  const dataJson = await fetchData.json();
  return dataJson;
};


const postNewProject = async (data, setData) => {
  console.log("Guardar proyecto");
  console.log(data);

  fetch("http://localhost:3500/createproject", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((datos) => {
      console.log(datos);
      if (datos.success) {
        console.log('funciona?')
        console.log(data);
        setData(data);
      }
    });
};

const object = {
  getDataProjects: getDataProjects,
  callToApi: callToApi,
  postNewProject: postNewProject
}

export default object;
