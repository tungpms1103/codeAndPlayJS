
const login_nav_btn = document.querySelector('.nav-btn-login');
const wraperElement = document.querySelector('.wraper');
const closeElement = document.querySelector('.close-btn');
const registerElement = document.querySelector('.register-link');
const loginElement = document.querySelector('.login-link');

login_nav_btn.addEventListener('click', ()=>
{
    wraperElement.classList.add('active');
});

closeElement.addEventListener('click', ()=>
{
    wraperElement.classList.remove('active');
});

registerElement.addEventListener('click', ()=>
{
    wraperElement.classList.add('activeSlide');
});

loginElement.addEventListener('click', ()=>
{
    wraperElement.classList.remove('activeSlide');
});