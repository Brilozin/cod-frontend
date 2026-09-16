import './App.css'

function App() {
  function calcularPontos(){
    let vitorias = Number(prompt("Quantas vitórias teve seu time: "))
    let empates = Number(prompt("Quantos empates teve seu time: "))
    let pontos = vitorias*3 + empates*1
    alert( 'O seu time tem: ' + pontos +' pontos')


  }
  function trocraCalcados(){
    let precoCalcado = Number(prompt('Qual o preço do Calçado: '))
    let quantidadePares = Number(prompt("Qual aquantidade: "))
    let valeTrocas = precoCalcado *quantidadePares
    alert('A empresa vai recber em vales trocas: ' + valeTrocas + ' reais')
  }
 function testar (){
 let nome = prompt('Qual o seu nome: ')
 let bocaDoSapo = nome
 alert(nome + ', seu nome está na boca do sapo 🐸 ')
 }

  return (
    <div className="cont-app">
    <h1>JavaScript no React</h1>
    <h2>Exercicios Sumpipas</h2>

    <button onClick={calcularPontos}>campeonato</button>
    <button onClick={trocraCalcados}>Trocas Pé Pequeno</button>
    <hr />
    <button onClick={testar}>Testar</button>
    <button onClick={calcularMedia}>Média</button>
    
    </div>
  )
}

function calcularMedia (){
let nota1 = Number((prompt("Qual o valor da primeira nota:")))
let nota2 = Number((prompt("Qual o valor da segunda nota:")))
let media = (nota1 + nota2) /2;
alert('Sua média final: ' + media)
}

export default App
