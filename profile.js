

$(function(){ 
	$('.profile');


var ImgBank = [
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
    
	// 	function init(){
 //   			github_data.then(function(data){
 //        	var github_html = createProfileStringFromData(data);
 //        	$('body').append(github_html);
	// 	}
	

	// // template
	// var template_string = $('#github_profile_template')[0].textContent;
	// var createProfileStringFromData = _.template(template_string);

	// var rightButton = $(".next");
 //    rightButton.addEventListener("click", init);
 //    console.log("button clicked"); 
    
	// var leftButton = $(".prev");
 //    leftButton.addEventListener("click", init);
 //    console.log("button clicked");

	// github_data.then(function(data){
	// 	var github_html = createProfileStringFromData(data);
		// $('body').append(github_html);

		// var clickRight = $('.b1');
		// clickRight.addEventListener('click', picR);
		// var clickLeft = $('.b2');
		// clickLeft.addEventListener('click', picL);

		// var n = 0;

		// function picR(change) {
		// 	if (n < (ImgBank.length-1))
		// 		n++;
		// 	else
		// 		n = 0;
		// 	document.getElementsByClass("pic").src = data["avatar_url"];
		// }
		// function picL(change) {
		// 	if (n > 0)
		// 		n--;
		// 	else
		// 		n = (ImgBank.length-1);
		// 	document.getElementsByClass("pic").src = data["avatar_url"];
		// }

	});

});