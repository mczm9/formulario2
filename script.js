function pegarDados(){
 		//alert("ok");
//document.querySelector(".esconder").sytyle.display = "block";
document.querySelector(".esconder").style.display = "block";
    let row  = document.querySelector('hr');
    row.classList.add('show');

    let result = document.querySelector('.hide');
    result.classList.remove('hide');
    result.classList.add('show');

 let camText = document.getElementById("texto").value; 
 //alert(camText);
document.getElementById("camText").innerHTML =  ("Nome:" + camText);

 let camTel = document.getElementById("fone").value;
 document.getElementById("campTel").innerHTML = ("Telefone:" + camTel);

 let camEmail = document.getElementById("e-mail").value;
 document.getElementById("camEmail").innerHTML = ("Email:" + camEmail);

 let camSenha = document.getElementById("senha").value;
 document.getElementById("camSenha").innerHTML = ("Senha:" + camSenha);

 let checkbox_info = document.getElementById("info");
    let checkbox_adm = document.getElementById("adm");
    let checkbox_enf = document.getElementById("enf");

    if(checkbox_info.checked){
        document.getElementById("campoinfo").innerHTML = ("Seu curso de idiomas é: inglês")
    }if(checkbox_adm.checked){
        document.getElementById("campoadm").innerHTML = ("Seu curso de idiomas é: espanhol")
    }if(checkbox_enf.checked){
        document.getElementById("campoenf").innerHTML = ("Seu curso de idiomas é: alemão")
    }


    if(document.getElementById("info2").checked){
        document.getElementById("camporadio").innerHTML = ("Seu curso é: informática")
    }else if(document.getElementById("adm2").checked){
        document.getElementById("camporadio").innerHTML = ("Seu curso é: administração")
    }else if(document.getElementById("enf2").checked){
        document.getElementById("camporadio").innerHTML = ("Seu curso é: enfermagem")
    }

    let ocult = document.getElementById("oculto").value;
    document.getElementById("campooculto").innerHTML = ("Valor oculto: " + ocult);

    let number = document.getElementById("num").value;
    document.getElementById("camponum").innerHTML = ("Número que gosta: " + number);

    let data = document.getElementById("data").value;
    document.getElementById("campodata").innerHTML = ("Sua data de nascimento é: " + data);

    let hora = document.getElementById("hora").value;
    document.getElementById("campohora").innerHTML = ("Horário:" +  hora);

    let range = document.getElementById("range").value;
    document.getElementById("camporange").innerHTML = ("O valor escolhido foi: " + range);

    let priFaixa = document.getElementById("priFaixa").value;
    document.getElementById("campofaixa").innerHTML = ("Sua cor favorita é: " + faixa);


































 // let checkbox_info =  document.getElementById("info");
 // let checkbox_adm = document.getElementById("adm");
 // let checkbox_enf = document.getElementById("enf");


 // if(checkbox_info.checked){
 //        document.getElementById("campoinfo").innerHTML = ("Seu curso é: inglês")
 //    }if(checkbox_adm.checked){
 //        document.getElementById("campoadm").innerHTML = ("Seu curso é: espanhol")
 //    }if(checkbox_enf.checked){
 //        document.getElementById("campoenf").innerHTML = ("Seu curso é: alemão")
 //    }





// }else if (document.getElementById("adm2").checked){
//     document.getElementById("camporadio").innerHTML = ("Seu curso é: Administração!");
//  }
// else if (document.getElementById("enf2").checked){
//     document.getElementById("camporadio").innerHTML = ("Seu curso é Enfermagem!)";
 }
//  	if(document.getElementById("info2").checked){
// 	        alert("Seu curso é Informática");
// 	} else if (document.getElementById("adm2").checked){
// 			alert("Seu curso é Administração");
// 	} else if (document.getElementById("enf2").checked){
// 			alert("Seu curso é Enfermagem");
// }
// let priFaixa = document.getElementById("priFaixa").value;
// alert(priFaixa);
 

