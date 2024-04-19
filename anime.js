// API 1: https://api.jikan.moe/v4/anime

const cardWrapperEl = document.querySelector(".card__wrapper");

async function main() {
  const cards = await fetch("https://api.jikan.moe/v4/anime");
  const cardsData = await cards.json();
  cardWrapperEl.innerHTML = cardsData.data.map((anime) => cardHTML(anime)).join("");
}

main();

/* search bar */ 

async function handleSearch(event) {
  event.preventDefault(); 
  startLoading(); 
  const searchInput = document.getElementById('search-input');
  await renderPosts(searchInput.value);
  stopLoading();
}

async function renderPosts(animeName) {
  try {
    const anime = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName}`);
    const animeData = await anime.json();
    cardWrapperEl.innerHTML = animeData.data.map((anime) => cardHTML(anime)).join("");
  } catch (error) {
    console.error("Failed to fetch anime:", error);
    cardWrapperEl.innerHTML = "<p>Failed to load data. Please try again later.</p>";
  }
}

/* card HTML */ 

function cardHTML(anime) {
  const year = anime.year ? anime.year : "N/A";
  const rank = anime.rank ? anime.rank : "N/A";

  return `<div class="card">
  <img src="${anime.images.jpg.image_url}" alt="anime-image" class="card__img">
  <div class="card__content">
      <h2 class="card__title">${anime.title}</h2>
      <p class="card__para"><b>Year:</b> ${year}</p>
      <p class="card__para"><b>Episodes:</b> ${anime.episodes}</p>
      <p class="card__para"><b>Rank:</b> ${rank}</p>
  </div>
</div>`
}

/* search results from index.html */

document.addEventListener("DOMContentLoaded", function() {
  const urlParam = new URLSearchParams(window.location.search);
  const searchQuery = urlParam.get('search');

  if (searchQuery) {
      renderPosts(searchQuery);
  }
});


/* Burger menu and loading state */ 

function showErrorMessage() {
    alert('This feature has yet to be implemented');
  };

function openMenu() {
    document.body.classList += " menu--open";
  }

function closeMenu() {
  document.body.classList.remove('menu--open')
  }

  function startLoading() {
    const button = document.getElementById("search-button");
    button.classList += (" loading");
  }

  function stopLoading() {
    const button = document.getElementById("search-button");
    button.classList.remove("loading");
  }
