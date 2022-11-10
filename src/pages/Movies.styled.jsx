import styled from 'styled-components';
/*
 * Стили компонента SearchForm
 */
export const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 8px 0;
  width: 100%;
  max-width: 600px;
  margin: 0 0 10px 10px;
  border-radius: 3px;
  overflow: hidden;
`;
export const FormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-color: inherit;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
    &:hover {
  opacity: 1;
`;

export const FormButtonLabel = styled.span`
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const FormInput = styled.input`
  display: inline-block;
  padding: 10px;
  border: black 1px solid;
  border-radius: 5px;
  background-color: inherit;
  color: white;
  font: inherit;
  font-size: 20px;
  outline: none;
  -webkit-box-shadow: inset 0 0 0 50px slategrey;
  -webkit-text-fill-color: inherit;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
