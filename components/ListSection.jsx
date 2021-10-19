import { useContext, useState } from "react";
import { store } from "../lib/store";
import Button from "./Button";
import { ListItem } from "./Item";

export default function ListSection({ className, items, title, text }) {
  const [show, setShow] = useState(false);
  const { state, dispatch } = useContext(store);
  
  return (
    <div className={className}>
      <div className="head flex">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className="content flex">
        {items.map(function (item, index) {
          if (
            (!show && (index == 0 || index == 1 || index == 2)) ||
            show
          ) {
            return (
              <ListItem selected={state.selected.includes(item.id)} item={item} key={item.id}/>
            );
          }
        })}
      </div>
      <div className="expand flex">
        <Button handleClick={() => setShow(!show)}>
          View {show ? "less" : "more"}
        </Button>
      </div>
    </div>
  );
}
