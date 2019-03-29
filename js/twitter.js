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