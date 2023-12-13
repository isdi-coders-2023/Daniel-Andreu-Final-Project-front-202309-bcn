import styled from "styled-components";

const ShoesCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 3px;
  max-width: 420px;
  .shoe {
    &__image {
      border-radius: 15px;
      width: 100%;
      height: auto;
    }

    &__title {
      text-align: start;
      font-size: 1.4rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.basic.darkColor};
    }

    &__info {
      padding-top: 7px;
      display: flex;
      justify-content: space-between;
      gap: 4px;
      align-items: center;
    }

    &__location {
      font-size: 1rem;
      font-weight: 400;
      font-style: italic;
      color: ${({ theme }) => theme.colors.neutral.darkColor};
    }

    &__status-container {
      display: flex;
      gap: 4px;
    }

    &__status {
      font-size: 1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.basic.darkColor};
    }

    &__price-and-changes {
      display: flex;
      gap: 6px;
      align-items: center;
    }

    &__price {
      font-size: 1.2rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.basic.darkColor};
    }

    &__changes {
      font-size: 1rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.basic.darkColor};
    }

    &__size {
      font-size: 1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.neutral.darkColor};
    }

    &__buttons-container {
      display: flex;
      justify-content: space-around;
      padding-top: 10px;
    }
  }
`;
export default ShoesCardStyled;
