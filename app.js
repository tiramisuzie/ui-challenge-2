'use strict'

$('.checkbox').on('click', () => {
  $(event.target).toggleClass('unchecked');
  $(event.target).toggleClass('checked');
});