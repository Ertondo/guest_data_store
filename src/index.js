//identifico el formulario
const form_personalData = document.getElementById("personal_data");
const table_personal_data = document.getElementById("table_personal_data");

//Inicializo el objeto que va a guardar todos los guest
//que luego mando a la DB
let guest_list = {
  guest: [],
};

//capturo el evento submit
form_personalData.addEventListener("submit", (e) => {
  e.preventDefault();

  //instancio un formdata
  let form_personal = new FormData(form_personalData);

  //array temporal que se pone a cero con cada carga
  let dataArray = [];

  //guardo los datos en un array temporal
  dataArray.push(form_personal.get("dni"));
  dataArray.push(form_personal.get("name"));
  dataArray.push(form_personal.get("location"));
  dataArray.push(form_personal.get("state"));
  dataArray.push(form_personal.get("email"));
  dataArray.push(form_personal.get("cellphone"));
  dataArray.push(form_personal.get("cuit"));
  dataArray.push(form_personal.get("business_name"));
  dataArray.push(form_personal.get("customer_type"));
  dataArray.push(form_personal.get("num_invoice"));

  //Gestion de botones
  let btn_pressed = e.submitter.name;

  if (btn_pressed == "btn_add_more") {
    add_more_guest(dataArray);
  } else if (btn_pressed == "btn_erase_inputs") {
    //borra los inputs
    console.log("erase");
    clean_inputs();
  } else if (btn_pressed == "btn_save_all") {
    console.log(form_personalData);
    console.log(table_personal_data);
    console.log("Guardar y salir");
  } else if (btn_pressed == "btn_cancel") {
    //vuelve a la pagina anterior y deja todo sin efecto
    console.log("cancel and lost data");
    dataArray.forEach((item, index) => console.log(index, item));
  }
});

//Inicializa los inputs
function clean_inputs() {
  form_personalData.reset();
}

function add_more_guest(dataArray) {
  //agrego el array al objets, borro los inputs
  guest_list.guest.push(dataArray);
  dataArray.forEach((item, index) => console.log(index, item));

  clean_inputs();
  //Creo el boton borrar
  const btn_erase = document.createElement("button");
  btn_erase.textContent = "X";
  btn_erase.className = "btn_erase btn btn-secondary";

  //Agrego un fila a la tabla
  let new_row = table_personal_data.insertRow(1);
  //Agrego el boton borrar a la primera columna
  new_row.insertCell(0).appendChild(btn_erase);
  //Agrego datos del array a cada celda de la fila
  for (let i = 0; i < 8; i++) {
    new_row.insertCell(i + 1).innerHTML = dataArray[i];
  }
}
