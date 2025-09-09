alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao numero secre
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao numero secreto eba coco
    if (chute == numeroSecreto) {
        break;
     } else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que o ${chute}`);
        } else { 
            alert(`O número secreto é maior que o ${chute}`);
        }
        //tentativas = tentativas + 1
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! vc descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if(tentativas > 1) {
//     alert(`Isso ai! vc descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//} else {
//    alert(`Isso ai! vc descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}







