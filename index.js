// API 1: https://api.jikan.moe/v4/anime




/* Burger Menu and Loading state */

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

