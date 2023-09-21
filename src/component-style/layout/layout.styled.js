import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5dc;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px 40px;
  
  > nav {
    display: flex;
    gap: 40px;
  }
`;

export const MenuLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 34px;
  font-weight: 700;
  
  &.active {
    color: red;
  }
`;
