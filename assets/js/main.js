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



var numberOfShops = -1;
// db
let shopInfoDB = [
	// Shops
	{
		"shopID": "1",
		"shopName": "Name Of Shop",
		"shopNumberOfItems": "2",
		"shopContactInfo": "061 183 9982",
		"shopImage": "./assets/shops/shop_1/bio/bio.jpg",
		"shopProducts": [
			{
				"ProductName": "Art One",
				"ProductInfo": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod eum cupiditate, natus obcaecati, sed aliquam possimus minima laboriosam nihil officiis quam architecto autem sit libero quae accusamus provident facere accusantium?",
				"ProductPrice": "Price",
				"ProductImage": "./assets/shops/shop_1/products/1 (1).jpg",
				"ProductID": "1"
			},
			{
				"ProductName": "Art Two",
				"ProductInfo": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod eum cupiditate, natus obcaecati, sed aliquam possimus minima laboriosam nihil officiis quam architecto autem sit libero quae accusamus provident facere accusantium?",
				"ProductPrice": "Price",
				"ProductImage": "./assets/shops/shop_1/products/1 (2).jpg",
				"ProductID": "2"
			}
		],
	},
	
];


function loadData() {

	if (document.URL.includes("index.html")) {

		console.log("Bro")

		var insertionDiv = document.getElementById('Stories');
		var index = 0;

	
// entire shop array
		shopInfoDB.forEach(shop => {
		
// Products in shop
			shop.shopProducts.forEach(product => {
				let HtmlSegment = `
				<article style="box-shadow: rgb(230 230 230) 0px 0px 0px 1px inset, rgb(255 255 255 / 67%) 0px 0px 0px 1px;" id="${shop.shopID}"  onclick="ItemClick(${shop.shopID},${product.ProductID})" class="post">
					<header class="postHeader">
						<div class="title">
							<h2 style="letter-spacing:0.5px;"><a href="#" style="font-size:1.5rem;font-weight:300">${product.ProductName}</a></h2>
							<p style="color: black;">${product.ProductInfo}</p>
							<p style="    color: black;
							font-weight: bold;
							font-size: 35px;
							text-align: center;"> ${product.ProductPrice}</p>
						</div>
						<div class="meta">
							
							<a href="#" class="author"><span class="name">Shop Name</span>
							<img class="author img" style="background-image:url('${shop.shopImage}')"> 
									</a>

							
						</div>
					</header>
			
				
					<a href="#" style="min-height:250px;" class="image featured" id="${index}" onclick="ItemClick(this.id)"><img src="${product.ProductImage}" alt="" /></a>
					</article>`;
			insertionDiv.innerHTML += HtmlSegment;

			});

		});

	} else {

	}

}


// Product blueprint

class Product {
	constructor(cProductName, cProductPrice, cProductImage, cProductOwner) {
		this.ProductName = cProductName;
		this.ProductPrice = cProductPrice;
		this.ProductImage = cProductImage;
		this.ProductOwner = cProductOwner;
	}

}

// shop Blue print
class Shop {
	constructor(shopInfoDB) {
		numberOfShops +=1;
		this.shopName = shopInfoDB[numberOfShops];
		this.shopNumberOfItems = shopNumberOfItems;

		for (let index = 0; index < shopNumberOfItems; index++) {
			shopProducts[index] = new Product();

		}
	}

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




function ItemClick(shopID,productID) {
	if (document.URL.includes("index.html")) {
		localStorage.setItem('shopID', JSON.stringify(shopID));
		localStorage.setItem('productID', JSON.stringify(productID));
		window.location = 'view.html';
	}

}


loadData();