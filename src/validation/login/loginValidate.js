export const validateLogin = (email,password) =>{
    if(email != "" && password != ""){
        let emailExpReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailExpReg.test(email)){
            return true;
        }else{
            const message = "Correo inválido.";
            return message;
        }
    }else{
        const message = "Campos vacíos.";
        return message;
    }
}