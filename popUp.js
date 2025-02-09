const popUp = document.querySelector('.popup');
const closePopUp = document.querySelector('.btn-close');
let divPopup = document.querySelector('.container-popup');

popUp.addEventListener('click', ()=>{
    divPopup.style.display = 'flex';
});
closePopUp.addEventListener('click', ()=>{
    divPopup.style.display = 'none';
});
