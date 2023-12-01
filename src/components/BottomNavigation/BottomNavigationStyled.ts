import styled from "styled-components";

const BottomNavigationStyled = styled.ul`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-top: 12px;
  padding-bottom: 22px;
  display: flex;
  justify-content: space-around;
  min-height: 75px;
  background-color: ${({ theme }) => theme.colors.basic.lightColor};
  box-shadow: 0 0.01px 6px ${({ theme }) => theme.colors.shadow.basicShadow};

  .navigation {
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }

    &__text {
      color: ${({ theme }) => theme.colors.neutral.darkColor};
      font-size: 1rem;
      font-weight: 400;
    }

    &__text-active {
      color: ${({ theme }) => theme.colors.basic.darkColor};
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;

export default BottomNavigationStyled;
