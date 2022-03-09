// Exported Variable so you finally have OOP In Javascript G


(function ($) {

	var $window = $(window),
		$body = $('body'),
		$menu = $('#menu'),
		$sidebar = $('#sidebar'),
		$main = $('#main');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: [null, '480px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Menu.
	$menu
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'right',
			target: $body,
			visibleClass: 'is-menu-visible'
		});

	// Search (header).
	var $search = $('#search'),
		$search_input = $search.find('input');

	$body
		.on('click', '[href="#search"]', function (event) {

			event.preventDefault();

			// Not visible?
			if (!$search.hasClass('visible')) {

				// Reset form.
				$search[0].reset();

				// Show.
				$search.addClass('visible');

				// Focus input.
				$search_input.focus();

			}

		});

	$search_input
		.on('keydown', function (event) {

			if (event.keyCode == 27)
				$search_input.blur();

		})
		.on('blur', function () {
			window.setTimeout(function () {
				$search.removeClass('visible');
			}, 100);
		});

	// Intro.
	var $intro = $('#intro');

	// Move to main on <=large, back to sidebar on >large.
	breakpoints.on('<=large', function () {
		$intro.prependTo($main);
	});

	breakpoints.on('>large', function () {
		$intro.prependTo($sidebar);
	});

})(jQuery);



var dbItems = [
	{
		"Title": "Cheese",
		"Tags": "",
		"Info": "20 ZAR",
		"StoreName": "Maboneng CBD Shop",
	}
];

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

function Post(T, SBT, ST) {
	this.Title = T;
	this.SubTitle = SBT;
	this.DatePublished = date;
	this.ST = ST;
	this.ImagePath = "assets/images/" + getRndInteger() + ".jpg";
}



function getRndInteger() {
	return Math.floor(Math.random() * (dbItems.length - 1)) + 1;
}




function GenBioImage() {
	return "assets/images/bio/" + "1 " + "(" + getRndInteger() + ")" + ".jpg";
}

function GenImage() {
	return "assets/images/" + "1 " + "(" + getRndInteger() + ")" + ".jpg";
}



function loadData() {

	if (document.URL.includes("index.html") ) {

		console.log("Bro")

		var insertionDiv = document.getElementById('Stories');
		var index = 0;

		dbItems.forEach(element => {
			var imagePath = GenImage();
			var imagePathBio = GenBioImage();
			let HtmlSegment = `<article style="box-shadow: rgb(230 230 230) 0px 0px 0px 1px inset, rgb(255 255 255 / 67%) 0px 0px 0px 1px;" id="${index}"  onclick="ItemClick(this.id)" class="post">
		<header class="postHeader">
			<div class="title">
				<h2 style="letter-spacing:0.5px;"><a href="#" style="font-family:Nanum Myeongjo;font-size:1rem">${element.Title}</a></h2>
				<p style="color: black;">${element.Tags}</p>
			</div>
			<div class="meta">
				<h4  id="DateTime" class="published" datetime="2015-11-01">${ST}</h4>
				<a href="#" class="author"><span class="name">"Maboneng"</span>
				<img class="author img" style="background-image:url('${imagePathBio}')"> 
						</a>
			</div>
		</header>

		<p style="color: black;font-weight:400;font-size:25px;text-align:center;font-family:Nanum Myeongjo;"> ${element.Info}</p>
		<a href="#" style="min-height:250px;" class="image featured" id="${index}" onclick="ItemClick(this.id)"><img src="${imagePath}" alt="" /></a>
		</article>`;
			index++;
			insertionDiv.innerHTML += HtmlSegment;
		});

		console.log("Ran")
	} else {

	}

}



function dollarsToRand(amonuntInRands) {
	return dollars = amonuntInRands / 15.37;
}

function RandTodollars(amonuntInDollars) {
	return dollars = amonuntInDollars * 15.37;
}
+
function LogTrade() {
	document.getElementById('Trade').innerHTML = "150 ZAR IS NOW " + dollarsToRand(150)
}




function ItemClick(id){
if (document.URL.includes("index.html")) {
localStorage.setItem('clikedID',JSON.stringify(id));
window.location = 'view.html';
	}

}


loadData();