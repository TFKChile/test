let cambia=1;
let contador1=0,contador2=0,contador3=0,contador4=0,contador5=0,contador6=0,contador7=0;
function cambio_pag(i){
    cambia = cambia + i;
    

    for(let j=1;j<12;j++){
        if(cambia == j){
            document.getElementById("div"+j).style.display="";
            if(cambia == 1){
                document.getElementById("btn_atras").style.display="none";
            }
            else if(cambia == 12){
                document.getElementById("btn_sig").style.display="none";
                document.getElementById("btn_Finalizar").style.display="";
            }
            else{
                document.getElementById("btn_atras").style.display="";
                document.getElementById("btn_sig").style.display="";
                document.getElementById("btn_Finalizar").style.display="none";
            }    
        }
        else if(cambia != j){
            document.getElementById("div"+j).style.display="none";
            
        }
    }
}

function respuestas(){
    let i;
    for(i=1;i<10;i++){
        
            if(document.getElementById("respuesta"+i+"-1").checked){
                contador1 = contador1+1;
            }
            else if(document.getElementById("respuesta"+i+"-2").checked){
                contador2 = contador2+1;
            }
            else if(document.getElementById("respuesta"+i+"-3").checked){
                contador3 = contador3+1;
            }
            else if(document.getElementById("respuesta"+i+"-4").checked){
                contador4 = contador4+1;
            }
            else if(document.getElementById("respuesta"+i+"-5").checked){
                contador5 = contador5+1;
            }
            else if(document.getElementById("respuesta"+i+"-6").checked){
                contador6 = contador6+1;
            }
            else if(document.getElementById("respuesta"+i+"-7").checked){
                contador7 = contador7+1;
            }
        
          comparar(contador1,contador2,contador3,contador4,contador5,contador6,contador7)  
    }

    
}

function comparar(contadorA,contadorB,contadorC,contadorD,contadorE,contadorF,contadorG){
    let i,j,mayor;
        if(contadorA>contadorB && contadorA>contadorC && contadorA>contadorD && contadorA>contadorE && contadorA>contadorF && contadorA>contadorG){
            document.getElementById("RespuestaA").style.display="";
            document.getElementById("div11").style.display="none";
            document.getElementById("RespuestaB").style.display="none";
            document.getElementById("RespuestaC").style.display="none";
            document.getElementById("RespuestaD").style.display="none";
            document.getElementById("RespuestaE").style.display="none";
            document.getElementById("RespuestaF").style.display="none";
            document.getElementById("RespuestaG").style.display="none";
        }
        else if(contadorB>contadorA && contadorB>contadorC && contadorB>contadorD && contadorB>contadorE && contadorB>contadorF && contadorB>contadorG){
            document.getElementById("RespuestaB").style.display="";
            document.getElementById("div11").style.display="none";
            document.getElementById("RespuestaA").style.display="none";
            document.getElementById("RespuestaC").style.display="none";
            document.getElementById("RespuestaD").style.display="none";
            document.getElementById("RespuestaE").style.display="none";
            document.getElementById("RespuestaF").style.display="none";
            document.getElementById("RespuestaG").style.display="none";

        }
        else if(contadorC>contadorA && contadorC>contadorB && contadorC>contadorD && contadorC>contadorE && contadorC>contadorF && contadorC>contadorG){
            document.getElementById("RespuestaC").style.display="";
            document.getElementById("div11").style.display="none";
            document.getElementById("RespuestaA").style.display="none";
            document.getElementById("RespuestaB").style.display="none";
            document.getElementById("RespuestaD").style.display="none";
            document.getElementById("RespuestaE").style.display="none";
            document.getElementById("RespuestaF").style.display="none";
            document.getElementById("RespuestaG").style.display="none";
        }
        else if(contadorD>contadorA && contadorD>contadorB && contadorD>contadorC && contadorD>contadorE && contadorD>contadorF && contadorD>contadorG){
            document.getElementById("RespuestaD").style.display="";
            document.getElementById("div11").style.display="none";
            document.getElementById("RespuestaA").style.display="none";
            document.getElementById("RespuestaC").style.display="none";
            document.getElementById("RespuestaB").style.display="none";
            document.getElementById("RespuestaE").style.display="none";
            document.getElementById("RespuestaF").style.display="none";
            document.getElementById("RespuestaG").style.display="none";
        }
        else if(contadorE>contadorA && contadorE>contadorB && contadorE>contadorC && contadorE>contadorD && contadorE>contadorF && contadorE>contadorG){
            document.getElementById("RespuestaE").style.display="";
            document.getElementById("div11").style.display="none";
            document.getElementById("RespuestaA").style.display="none";
            document.getElementById("RespuestaC").style.display="none";
            document.getElementById("RespuestaD").style.display="none";
            document.getElementById("RespuestaB").style.display="none";
            document.getElementById("RespuestaF").style.display="none";
            document.getElementById("RespuestaG").style.display="none";
        }
        else if(contadorF>contadorA && contadorF>contadorB && contadorF>contadorC && contadorF>contadorD && contadorF>contadorE && contadorF>contadorG){
            document.getElementById("RespuestaF").style.display="";
            document.getElementById("div11").style.display="none";
            document.getElementById("RespuestaA").style.display="none";
            document.getElementById("RespuestaC").style.display="none";
            document.getElementById("RespuestaD").style.display="none";
            document.getElementById("RespuestaE").style.display="none";
            document.getElementById("RespuestaB").style.display="none";
            document.getElementById("RespuestaG").style.display="none";
        }
        else if(contadorG>contadorA && contadorG>contadorB && contadorG>contadorC && contadorG>contadorD && contadorG>contadorE && contadorG>contadorF){
            document.getElementById("RespuestaG").style.display="";
            document.getElementById("div11").style.display="none";
            document.getElementById("RespuestaA").style.display="none";
            document.getElementById("RespuestaC").style.display="none";
            document.getElementById("RespuestaD").style.display="none";
            document.getElementById("RespuestaE").style.display="none";
            document.getElementById("RespuestaF").style.display="none";
            document.getElementById("RespuestaB").style.display="none";
            
        }
}

 
