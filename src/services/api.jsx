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

export default callToApi;

// falta dicvidir los componentes, estilos de la tarjeta creada,
// landing
