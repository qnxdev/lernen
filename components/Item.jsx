import { useRouter } from "next/dist/client/router";
import { useContext } from "react";
import { store } from "../lib/store";
import Button from "./Button";
import Tick from "./Tick";

export const ListItem = ({ selected, item, final }) => {
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

  const styles = {
    item: `
    max-width: 100%;
    min-height: 70px;
    padding-bottom: 10px;
    margin: 5px;
    border-radius: 20px;
    flex-direction: row-reverse !important;
    `,
    h1: `
    font-weight: 400;
    font-size: 1.5rem;
    white-space: nowrap;
    margin: 0px;
    text-align: center;
    `,
  };

  return (
    <div
      key={item.id}
      style={{ backgroundImage: `linear-gradient(${item.bg})` }}
      className={`item flex col justify-end ${final ? "final" : ""}`}
      title="Select"
      onClick={() => (!selected ? addItem() : removeItem())}
    >
      <div className="tick flex justify-end">
        <Tick on={selected} />
      </div>
      <h1>{item.title}</h1>
      <Button>{selected ? "Remove" : "Select"}</Button>

      <style jsx>{`
        .final.item {
          ${styles.item}
        }
        .final.item h1 {
          ${styles.h1}
        }
        @media (max-width: 500px) {
          .item {
            ${styles.item}
          }
          .item h1 {
            ${styles.h1}
          }
        }
        @media (max-width: 500px) {
          .item {
            ${styles.item}
          }
          .item h1 {
            ${styles.h1}
          }
        }
      `}</style>
    </div>
  );
};
