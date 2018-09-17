'use strict'

$('.checkbox').on('click', function () {
  $(event.target).toggleClass('unchecked');
  $(event.target).toggleClass('checked');
});