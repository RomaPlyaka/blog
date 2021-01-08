//open signup popup
const btnsignup = document.getElementById('btn_sign_up')
const btnsignin = document.getElementById('btn_sign_in')
let popupSignUp = document.getElementById('signUpPopup')
let popupSignIn = document.getElementById('signInPopup')
btnsignup.onclick  = function(event) {
  popupSignUp.classList.toggle('opened')
  if(popupSignIn.classList.contains('opened')){
    popupSignIn.classList.toggle('opened')
  }
}
//open signin popup

btnsignin.onclick = function(event) {
  popupSignIn.classList.toggle('opened')
  if(popupSignUp.classList.contains('opened')){
    popupSignUp.classList.toggle('opened')
  }
}
