import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "../icecream/icecreamSlice";

const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIcecream = useSelector((state) => state.icecream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number Of IceCreams - {numOfIcecream}</h2>
      <button onClick={() => dispatch(ordered())}>Order IceCream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock IceCream
      </button>
    </div>
  );
};

export default IceCreamView;
