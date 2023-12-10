import styled from "styled-components";

export const ShoeFormStyled = styled.form`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 120px;

  .image {
    border-radius: 15px;
    width: 100%;
    height: auto;
    border: 1px solid ${({ theme }) => theme.colors.neutral.mediumColor};
  }

  .select {
    margin: 3px;

    padding: 1rem 1.2rem;
    min-width: 130px;
    max-width: 170px;
    width: fit-content;
    border: 1px solid ${({ theme }) => theme.colors.neutral.mediumColor};
    border-radius: 100px;
    font-size: 1rem;
    outline-color: transparent;
    color: ${({ theme }) => theme.colors.basic.darkColor};
  }

  .select:focus {
    border: 3px solid ${({ theme }) => theme.colors.basic.darkColor};
  }

  .size-brand-container {
    display: flex;
    gap: 15px;
  }

  .form-text {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.neutral.darkColor};
  }

  .status-container {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .toogled {
    padding: 1rem 1.2rem;
    border-radius: 100px;
    border: 1px solid ${({ theme }) => theme.colors.basic.darkColor};
    color: ${({ theme }) => theme.colors.basic.lightColor};
    background-color: ${({ theme }) => theme.colors.basic.darkColor};
  }

  .not-toggled {
    padding: 1rem 1.2rem;
    border-radius: 100px;
    border: 1px solid ${({ theme }) => theme.colors.neutral.mediumColor};
    color: ${({ theme }) => theme.colors.basic.darkColor};
  }
`;

export const SmallInputContainerStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SmallInputLabelStyled = styled.label`
  position: absolute;
  left: 0;
  padding-left: 1.2rem;
  font-size: 1rem;
  pointer-events: none;
  transition: 0.2s;
  color: ${({ theme }) => theme.colors.neutral.darkColor};
  padding-top: 4px;
`;

export const SmallInputInputStyled = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.neutral.mediumColor};
  border-radius: 5px;
  font-size: 1rem;
  outline-color: transparent;

  &:focus {
    border: 3px solid ${({ theme }) => theme.colors.basic.darkColor};
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    color: ${({ theme }) => theme.colors.basic.darkColor};
    transform: translateY(-17px);
    font-size: 0.75rem;
  }

  &:not(:focus) + label {
    color: ${({ theme }) => theme.colors.neutral.darkColor};
  }
`;

export const BigInputContainerStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

export const BigInputLabelStyled = styled.label`
  position: absolute;
  left: 0;
  padding-left: 1.2rem;
  font-size: 1rem;
  pointer-events: none;
  transition: 0.2s;
  color: ${({ theme }) => theme.colors.neutral.darkColor};
  padding-top: 22px;
`;

export const BigInputInputStyled = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 1rem 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.neutral.mediumColor};
  border-radius: 5px;
  font-size: 1rem;
  outline-color: transparent;
  resize: none;

  &:focus {
    border: 3px solid ${({ theme }) => theme.colors.basic.darkColor};
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    color: ${({ theme }) => theme.colors.basic.darkColor};
    transform: translateY(-18px);
    font-size: 0.75rem;
  }

  &:not(:focus) + label {
    color: ${({ theme }) => theme.colors.neutral.darkColor};
  }
`;

export const SwitchLabelStyled = styled.label`
  display: flex;
  align-items: center;
  gap: 16px;
  width: fit-content;
  max-width: fit-content;
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.neutral.darkColor};
`;

export const SwitchStyled = styled.div`
  position: relative;
  width: 50px;
  height: 35px;
  min-width: 50px;
  background: ${({ theme }) => theme.colors.neutral.mediumColor};
  border-radius: 32px;
  padding: 4px;
  transition: 200ms all;

  &:before {
    transition: 200ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

export const SwitchInputStyled = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${SwitchStyled} {
    background: ${({ theme }) => theme.colors.basic.darkColor};

    &:before {
      transform: translate(14px, -50%);
    }
  }
`;
