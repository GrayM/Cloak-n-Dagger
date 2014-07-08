$(function() {
    $('.profile');


    var users = [
        'robdesousa',
        'Keya-Moradi',
        'Matthiasak',
        'KhalidAdil',
        'joeybergeron',
        'atroppe',
        'davidjfreedman',
        'graym'
    ];

    var template_string = $('#github_profile_template')[0].textContent;
    var createProfileStringFromData = _.template(template_string);

    var rightButton = document.querySelector(".next");
    rightButton.addEventListener('click', function() {
        console.log('???'); //partial fix #1
        init();
    });

    // var rightMouseUp = document.querySelector(".next");
    // rightMouseUp.addEventListener('mouseup', clear);

    var leftButton = document.querySelector(".prev");
    leftButton.addEventListener('click', function() {
        init();
    });

    function init() {
        // get new profile
        // get data
        // template
        // ...


        // fix #2
        var random = users[Math.floor(Math.random() * users.length)];
        var github_username = random;
        var github_url = "https://api.github.com/users/";
        var url = github_url + github_username;
        // 
        $.getJSON(url).then(function(data) {
            var github_html = createProfileStringFromData(data);
            $('.profile').remove(); // fix #1
            $('body').append(github_html);
        }).fail(function(promise_obj, error_type, error_message) {
            alert("Ohhhh you've done it now. -- "+promise_obj.status+", "+error_message);
        })
    };

    // function clear() {
    //     $('.profile').remove();
    //     console.log("cliky");
    // };

    // function refresh() {
    //     github_data.then(function(data) {
    //         var github_html = createProfileStringFromData(data);
    //         window.location.reload(false)
    //     }).fail(function(promise_obj, error_type, error_message) {
    //         alert("Don't touch that!!!", promise_obj.status, error_message);
    //     })
    // };



    init();

});
