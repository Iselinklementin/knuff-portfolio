import React from "react";

export default function List(props) {
  return (
    <ul>
      {props.listItems.map(item => (
        <li key={item.id}>
          <i className="far fa-circle"></i> {item.title}
        </li>
      ))}
    </ul>
  );
}
