const parallax = document.getElementById('parallax')

window.addEventListener('scroll', function () {
    let offset = window.pageYOffset
    parallax.style.backgroundPostionY = offset * 0.2 + "px"
})