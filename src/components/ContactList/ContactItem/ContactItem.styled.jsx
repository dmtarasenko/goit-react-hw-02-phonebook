import styled from 'styled-components';

export const Item = styled.li`
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  margin: 0 auto 15px auto;
`;

export const DeleteButton = styled.button`
  padding: 5px;
  background-color: #0f0f0f;
  color: #fff;
  border-radius: 10px;
  &:hover {
    background-color: #564e4e;
  }
`;
