
//variables to hookup HTML feautures//
var modalBtn = document.getElementById('modalBtn');
var simpleModal = document.getElementById('simplemodal');
var closeBtn = document.getElementById('closeBtn');
var card = document.getElementById('card');
var searchButton = document.getElementById('searchfield');
var searchValue = document.getElementById('input');


//Modal function to open and close the modal//
modalBtn.addEventListener('click', openModal);
function openModal(){
simpleModal.style.display = 'block';
document.body.style.backgroundImage = "URL('gamesmaster1.jpeg')";
card.style.display ='none';
}
closeBtn.addEventListener('click', closeModal);
 function closeModal(){
simpleModal.style.display = 'none';
document.body.style.backgroundImage = "URL('gamesmaster1.jpeg')";
}

//function to get user input 
searchButton.addEventListener('click', searchGame);
 function searchGame(event){

  event.preventDefault()
  simpleModal.style.display = 'none';
  card.style.display ='block';
  document.body.style.backgroundImage ='none';
  console.log('value:',searchValue.value);

}
