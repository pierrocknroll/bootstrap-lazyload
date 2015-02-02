var lazyLoadImgs = function lazyLoadImgs(jqParent) {
  $.each(jqParent.find('img.js-lazy-load'), function () {
    $(this).attr('src', $(this).attr('data-lazyloadsrc'))
      .removeClass('js-lazy-load')
      .removeAttr('data-lazyloadsrc');
  });
};

$('.panel').on('show.bs.collapse', function () {
  lazyLoadImgs($(this))
});

$('.carousel').on('slide.bs.carousel', function (oEvent) {
  var jqChoice = $(oEvent.relatedTarget),
    jqPrev = jqChoice.prev('.item'),
    jqNext = jqChoice.next('.item');

  lazyLoadImgs(jqChoice);

  // Lazyload of previous image
  if (!jqPrev.length) {
    jqPrev = jqChoice.siblings(':last');
  }

  lazyLoadImgs(jqPrev);

  // Lazyload of next image
  if (!jqNext.length) {
    jqNext = jqChoice.siblings(':first');
  }

  lazyLoadImgs(jqNext);
});
