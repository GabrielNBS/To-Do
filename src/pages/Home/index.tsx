import { useState } from 'react'
import BotaoAdicionar from '../../Components/BotaoAdicionar'
import BotaoFiltrar from '../../Components/BotaoFiltrar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => {
  const [BarraLateralVisivel, setBarraLateralVisivel] = useState(false)

  const toggleBarraLateral = () => {
    setBarraLateralVisivel(!BarraLateralVisivel)
  }

  return (
    <>
      <BarraLateral mostrarFiltros BarraLateralVisivel={BarraLateralVisivel} />
      <ListaDeTarefas />
      <BotaoAdicionar />
      <BotaoFiltrar toggleBarraLateral={toggleBarraLateral} />
    </>
  )
}

export default Home
