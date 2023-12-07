import styled from "styled-components";

const PageStyled = styled.main`
  margin: 12px 12px;
  .main-heading {
    margin: 12px;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.basic.darkColor};
  }
`;
export default PageStyled;
