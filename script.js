const button = document.getElementById('changeColorBtn');
 
function getRandomDarkColor() {
    const r = Math.floor(Math.random() * 100);
    const g = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    return `rgb(${r}, ${g}, ${b})`;
}
 
button.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomDarkColor();
});
