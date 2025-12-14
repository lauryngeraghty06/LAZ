const signupLoginLink = document.getElementById('signupLoginLink');
const signupAuthOverlay = document.getElementById('signupAuthOverlay');
const signupCloseAuth = document.getElementById('signupCloseAuth');

signupLoginLink.addEventListener('click', e => {
    e.preventDefault();
    signupAuthOverlay.classList.add('active');
});

signupCloseAuth.addEventListener('click', () => {
    signupAuthOverlay.classList.remove('active');
});
