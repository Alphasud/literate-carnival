import { useLoaderData } from "react-router-dom"
import { getMenu } from "../../../service/apiRestaurant"
import MenuItem from "./MenuItem"

export async function loader() {
  const menu = await getMenu()
  return menu
}

export default function Menu(): JSX.Element {
  const menu: any = useLoaderData()
  return (
    <ul>
      {menu.map((pizza: any) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  )
}
