const pageSwap = (newPage, oldPage) => {
  // Changing nav
  $(`.nav-${newPage}`).addClass('current');
  $(`.nav-${oldPage}`).removeClass('current');

  // Changing page
    $(`#${newPage}-page`).show(500);
    $(`#${oldPage}-page`).hide(500);
};

$(() => {
  // Swapping pages
  $('.nav-about-me').click(() => {
    pageSwap('about-me', 'portfolio');
  });

  $('.nav-portfolio').click(() => {
    pageSwap('portfolio', 'about-me');
  });

  // Activating tooltip
  $('a').tooltip();
});
