import React from "react";

export default function List(props) {
  return (
    <ul>
      {props.listItems.map(item => (
        <li key={item}>
          <i className="far fa-circle"></i> {item}
        </li>
      ))}
    </ul>
  );
}
