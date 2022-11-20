let botao = document.querySelector('#calcular');
let ul = document.querySelector('ul');

botao.onclick = function () {
    let nome = (document.querySelector('#nomeAluno').value);

    let matricula = (document.querySelector('#matricula').value);

    let nota1 = parseFloat(document.querySelector('#notaum').value);

    let nota2 = parseFloat(document.querySelector('#notadois').value);

    let nota3 = parseFloat(document.querySelector('#notatres').value);

    const resultado = document.getElementById('resultado');
    let a1 = new Aluno(nome, matricula, nota1, nota2, nota3);
    resultado.innerHTML =
        `
        <br>
        <p class="par1">Dados do último aluno inserido:</p>
        <p>${a1.exibeInfo()}</p>
        <hr> 
        `;
    let li = document.createElement('li');
    li.textContent = a1.exibeInfo();
    let botao1 = document.createElement('button');
    
    botao1.textContent = 'X';
    li.appendChild(botao1);
    ul.appendChild(li);
    
}

ul.onclick = (evento) => {
    evento.target.parentElement.remove();
}
    
class Aluno {
    nome;
    matricula;
    nota1;
    nota2;
    nota3;
    constructor(nome, matricula, n1, n2, n3) {
        this.nome = nome; 
        this.matricula = matricula; 
        this.nota1 = n1;
        this.nota2 = n2;
        this.nota3 = n3;
    }
    exibeInfo() {
        return `Aluno: ${this.nome} /// Matrícula: ${this.matricula} ///
        Notas: n1: ${this.nota1} / n2: ${this.nota2} / n3: ${this.nota3} ///
        Média: ${this.calculaMedia()}     `;
    } 
    calculaMedia() {
       return ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2);
    }
  
}


