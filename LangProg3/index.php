<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Try Catch</title>
    <link rel="stylesheet" href="./assets/css/style.css">
</head>
<body>
    <h1>For Aninhado</h1> 
    <section class="container">
        <form method="post" id="tableForm" onsubmit="return calculate(event);">

            <div id="tableChoice" class="choiceElements">
                <h3>Deseja escolher a tabuada?</h3>
                <fieldset >
                    <div>
                        <label for="choiceTableYes">Sim</label>
                        <input type="radio" id="choiceTableYes" name="chooseTabuada" value="sim">
                    </div>
                    <div>
                        <label for="choiceTableNot">Não</label>
                        <input type="radio" id="choiceTableNot" name="chooseTabuada" value="nao">
                    </div>
                </fieldset>
            </div>
            <div class="tableNumbers" id="tableNumbers" style="display:none;">
                <h3>Escolha os números e separe por vírgula</h3>
                <input type="text" id="inputNumbers" name="inputNumbers">
            </div>
        </form>
        <button type="button" onclick="choiceTable()" id="buttonConfirm">Confirmar</button>
        <button type="button" onclick="calculate(event)" id="buttonCalculate" style="display:none">Calcular</button>
    </section>
    <section id="tables" class="tables" style="display: none;">
    <div id="tabelasContainer">
        <?php include_once './assets/engine/engine.php'; ?>
    </div>
    </section>

</body>
<script src="./assets/js/calculate.js" defer></script>
</html>
