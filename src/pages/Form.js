import React from "react";
import { Typography, IconButton } from "@mui/material";
import FormForm from "../components/FormForm";
import { Icon } from "@iconify/react";

const Form = () => {
  return (
    <div className="container">
      <div className="content content-center">
        <div className="form-heading">
          <IconButton color="secondary">
            <Icon icon="eva:arrow-ios-back-fill" />
          </IconButton>

          <Typography variant="h3">
            Form
          </Typography>
        </div>

        <FormForm />
      </div>
    </div>
  );
};

export default Form;
