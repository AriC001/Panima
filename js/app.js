const btWork = document.querySelector("#bt-workWithUs");
const btContact = document.querySelector("#bt-contacto2")
const formContact = document.querySelector(".form_section");
const formWork = document.querySelector(".form_section2");

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

function sendEmail(){
  event.preventDefault();
  console.log("AAA");
  
  Email.send({
      SecureToken : "",
      To : 'aricohen98@gmail.com',
      From : "@",
      Subject : "CV",
      Body : "Adjunto CV",
    Attachments : [
    {
      name : localStorage.getItem("fileName"),
      path : document.getElementById("myFile")
    }]
    }).then(
    message => console.log(message)
    );
}

function saveName(fileInput) {
  const files = fileInput.files;
  const name = files[0].name;
  console.log(name);
  localStorage-setItem("fileName", name)
}

function algo(){
  console.log("AAA")
}