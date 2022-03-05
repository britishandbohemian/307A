console.log(productID);
	var id = document.getElementById('productName');
    id.innerHTML = dbItems[productID].Title;


	var info = document.getElementById('productInfo');
    info.innerHTML = dbItems[productID].info;
