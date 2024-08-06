const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual foi o impacto imediato da bomba atômica no mundo?",
        alternativas: [
            {
                texto: "Desencadeou o fim da Segunda Guerra Mundial de forma abrupta.",
                afirmacao: "A bomba atômica acelerou o fim da Segunda Guerra Mundial, marcando uma virada na história global."
            },
            {
                texto: "Provocou uma corrida armamentista entre as potências mundiais.",
                afirmacao: "A criação da bomba atômica desencadeou uma corrida armamentista entre as nações, aumentando as tensões globais."
            }
        ]
    },
    {
        enunciado: "Como a existência da bomba atômica influenciou as relações internacionais durante a Guerra Fria?",
        alternativas: [
            {
                texto: "Intensificou a competição entre os Estados Unidos e a União Soviética.",
                afirmacao: "A ameaça da bomba atômica intensificou a Guerra Fria, moldando estratégias políticas e militares das superpotências."
            },
            {
                texto: "Promoveu a cooperação internacional para o controle de armas nucleares.",
                afirmacao: "A existência da bomba atômica motivou esforços internacionais para o controle e redução de armas nucleares."
            }
        ]
    },
    {
        enunciado: "Como a proliferação das armas nucleares impactou a segurança global?",
        alternativas: [
            {
                texto: "Aumentou as preocupações com a segurança e a estabilidade mundial.",
                afirmacao: "A proliferação de armas nucleares aumentou as preocupações com a segurança global, levando a esforços para evitar a sua disseminação."
            },
            {
                texto: "Contribuiu para a manutenção da paz e da estabilidade entre as nações.",
                afirmacao: "Alguns argumentam que a posse de armas nucleares por diversas nações ajudou a manter a estabilidade global, através da dissuasão."
            }
        ]
    },
    {
        enunciado: "Como a bomba atômica influenciou o desenvolvimento de tecnologias e políticas de energia nuclear?",
        alternativas: [
            {
                texto: "Impulsionou o desenvolvimento de programas nucleares para fins energéticos e militares.",
                afirmacao: "A bomba atômica impulsionou o desenvolvimento de tecnologias nucleares tanto para a geração de energia quanto para fins militares."
            },
            {
                texto: "Reduziu o investimento em energia nuclear devido aos riscos associados.",
                afirmacao: "A ameaça representada pela bomba atômica levou a um debate sobre os riscos associados à energia nuclear, influenciando políticas globais."
            }
        ]
    },
    {
        enunciado: "Qual é a perspectiva atual sobre o uso de armas nucleares no cenário internacional?",
        alternativas: [
            {
                texto: "Existe uma pressão crescente para o desarmamento nuclear global.",
                afirmacao: "Atualmente, há uma pressão internacional crescente para o desarmamento nuclear global, devido aos riscos de proliferação e catastróficos."
            },
            {
                texto: "Permanece um elemento essencial na estratégia de defesa de muitas nações.",
                afirmacao: "Algumas nações continuam a ver as armas nucleares como um elemento crucial de sua estratégia de defesa, apesar das críticas globais."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Impacto da bomba atômica no mundo atual:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
