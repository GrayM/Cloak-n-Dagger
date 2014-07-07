$(function() {

    $('.profile');

    var github_username = "joeybergeron";
    var github_url = "https://api.github.com/users/";
    var url = github_url + github_username;
    var github_data = $.getJSON(url);
    var template_string = document.querySelector('#github_profile_template').textContent;
    var createProfileStringFromData = _.template(template_string);

    github_data.then(function(data) {
        var github_html = createProfileStringFromData(data);
        $('body').append(github_html);
    });

});
