function showErrorMessage() {
    alert('This feature has yet to be implemented');
  };

  function openMenu(){
    document.body.classList += " menu--open";
  }

  function closeMenu(){
    document.body.classList.remove('menu--open');
  }