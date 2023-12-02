import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  type: "button" | "submit";
  actionOnClick?: () => void;
  className?: string;
  text: string;
}

const Button = ({
  text,
  type,
  className,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      type={type}
      onClick={actionOnClick}
      className={className}
      children={text}
    />
  );
};

export default Button;
