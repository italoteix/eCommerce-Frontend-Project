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