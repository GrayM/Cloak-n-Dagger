$(function() {

    $('.profile');

var users = [
    'graym',
    'robdesousa',
    'Keya-Moradi',
    'Matthiasak',
    'KhalidAdil',
    'joeybergeron',
    'atroppe',
    'davidjfreedman',
]

    var random = users[Math.floor(Math.random() * users.length)];
    var github_username = random;
    var github_url = "https://api.github.com/users/";
    var url = github_url + github_username;
    var github_data = $.getJSON(url);
    var template_string = document.querySelector('#github_profile_template').textContent;
    var createProfileStringFromData = _.template(template_string);

//     github_data.then(function(data) {
//         var github_html = createProfileStringFromData(data);
//         $('body').append(github_html);
//     });

// });

var template_str = $('#DIV')[0].textContent;
var makeStringFromData = _.template(template_str);


function init(){
    github_data.then(function(data){
        var github_html = createProfileStringFromData(data);
        $('body').append(github_html);
}

var template_str = $('#github_profile_template')[0].textContent;
var createProfileStringFromData = _.template(template_str);

var rightButton = $(".next");
    rightButton.addEventListener("click", init);
    console.log("button clicked"); 
    
var leftButton = $(".prev");
    leftButton.addEventListener("click", init);
    console.log("button clicked");
   
    // if (start < (slidePics.length-1))
    //  n++;
    // else
    //  n = 0;
    // document.getElementsByClass

$.when



$.fail

addEventListener(...)

})