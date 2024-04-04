import { Link } from "react-router-dom";

export default function Button({
  children,
  disabled,
  to,
  type,
  onClick,
}: {
  children: string;
  disabled?: boolean;
  to?: string;
  type: string;
  onClick?: (e?: any) => void;
}): React.JSX.Element {
  const base: string =
    "inline-bloc text-sm rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  const style = {
    primary: `${base} px-4 py-3 sm:px-6 sm:py-4`,
    small: `${base} px-4 py-2 text-xs sm:px-5 sm:py-2.5`,
    round: `${base} px-2.5 py-1 sm:px-3.5 sm:py-2 text-sm`,
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  } as { [key: string]: string };
  if (to) {
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button className={style[type]} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <button className={style[type]} disabled={disabled}>
      {children}
    </button>
  );
}
