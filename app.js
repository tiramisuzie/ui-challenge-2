'use strict'

$('.checkbox-container').on('click', () => {
  $(event.target).toggleClass('unchecked');
  $(event.target).toggleClass('checked');
});