//Codigo original y los cambios que hize antes de hacerlo en una sola funcion  
// const baseEndpoint = 'https://api.github.com';
// const usersEndpoint = `${baseEndpoint}/users`;
// const $n = document.querySelector('.name');//falta el . de selector de clase
// const $b = document.querySelector('.blog'); //era un selector de clase no de ID
// const $l = document.querySelector('.location');

// async function displayUser(username) { // async function 
//   $n.textContent = 'cargando...';
//   const response = await fetch(`${usersEndpoint}/${username}`); 
//   const data = await response.json(); //pase la informacion de response de el API a un JSON para que funcionara de manera correcta 
//   console.log(data);
//   $n.textContent = `${data.name}`; //cambie las comillas simples por backticks ``
//   $b.textContent = `${data.blog}`;
//   $l.textContent = `${data.location}`;
// }

// function handleError(err) {
//   console.log('OH NO!');
//   console.log(err);
//   $n.textContent = `Algo salió mal: ${err}` //el nombre de la varible $n estaba mal escrito
// }

// displayUser('stolinski').catch(handleError);

//En esta nueva funcion implemente el try y catch para que este estubiera en una sola funcion y quite algunas variables que consideraba repetitivas
const displayUserNew = async (username) => {
  try{
  $n = document.querySelector('.name');
  const response = await fetch(`https://api.github.com/users/${username}`); 
  const data = await response.json(); //pase la informacion de response de el API a un JSON para que funcionara de manera correcta 
  console.log(data);
  $n.textContent = `${data.name}`; //cambie las comillas simples por backticks ``
  document.querySelector('.blog').textContent = `${data.blog}`;
  document.querySelector('.location').textContent = `${data.location}`;

  } catch(err){
    $n.textContent = `Algo salió mal: ${err}`
  }
}

displayUserNew('stolinski');