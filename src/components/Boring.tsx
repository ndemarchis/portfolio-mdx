import { useEffect, useState } from "react";
import useInterval from "../utils/useInterval";

const Boring = () => {
  const [mouseOnBoring, setMouseOnBoring] = useState(false);

  return (
    <div
      style={{
        fontVariationSettings: '"MONO" 1',
      }}
    >
      <p
        className={`absolute text-purple hover:mt-12 transition-all duration-500 ${
          mouseOnBoring ? "translate-y-6" : ""
        }`}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span
          className={`transition-all pointer-events-none`}
          style={{
            fontVariationSettings: `"MONO" 1, "wght" 900, "CRSV" 0, "slnt" ${
              mouseOnBoring ? "-15" : "0"
            }`,
          }}
        >
          so fucking
        </span>{" "}
      </p>
      <p className="absolute">
        websites can be{" "}
        <span
          onMouseEnter={() => setMouseOnBoring(true)}
          onMouseLeave={() => setMouseOnBoring(false)}
        >
          ██ ███████
        </span>{" "}
        boring.
      </p>
    </div>
  );
};

export default Boring;
