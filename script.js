
//variables to hookup HTML features//
var modalBtn = document.getElementById('modalBtn');
var simpleModal = document.getElementById('simplemodal');
var closeBtn = document.getElementById('closeBtn');
var card = document.getElementById('card');
var searchButton = document.getElementById('searchfield');
var gamecardBtn = document.getElementById('gamecardimg');
var overview = document.getElementById('overview');
var API_KEY = '2b5025a6e62447588a8adb3f3c732a71'
var Base_URL = `https://api.rawg.io/api/games?key=` + API_KEY  + `&search=`
var closeSynopsisBtn = document.getElementById('overviewcloseBtn');

//Modal function to open and close the modal//
modalBtn.addEventListener('click', openModal);
function openModal() {
  simpleModal.style.display = 'block';
  document.body.style.backgroundImage = "URL('gamesmaster1.jpeg')";
  card.style.display = 'none';
  overview.style.display = 'none';
}
closeBtn.addEventListener('click', closeModal);
function closeModal() {
  simpleModal.style.display = 'none';
  document.body.style.backgroundImage = "URL('gamesmaster1.jpeg')";
}

gamecardBtn.addEventListener('click', openSynopsis);
function openSynopsis() {
  overview.style.display = 'block';
}

closeSynopsisBtn.addEventListener('click', closeSynopsis);
function closeSynopsis() {
  overview.style.display = 'none';
}

function getGames(url){ 
  var searchValue = document.getElementById('input');
  fetch(url+searchValue.value).then(res => res.json()).then(data => {
    showGames(data.results)
    console.log(data.results)
    
  })
}
  
  function showGames(data){

    card.innerHTML = "";
    
    data.forEach(game => {
      const{name,released,background_image,metacritic} = game
      const gameEl = document.createElement('div');
      gameEl.classList.add('cardonclick')
      gameEl.innerHTML = ` 
      <img class="card-img-top" src=${background_image} id="gamecardimg" alt="Card image cap">
      <div class="card-body">
      <h5 class="card-title">${name}</h5>
      </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">Available On:</li>
      <li class="list-group-item">Released On: ${released}</li>
      <li class="list-group-item .${getColour(metacritic)}">Rating: ${metacritic}</li>
      </ul>
      <div class="card-body">
      <a href="#" class="card-link">Reviews</a>
      </div>
      </div>`
      
      card.appendChild(gameEl)
      
    });
    
  }
  
  function clearsearch(){
    simpleModal.style.display = 'none';
    card.style.display = 'block';
    document.body.style.backgroundImage = 'none';
  }
  
  function getColour(vote){
    if(vote>= 80){
      return 'green'
    }else if (vote>=50){
      return 'orange'
    }else{
      return 'red'}
    }
  
  //function to get user input and call api
  searchButton.onclick = function(e){
    
    e.preventDefault();
    clearsearch();
    getGames(Base_URL);

  }

  