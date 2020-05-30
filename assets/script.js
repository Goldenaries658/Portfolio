const pageSwap = (newPage, oldPage) => {
  // Changing nav
  $(`.${newPage}`).attr('class', `${newPage} nav-link current`);
  $(`.${oldPage}`).attr('class', `${oldPage} nav-link`);

  // Changing page
  if (newPage === 'nav-about-me') {
    $('#about-me-page').show(500);
    $('#portfolio-page').hide(500);
  } else {
    $('#about-me-page').hide(500);
    $('#portfolio-page').show(500);
  }
};

$(() => {
  // Swapping pages
  $('.nav-about-me').click(() => {
    pageSwap('nav-about-me', 'nav-portfolio');
  });

  $('.nav-portfolio').click(() => {
    pageSwap('nav-portfolio', 'nav-about-me');
  });

  // Activating tooltip
  $('a').tooltip();
});
