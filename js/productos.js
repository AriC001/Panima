// $(document).ready(function(e){
    
//     // filterSelection('all')
// });
productosJson.prod.forEach((i) => cargarProds(i)) ;

function cargarProds(data){
    // console.log(data);
    var div = document.createElement('div');
    div.className="card-prodcutos"

    div.innerHTML = '<div class="card h-100 '+data.categoria+'" > <img src="'+data.img+'" class="card-img-top" alt="...">' +
        '<div class="card-body">'+
            '<h5 class="card-title">'+data.titulo+'</h5>'+
            '<h6 class="card-title">'+data.marca+'</h6>'+
            // '<p class="card-text">'+data.desc+'</p>'+
        '</div>'+
        '<div class="card-footer">'+
        '<small class="text-muted"><a href="./detalle.html?id='+data.id+'" >VER MÁS</a></small>'+
        '</div>'+
    '</div>';

    document.getElementById('prods-card').appendChild(div);
}

// <div class="card Neuro" style="width: 18rem;">
//             <img src="" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">Card title Neuro</h5>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>




