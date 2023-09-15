import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
  width: 244px;

  @media (max-width: 768px) {
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
    transition: all 2s ease-in-out;

    &.visivel {
      display: block;
      width: 150px;
    }
  }
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
