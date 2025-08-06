
let li = document.querySelectorAll('li');

li.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('newColor');
        const icon = item.querySelector('i')
        icon.classList.toggle(`fa-check`)

    })
})


