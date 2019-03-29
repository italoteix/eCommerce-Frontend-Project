// Dropdown Buttons text =======================================================

$(".dropdown-menu a").click(function(){
    $(this).parents(".dropdown").find('.btn-cat').html($(this).text() + ' <i class="flaticon-down-arrow"></i>');
    $(this).parents(".dropdown").find('.btn-cat').val($(this).data('value'));
  
    $(this).parents(".dropdown").find('.show-all').html($(this).text() + ' <i class="flaticon-down-arrow"></i>');
    $(this).parents(".dropdown").find('.show-all').val($(this).data('value'));
  });