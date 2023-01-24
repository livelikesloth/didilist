import React from "react";

const ItemList = (props) => {

  return (
      <div className="item_list">
          < div className="items_">{props.userItem}</div>
      </div>
  );
};

export default ItemList;