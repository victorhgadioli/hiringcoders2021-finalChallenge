import styled from 'styled-components'

export const TrustedsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 6rem;
`

export const Title = styled.h2`
  font-family: "Open Sans Condensed",sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #040404;
  margin-top: 0;
  margin-bottom: 2.5rem;

  span {
    color: #fcc200;
    font-weight: 700;
  }
`

export const Trusteds = styled.div`
  width: calc(100% - 100px);
  @media(min-width: 1300px) and (max-width: 1599px) { width: calc(100% - 400px) }
  @media(min-width: 1600px) { width: calc(100% - 600px) }
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: 1fr 1fr;
  gap: 1rem 2rem;

  div {
    text-align: center;

    img {
      text-align: center;
      filter: saturate(0);
      opacity: 0.8;
      transition: all 0.6s;
      max-width: 130px;

      :hover {
        filter: saturate(1);
        transform: scale(0.9, 0.9);
      }
    }
  }

  @media(min-width: 700px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(5, 1fr);
  }
`

