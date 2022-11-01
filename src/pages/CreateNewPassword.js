import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import CreateNewPasswordForm from "../components/CreateNewPasswordForm";
import { Icon } from "@iconify/react";

const CreateNewPassword = () => {
  return (
    <div className="login-forms-container container">
      <div className="content">
        <div className="heading-container">
          <IconButton color="secondary" size="large">
            <Icon icon="eva:arrow-ios-back-fill" />
          </IconButton>

          <div className="heading-rounded">
            <Typography variant="h3" sx={{ mb: 3 }}>
              'Hippo-Campus'
            </Typography>

            <Typography variant="body1">
              MSEUF's first beta web based and mobile application clinic management system
            </Typography>
          </div>
        </div>

        <div className="content-item">
          <div className="heading">
            <Typography variant="h3">
              Create New Password
            </Typography>
          </div>

          <Box className="page-image" component="img" src="/static/create-removebg.svg" style={{ maxWidth: "100%", maxHeight: "100%" }} alt="logo" />

          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Your New Password Must be Different from Previously used Password
          </Typography>

          <CreateNewPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
