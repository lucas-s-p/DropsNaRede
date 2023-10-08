export const onClickSend = (nome: string, email: string, telefone: string, escola: string, cidade: string, mensagem: string) => {
    if (nome.length >= 5) {
        if (email.length > 10) {
            if (telefone.length > 10) {
                if (escola.length > 4) {
                    if (cidade.length > 2) {
                        if (mensagem.length > 40) {
                            return true;
                        }
                        else {
                            alert("Digite pelo menos 40 caracteres na sua mensagem.");
                            return false;
                        }
                    }
                    else {
                        alert("Digite uma cidade válida");
                        return false;
                    }
                }
                else {
                    alert("Digite uma escola válida");
                    return false;
                }
            }
            else {
                alert("Digite um telelefone válido.");
                return false;
            }
        }
        else {
            alert("Digite um email válido.");
            return false;
        }
    }
    else {
        alert("Seu nome deve ter no mínimo 5 caracteres.");
        return false;
    }
}