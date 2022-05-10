const blur = document.getElementById('blur');
const card_popup = document.getElementById('popup');

const popup = () => {
    blur.classList.toggle('active');
    card_popup.classList.toggle('active');
}