import './App.css'

function App() {

  function Gildao() {

    let numeroPessoas = Number(prompt("Numeoro de pessoas: "))
    let carne = numeroPessoas * 0.5
    let cerveja = numeroPessoas * 1
    let agua = numeroPessoas * 0.5
    let refri = numeroPessoas * 0.2

    alert(
      "Carne: " + carne.toFixed(2) + " Kg" +
      "\n Cerveja: " + cerveja.toFixed(2) + " l" +
      "\n Água: " + agua.toFixed(2) + " l" +
      "\n Refri: " + refri.toFixed(2) + " l"
    )


  }

  function petShop() {

    let gramas = Number(prompt("Quantidade de gramas: "))
    let kg = gramas / 1000
    let preco = kg * 10

    alert("O preço da ração é de: R$ " + preco)
  }

  function romeroBrique() {
    let valorCompra = Number(prompt("Valor pago pela obra: "))
    let valorVenda = valorCompra + (valorCompra * 2)

    alert("preço de venda sugerido: R$" + (valorVenda))
  }
  
  function manoJuca() {

    let valorSalario = Number(prompt("Digite o valor do salário: "))
    let valorAluguel = Number(prompt("Digite o valor do aluguel: "))
    let valorContaAgua = Number(prompt("Digite o valor da conta de água: "))
    let valorContaLuz = Number(prompt("Digite o valor da conta de luz: "))
    let valorinternet = Number(prompt("Digite o valor da conta de internet: "))
    let valorGasolina = Number(prompt("Digite o valor gasto com gasolina: "))
    let valorStreamings = Number(prompt("Digite o valor gasto com streamings: "))
    let valorTelefone = Number(prompt("Digite o valor gasto com telefone: "))
    let valorOutros = Number(prompt("Digite o valor gasto com outros: "))

    let totalGastos =
      valorAluguel +
      valorContaAgua +
      valorContaLuz +
      valorinternet +
      valorGasolina +
      valorStreamings +
      valorTelefone +
      valorOutros

    alert("Sobrou: R$ " + (valorSalario - totalGastos))
  }

  function samurano() {

    let qtnShow = Number(prompt("Shows marcados: "))
    let precoBomba = Number(prompt("Preço da bomba: "))
    let qtnBomba = qtnShow * 7

    alert(
      "O total de bombas necessárias é: " + qtnBomba +
      "\ne o valor total gasto é: R$ " + (qtnBomba * precoBomba)
    )
  }

  function capitaoGanso() {

    let gastoSuprimentos = Number(prompt("Digite o valor gasto com suprimentos: "))
    let faturamentoIngressos = Number(prompt("Digite o faturamento em vendas de ingressos: "))
    let faturamentoItens = Number(prompt("Digite o faturamento com itens: "))

    let faturamento = faturamentoIngressos + faturamentoItens

    let lucro = faturamento - gastoSuprimentos

    let lucroPercentual = (lucro / faturamento) * 100

    alert("O lucro obtido é de R$ " + lucro.toFixed(2))
    alert("O lucro percentual é de " + lucroPercentual.toFixed(2) + "%")
  }

  function calcularLucro() {

    let valorBruto = Number(prompt("Digite o valor bruto:"))
    let valorPremiacoes = Number(prompt("Digite o valor gasto com premiações: "))
    let valorPresentes = Number(prompt("Digite o valor gasto com presentes: "))
    let valorComicoes = Number(prompt("Digite o valor gasto com comissões: "))

    let lucro =
      valorBruto -
      valorPremiacoes -
      valorPresentes -
      valorComicoes

    alert("O lucro é de R$ " + lucro)
  }

  function calcularChance() {

    let n = Number(prompt("Digite quantas vezes usou o celular: "))
    let chance = (0.1 / (1 + 500 * n)) * 100

    alert("A chance do candidato é " + chance + "%")
  }

  function calcularCarga() {

    let pesoBruto = Number(prompt("Qual o peso bruto do caminhão?"))
    let tara = Number(prompt("Qual a tara do caminhão?"))
    let carga = pesoBruto - tara

    alert("O peso da carga é: " + carga + " kg")
  }

  function calcularIgreja() {

    let custos = Number(prompt("Qual o custo mensal da igreja?"))
    let recebido = Number(prompt("Quanto foi recebido de doações e dízimos?"))
    let falta = custos - recebido

    alert("Falta pagar: R$ " + falta)
  }

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

    let peso = Number(prompt("Digite o peso:"))
    let distancia = Number(prompt("Digite a distância:"))
    let volume = Number(prompt("Digite o volume:"))

    let frete =
      15 +
      (2 * peso) +
      (0.05 * distancia) +
      (10 * volume)

    alert("O valor do frete é de R$ " + frete)
  }

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

    let pontos = vitorias * 3 + empates

    alert("O seu time tem: " + pontos + " pontos")
  }

  function trocarCalcados() {

    let precoCalcado = Number(prompt("Qual o preço do Calçado: "))
    let quantidadePares = Number(prompt("Qual a quantidade: "))

    let valeTrocas = precoCalcado * quantidadePares

    alert("A empresa vai receber em vales trocas: " + valeTrocas + " reais")
  }

  function testar() {

    let nome = prompt("Qual o seu nome: ")

    alert(nome + ", seu nome está na boca do sapo 🐸")
  }

  function calcularMedia() {

    let nota1 = Number(prompt("Qual o valor da primeira nota:"))
    let nota2 = Number(prompt("Qual o valor da segunda nota:"))

    let media = (nota1 + nota2) / 2

    alert("Sua média final: " + media)
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
        Chance
      </button>

      <button onClick={calcularLucro}>
        Calcular Lucro
      </button>

      <button onClick={capitaoGanso}>
        Lucro mensal
      </button>

      <button onClick={samurano}>
        Bomba
      </button>

      <button onClick={manoJuca}>
        Mano Juca
      </button>

      <button onClick={romeroBrique}>
        Venda Quadro
      </button>

      <button onClick={petShop}>
        Valor ração
      </button>

      <button onClick={Gildao}>
        Calculadora churrasco
      </button>

    </div>
  )
}

export default App