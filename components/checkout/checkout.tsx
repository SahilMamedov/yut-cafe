import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AddressForm } from "./addressForm";
import { Review } from "./review";
import { FormikProps } from "formik";
import { RefObject } from "react";
import { useAppSelector } from "@/store/hooks";
import { useBasket } from "@/hooks/useBasket";
import {
  initialValueProps,
  CehckPropsType,
  ProductProps,
  ReturnPropsType,
} from "./types";
import { fetchCheckOrder, fetchCreateOrder } from "@/services/order";
import { LoadingBox } from "./styled";
import BeatLoader from "react-spinners/BeatLoader";
const steps = ["Адрес доставки", "Просмотрите заказ"];

function getStepContent(
  step: number,
  formikRef: RefObject<FormikProps<initialValueProps>>,
  props: ReturnPropsType
) {
  switch (step) {
    case 0:
      return <AddressForm formikRef={formikRef} />;
    case 1:
      return <Review props={props} />;

    default:
      throw new Error("Unknown step");
  }
}

const defaultTheme = createTheme();

export const CheckoutComponent = () => {
  const { items } = useAppSelector((state) => state.basket);
  const { handleRemove } = useBasket();

  const [props, setProps] = React.useState<ReturnPropsType>({
    totalCost: 0,
    products: [],
    fullName: "",
    phoneNumber: "",
    address: "",
    appartmentOrOffice: "",
    comment: "",
    floor: "",
    intercom: "",
    porch: "",
  });
  const formikRef = React.useRef<FormikProps<initialValueProps>>(null);

  const [activeStep, setActiveStep] = React.useState(0);
  const [success, setSuccess] = React.useState(false);
  const handleNext = async () => {
    if (formikRef.current && formikRef.current?.isValid) {
      formikRef.current.handleSubmit();
      setActiveStep(activeStep + 1);

      const itemList: ProductProps[] = items.map((item) => ({
        id: item.id,
        count: item.count,
      }));

      const updateObject: CehckPropsType = {
        ...formikRef.current.values,
        itemList: itemList,
      };
      const { data } = await fetchCheckOrder(updateObject);

      setProps(data);
    }
  };
  const handlePlaceOrder = async () => {
    setSuccess(true);
    setActiveStep(activeStep + 1);
    fetchCreateOrder(props).then(() => {
      setSuccess(false);
      items.map((item) => {
        handleRemove(item);
      });
    });
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Проверить
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              {success ? (
                <LoadingBox>
                  <BeatLoader color="#36d7b7" />
                </LoadingBox>
              ) : (
                <>
                  <Typography variant="h5" gutterBottom>
                    Спасибо за ваш заказ.
                  </Typography>
                  <Typography variant="subtitle1">
                    Ваш заказ зарегистрирован и c вами свяжутся в ближайшее
                    время
                  </Typography>
                </>
              )}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, formikRef, props)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Назад
                  </Button>
                )}
                <>
                  {activeStep === steps.length - 1 ? (
                    <Button
                      variant="contained"
                      onClick={handlePlaceOrder}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Подтвердить заказ
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Далее
                    </Button>
                  )}
                </>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
};
