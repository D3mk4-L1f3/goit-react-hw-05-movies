import styled from 'styled-components'

export const CastList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  & li {
    max-width: 400px;
    background-color: #f9f9f9;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
  & p {
    font-size: 24px;
    text-align: center;
    word-wrap: break-word;
  }
`;