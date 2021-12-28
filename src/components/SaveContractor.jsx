import { useState } from "react";
import { ErrorContext } from "../context/errorContext";
import { Button, Error, Form, Input, Row } from "./form.style";
import ImageForm from "./imageForm";
import Nip from "./nip";
import Pesel from "./pesel";

export default function SaveContractor() {
  const [type, setType] = useState(true);
  const [error, setError] = useState([]);
  const [hideErr, setHideErr] = useState(true);

  function validForm(err) {
    if (err.res) {
      alert("Sukces");
    } else {
      setHideErr(false);
      setTimeout(() => {
        setHideErr(true);
      }, 3500);
    }
  }

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      <Row>
        <h2>Nowy kontrahent</h2>
      </Row>
      {hideErr ? null : (
        <Error>
          <h2>{error.msg}</h2>
        </Error>
      )}
      <Form
        action="Contractor/Save"
        method="POST"
        onSubmit={(e) => {
          validForm(error);

          e.preventDefault();
        }}
      >
        <Row>
          <Input type="text" placeholder="Imie" name="firstname" required />
          <Input type="text" placeholder="nazwisko" name="surname" required />
        </Row>
        <Row>
          <label>
            <Input
              type="radio"
              name="typ"
              defaultChecked
              onChange={() => setType(!type)}
            />
            Osoba
          </label>
          <label>
            <Input type="radio" name="typ" onChange={() => setType(!type)} />
            Firma
          </label>
        </Row>

        <Row>{type ? <Pesel /> : <Nip />}</Row>

        <Row>
          <ImageForm />
        </Row>

        <Row>
          <Button disabled={!hideErr}>Wyślij</Button>
        </Row>
      </Form>
    </ErrorContext.Provider>
  );
}
