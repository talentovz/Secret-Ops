const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpnBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpnBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});