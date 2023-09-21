import styled from 'styled-components';

export const ReviewList = styled.ul`
  display: flex;
  gap: 20px;
  font-size: 26px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style-type: none;
`;

export const ReviewBC = styled.div`
  max-width: 100%;
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  padding: 0.5em 10px;

  &::before {
    font-size: 24px;
    content: '"';
    color: rgba(0, 0, 0, 0.3);
  }
  
  & p {
    font-size: 24px;
    font-style: italic;
  }
`;