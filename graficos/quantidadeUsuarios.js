import { getCSS } from "./common.js";


async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantiDadeUsuarios = Object.values(dados)
  
  }
  


  const data = [
    {
      x: nomeDasRedes,
      y: quantiDadeUsuarios,
      type: 'bar',
      marker: {
        color: getCSS('--primary-color')
      }
    }
  ]
  
  

  const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container').appendChild(grafico)
Plotly.newPlot(grafico, data, layout)

const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color')
}


quantidadeUsuarios()
