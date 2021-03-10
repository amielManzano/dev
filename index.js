let urlAll = 'https://amazon24.p.rapidapi.com/api/product?country=US&keyword=iphone&page=1&filter=aHR0cHM6Ly93d3cuYW1hem9uLmNvbS9zP2s9aXBob25lJnJoPXBfbl9jb25kaXRpb24tdHlwZSUzQVVzZWQmZGMmcWlkPTE2MTI0MTg5NTMmcmVmPXNyX25yX3Bfbl9jb25kaXRpb24tdHlwZV8y&categoryID=aps'
let keyAll = 'f1224efb9cmsh896354532ed219cp142beajsnbf696ee1e9d5'
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
        // console.log(data);
        let photos = [
            'https://m.media-amazon.com/images/I/71Sa8+9H3xL._FMwebp__.jpg',
            'https://m.media-amazon.com/images/I/71cQWYVtcBL._FMwebp__.jpg',
            'https://m.media-amazon.com/images/I/71cSV-RTBSL._FMwebp__.jpg',

            'https://m.media-amazon.com/images/I/71XXJC7V8tL._FMwebp__.jpg',
            'https://m.media-amazon.com/images/I/71umuN8XVeL._FMwebp__.jpg',
            'https://m.media-amazon.com/images/I/810DvHOZ9nL._FMwebp__.jpg',

            'https://m.media-amazon.com/images/I/71XXJC7V8tL._FMwebp__.jpg',
            'https://m.media-amazon.com/images/I/71umuN8XVeL._FMwebp__.jpg',
            'https://m.media-amazon.com/images/I/810DvHOZ9nL._FMwebp__.jpg',
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

