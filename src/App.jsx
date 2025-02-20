import { useState } from 'react'
import './App.css'

function App() {
  const [imagens,setImagens] = useState([<img className='img'src='dice1.svg'/>,<img className='img'src='dice2.svg'/>,
    <img className='img'src='dice3.svg'/>,<img className='img'src='dice4.svg'/>,<img className='img'src='dice5.svg'/>,<img className='img'src='dice6.svg'/>
  ]);
  const [imagen,setImagen] = useState([<img className = 'dado' src="/dade.svg" />])
  
function trocarfoto(){
  let i = Math.floor(Math.random() * imagens.length)
  setImagen(imagens[i])
  setImagens([...imagens.filter((e) => e != imagen[i])])
  console.log(imagens.length);
}

    return (
      <div className='container-app'>
          <p className='imagen' onClick={trocarfoto}>{imagen}</p>

      </div>
    )
  }

export default App
