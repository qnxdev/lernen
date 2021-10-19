import { useRouter } from "next/dist/client/router";
import { useContext } from "react";
import { store } from "../lib/store";
import Button from "./Button";
import Tick from "./Tick";

export const ListItem = ({ selected, item }) => {
  const { state, dispatch } = useContext(store);
  const router = useRouter();

  const removeItem = () => {
    let list = state.selected;
    list.splice(list.indexOf(item.id), 1);
    dispatch({
      type: "selected",
      payload: list,
    });
  };

  const addItem = () => {
    if (
      item.id.includes("b") ||
      (state.selected[0] && state.selected[0].includes("b"))
    ) {
      dispatch({ type: "selected", payload: [item.id] });
      if (item.id.includes("b")) {
        router.push("/signup", "", { scroll: true });
      }
    } else {
      dispatch({ type: "selected", payload: [...state.selected, item.id] });
    }
  };

  return (
    <div
      key={item.id}
      style={{ backgroundImage: `linear-gradient(${item.bg})` }}
      className="item flex col justify-end"
      title="Select"
      onClick={() => (!selected ? addItem() : removeItem())}
    >
      <div className="tick flex justify-end">
        <Tick on={selected} />
      </div>
      <h1>{item.title}</h1>
      <Button>{selected ? "Remove" : "Select"}</Button>
    </div>
  );
};
