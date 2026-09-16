import './App.css'

function App() {

  function calcularDevs() {
    let clt = Number(prompt("Quantos devs CLT?"))

    let estagiarios = Number(prompt("Quantos devs estagiários?"))

    let pj = Number(prompt("Quantos devs PJ?"))

    let total = clt + estagiarios + pj

    alert("A empresa tem " + total + " devs no total.")
  }

  function calcularPontos() {
    let vitorias = Number(prompt("Quantas vitórias teve seu time: "))

    let empates = Number(prompt("Quantos empates teve seu time: "))

    let pontos = vitorias * 3 + empates * 1

    alert('O seu time tem: ' + pontos + ' pontos')
  }

  function trocarCalcados() {
    let precoCalcado = Number(prompt('Qual o preço do Calçado: '))

    let quantidadePares = Number(prompt("Qual a quantidade: "))

    let valeTrocas = precoCalcado * quantidadePares

    alert('A empresa vai receber em vales trocas: ' + valeTrocas + ' reais')
  }

  function testar() {
    let nome = prompt('Qual o seu nome: ')

    alert(nome + ', seu nome está na boca do sapo 🐸')
  }

  function calcularMedia() {
    let nota1 = Number(prompt("Qual o valor da primeira nota:"))

    let nota2 = Number(prompt("Qual o valor da segunda nota:"))

    let media = (nota1 + nota2) / 2

    alert('Sua média final: ' + media)
  }

  return (
    <div className="cont-app">

      <h1>JavaScript no React</h1>

      <h2>Exercícios Surpresa</h2>

      <button onClick={calcularDevs}>
        Força de trabalho
      </button>

      <button onClick={calcularPontos}>
        Campeonato
      </button>

      <button onClick={trocarCalcados}>
        Trocas Pé Pequeno
      </button>

      <hr />

      <button onClick={testar}>
        Testar
      </button>

      <button onClick={calcularMedia}>
        Média
      </button>

    </div>
  )
}

export default App
