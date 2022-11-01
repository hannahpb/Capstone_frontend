import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";

import {
  Box,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";

const FormForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      birthDate: "",
      sex: "",
      height: "",
      weight: "",
      address: "",
      religion: "",
      civilStatus: "",
    },
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
      <Form autoComplete="off" noValidate onSubmit={handleSubmit} style={{ padding: "0 24px" }}>
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
              type="text"
              label="Full Name"
              {...getFieldProps("fullName")}
              error={Boolean(touched.fullName && errors.fullName)}
              helperText={touched.fullName && errors.fullName}
            />

            <TextField
              fullWidth
              type="text"
              label="Birth Date"
              {...getFieldProps("birthDate")}
              error={Boolean(touched.birthDate && errors.birthDate)}
              helperText={touched.birthDate && errors.birthDate}
            />

            <TextField
              fullWidth
              type="text"
              label="Sex"
              {...getFieldProps("sex")}
              error={Boolean(touched.sex && errors.sex)}
              helperText={touched.sex && errors.sex}
            />

            <TextField
              fullWidth
              type="text"
              label="Height"
              {...getFieldProps("height")}
              error={Boolean(touched.height && errors.height)}
              helperText={touched.height && errors.height}
            />

            <TextField
              fullWidth
              type="text"
              label="Weight"
              {...getFieldProps("weight")}
              error={Boolean(touched.weight && errors.weight)}
              helperText={touched.weight && errors.weight}
            />

            <TextField
              fullWidth
              type="text"
              label="Address"
              {...getFieldProps("address")}
              error={Boolean(touched.address && errors.address)}
              helperText={touched.address && errors.address}
            />

            <TextField
              fullWidth
              type="text"
              label="Religion"
              {...getFieldProps("religion")}
              error={Boolean(touched.religion && errors.religion)}
              helperText={touched.religion && errors.religion}
            />

            <FormControl fullWidth>
              <InputLabel id="civil-status-select-label">Civil Status</InputLabel>
              <Select
                labelId="civil-status-select-label"
                label="Civil Status"
                {...getFieldProps("civilStatus")}
                error={Boolean(touched.civilStatus && errors.civilStatus)}
                helperText={touched.civilStatus && errors.civilStatus}
              >
                <MenuItem value={'Single'}>Single</MenuItem>
                <MenuItem value={'Married'}>Married</MenuItem>
                <MenuItem value={'Widowed'}>Widowed</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <LoadingButton
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              sx={{ mt: 10, width: "150px" }}
            >
              {isSubmitting ? "loading..." : "Submit"}
            </LoadingButton>
          </Box>
        </Box>
      </Form>
    </FormikProvider>
  );
};

export default FormForm;
