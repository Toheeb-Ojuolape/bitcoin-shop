import React, { useState, useEffect } from "react";
import Input from "./Input";

function DetailsForm({ setDisabled }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  useEffect(() => {
    if (name && email && address) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, address]);

  return (
    <form className="details-form">
      <div className="form-row">
        <div className="form-colum">
          <Input
            setValue={setName}
            label={"Name"}
            placeholder={"First & last name"}
            type="text"
          />
        </div>
        <div className="form-colum">
          <Input
            setValue={setEmail}
            label={"Email"}
            placeholder={"Email address"}
            type="email"
            value={name}
          />
        </div>
      </div>

      <div className="form-row">
        <Input
          setValue={setAddress}
          width={"95%"}
          label={"Address"}
          placeholder={"Delivery Address"}
          type="text"
        />
      </div>
    </form>
  );
}

export default DetailsForm;
