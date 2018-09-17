'use strict'

$('.checkbox').on('click', function () {
  $(event.target).toggleClass('unchecked, checked');
});

$('.radio').on('click', function () {
  $(event.target).toggleClass('off, on');
});