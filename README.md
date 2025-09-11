# 🔢 Jogo do Número Secreto  

Bem-vindo ao **Jogo do Número Secreto**! 🎉  
Este é um joguinho simples em **JavaScript**, onde o objetivo é adivinhar qual número o computador sorteou.  

---

## 🚀 Como funciona
1. O sistema sorteia um número **entre 1 e 500** (pode alterar esse limite no código).  
2. O jogador deve chutar números até acertar.  
3. A cada tentativa, o jogo dá uma dica:  
   - ⬆️ Se o número secreto for **maior** que o chute.  
   - ⬇️ Se o número secreto for **menor** que o chute.  
4. O jogo termina quando o jogador descobre o número secreto, exibindo o total de tentativas.  

---

## 📝 Regras principais
- O número secreto é gerado com:
  ```js
  let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);


  🎮 Exemplo de execução
  
  👉 Escolha um número entre 1 e 500: 250
⬆️ O número secreto é maior que 250  

👉 Escolha um número entre 1 e 500: 400
⬇️ O número secreto é menor que 400  

👉 Escolha um número entre 1 e 500: 327
🎉 Isso aí! Você descobriu o número secreto 327 com 3 tentativas.