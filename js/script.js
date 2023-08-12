let titulo = document.getElementById('titulo');
let montanha1 = document.getElementById('montanha1');
let montanha2 = document.getElementById('montanha2');
let header = document.querySelector('header');
const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    montanha1.style.top = value * 0.5 + 'px';
    header.style.top = value * 0.5 + 'px';
});

registerLink.onclick = () => {
    wrapper.classList.add('active');
}

loginLink.onclick = () => {
    wrapper.classList.remove('active');
}



