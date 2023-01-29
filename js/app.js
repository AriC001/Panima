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
  //let fileInput = document.getElementById("myFile");
  //let file = fileInput.files[0]
  //let path2 =  "http://127.0.0.1:5500/index.html/" + localStorage.getItem("fileName")
  //console.log(path2);
  // "ac6c2dac-7090-48b8-bb11-0dc3e1eca6e7",
  Email.send({
      SecureToken : "8944c40b-4e8c-4cbf-848d-0c7da4235591", 
      To : 'aricohen98@gmail.com',
      From : "panimagroup.sa@hotmail.com",
      Subject : "CV",
      Body : "Adjunto CV",
    Attachments : [
    {
      name : localStorage.getItem("fileName"),
      path : document.getElementById("path2"),
    }]
    }).then(
    message => console.log(message)
    );
}

function saveName(fileInput) {
  // const files = fileInput.files;
  const name = fileInput.files[0].name;
  console.log(name);
  localStorage.setItem("fileName", name)

  var elm = document.getElementById('myFile'),
  img = elm.files[0],
  fileName = img.name, // not path
  fileSize = img.size; // bytes

    // By Parsing File
    var reader = new FileReader(),
    binary, base64;
    reader.addEventListener('loadend', function () {
    binary = reader.result; // binary data (stored as string), unsafe for most actions
    base64 = btoa(binary); // base64 data, safer but takes up more memory
    }, false);
    reader.readAsBinaryString(img);



  // let reader = new FileReader();
  //   reader.onload = function(e) {
  //   $('#myFyle').attr('src', e.target.result);
  // }
  // reader.readAsDataURL(fileInput.files[0]);
  // console.log(reader.result);
}

function algo(){
  console.log("AAA")
}

