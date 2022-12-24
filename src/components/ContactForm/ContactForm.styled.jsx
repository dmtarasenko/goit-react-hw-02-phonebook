import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  min-width: 300px;
  margin-bottom: 15px;
  font-size: 18px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #0f0f0f;
  color: #fff;
  border-radius: 10px;
  &:hover {
    background-color: #564e4e;
  }
`;
