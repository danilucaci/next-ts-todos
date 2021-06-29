import styled from "styled-components";

export const StyledHome = styled.main`
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.background.page};
  color: ${({ theme }) => theme.color.text.default};
`;
