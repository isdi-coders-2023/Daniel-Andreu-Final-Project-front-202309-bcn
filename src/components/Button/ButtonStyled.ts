import styled from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.basic.lightColor};

  &.button {
    &__primary-circular {
      width: 120px;
      height: 50px;
      padding: 5px;
      border-radius: 100px;
      background: linear-gradient(
        265deg,
        ${({ theme }) => theme.colors.primary.secondaryColor} 0%,
        ${({ theme }) => theme.colors.primary.primaryColor} 100%
      );
    }

    &__secondary-circular {
      width: 120px;
      height: 50px;
      padding: 5px;
      border-radius: 100px;
      background-color: ${({ theme }) => theme.colors.basic.darkColor};
    }

    &__primary-big {
      width: 100%;
      padding: 1rem 1.2rem;
      border-radius: 5px;
      font-size: 1rem;
      outline-color: transparent;
      background: linear-gradient(
        265deg,
        ${({ theme }) => theme.colors.primary.secondaryColor} 0%,
        ${({ theme }) => theme.colors.primary.primaryColor} 100%
      );
    }
  }
`;

export default ButtonStyled;
