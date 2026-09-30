import { useState } from 'react'
import './App.css'

function App() {
  const [saida, setSaida] = useState(0)

  function calcularMedia(){
    let nota1 = Number(prompt("Nota 1:"))
    let nota2 = Number(prompt("Nota 2:"))
    let media = (nota1 + nota2) / 2
    setSaida(media)
  }

  function rolarD6(){
    let n = Math.ceil(Math.random()*6 )
    setSaida(n)
  }
  function rolarD8(){
    let n = Math.ceil(Math.random()*8 )
    setSaida(n)
  }
  function rolarD12(){
    let n = Math.ceil(Math.random()*12 )
    setSaida(n)
  }
  function rolarD20(){
    let n = Math.ceil(Math.random()*20 )
    setSaida(n)
  }
  function rolarD100(){
    let n = Math.ceil(Math.random()*100 )
    setSaida(n)
  }

  function senha(){
    let senha = Number(prompt("Senha: "))

    if (senha === 1234) {
      setSaida("Acesso permitido")
    }
    else{
      setSaida("Acesso negado")
    }
  }

  function Mn(){
    let numero1 = Number(prompt("numero 1:"))
    let numero2 = Number(prompt("numero 2:"))

    if (numero1 > numero2) {
      setSaida("O numero 1 é maior")
    }else {
      setSaida("O numero 2 é maior")
    }
  }

  function rodizio(){
    let numeroplaca = Number(prompt("Numero placa: "))
    if (numeroplaca === 0, 1) {
      setSaida("Não pode roda na segunda")
    }
    if (numeroplaca === 2, 3) {
      setSaida("Não pode roda na terça")
    }
    if (numeroplaca === 4, 5) {
      setSaida("Não pode roda na quarta")
    }
    if (numeroplaca === 6, 7) {
      setSaida("Não pode roda na quinta")
    }
    if (numeroplaca === 8, 9) {
      setSaida("Não pode roda na sexta")
    }
  }

  return (
    <div className="app">
      <h1>Estados!</h1>
      <button onClick={rodizio}>rodizio carro</button>
      <button onClick={Mn}>Maior numero</button>
      <button onClick={senha}>Senha</button>
      <button onClick={calcularMedia}>Média</button>
      <button onClick={rolarD6}>D6</button>
      <button onClick={rolarD8}>D8</button>
      <button onClick={rolarD12}>D12</button>
      <button onClick={rolarD20}>D20</button>
      <button onClick={rolarD100}>D100</button>

      <p>
        Resultado: {saida}
      </p>
    </div>
  )
}

export default App
