import { Filter } from './styles'
import { BsFilterLeft } from 'react-icons/bs'

type BotaoFiltrarProps = {
  toggleBarraLateral: () => void
}

const BotaoFiltrar: React.FC<BotaoFiltrarProps> = ({ toggleBarraLateral }) => {
  return (
    <Filter onClick={toggleBarraLateral}>
      <BsFilterLeft />
    </Filter>
  )
}

export default BotaoFiltrar
