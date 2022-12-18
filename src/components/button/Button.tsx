interface BaseProps {
  children: React.ReactNode;
}

interface AsButtonProps extends BaseProps {
  as: "button" | "submit";
  className: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface AsLinkProps extends BaseProps {
  as: "a";
  className: string;
  handleClick?: never;
}

type ButtonProps = AsButtonProps | AsLinkProps;

const Button = ({ children, as, handleClick, className = "" }: ButtonProps) => {
  return (
    <>
      {as === "a" && <a className={className}>{children}</a>}

      {as === "button" && (
        <button className={className} onClick={handleClick}>
          {children}
        </button>
      )}
      {as === "submit" && (
        <button className={className} onClick={handleClick}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
