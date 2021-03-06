import React from "react";
import styled from "styled-components";
import { colors, margins } from "../../theme/theme";

const StyledButton = styled.button`
  width: 100%;
  height: 2rem;
  background: ${colors.darkBlue};
  color: ${colors.bg};
  margin-bottom: ${margins.sm};
`;

const SubmitButton: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <StyledButton type="submit">{children}</StyledButton>;

export default SubmitButton;
