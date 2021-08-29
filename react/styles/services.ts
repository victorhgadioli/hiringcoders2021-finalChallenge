import styled from 'styled-components'

export const ServicesContainer = styled.section`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 1fr;
  column-gap: 1px;

  @media(min-width: 700px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
`