import styled from 'styled-components';

export const ReviewList = styled.ul`
  display: flex;
  gap: 20px;
  font-size: 26px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style-type: none;

  & li {
    
    overflow-x: hidden;
  }
`;

export const ReviewBC = styled.div`
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  padding: 10px;

  &::before {
    font-size: 24px;
    content: '"';
    color: rgba(0, 0, 0, 0.3);
  }
  
  & p {
    min-width: 200px;
    font-size: 24px;
    font-style: italic;
  }
`;