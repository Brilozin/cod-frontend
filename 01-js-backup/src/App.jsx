import './App.css'


  function calcularChance() {
    let n = Number( prompt("Digite quantas vezes usou o celular: "))
    let chance = (0.1 / (1 + 500 * n)) * 100

    alert("A chance do candidato é " + chance + "%")

}
  function calcularCarga() { 
  let pesoBruto = Number( prompt("Qual o peso bruto do caminhão?") ) 
  let tara = Number( prompt("Qual a tara do caminhão?") ) 
  let carga = pesoBruto - tara 

  alert("O peso da carga é: " + carga + " kg") }

function calcularIgreja() { 
  let custos = Number( prompt("Qual o custo mensal da igreja?") ) 
  let recebido = Number( prompt("Quanto foi recebido de doações e dízimos?") )
  let falta = custos - recebido 
   
  alert("Falta pagar: R$ " + falta) }

function calcularSalario() {
  let salarioMensal = Number(prompt("Digite o salário mensal:"))
  let diasTrabalhados = Number(prompt("Digite a quantidade de dias trabalhados:"))

  let salarioDiario = salarioMensal / 30
  let salarioFinal = salarioDiario * diasTrabalhados

  alert("O salário final é de R$ " + salarioFinal)
}

function calcularVendas() {
  let qtnInicio = Number(prompt("Quantidade inicial de laranjas"))
  let qtnFinal = Number(prompt("Quantidade final de laranjas"))
  let qtnVendida = qtnInicio - qtnFinal

  alert("A quantidade de laranjas vendidas foi: " + qtnVendida)
}

function calcularFrete() {

  let frete, peso, distancia, volume

  peso = Number(prompt("Digite o peso:"))
  distancia = Number(prompt("Digite a distância:"))
  volume = Number(prompt("Digite o volume:"))

  frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume)

  alert("O valor do frete é de R$ " + frete)

  
}

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

      <button onClick={calcularFrete}>
        Frete
      </button>

      <button onClick={calcularVendas}>
        Vendas
      </button>

      <button onClick={calcularIgreja}>
        Igreja
      </button>

      <button onClick={calcularSalario}>
        Salário
      </button>

      <button onClick={calcularCarga}>
        Carga
      </button>

      <button onClick={calcularChance}>
        chance
      </button>
        

    </div>
  )
}

export default App
