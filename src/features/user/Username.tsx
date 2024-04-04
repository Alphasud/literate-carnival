import { useSelector } from "react-redux";

export default function Username(): React.JSX.Element | null {
  const username = useSelector((state: any) => state.user.username);
  if (!username) return null;
  return <div className="hidden text-sm font-semibold italic md:block">{username}</div>;
}
