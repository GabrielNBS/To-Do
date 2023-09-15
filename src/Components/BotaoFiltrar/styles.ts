import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Filter = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  font-size: 40px;
  bottom: 115px;
  right: 40px;
  height: 64px;
  width: 64px;
  background-color: ${variaveis.amarelo2};
  color: #fff;
  border-radius: 50%;
  text-decoration: none;
  border: none;

  @media (max-width: 768px) {
    display: flex;
  }
`
