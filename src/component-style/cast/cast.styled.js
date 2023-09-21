import styled from 'styled-components'

export const CastList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;

  & li {
    max-width: 300px;
    background-color: #f9f9f9;
    border-radius: 16px;
    overflow: hidden;
  }

  & p {
    font-size: 24px;
    text-align: center;
    word-wrap: break-word;
  }
`;