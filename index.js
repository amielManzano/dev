let urlAll = 'https://amazon24.p.rapidapi.com/api/product?country=US&keyword=iphone&page=1&filter=aHR0cHM6Ly93d3cuYW1hem9uLmNvbS9zP2s9aXBob25lJnJoPXBfbl9jb25kaXRpb24tdHlwZSUzQVVzZWQmZGMmcWlkPTE2MTI0MTg5NTMmcmVmPXNyX25yX3Bfbl9jb25kaXRpb24tdHlwZV8y&categoryID=aps'
let keyAll = 'c4db595d79mshdb043f2c97baa54p1f8995jsn444c2d1492f9'
let hostAll = 'amazon24.p.rapidapi.com'
fetch(urlAll, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": keyAll,
		"x-rapidapi-host": hostAll
	}
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let photos = [
            'https://m.media-amazon.com/images/I/71Sa8+9H3xL._FMwebp__.jpg',
            'https://m.media-amazon.com/images/I/71cQWYVtcBL._FMwebp__.jpg',
            'https://m.media-amazon.com/images/I/71cSV-RTBSL._FMwebp__.jpg',

            'https://m.media-amazon.com/images/I/71XXJC7V8tL._FMwebp__.jpg',
            'https://m.media-amazon.com/images/I/71MHTD3uL4L._FMwebp__.jpg',
            'http://atlas-content-cdn.pixelsquid.com/stock-images/apple-iphone-6-gold-smartphone-4GMvxWC-600.jpg',

            'https://www.phone-city.co.uk/wp-content/uploads/2020/11/ip-6-32.jpg',
            'https://i1.wp.com/www.pdevice.com/wp-content/uploads/2014/08/apple-iphone-5-600x600.jpg',
            'https://www.mac2new.com/wp-content/uploads/2019/05/apple_iphone_6s_32gb_silver-510x510.jpg',

            'https://m.media-amazon.com/images/I/71umuN8XVeL._FMwebp__.jpg',
            'https://m.media-amazon.com/images/I/810DvHOZ9nL._FMwebp__.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/31Kz-X1iXUL._SY450_.jpg',

            'https://m.media-amazon.com/images/I/71DVgBTdyLL._FMwebp__.jpg',
            'https://m.media-amazon.com/images/I/81hA4nb-+qL._FMwebp__.jpg',
            'https://m.media-amazon.com/images/I/71xn9bCRfhL._FMwebp__.jpg',

            'https://target.scene7.com/is/image/Target/GUEST_4280e4d2-e715-40b1-9852-c2ed9e4d35c8?wid=488&hei=488&fmt=pjpeg',
            'https://m.media-amazon.com/images/I/71cQWYVtcBL._FMwebp__.jpg',
            'https://m.media-amazon.com/images/I/81HSzsIkJdL._FMwebp__.jpg',

            'https://m.media-amazon.com/images/I/71sNNCTfMuL._FMwebp__.jpg',
            'http://atlas-content-cdn.pixelsquid.com/stock-images/apple-iphone-6-gold-smartphone-4GMvxWC-600.jpg',
            'https://www.laptopsdirect.co.uk/Images/A3MPRL2BA_2_Supersize.jpg?v=6'

        ]
        let i = 0
        data.docs.forEach( phone => {
            $('#productsHere').append(
                `
                <div class='col-4 p-3'> 
                    <div class="card adjustHeight" style="width: 18rem;">
                    <img class="card-img-top" src=${photos[i]} alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${phone.product_title}</h5>
                    </div>
                    <div class='card-footer'>
                        <p class='text-right'>price: ${phone.app_sale_price_currency} ${phone.app_sale_price}
                        <br>
                        rating: ${phone.evaluate_rate}</p>
                        <a href=${phone.product_detail_url} class="btn btn-secondary w-100 my-2">Details</a>
                        <a href="#" class="btn btn-secondary w-100">Add to Cart</a>
                    </div>
                    </div>
                </div>
                `
            )
            i++
        })
});

$('#searchProduct').click(function(e){
    e.preventDefault()
    let searcheditem = $('#searchField').val()
    // console.log(searcheditem)
    document.getElementById('productsHere').innerHTML = `${searcheditem}`

})

