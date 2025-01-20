import styled from 'styled-components'

export const CustomButtonContainer = styled.button`
  width: 150px;
  align-self: flex-end;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.Adminis};
  padding: 14px 22px;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  font-family: system-ui;
  border: 2px solid ${({ theme }) => theme.Adminis};
  transition: 100ms ease;
  box-shadow: 5px 5px 0 0 ${({ theme }) => theme.Adminis};

  &:hover {
    box-shadow: 2px 2px 0 0 ${({ theme }) => theme.Adminis};
  }
  &:active {
    transition: 50ms ease;
    box-shadow: 0 0 0 0 ${({ theme }) => theme.Adminis};
    background-color: ${({ theme }) => theme.Adminis};
    color: ${({ theme }) => theme.secondary};
  }

  &:focus-visible {
    outline: 0;
  }

  &:focus-visible::after {
    position: absolute;
    left: 50%;
    top: calc(100% + 12px);
    transform: translateX(-50%);
    content: '\21E7';
    animation: float 0.5s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translateX(-50%) translatey(0px);
    }
    50% {
      transform: translateX(-50%) translatey(-6px);
    }
    100% {
      transform: translateX(-50%) translatey(0px);
    }
  }
`
