
//variables to hookup HTML features//
var modalBtn = document.getElementById('modalBtn');
var simpleModal = document.getElementById('simplemodal');
var closeBtn = document.getElementById('closeBtn');
var card = document.getElementById('card');
var searchButton = document.getElementById('searchfield');
var API_KEY = '2b5025a6e62447588a8adb3f3c732a71'
var Base_URL = 'https://api.rawg.io/api/games?key=' + API_KEY

//Modal function to open and close the modal//
modalBtn.addEventListener('click', openModal);
function openModal() {
  simpleModal.style.display = 'block';
  document.body.style.backgroundImage = "URL('gamesmaster1.jpeg')";
  card.style.display = 'none';
}
closeBtn.addEventListener('click', closeModal);
function closeModal() {
  simpleModal.style.display = 'none';
  document.body.style.backgroundImage = "URL('gamesmaster1.jpeg')";
}

//function to get user input and call api
searchButton.addEventListener('click', searchGame);
function searchGame(event) {
  event.preventDefault()

  var searchValue = document.getElementById('input');
  simpleModal.style.display = 'none';
  card.style.display = 'block';
  document.body.style.backgroundImage = 'none';
  console.log('value:', searchValue.value);

  fetch(Base_URL + '&search=' + searchValue.value)
    .then((res) => res.json())
    .then((data) => {
      const games = data.results
      console.log('Data', games);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
  console.log('Value:', searchValue.value);
}

function getGames(games) {
  return games.map((game) => {
    return `
    <img src=${games.background_image} class="card-img-top" alt="...">
    `
  });
  
  
  
function showGames(games) {
    const gameElement = document.createElement('div');
    gameElement.setAttribute('class', 'card');

    const gameTemplate =

      `<div class="card" style="width: 18rem;" id="card"></div>`
      getGames(games)


  } 
;}
