import { useState } from "react";
import Button from "./Button";
import List from "./List";

export default function ListSection({ className, items, title, text }) {
  const [show, setShow] = useState(false);

  return (
    <div className={className}>
      <div className="head flex">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className="content flex">
        <List items={show ? items : items.slice(0, 3)} />
      </div>
      <div className="expand flex">
        <Button handleClick={() => setShow(!show)}>
          View {show ? "less" : "more"}
        </Button>
      </div>
    </div>
  );
}
