import { ButtonStyled } from './Button.styled';

export default function Button({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) {
  return (
    <ButtonStyled type={type} selected={selected} {...otherProps}>
      {children}
    </ButtonStyled>
  );
}
