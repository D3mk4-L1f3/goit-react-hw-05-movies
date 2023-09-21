import styled from 'styled-components';

export const MovieDetailsSection = styled.section`
  padding: 10px 50px;
`;

export const ButtonBack = styled.button`
  margin-bottom: 20px;
  width: 150px;
  appearance: none;
  border: none;
  font-size: 20px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  cursor: pointer;
`;

export const MovieDetailsStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

p{
  font-size: 24px;
}

h3{
  font-size: 30px;
}

i{
  font-size: 24px;
}

`;

export const MoviePoster = styled.img`
  width: 300px;
  border-radius: 16px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const TitleName = styled.h2`
  font-size: 38px;
`;

export const Message = styled.p`
  font-size: 24px;
  padding: 10px 50px;
`;