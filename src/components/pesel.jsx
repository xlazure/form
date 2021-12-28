import { useState, useEffect, useContext } from "react";
import { ErrorContext } from "../context/errorContext";
import { Input } from "./form.style";

export default function Pesel() {
  const { setError } = useContext(ErrorContext);
  const [pesel, setPesel] = useState("");

  function isValidPesel(pesel) {
    const weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    const reg = new RegExp("^[0-9]+$");
    const peselTest = [];
    let controlNumber = parseInt(pesel.substring(10, 11));
    let sum = 0;
    if (reg.test(pesel)) {
      for (let num of pesel) {
        peselTest.push(parseInt(num));
      }
      peselTest.pop();

      peselTest.map((num, i) => (sum += num * weight[i]));

      sum = sum % 10;
      let valid = (10 - sum) % 10 === controlNumber;
      return {
        res: valid,
        msg: valid ? "Sukces" : "Zły pesel",
      };
    } else {
      return {
        res: (10 - sum) % 10 === controlNumber,
        msg: "Pesel zawiera litery!",
      };
    }
  }
  useEffect(() => {
    if (pesel.length !== 11) {
      setError({ res: false, msg: "Pesel jest za krótki" });
    } else {
      setError(isValidPesel(pesel));
    }
  }, [pesel]);
  return (
    <Input
      type="text"
      placeholder="Pesel"
      required
      onChange={(e) => {
        if (e.target.value.length !== 12) {
          setPesel(e.target.value);
        }
      }}
      value={pesel}
    />
  );
}
