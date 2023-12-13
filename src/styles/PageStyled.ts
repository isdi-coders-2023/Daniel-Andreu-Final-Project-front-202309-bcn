import styled from "styled-components";

const PageStyled = styled.main`
  margin: 0 auto;
  padding: 12px 16px;
  max-width: 480px;

  .main-heading {
    margin: 12px;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.basic.darkColor};
  }
`;
export default PageStyled;
