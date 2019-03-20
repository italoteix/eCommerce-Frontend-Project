alert("Hello World!");

$('#jflickr_cbox').jflickrfeed({
    limit: 6, // number of images to show
    qstrings: { id: '25182021@N05' // id of flickr gallery (use idgettr.com to get flickr gallery id)
    },
    // Small images: {{image_s}}
    // Medium images: {{image}}
    // Large images: {{image_b}}
    itemTemplate: '<li>' + '<a rel="colorbox" href="{{image_b}}" title="{{title}}">' + '<img src="{{image_s}}" alt="{{title}}" />' + '</a>' + '</li>'
}, function(data) {
    $('#jflickr_cbox a').colorbox();
});