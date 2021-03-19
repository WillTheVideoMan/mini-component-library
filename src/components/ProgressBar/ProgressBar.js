import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--progress-height": "8px",
    "--progress-border-radius": "4px",
    "--progress-padding": "0px",
  },
  medium: {
    "--progress-height": "12px",
    "--progress-border-radius": "4px",
    "--progress-padding": "0px",
  },
  large: {
    "--progress-height": "24px",
    "--progress-border-radius": "8px",
    "--progress-padding": "4px",
  },
};

const Wrapper = styled.div`
  width: 100%;
  height: var(--progress-height);
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--progress-border-radius);
  padding: var(--progress-padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const InnerBar = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.primary};
  border-radius: 4px;
  clip-path: polygon(
    0% 0%,
    var(--progress-value) 0%,
    var(--progress-value) 100%,
    0% 100%
  );
`;

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Wrapper
      role={"progressbar"}
      aria-valuemin={"0"}
      aria-valuemax={"100"}
      aria-valuenow={value}
      style={styles}
    >
      <InnerBar style={{ "--progress-value": value + "%" }} />
      <VisuallyHidden>Progress: {value}%</VisuallyHidden>
    </Wrapper>
  );
};

export default ProgressBar;
