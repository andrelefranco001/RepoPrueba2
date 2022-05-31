if(edad < 18 && edad >= 0){ 
    if(edad %2!==0){
        console.log("¿Sabías que tu edad es impar?")
    }
    console.log("No puede pasar al bar.")
    } else if (edad < 21 && edad >= 18){
        if(edad %2!==0){
            console.log("¿Sabías que tu edad es impar?")
        }
    console.log("Puede pasar al bar, pero no puede tomar alcohol.")
    } else if(edad > 21){
        if(edad %2!==0){
            console.log("¿Sabías que tu edad es impar?")
        }
    console.log("Puede pasar al bar y tomar alcohol. Felicitaciones por alcanzar la mayoría de edad")
    }else {
    console.log("Número inválido")
    }
