export const validarDuvida = (name: string, lastName: string, email: string, number: string, message: string) => {
    if (name.length > 2) {
        if (lastName.length > 2) {
            if (email.length > 10) {
                if (number.length > 10) {
                    if (message.length > 24) {
                        return true;
                    }
                    else {
                        alert("Digite pelo menos 24 caracteres na sua mensagem.");
                        return false;
                    }
                }
                else {
                    alert("Digite um número válido.");
                    return false;
                }
            }
            else {
                alert("Digite um email válido.");
                return false;
            }
        }
        else {
            alert("Seu último nome deve ter no mínimo 3 caracteres.");
            return false;
        }
    }
    else {
        alert("Seu primeiro nome deve ter no mínimo 3 caracteres.");
        return false;
    }
}
