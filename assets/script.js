const pageSwap = (newPage, oldPage) => {
  // Changing nav
  $(`.${newPage}`).attr('class', `${newPage} nav-link current`);
  $(`.${oldPage}`).attr('class', `${oldPage} nav-link`);

  // Changing page
  if (newPage === 'nav-about-me') {
    $('#about-me-page').show('fast');
    $('#portfolio-page').hide('fast');
  } else {
    $('#about-me-page').hide('fast');
    $('#portfolio-page').show('fast');
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
