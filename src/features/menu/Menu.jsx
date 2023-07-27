import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import Menuitem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  return (
    <ul>
      {menu.map((pizza) => (
        <Menuitem pizza={pizza} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
