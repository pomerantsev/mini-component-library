import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const RealSelect = styled.select`
  position: absolute;
  display: block;
  left: 0;
  width: 100%;
  top: 0;
  height: 100%;
  // If opacity is 0, some screen readers may ignore the element:
  // https://stackoverflow.com/a/43206381
  opacity: 0.0001;
`;

const DisplayedSelect = styled.div`
  position: relative;
  display: inline-block;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  pointer-events: none;

  ${RealSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${RealSelect}:focus + & {
    border-radius: 3px;
    outline: 2px auto Highlight;
    outline: 2px auto -webkit-focus-ring-color;
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <RealSelect value={value} onChange={onChange}>
        {children}
      </RealSelect>
      <DisplayedSelect aria-hidden="true">
        {getDisplayedValue(value, children)}
        <StyledIcon id="chevron-down" strokeWidth={2} size={24} />
      </DisplayedSelect>
    </Wrapper>
  );
};

export default Select;
