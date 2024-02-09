// src/components/text/Text.tsx
import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.span<{ disabled?: boolean }>`
  color: ${(props) => (props.disabled ? '#888' : '#000')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'auto')};
`;

const Text: React.FC<TextProps> = ({ content, backgroundColor,disabled = false }) => {
  const style = backgroundColor ? { backgroundColor } : {};
  return <StyledText disabled={disabled} style={style}>{content}</StyledText>;
};

export default Text;
