/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const BaseProgressBar = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${COLORS.primary};
    clip-path: inset(0 calc(100% - var(--value)) 0 0);
  }
`;

const SmallProgressBar = styled(BaseProgressBar)`
  height: 8px;
  border-radius: 4px;
`;

const MediumProgressBar = styled(BaseProgressBar)`
  height: 12px;
  border-radius: 4px;
`;

const LargeProgressBar = styled(BaseProgressBar)`
  height: 24px;
  border-radius: 8px;
  padding: 4px;

  &::after {
    border-radius: 4px;
  }
`;

const ProgressBar = ({ value, size }) => {
  const Component = (() => {
    switch (size) {
      case 'small': return SmallProgressBar;
      case 'medium': return MediumProgressBar;
      case 'large': return LargeProgressBar;
      default: throw new Error(`Unsupported size value: ${size}`);
    }
  })();

  return (
    <Component
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        '--value': value + '%'
      }}
    />
  );
};

export default ProgressBar;
