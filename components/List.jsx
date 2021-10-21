import { ListItem } from "./Item";
import { useContext } from "react";
import { store } from "../lib/store";

export default function List({ items, final }) {
  const { state, dispatch } = useContext(store);

  return (
    <div className="list flex custom-scroll">
      {items.map((item) => {
        return (
          <ListItem
            selected={state.selected.includes(item.id)}
            item={item}
            key={item.id}
            final={final}
          />
        );
      })}
    </div>
  );
}
