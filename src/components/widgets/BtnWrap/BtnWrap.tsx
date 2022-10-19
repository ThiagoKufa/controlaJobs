
interface IBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  children: React.ReactNode;
}

export const BtnWrap = ({ onClick, children, ...rest }: IBtnProps) => {
  return (
    <button onClick={onClick} className="hover:text-cyan-400" {...rest}>
      {children}
    </button>
  );
};