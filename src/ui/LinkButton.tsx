import { Link, useNavigate } from "react-router-dom";

export default function LinkButton({
  to,
  children,
}: {
  to: string;
  children: string;
}): JSX.Element {
  const navigate = useNavigate();
  const className = "text-blue-500 hover:text-blue-600 hover:underline";
  if (to === "-1") {
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}
