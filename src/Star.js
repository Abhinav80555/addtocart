import { useState } from "react";

export function Star() {
  const [press, setPress] = useState(0);

  return (
    <div className="d-flex justify-content-center small text-warning mb-2">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= press ? "on" : "off"}
            onClick={() => setPress(index)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}
