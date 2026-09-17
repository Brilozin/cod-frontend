import './App.css'
import logo from './assets/react.svg'

function App() {

  return (
  <div className="cont-app">
    <header>
      <img src={logo} alt="Logo Java" className="logo" />
      <h1>TRABALHANDO COM REACT</h1>

      <h6 id='Subtitulo'>Um guia simples para começar</h6>
    </header>
    <br />
    <h2>ONDE POSSO TRABALHAR COMO DEV</h2>
    <ul>
        <li><strong>Empresas e Software Houses:</strong> Consultorias e fábricas de software que desenvolvem aplicações sob demanda para terceiros.</li>
        <br />
        <li><strong>Startups de Tecnologia:</strong> Ambientes dinâmicos que valorizam a agilidade do perfil técnico para construir MVPs (produtos mínimos viáveis) e novas funcionalidades.</li>
        <br />
        <li><strong>Departamentos de Ti e Inovação:</strong>Grandes empresas de setores tradicionais (bancos, varejo, saúde, indústria) que gerenciam equipes internacionais para cuidar de seus portais e sistemas.</li>
        <br />
        <li><strong>Setor Público:</strong> Instituições governamentais que desenvolvem e mantêm sistemas informatizados para atender às necessidades da população.</li>
        <br />
      </ul>

      <h2>TRAMPO COM TECNOLOGIA SEM PROGRAMAÇÃO</h2>
      <ul>
        <li>Product Management & Negócios</li>
        <br />
        <li>Design de Experiência do Usuário (UX)</li>
        <br />
        <li>Gestão de Projetos e Agilidade</li>
        <br />
        <li>Dados e Inteligencia de Negócios</li>
        <br />
        <li>Vendas Técnicas e Sucesso do Cliente</li>
        <br />
      </ul>  

      <h2>SER FAZER OUTRA FACULDADE</h2>
      <ul>
        <li><strong>Direito:</strong> Resumos doutrinários, peças jurídicas e simulados</li>
        <br />
        <li><strong>Saúde:</strong> Explicação de anatomia/fisiologia, artigos e casos clínicos.</li>
        <br />
        <li><strong>Negócios:</strong> Planos de negócios, análise SWOT e cálculos econômicos.</li>
        <br />
        <li><strong>Humanas:</strong> Resenhas, comparação de autores e normas ABNT.</li>
        <br />
        <li><strong>Engenharias:</strong>Passo a passo de cálculo, física e relatórios.</li>
      </ul>
   </div>
   )
}

export default App