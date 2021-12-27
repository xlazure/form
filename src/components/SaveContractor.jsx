import { useState } from "react";
import { Form, Input } from "./form.style";
import Pesel from "./pesel";

export default function SaveContractor() {
  const [type, setType] = useState(true);

  return (
    <>
      <h2>Nowy kontrahent</h2>
      <Form
        action="Contractor/Save"
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input type="text" placeholder="imie" />
        <Input type="text" placeholder="nazwisko" />
        <div>
          <label>
            <Input
              type="radio"
              name="typ"
              id=""
              defaultChecked
              onChange={() => setType(!type)}
            />
            Osoba
          </label>
          <label>
            <Input
              type="radio"
              name="typ"
              id=""
              onChange={() => setType(!type)}
            />
            Firma
          </label>
        </div>

        <div>
          {type ? (
            <Pesel />
          ) : (
            <Input type="text" name="" id="" placeholder="NIP" />
          )}
        </div>

        <Input type="file" accept="image/jpg, image/jpeg" />

        <Input type="submit" value="Send" />
      </Form>
    </>
  );
}
