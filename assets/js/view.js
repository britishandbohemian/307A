console.log(productID);
	var id = document.getElementById('productName');
    id.innerHTML = shopInfoDB[shop].Title;


	var info = document.getElementById('productInfo');
    info.innerHTML = dbItems[productID].info;
