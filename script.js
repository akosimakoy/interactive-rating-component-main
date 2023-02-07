let ratings = document.querySelectorAll('.ratings');
let btn = document.getElementById('button');
let card = document.querySelector('.rating-card');
let ty = document.querySelector('.thankyou-card');
let rate = document.getElementById('rate');

for (let i = 0; i < ratings.length; i++){
    ratings[i].addEventListener('click', () => {
        let rating = ratings[i].innerHTML;

        for (let i = 0; i < ratings.length; i++) {
            ratings[i].classList.contains('active')
            ratings[i].classList.remove('active');
        }
        ratings[i].classList.add('active');

        btn.addEventListener('click', () => {
            card.style.display = 'none';
            ty.style.display = 'grid';
            rate.innerHTML = rating;
        })
    })
}