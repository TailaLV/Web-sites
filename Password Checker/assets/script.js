const passwordInput = document.querySelector("#passwordInput");

passwordInput.addEventListener("input", function () {
  const password = this.value;

  const strengthIndicator = document.querySelector("#password-strength-indicator");

const strengthText = document.querySelector("#password-strength-text");
 
  const strengths = {
    0: "Senha muito curta",
    1: "Sequência de caracteres repetidos",
    2: "Palavras usadas com frequência",
    3: "Moderada",
    4: "Forte",
    5: "Sua senha é resistente",
 };

 let score = 0;

 // Requisitos

 if (password.length >= 8) score++;
 if (password.match(/[a-z]/)) score++;
 if (password.match(/[A-Z]/)) score++;
 if (password.match(/[0-9]/)) score++;
 if (password.match(/[^a-zA-Z0-9]/)) score++;

 //  Calculo da %
 const width = (score / 4) * 100;

 strengthIndicator.style.width = `${width}%`;

switch(score) {
    case 1:
        strengthIndicator.style.backgroundColor = "#ff717e";
        break;
        case 2:
        strengthIndicator.style.backgroundColor = "#fec250";
        break;
        case 3:
        strengthIndicator.style.backgroundColor = "#fed751";
        break;
        case 4:
        strengthIndicator.style.backgroundColor = "#06b27a";
        break;
        default:
        strengthIndicator.style.backgroundColor = "transparent";
        break;
}

if (password.length > 0) {
    strengthText.innerHTML = `${strengths[score]}`;
  } else {
    strengthText.innerHTML = "";
  }
});
