import styled from "styled-components";
import PageStyled from "../../styles/PageStyled";

const NotFoundPageStyled = styled(PageStyled)`
  margin: 18px;
  padding: 20px;
  position: fixed;
  height: 70%;
  top: 10%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border: 4px solid ${({ theme }) => theme.colors.primary.primaryColor};
  border-radius: 50px;
  box-shadow: 0 0.01px 6px ${({ theme }) => theme.colors.shadow.basicShadow};

  .not-found {
    &__text {
      color: ${({ theme }) => theme.colors.basic.darkColor};
      font-size: 1.4rem;
      font-weight: 500;
      text-align: center;
    }

    &__404 {
      color: ${({ theme }) => theme.colors.primary.accentColor};
      text-shadow: 0 0.01px 6px
        ${({ theme }) => theme.colors.shadow.basicShadow};
      font-size: 2rem;
      font-weight: 900;
    }
  }
`;

export default NotFoundPageStyled;
