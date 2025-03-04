const API_KEY = 'eb78481c8a61549279a3a6c9d3416ddd'; // Your TMDb API key
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const swiperWrapper = document.querySelector('.swiper-wrapper');

// Fetch movies and add to Swiper
fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        data.results.forEach(movie => {
            swiperWrapper.innerHTML += `
                <div class="swiper-slide">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                    <h4>${movie.title}</h4>
                </div>
            `;
        });

        // Initialize Swiper
        new Swiper('.swiper', {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            pagination: { el: '.swiper-pagination', clickable: true },
        });
    })
    .catch(error => console.error('Error fetching movies:', error));
