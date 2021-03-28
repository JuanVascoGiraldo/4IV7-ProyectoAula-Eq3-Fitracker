function validarnumero(e){
    var code=(document.all)?e.keyCode:e.which;
    if(code>=48 && code<=57) { 
        return true;
      } else{ 
        return false;}
}

function ValidarFormulario(){
    var valido = true;
    var Formulario= document.contacto;

    if(Formulario.NombreEmpresa.value == ""){
        alert("Introduce el nombre de la Empresa");
        Formulario.NombreEmpresa.focus();
        valido = false;
    }
    if(Formulario.Numero.value == ""){
        alert("Introduce el Numero de la Empresa");
        Formulario.Numero.focus();
        valido = false;
    }

    if(Formulario.email.value == ""){
        alert("Introduce el Email de la Empresa");
        Formulario.email.focus();
        valido = false;
    }

    if(Formulario.mensaje.value == ""){
        alert("Introduce La descripcion del proyecto");
        Formulario.mensaje.focus();
        valido = false;
    }
    
    if(Formulario.Numero.value.length >= 11){
        alert("Introduce solamente 10 digitos en el campo de numero");
        Formulario.Numero.focus();
        valido = false;
    }

    var pulsado = false;
    var opciones =Formulario.Servicios;  
    for (i=0;i<opciones.length;i++) { 
        if (opciones[i].checked == true) {
            pulsado = true ;
            }
        }
    if (pulsado == false) { 
            alert("Seleccione el tipo de Servicio");
            valido = false;
        }
    
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    if(!(b.test(Formulario.email.value))){
        alert("Introduce Un correo Valido");
        Formulario.email.focus();
        valido = false;
    }
    
    if(valido == true){
        Formulario.submit();
    }

}