//identifico el formulario
const form_personalData = document.getElementById("personal_data");

//capturo el evento submit
form_personalData.addEventListener("submit", (e) => {
  e.preventDefault();
  //instancio un formdata
  let form_personal = new FormData(form_personalData);
  //guardo los datos en variables
  // let dni = ;
  // let name = form_personal.get("name");
  // let location = form_personal.get("location");
  // let state = form_personal.get("state");
  // let email = form_personal.get("email");
  // let cellphone = form_personal.get("cellphone");
  // let cuit = form_personal.get("cuit");
  // let rsocial = form_personal.get("razon");
  // let customer_type = form_personal.get("customer_type");
  // let num_factura = form_personal.get("num_factura");
  //armo un array
  let dataArray = [];
  dataArray.push(form_personal.get("dni"));
  dataArray.push(form_personal.get("name"));
  dataArray.push(form_personal.get("state"));
  dataArray.push(form_personal.get("email"));
  dataArray.push(form_personal.get("cellphone"));
  dataArray.push(form_personal.get("cuit"));
  dataArray.push(form_personal.get("razon"));
  dataArray.push(form_personal.get("customer_type"));
  dataArray.push(form_personal.get("num_factura"));

  //Gestion de botones
  let btn_pressed = e.submitter.name;

  if (btn_pressed == "btn_save") {
    console.log(dataArray);
    clean_inputs();
  } else if (btn_pressed == "btn_erase") {
    console.log("erase");
    clean_inputs();
  } else {
    console.log("cancel");
  }
});

//Inicializa los inputs
function clean_inputs() {
  form_personalData.reset();
}
