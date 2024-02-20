// Seleção de elementos do DOM dentro de um objeto
const elements = {
    inputName: document.querySelector('#inputName'),
    inputPhone: document.querySelector('#inputPhone'),
}

function submit() {
    try {
            //Vefifica se o comprimento do valor inserido no campo Nome
            // é menor ou igual a 3
        if (elements.inputName.value.length <= 3) {
            throw new Error("Nome inválido. Deve ter mais de 3 letras.");
        }

        // Se chegou até aqui, o nome tem mais de 3 letras
        window.alert("Nome válido: " + inputName.value);
        
            //Vefifica se o comprimento do valor e o seu tipo inserido no campo Telefone
            // são diferentes de 9
        if (elements.inputPhone.value.length !== 9) {
            throw new Error("Telefone inválido. Deve conter 9 dígitos.");
        }

        // Se chegou até aqui, o telefone tem exatamente 9 dígitos
        window.alert("Telefone válido: " + inputPhone.value);
    } catch (error) {
        window.alert(error.message);
    }

    //Limpando os inputs
    inputPhone.value = '';
    inputName.value = '';

}

/*
// Seleção de elementos do DOM
let inputName = document.querySelector('#inputName');
let inputPhone = document.querySelector('#inputPhone');

function submit() {
    try {
            //Vefifica se o comprimento do valor inserido no campo Nome
            // é menor ou igual a 3
        if (inputName.value.length <= 3) {
            throw new Error("Nome inválido. Deve ter mais de 3 letras.");
        }

        // Se chegou até aqui, o nome tem mais de 3 letras
        window.alert("Nome válido: " + inputName.value);
        
            //Vefifica se o comprimento do valor e o seu tipo inserido no campo Telefone
            // são diferentes de 9
        if (inputPhone.value.length !== 9) {
            throw new Error("Telefone inválido. Deve conter 9 dígitos.");
        }

        // Se chegou até aqui, o telefone tem exatamente 9 dígitos
        window.alert("Telefone válido: " + inputPhone.value);
    } catch (error) {
        window.alert(error.message);
    }

    //Limpando os inputs
    inputPhone.value = '';
    inputName.value = '';
}
*/
