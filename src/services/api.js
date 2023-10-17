const callToApi = (data) => {
    // Llamamos a la API
    return fetch('https://dev.adalab.es/api/projectCard') 
      .then((response) => response.json())
     
  };
  
  export default callToApi;