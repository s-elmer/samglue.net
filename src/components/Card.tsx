import "../styles/card.css";

interface CardProps {
  children?: React.ReactNode;
  width?: number;
  height?: number;
  title?: string;
}

export const Card = ({ children, width, height, title }: CardProps) => {
  return (
    <div
      className="card"
      style={{ width: width ?? 500 + 10, height: height ?? 500 + 10 }}
    >
      {title}
      <div className="card-content" style={{ width: width, height: height }}>
        {children}
      </div>
    </div>
  );
};
