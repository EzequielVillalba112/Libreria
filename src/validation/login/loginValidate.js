/**
 * Validates a login by checking if the email and password are valid.
 *
 * @param {string} email - The email address to validate.
 * @param {string} password - The password to validate.
 * @returns {boolean|string} - Returns true if the email and password are valid. Otherwise, returns an error message.
 */
export const validateLogin = (email, password) => {
    if (email !== "" && password !== "") {
        let emailExpReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailExpReg.test(email)) {
            return true;
        } else {
            const message = "Correo inválido.";
            return message;
        }
    } else {
        const message = "Campos vacíos.";
        return message;
    }
}
