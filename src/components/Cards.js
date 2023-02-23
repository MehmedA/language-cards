import { useState } from "react";

const Cards = (data) => {
  const [toggle, setToggle] = useState(true);

  const { name, img, options } = data;

  return (
    <div onClick={() => setToggle(!toggle)} xs={12} className="cards rounded-4">
      {toggle ? (
        <div className="front-card d-flex flex-column align-items-center gap-3">
          <img src={img} alt="" />
          <p>{name}</p>
        </div>
      ) : (
        <div className="back-card">
          <ul>
            <li>
              {options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cards;