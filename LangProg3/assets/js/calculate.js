// Seleção de elementos do DOM dentro de um objeto
const elements = {
    tableChoice: document.querySelector('#tableChoice'),
    choiceTableYes: document.querySelector('#choiceTableYes'),
    choiceTableNot: document.querySelector('#choiceTableNot'),
    buttonConfirm: document.querySelector('#buttonConfirm'),
    tableNumbers: document.querySelector('#tableNumbers'),
    inputNumbers: document.querySelector('#inputNumbers'),
    buttonCalculate: document.querySelector('#buttonCalculate'),
    tables: document.querySelector('#tables'),
    tableForm: document.querySelector('#tableForm'),
}

function choiceTable() {
    try {
        //Se os botões "sim" ou "não" NÃO estiverem selecionados
        if (!elements.choiceTableYes.checked && !elements.choiceTableNot.checked) {
            //Mensagem de erro
            throw new Error('Escolha uma opção por favor - SIM ou NÃO');
        }
            //Se o botão "sim" ESTIVER selecionados
            if(elements.choiceTableYes.checked) {
                // Oculta a tabela "tableChoice" opções
                elements.tableChoice.style.display = 'none'; 
                // Oculta o botão tabela "buttonConfirm"
                elements.buttonConfirm.style.display = 'none'; 
    
                // Exibe a tabela "tableNumbers" input
                elements.tableNumbers.style.display = 'block'; 
                // Exibe o botão "buttonCalculate")
                elements.buttonCalculate.style.display = 'block'; 
            }else{
                
                // Oculta a tabela "tableChoice" opções
                elements.tableChoice.style.display = 'none'; 
                // Oculta o botão tabela "buttonConfirm"
                elements.buttonConfirm.style.display = 'none'; 
    
            }
    } catch (error) {
        window.alert(error.message);
    }
}

function calculate(event) {
    try {
        console.log("Calculating...");
        // Verifica se foi escolhido algum número específico para a tabuada
        if (elements.inputNumbers.value !== '') {
            console.log("Numbers chosen:", elements.inputNumbers.value);
            // Se sim, exibe a seção de resultados e oculta a seção de escolha
            
            elements.tables.style.display = 'block';
            elements.tableChoice.style.display = 'none';

            // Previne o comportamento padrão de submissão do formulário (recarregamento da página)
            event.preventDefault();

            console.log("Form submitted");
            
        } else {
            console.log("No numbers chosen");
            // Se nenhum número específico foi escolhido, exibe todas as tabuadas de 2 a 10
            elements.tables.style.display = 'block';
            elements.tableChoice.style.display = 'none';
        }
    } catch (error) {
        console.error("Error:", error.message);
        window.alert(error.message);
    }
}
