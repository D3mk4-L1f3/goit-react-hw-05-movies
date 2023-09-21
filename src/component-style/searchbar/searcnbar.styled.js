import styled from 'styled-components';

export const SearchHead = styled.header`
  display: flex;
  justify-content: center;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  max-width: 600px;
  border-radius: 10px;
  overflow: hidden;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 25px;
  border: none;
  outline: none;
  padding: 10px 20px;
  background-color: rgb(0, 0, 0, 0.1);
  
  &::placeholder {
    text-align: center;
    color: green
  }
`;