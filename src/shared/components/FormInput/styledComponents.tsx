import styled from 'styled-components'

export const CustomFormInputSpace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding: 15px 0 0;
  width: 75%;
`

export const CustomFormInputLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: ${({ theme }) => theme.Adminis};
`

export const CustomFormInput = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.Adminis};
  outline: 0;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.Adminis};
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: ${({ theme }) => theme.secondary};
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(
      to right,
      ${({ theme }) => theme.secondary},
      ${({ theme }) => theme.Adminis}
    );
    border-image-slice: 1;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
`
