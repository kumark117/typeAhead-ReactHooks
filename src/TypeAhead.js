import { useEffect, useState } from "react";

const TypeAhead = () => {
  //let txtInput = "name5";

  const [myData, setMyData] = useState([{ name: "name500" }]);
  const [input, setInput] = useState(""); // '' is the initial state value

  let bInit = true;

  useEffect(() => {
    if (bInit) {
      bInit = false;
      const dataUrl =
        "https://61330e48ab7b1e001799b624.mockapi.io/api/search/users";
      fetch(dataUrl)
        .then((res) => {
          console.log("fetch step1");
          return res.json();
        })
        .then((data) => {
          setMyData(data);
          console.log("fetch ret myData", myData);
        });
    }
    if (myData != []) {
      console.log("KK2: data", JSON.stringify(myData));
    }
  }, [myData]);

  return (
    <div>
      <input
        value={input}
        onInput={(e) => setInput(e.target.value)}
        width="30"
      />
      <br />
      {myData
        .filter((item) => {
          return item.name.includes(input);
        })
        .map((item) => {
          return <div>{item.name}</div>;
        })}
    </div>
  );

  //return <p>{myData[0].name}</p>;
};

export default TypeAhead;
