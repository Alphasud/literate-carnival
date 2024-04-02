import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"

export default function Header(): JSX.Element {
  return (
    <header>
      <Link to="/">Fast react Pizza</Link>
      <SearchOrder />
    </header>
  )
}
