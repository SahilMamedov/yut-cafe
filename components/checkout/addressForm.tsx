import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";

import { RefObject } from "react";
import { StyledErrorMessage } from "./styled";
import { initialValueProps } from "./types";

const schema = Yup.object().shape({
  fullName: Yup.string().required("нельзя оставлять пустым").min(3),
  address: Yup.string().required("нельзя оставлять пустым").min(5),
  mobile: Yup.number().required("нельзя оставлять пустым"),
});

interface Props {
  formikRef: RefObject<FormikProps<initialValueProps>>;
}
export const AddressForm: React.FC<Props> = ({ formikRef }) => {
  const IntialValue: initialValueProps = {
    fullName: "",
    address: "",
    appartmentOrOffice: "",
    porch: "",
    floor: "",
    intercom: "",
    mobile: "+7",
    comment: "",
  };

  return (
    <Formik
      initialValues={IntialValue}
      onSubmit={(value) => {}}
      innerRef={formikRef}
      validationSchema={schema}
      isInitialValid={false}
    >
      {({ errors, handleChange, values }) => (
        <Form>
          <Typography variant="h6" gutterBottom>
            Адрес доставки
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                value={values.fullName}
                onChange={handleChange}
                id="fullName"
                name="fullName"
                label="Имя Фамилия"
                fullWidth
                variant="standard"
              />
              {errors.fullName && (
                <StyledErrorMessage>{errors.fullName}</StyledErrorMessage>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                value={values.mobile}
                onChange={handleChange}
                id="mobile"
                name="mobile"
                label="Телефон"
                fullWidth
                variant="standard"
              />
              {errors.mobile && (
                <StyledErrorMessage>{errors.mobile}</StyledErrorMessage>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                value={values.address}
                onChange={handleChange}
                id="address"
                name="address"
                label="Адрес"
                fullWidth
                variant="standard"
              />
              {errors.address && (
                <StyledErrorMessage>{errors.address}</StyledErrorMessage>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleChange}
                value={values.appartmentOrOffice}
                id="appartmentOrOffice"
                name="appartmentOrOffice"
                label="Кв/офис"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleChange}
                value={values.porch}
                required
                id="porch"
                name="porch"
                label="Подъезд"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleChange}
                value={values.floor}
                required
                id="floor"
                name="floor"
                label="Этаж"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleChange}
                value={values.intercom}
                required
                id="intercom"
                name="intercom"
                label="Домофон"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                id="comment"
                value={values.comment}
                name="comment"
                label="Комментарии"
                fullWidth
                variant="standard"
              />
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
