import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  min-height: 55px;
  background-color: ${({ theme }) => theme.colors.basic.lightColor};
  box-shadow: 0 0.01px 10px ${({ theme }) => theme.colors.shadow.basicShadow};
`;

export default HeaderStyled;
