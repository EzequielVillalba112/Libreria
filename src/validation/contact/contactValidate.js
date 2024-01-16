export const contactValidate = (nameUser, email, dialog) => {
  if (nameUser != "" && email != "" && dialog != "") {
    const name = /^[a-zA-ZÀ-ÖØ-öø-ÿ'-]+$/;

    if (name.test(nameUser)) {
      const emailExpReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailExpReg.test(email)) {
        return true;
      } else {
        const message = "Correo inválido.";
        return message;
      }
    } else {
      const message = "Nombre inválido.";
      return message;
    }
  } else {
    const message = "Campos vacíos.";
    return message;
  }
};
