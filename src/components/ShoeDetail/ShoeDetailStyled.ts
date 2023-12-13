import styled from "styled-components";

const ShoeDetailStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-width: 420px;
  margin-bottom: 110px;
  .detail {
    &__image {
      border-radius: 15px;
      width: 100%;
      height: auto;
    }

    &__section {
      padding-top: 16px;
      padding-bottom: 20px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      border-bottom: 1px solid
        ${({ theme }) => theme.colors.neutral.mediumLightColor};
    }

    &__title {
      text-align: start;
      font-size: 1.5rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.basic.darkColor};
      padding-bottom: 6px;
    }

    &__size-and-price-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__size {
      font-size: 1.1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.neutral.darkColor};
    }

    &__price {
      font-size: 1.55rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.basic.darkColor};
    }

    &__status {
      font-size: 1.1rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.neutral.darkColor};
    }

    &__description {
      padding-top: 12px;
      padding-bottom: 20px;
      line-height: 150%;
      font-size: 1rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.basic.darkColor};
    }

    &__bolean {
      display: flex;
      gap: 12px;
      align-items: center;
      font-size: 1rem;
      font-style: italic;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.neutral.darkColor};
    }

    &__name {
      font-size: 1.1rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.basic.darkColor};
    }

    &__location {
      padding-top: 4px;
      font-size: 1rem;
      font-style: italic;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.neutral.darkColor};
    }

    &__phone {
      padding-top: 4px;
      font-size: 1rem;
      font-style: italic;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.neutral.darkColor};
    }

    &__butons-container {
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }
`;
export default ShoeDetailStyled;
