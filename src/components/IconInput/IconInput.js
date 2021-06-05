import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    borderWidth: 1,
    fontSize: `${14 / 16}rem`,
    height: `${24 / 16}rem`,
    iconStrokeWidth: 1,
    iconSize: 16,
    inputPaddingLeft: 24,
  },
  large: {
    borderWidth: 2,
    fontSize: `${18 / 16}rem`,
    height: `${36 / 16}rem`,
    iconStrokeWidth: 2,
    iconSize: 24,
    inputPaddingLeft: 36,
  }
};

const Wrapper = styled.label`
  --text-color: ${COLORS.gray700};
  display: block;
  position: relative;
  width: var(--width);
  color: var(--text-color);

  &:hover {
    --text-color: ${COLORS.black};
  }
`;

const IconLabel = styled(Icon)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  color: var(--text-color);
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: var(--height);
  padding-left: var(--input-padding-left);
  outline-offset: 3px;
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  font-weight: 700;
  font-size: var(--font-size);
  color: inherit;
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = (() => {
    if (!['small', 'large'].includes(size)) {
      throw new Error('Invalid size: ' + size);
    }
    return SIZES[size];
  })();

  return (
    <Wrapper style={{
      '--width': width + 'px',
      '--height': styles.height,
      '--border-width': styles.borderWidth + 'px',
      '--font-size': styles.fontSize,
      '--input-padding-left': styles.inputPaddingLeft + 'px',
    }}>
      <IconLabel
        id={icon}
        strokeWidth={styles.iconStrokeWidth}
        size={styles.iconSize}
        aria-hidden="true"
      />
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input
        type="text"
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default IconInput;
