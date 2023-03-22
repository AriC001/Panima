const params = new URLSearchParams(window.location.search);
let idParam = params.get('id');
let data = productosJson.prod.find(({id}) => id === idParam );
productDescripcion(data)

function productDescripcion(data){
    console.log(data);
    let div = document.createElement('div');

    document.getElementById("nombre").innerHTML= data.titulo;
    document.getElementById("imagen").src= data.img;
    document.getElementById("descripcionCorta").innerHTML= data.desc;
    document.getElementById("titulo").innerHTML += data.tituloCorto

    // div.innerHTML = '<div class="card '+data.categoria+'" > <img src="'+data.img+'" class="card-img-top" alt="...">' +
    //     '<div class="card-body">'+
    //         '<h5 class="card-title">'+data.titulo+'</h5>'+
    //         '<h6 class="card-title">'+data.marca+'</h6>'+
    //         '<p class="card-text">'+data.desc+'</p>'+
    //         '<a href="'+data.descMob+'" class="btn btn-primary"">Go somewhere</a>'+
    //     '</div>'+
    // '</div>';
    // console.log(div);
    // document.getElementById('prods-card').appendChild(div);
}






$(document).ready(function() {
    var slider = $("#slider");
    // var thumb = $("#thumb");
    // var slidesPerPage = 0; //globaly define number of elements per page
    // var syncedSecondary = true;
    slider.owlCarousel({
        items: 0,
        // slideSpeed: 2000,
        // nav: false,
        // autoplay: false, 
        // dots: false,
        // loop: true,
        // responsiveRefreshRate: 200
    }).on('changed.owl.carousel');
    
});