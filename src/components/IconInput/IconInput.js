import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--input-padding": "4px",
    "--input-padding-left": "28px",
    "--input-padding-bottom": "3px",
    "--input-font-size": "1rem",
    "--input-border-bottom": "1px solid black",
    "--icon-wrapper-height": "16px",
  },
  large: {
    "--input-padding": "8px",
    "--input-padding-left": "32px",
    "--input-padding-bottom": "6px",
    "--input-font-size": "1.25rem",
    "--input-border-bottom": "2px solid black",
    "--icon-wrapper-height": "20px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = { ...SIZES[size], ...{ "--input-width": width + "px" } };
  return (
    <Wrapper style={styles}>
      <NativeInput type="text" label={label} placeholder={placeholder} />
      <IconWrapper>
        <Icon id={icon} size={size == "large" ? 20 : 16} />
      </IconWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const NativeInput = styled.input`
  font-size: var(--input-font-size);
  font-weight: 700;
  color: inherit;

  width: var(--input-width);

  border: none;
  border-bottom: var(--input-border-bottom);
  padding: var(--input-padding);
  padding-left: var(--input-padding-left);
  /*
    Shift input down to optically align with icon placement.
    The icon wrapper spans the full height, including a bottom border.
  */
  padding-bottom: var(--input-padding-bottom);

  &::placeholder {
    font-weight: initial;
  }

  &:focus {
    outline-offset: 4px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 4px;
  margin: auto;
  height: var(--icon-wrapper-height);

  pointer-events: none;
`;

export default IconInput;
