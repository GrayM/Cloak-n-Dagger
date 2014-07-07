
$(function() {


var template_str = $('#DIV')[0].textContent;
var makeStringFromData = _.template(template_str);

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
var n = 0;

var rightButton = $(".next");
	rightButton.addEventListender("click", function(next) {
		if (next < (users.length-1)) {
			n++;
		}
		else {
			n = 0;
		}
		console.log("Button clicked.");

	});

var leftButton = $(".prev");
	leftButton.addEventListender("click", function(prev) {
		if (prev > 0) {
			n--;
		}
		else {
			n = 0;
		}
		console.log("Button clicked.");

	});


var github_username = users[i];
var github_url = "https://api.github.com/users/";

var url = github_url + github_username;

var github_data = $.getJSON(url);

var template_str = $('#github_profile_template')[0].textContent;
var createProfileStringFromData = _.template(template_str);


var rightButton = getElementsByClass('.DIV');
	// rightButton.addEventListener('click', rightPic);


var start = 0



	
	// if (start < (slidePics.length-1))
	// 	n++;
	// else
	// 	n = 0;
	// document.getElementsByClass

$.when



$.fail

_.template(...)

addEventListener(...)

})