var form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    var weight = document.getElementById('weight').value; 
    var height = document.getElementById('height').value;

    var bmi = (weight / (height * height)).toFixed(2);

    var value = document.getElementById('value'); 
    let description = '';

    if (!isNaN(bmi)) {
        const value = document.getElementById('value');
        let description = '';

        value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5){
        description = 'Você está magro demais.';
    } 

    else if (bmi >= 18.5 && bmi <= 25) {
        description = "Você está no peso ideal.";
        value.classList.remove('attention');
        value.classList.add('normal');
    }

    else if (bmi > 25 && bmi <= 30) {
        description = "Você está com sebrepeso.";
    }

    else if (bmi > 30 && bmi <= 35) {
        description = "Você está com obesidade moderada(Grau de obesidade I).";
    }

    else if (bmi > 35 && bmi <= 40) {
        description = "Você está com obesidade severa(Grau de obesidade II).";
    }

    else {
        description = "Você está com obesidade morbida(Grau de obesidade III)";
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
    }
});

form.addEventListener('keypress', function(event) {
    if (event.key === 'press') {
        document.getElementById('#calculate').click();
    }
});