import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header(): React.JSX.Element {
  return (
    <header className="flex items-center justify-between space-y-1 border-b border-stone-500 bg-yellow-500 px-4 py-3 uppercase">
      <Link className="tracking-[5px]" to="/">
        Fast react Pizza co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
