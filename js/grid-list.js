// Grid / List view ==============================================================

$(document).ready(function() {
  
    $('#btn-list').click(function(event){
      event.preventDefault();
      $('.grid').addClass('list');
      $('#btn-grid').removeClass('btn-view');
      $('#btn-list').addClass('btn-view');
    });
  
    $('#btn-grid').click(function(event){
      event.preventDefault();
      $('.grid').removeClass('list');
      $('#btn-grid').addClass('btn-view');
      $('#btn-list').removeClass('btn-view');
    });
  });