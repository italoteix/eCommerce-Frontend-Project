// Flickr Modal =======================================================


$(document).ready(function () {
    $('#myModal').on('show.bs.modal', function (e) {
        var image = $(e.relatedTarget).attr('src');
        $("#img01").attr("src", image);

    });
});


// Search Box Autocomplete =======================================================


var searchAuto = ["Men Shoes","Women Shoes","Kids","Teens","Adults","Prada","Summer","Winter","Autumn","Fall","Spring","Pink Shoes","Prada","Anna Field","Limited Edition"];

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

autocomplete(document.getElementById("myInput"), searchAuto);



// Blog Posts Cycle =======================================================

$(function () {
    var messages1 = [],
        messages2 = [],
        index = 0;

    messages1.push('<div class="tag-date">APR <span>01</span></div><div><h6>Nice & clean. The best for yout blog!</h6><p>Vivamus metus turpis, bibendum vitae euismod vel, vulputate vel</p></div>');
    messages1.push('<div class="tag-date">MAR<span>31</span></div><div><h6>Spring and Summer Shoe Guide</h6><p>Vivamus metus turpis, bibendum vitae euismod vel, vulputate vel</p></div>');
    messages1.push('<div class="tag-date">MAR<span>29</span></div><div><h6>3 Sneakers Every Single Fashion Blogger Owns</h6><p>Vivamus metus turpis, bibendum vitae euismod vel, vulputate vel</p></div>');

    messages2.push('<div class="tag-date">APR <span>01</span></div><div><h6>What an eCommerce theme!</h6><p>Vulputate vel nibh. Class aptent taciti sociosqu ad litora</p></div>');
    messages2.push('<div class="tag-date">MAR <span>30</span></div><div><h6>Go-To Brand for Basic T-Shirts</h6><p>Quisque sollicitudin magna eu porttitor pharetra. Suspendisse</p></div>');
    messages2.push('<div class="tag-date">MAR <span>28</span></div><div><h6>French Girl Style</h6><p>Nam ligula turpis, vestibulum vitae porttitor non, egestas in</p></div>');

    function transition(i) {
        var id = '#blog' + i;
        $(id).fadeOut();
    }

    function cycle() {
        $('#blog1').html(messages1[index]);
        $('#blog2').html(messages2[index]);

        $('#blog1').fadeIn();
        $('#blog2').fadeIn();

        index++;

        if (index === messages1.length) {
            index = 0;
        }

        setTimeout(() => {transition(1), transition(2)}, 4000);
        setTimeout(cycle, 5000);
    }

    cycle();
});


// Twitter Posts Cycle =======================================================

$(function () {
    var messages1 = [],
        messages2 = [],
        index = 0;

    messages1.push('<p><span>@ericafustero</span> Why thank you. Your work looks awesome by the way! <span>@treemelody</span></p><p>19 days ago</p>');
    messages1.push("<p>OMG!!! I'm in love with the new <span>@fooseshoes</span> site</p><p>22 days ago</p>");
    messages1.push('<p>Pellentesque habitant morbi tristique senectus et <span>@netus</span>.</p><p>24 days ago</p>');

    messages2.push('<p><span>@roymarvelous</span> You can seek a refund through TF if it is not as advertised - but it is :)</p><p>21 days ago</p>');
    messages2.push('<p>Elit at imperdiet dui <span>@accumsan</span> sit amet nulla facilisi morbi. </p><p>23 days ago</p>');
    messages2.push('<p><span>@diam</span> quam nulla porttitor massa id neque aliquam vestibulum morbi</p><p>25 days ago</p>');

    function transition(i) {
        var id = '#tweet' + i;
        $(id).fadeOut();
    }

    function cycle() {
        $('#tweet1').html(messages1[index]);
        $('#tweet2').html(messages2[index]);

        $('#tweet1').fadeIn();
        $('#tweet2').fadeIn();

        index++;

        if (index === messages1.length) {
            index = 0;
        }

        setTimeout(() => {transition(1), transition(2)}, 4000);
        setTimeout(cycle, 5000);
    }

    cycle();
});



// Dropdown Buttons text =======================================================

$(".dropdown-menu a").click(function(){
  $(this).parents(".dropdown").find('.btn-cat').html($(this).text() + ' <i class="flaticon-down-arrow"></i>');
  $(this).parents(".dropdown").find('.btn-cat').val($(this).data('value'));

  $(this).parents(".dropdown").find('.show-all').html($(this).text() + ' <i class="flaticon-down-arrow"></i>');
  $(this).parents(".dropdown").find('.show-all').val($(this).data('value'));
});


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