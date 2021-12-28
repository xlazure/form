import { useEffect, useState, useContext } from "react";
import { ErrorContext } from "../context/errorContext";

import { Input } from "./form.style";

export default function Nip(props) {
  const { setError } = useContext(ErrorContext);
  const [nip, setNip] = useState("");

  function isValidNip(nip) {
    const weight = [6, 5, 7, 2, 3, 4, 5, 6, 7];
    const reg = new RegExp("^[0-9]+$");
    const nipTest = [];
    let sum = 0;
    let controlNumber = parseInt(nip.substring(9, 10));

    if (reg.test(nip)) {
      for (let num of nip) {
        nipTest.push(parseInt(num));
      }

      nipTest.pop();

      nipTest.map((num, i) => (sum += num * weight[i]));

      let valid = sum % 11 === controlNumber;
      return {
        res: valid,
        msg: valid ? "Skuces" : "Zły nip",
      };
    } else {
      return {
        res: sum % 11 === controlNumber,
        msg: "Nip zawiera litery!",
      };
    }
  }

  useEffect(() => {
    if (nip.length !== 10) {
      setError({ res: false, msg: "Nip jest za krótki!" });
    } else {
      setError(isValidNip(nip));
    }
  }, [nip]);

  return (
    <Input
      type="text"
      placeholder="NIP"
      value={nip}
      required
      onChange={(e) => {
        if (e.target.value.length !== 11) {
          setNip(e.target.value);
        }
      }}
    />
  );
}
