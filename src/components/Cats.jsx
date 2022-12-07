import { useEffect, useState } from "react";
import cn from "classnames";

import "./Cats.scss";

const url = process.env.REACT_APP_CAT_API;

const Cats = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch(url).then((res) =>
      res
        .json()
        .then((data) => {
          setCats(data);
        })
        .catch((err) => {
          console.log(err);
        })
    );
  }, []);

  return (
    <div className={cn("cats-container")}>
      {cats.map((cat, i) => {
        return (
          <div className={cn("cat")} key={i}>
            <img src={`https://cataas.com/cat/${cat._id}`} alt='random cat' />
          </div>
        );
      })}
    </div>
  );
};

export default Cats;
