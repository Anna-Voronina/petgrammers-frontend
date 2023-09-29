import styled from "styled-components";

export const RadioContainer = styled.div``;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 34px;
`;

export const StyledRadio = styled.input`
  display: none;
  &:checked + label {
    background: ${({ theme }) => theme.colors.blueGradient};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const SelectRadio = styled.label`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: normal;

  align-items: center;
  letter-spacing: 0.56px;

  color: ${({ theme }) => theme.colors.blue};
  background: ${({ theme }) => theme.colors.lightBlue};
  backdrop-filter: blur(2px);
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.radii.l};
  border-color: ${({ theme }) => theme.colors.blue};
  outline: none;
  transition: transform ${({ theme }) => theme.transitions.regular};
  cursor: pointer;

  &:focus,
  &:hover {
    background: ${({ theme }) => theme.colors.blueGradient};
    color: ${({ theme }) => theme.colors.white};
  }
  &:focus svg,
  &:hover svg {
    stroke: ${({ theme }) => theme.colors.white};
  }
`;