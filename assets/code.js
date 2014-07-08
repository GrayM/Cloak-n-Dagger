$(function(){ 
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
    //******I want ImgBank to read the names in a column*******//
    // var person = prompt("Select a username from the following: " +" "+ImgBank);
    console.log(github_data);


        function init(){
            github_data.then(function(data){
            var github_html = createProfileStringFromData(data);
            $('body').append(github_html);
        });


    var template_string = $('#github_profile_template')[0].textContent;
    var createProfileStringFromData = _.template(template_string);

    var rightButton = $(".next");
    rightButton.addEventListener("click", init);
    console.log("button clicked"); 
    
    var leftButton = $(".prev");
    leftButton.addEventListener("click", init);
    console.log("button clicked");

    };

});