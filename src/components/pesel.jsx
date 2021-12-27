import { useState } from "react";
import { Input } from "./form.style";

export default function Pesel() {
  //   const reg = new RegExp("^d+$");
  const [pesel, setPesel] = useState(undefined);
  function isValidPesel(pesel) {
    const weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    const peselTest = [];
    let controlNumber = parseInt(pesel.substring(10, 11));
    let sum = 0;

    for (let num of pesel) {
      peselTest.push(parseInt(num));
    }
    peselTest.pop();

    peselTest.map((num, i) => (sum += num * weight[i]));

    sum = sum % 10;
    console.log((10 - sum) % 10 === controlNumber);
    return (10 - sum) % 10 === controlNumber;
    // pesel?.map((num) => console.log(num));
  }

  return (
    <Input
      type="text"
      placeholder="Pesel"
      value={pesel}
      onChange={(e) => {
        if (e.target.value.length !== 12) {
          setPesel(e.target.value);
        }
      }}
      onKeyDown={(e) => e.key === "Enter" && isValidPesel(pesel)}
    />
  );
}
