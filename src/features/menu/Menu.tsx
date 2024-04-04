import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../../service/apiRestaurant";
import MenuItem from "./MenuItem";

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default function Menu(): React.JSX.Element {
  const menu: any = useLoaderData();
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza: any) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
