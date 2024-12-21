import "./button.css";

type Props = {
  children: React.ReactNode;
  color?: "default" | "primary" | "danger";
  size?: "base" | "sm" | "lg";
  handleClick?: () => void;
};

function Button({
  children,
  color = "default",
  size = "base",
  handleClick = () => console.log("click"),
}: Props) {
  return (
    <button className={`${color} ${size}`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
