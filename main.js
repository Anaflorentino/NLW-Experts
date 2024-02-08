// Estrutura de dados da aplicação
const perguntas = [
    {
        pergunta: "Qual instrumento é considerado um dos mais antigos do mundo, com evidências de uso na pré-história?",
        respostas: [
            "Flauta",
            "Tambor",
            "Lira"
        ],
        correta: 0
    },
    {
        pergunta: "O que caracteriza principalmente a música da Idade Média?",
        respostas: [
            "Uso de polifonia",
            "Presença de harmonia complexa",
            "Canto gregoriano"
        ],
        correta: 2
    },
    {
        pergunta: "Qual era a principal função da música na Grécia Antiga?",
        respostas: [
            "Entretenimento",
            "Educação e ritual",
            "Acompanhamento para dança"
        ],
        correta: 1
    },
    {
        pergunta: "Quem é considerado um dos mais importantes compositores do período renascentista?",
        respostas: [
            "Wolfgang Amadeus Mozart",
            "Josquin des Prez",
            "Johann Sebastian Bach"
        ],
        correta: 1
    },
    {
        pergunta: "Qual destas é uma característica da música renascentista?",
        respostas: [
            "Textura principalmente monofônica",
            "Melodias simples e repetitivas",
            "Uso de textura imitativa e contraponto"
        ],
        correta: 2
    },
    {
        pergunta: "Como era a notação musical na Idade Média?",
        respostas: [
            "Sistema de notação moderno com pentagramas",
            "Neumas em pergaminhos",
            "Uso exclusivo de tablaturas"
        ],
        correta: 1
    },
    {
        pergunta: "Qual destas afirmações sobre a música grega antiga é verdadeira?",
        respostas: [
            "Era baseada principalmente em instrumentos de percussão",
            "Era transmitida e preservada principalmente através da escrita",
            "Estava intimamente ligada à poesia e a dança"
        ],
        correta: 2
    },
    {
        pergunta: "Quem foi Hildegard von Bingen?",
        respostas: [
            "Uma famosa dançarina da Renascença",
            "Uma das primeiras compositoras conhecidas",
            "Uma patrona das artes na Idade Média"
        ],
        correta: 1
    },
    {
        pergunta: "O que foi o Ars Nova?",
        respostas: [
            "Um instrumento musical do período medieval",
            "Um movimento literário do Renascimento",
            "Um estilo musical que surgiu na Idade Média"
        ],
        correta: 2
    },
    {
        pergunta: "Qual destes compositores é conhecido por suas contribuições para a música do Renascimento inglês?",
        respostas: [
            "Thomas Tallis",
            "Ludwig van Beethoven",
            "Frédéric Chopin"
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set() //Nunca posso repetir o que tem nele, guarda apenas uma informação
const totalDePerguntas = perguntas.length // responde o total de ítens a partir do 1
const mostrarTotal = document.querySelector('#acertos span') // Quero só as corretas para substituit
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas //vai mostrar só as corretas

//loop, laço de repetição
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta // insere a pergunta 


for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item)) //Agora posso selecionar uma resposta para cada pergunta! 
  dt.querySelector('input').value = item.respostas.indexOf(resposta) // o valor selecionado vai ficar guardado e o código vai verificar se está correto
  
  //arrow function: sempre que eu clicar, vai executar esse evento dentro do escopo
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta //compara se o item clicado é igual a resposta correta e retorna true ou false
    
    corretas.delete(item) // começa deletando o ítem
    if(estaCorreta) {
        corretas.add(item) //adiciona item, caso correta
    }
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas //vai mostrar só as corretas
} 
  
  quizItem.querySelector('dl').appendChild(dt)
}

//Deleta o que já foi clonado "Resposta A"
quizItem.querySelector('dl dt').remove()


//coloca o filho no quiz e mostra a pergunta na tela
quiz.appendChild(quizItem) 
}