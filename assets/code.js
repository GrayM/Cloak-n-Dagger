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

    var random = users[Math.floor(Math.random() * users.length)];
    var github_username = random;
    var github_url = "https://api.github.com/users/";
    var url = github_url + github_username;
    var github_data = $.getJSON(url);
    var template_string = $('#github_profile_template')[0].textContent;
    var createProfileStringFromData = _.template(template_string);

    var rightButton = document.querySelector(".next");
    rightButton.addEventListener('click', refresh);

    var rightMouseUp = document.querySelector(".next");
    rightMouseUp.addEventListener('mouseup', clear);

    var leftButton = document.querySelector(".prev");
    leftButton.addEventListener('click', refresh);

    function init() {
        github_data.then(function(data) {
            var github_html = createProfileStringFromData(data);
            $('body').append(github_html);
        });
    }

    function clear() {
        $('.profile').remove();
        console.log("cliky");
    }

    function refresh() {
        github_data.then(function(data) {
            var github_html = createProfileStringFromData(data);
            window.location.reload()

        })
    }

    init();

});
