const btWork = document.querySelector("#bt-workWithUs");
const btContact = document.querySelector("#bt-contacto2")
const formContact = document.querySelector(".form_section");
const formWork = document.querySelector(".form_section2");

let control = 0;

btWork.addEventListener('click', () =>{
  formContact.style.visibility = "hidden";
  formContact.style.height = "0";
  formWork.style.visibility = "visible"
  formWork.style.height = "100%";
}) 

btContact.addEventListener('click', () =>{
  formContact.style.visibility = "visible"
  formContact.style.height = "100%";
  formWork.style.visibility = "hidden"
  formWork.style.height = "0";
}) 

function sendEmail(name){
  event.preventDefault();
  if(name == "Contact"){
    let inputs = document.getElementsByClassName('label-input')
    console.log(inputs);
    let respuesta1 = inputs[0].innerHTML + ": " + "<br>" + inputs[0].nextElementSibling.value + "<br>" + "<br>";
    let respuesta2 = inputs[1].innerHTML + ": " + "<br>" + inputs[1].nextElementSibling.value + "<br>" + "<br>";
    let respuesta3 = inputs[2].innerHTML + ": " + "<br>" + inputs[2].nextElementSibling.value + "<br>" + "<br>";
    let respuesta4 = "Comentario" + ": " + "<br>" + inputs[3].nextElementSibling.value + "<br>";
    Email.send({
      SecureToken : "8944c40b-4e8c-4cbf-848d-0c7da4235591", 
      To : 'aricohen98@gmail.com',
      From : "panimagroup.sa@hotmail.com",
      Subject : "Consulta WEB " + inputs[1].nextElementSibling.value,
      Body : respuesta1 + " " + respuesta2 + " " + respuesta3 + " " + respuesta4,
    }).then(
    message => console.log(message)
    );
  }
  alert("Email enviado")
}


let fileHandler = function(e){

  let emailCV = "Adjunto CV " + document.getElementById("cv-email").value
 
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
      console.log(reader.result);
      // Logs data:<type>;base64,wL2dvYWwgbW9yZ...
      Email.send({
            SecureToken : "8944c40b-4e8c-4cbf-848d-0c7da4235591", 
            To : 'aricohen98@gmail.com',
            From : "panimagroup.sa@hotmail.com",
            Subject : "CV WEB " + document.getElementById("cv-email").value,
            Body : emailCV,
          Attachments : [
          {
            name : file.name,
            data: reader.result,
          }]
          }).then(
          message => console.log(message)
          );
  };
  reader.readAsDataURL(file);
}


const emailInput = document.querySelector('#cv-email');
let i = 0;
emailInput.addEventListener('input', (event) => {
  i++;
  if(i > 4){
    document.querySelector('#cvFiles').style.visibility = "visible"
    document.querySelector('#emailCvWarning').style.display = "none"
  }
  
});

// function filterAndPage(filtro){
//   window.location.assign('./productos.html')
//   filterSelection(filtro)
// }