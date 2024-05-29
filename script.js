const yearButtons = document.querySelectorAll('.year-button');
const actressPhoto = document.getElementById('actress-photo');
const images = {
    2013: 'images/filmes/ironman.jpg', 
    2014: 'images/filmes/maryann.jpg',
    2015: 'images/filmes/after_words.jpg',
    2018: 'images/filmes/savingflora.jpg',
    2019: 'images/filmes/wyrm.jpg',
    2020: 'images/filmes/babysitter.jpg',
    2021: 'images/filmes/yesday.jpg',
    2022: 'images/filmes/scream.jpg',
    2023: 'images/filmes/finestkind.jpg',
    2024: 'images/filmes/beetlejuice.jpg',
};

yearButtons.forEach(button => {
    button.addEventListener('click', () => {
        const year = button.getAttribute('data-year');
        actressPhoto.src = images[year] || 'default.jpg';
    });
});

const yearButtons2 = document.querySelectorAll('.year-button2');
const actressPhoto2 = document.getElementById('actress-photo2');
const images2 = {
    3012: 'images/series/NY.jpg', 
    3013: 'images/series/days.jpg',
    3014: 'images/series/rake.jpg',
    301419: 'images/series/jane.jpg',
    3015: 'images/series/richie_rich.jpg',
    301618: 'images/series/stuck.jpg',
    301620: 'images/series/elena.jpg',
    3016: 'images/series/elena2.jpg',
    3018: 'images/series/bizaardvark.jpg',
    30192: 'images/series/big_city.jpg',
    3019: 'images/series/u.jpg',
    3020: 'images/series/home.jpg', 
    302022: 'images/series/jurassic.jpg',
    302223: 'images/series/amarelado.gif'
};

yearButtons2.forEach(button => {
    button.addEventListener('click', () => {
        const year2 = button.getAttribute('data-year2');
        actressPhoto2.src = images2[year2] || 'default2.jpg';
    });
});