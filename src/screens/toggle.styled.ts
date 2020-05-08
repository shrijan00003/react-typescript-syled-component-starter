import styled from "styled-components";
interface Props {
  lightTheme: boolean;
}
export const ToggleContainer = styled.button`
  && {
    background: ${({ theme }) => theme.GRADIENT};
    border: 2px solid ${({ theme }) => theme.PRIMARY};
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    font-size: 0.5rem;
    justify-content: space-between;
    margin: 0 auto;
    overflow: hidden;
    padding: 0.5rem;
    position: relative;
    width: 8rem;
    height: 4rem;

    svg {
      height: auto;
      width: 2.5rem;
      transition: all 0.3s linear;

      &:first-child {
        transform: ${({ lightTheme }: Props) =>
          lightTheme ? "translateY(0)" : "translateY(100px)"};
      }

      &:nth-child(2) {
        transform: ${({ lightTheme }: Props) =>
          lightTheme ? "translateY(-100px)" : "translateY(0)"};
      }
    }
  }
`;
