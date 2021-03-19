import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const HiddenSelect = styled.select`
  appearance: none;
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const SelectFacade = styled.div`
  padding: 16px 24px;
  padding-right: 52px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};

  ${HiddenSelect}:focus + & {
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${HiddenSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  height: var(--icon-height);
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <HiddenSelect value={value} onChange={onChange}>
        {children}
      </HiddenSelect>
      <SelectFacade>
        {displayedValue}
        <IconWrapper style={{ "--icon-height": 24 + "px" }}>
          <Icon id={"chevron-down"} size={24} />
        </IconWrapper>
      </SelectFacade>
    </Wrapper>
  );
};

export default Select;
