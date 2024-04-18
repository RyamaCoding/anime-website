// API 1: https://api.jikan.moe/v4/anime

const cardWrapperEl = document.querySelector(".card__wrapper");

async function main() {
  const cards = await fetch("https://api.jikan.moe/v4/anime");
  const cardsData = await cards.json();
  cardWrapperEl.innerHTML = cardsData.data.map((anime) => cardHTML(anime)).join("");
}

main();

/* search bar */ 

async function onSearchChange(event) {
  const animeName = event.target.value;
  renderPosts(animeName);
}

async function renderPosts(animeName) {
  const anime = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName}`);
  const animeData = await anime.json();
  cardWrapperEl.innerHTML = animeData.data.map((anime) => cardHTML(anime)).join("");
}

/* card HTML */ 

function cardHTML(anime) {
  return `<div class="card">
  <img src="${anime.images.jpg.image_url}" alt="anime-image" class="card__img">
  <div class="card__content">
      <h2 class="card__title">${anime.title}</h2>
      <p class="card__para"><b>Year:</b> ${anime.year}</p>
      <p class="card__para"><b>Episodes:</b> ${anime.episodes}</p>
      <p class="card__para"><b>Rank:</b> ${anime.rank}</p>
  </div>
</div>`
}

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
    button.classList.add("loading");
  }

  function stopLoading() {
    const button = document.getElementById("search-button");
    button.classList.remove("loading");
  }
