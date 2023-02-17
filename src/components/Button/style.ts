import styled, { css } from "styled-components";
import { colors } from "../../styles/Global/colors";
import { typography } from "../../styles/Global/typography";

interface ITypographyProps {
  btnStyle?: any;
}

export const ButtonStyled = styled.button<ITypographyProps>`
  padding: 9px 60px;
  border-radius: 8px;
  max-width: 400px;
  background-color: ${colors.colorBackground};
  font-size: ${typography.title1.size};
  color: #fff;
  &:disabled {
    filter: opacity(0.7);
  }

`;