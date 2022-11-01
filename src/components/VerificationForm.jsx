import React from "react";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

import {
  Box,
  InputAdornment,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";

const VerificationForm = () => {
  const VerificationSchema = Yup.object().shape({
    code: Yup.string()
      .required("Code is required"),
  });

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: VerificationSchema,
    onSubmit: () => {
      console.log("submitting...");
      setTimeout(() => {
        console.log("submited!!");
      }, 2000);
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit} style={{ padding: "0 48px" }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <TextField
              fullWidth
              autoComplete="username"
              label="Code"
              {...getFieldProps("code")}
              error={Boolean(touched.code && errors.code)}
              helperText={touched.code && errors.code}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon icon="clarity:ant-design:number-outlined" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <LoadingButton
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              sx={{ mt: 10, width: "150px" }}
            >
              {isSubmitting ? "loading..." : "Verify"}
            </LoadingButton>
          </Box>
        </Box>
      </Form>
    </FormikProvider>
  );
};

export default VerificationForm;
