import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  font: inherit;
  cursor: pointer;
  color: inherit;
  background-color: ${props => {
    switch (props.selected) {
      case true:
        return '#1976d2';
      default:
        return '#e2e5e8';
    }
  }};

  color: ${props => {
    switch (props.selected) {
      case true:
        return '#fff';
      default:
        return 'inherit';
    }
  }};

  &:hover {
    background-color: #1976d2;
    color: #fff;
  }

  &:active {
    background-color: #1565c0;
    color: #fff;
  }
`;
