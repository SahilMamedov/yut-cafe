import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ChangeEvent, FC, FormEvent } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { ErrorMessage, Flex, StyledTextFild, Wrapper } from "./styled";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { BeatLoader } from "react-spinners";
import {
  DetailCloseBtn,
  LoadingBox,
} from "@/components/menuComponents/DetailModal/styled";
import { ProductGetDto } from "@/services/product/types";
import {
  createProduct,
  getAllProductAdmin,
  updateProduct,
} from "@/services/dashboardServices/productServices";
import { notificationError, notifications } from "@/utils/notification";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CategoryGetDto } from "@/services/category/types";
import * as Yup from "yup";

import { Formik, Form } from "formik";
interface Props {
  title: string;
  buttonText: string;
  product?: ProductGetDto;
  setupdateProducts: (value: ProductGetDto[]) => void;
  openProductModal: boolean;
  createModal: boolean;
  setOpenProductModal: (value: boolean) => void;
  categories?: CategoryGetDto[];
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "14px",
};
interface InitialValueProps {
  name: string;
  description: string;
  newPrice: string;
  gramm: string;
  kkal: string;
  photo: File;
  oldPrice: string;
  categoryId: string;
}
export const UpdateCreateProductModal: FC<Props> = ({
  product,
  setupdateProducts,
  openProductModal,
  setOpenProductModal,
  createModal,
  buttonText,
  title,
  categories,
}) => {
  const schema = Yup.object().shape({
    oldPrice: Yup.string().matches(/^[0-9]+$/, "число можете вводить"),
    newPrice: Yup.string().matches(/^[0-9]+$/, "число можете вводить"),
    kkal: Yup.string().matches(/^[0-9]+$/, "число можете вводить"),
    gramm: Yup.string().matches(/^[0-9]+$/, "число можете вводить"),
  });
  const [newProduct, setNewProduct] = React.useState<ProductGetDto>();

  const IntialValue: InitialValueProps = {
    name: newProduct ? newProduct.name : "",
    description: newProduct ? newProduct.description : "",
    oldPrice: newProduct ? String(newProduct.oldPrice) : "",
    newPrice: newProduct ? String(newProduct.price) : "",
    categoryId: newProduct ? String(newProduct.categoryId) : "",
    photo: new File([], "placeholder"),
    kkal: newProduct ? String(newProduct.kkal) : "",
    gramm: newProduct ? String(newProduct.gramm) : "",
  };

  React.useEffect(() => {
    setNewProduct(product);
  }, [product]);

  return (
    <div>
      <Modal
        open={openProductModal}
        onClose={() => {
          setOpenProductModal(false), setNewProduct(undefined);
        }}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: 500,
            height: 700,
          }}
        >
          {createModal == false && newProduct == undefined ? (
            <LoadingBox>
              <BeatLoader color="#36d7b7" />
            </LoadingBox>
          ) : (
            <div>
              <DetailCloseBtn
                onClick={() => {
                  setOpenProductModal(false), setNewProduct(undefined);
                }}
              >
                X
              </DetailCloseBtn>
              <Container sx={{ mt: 2 }}>
                <CssBaseline />

                <Typography component="h1" variant="h5">
                  {title}
                </Typography>

                <Wrapper>
                  <Formik
                    initialValues={IntialValue}
                    onSubmit={(value) => {
                      const data = new FormData();
                      data.append("name", value.name);
                      data.append("description", value.description);
                      data.append("oldPrice", value.oldPrice);
                      if (value.photo.size) {
                        data.append("photo", value.photo);
                      }
                      data.append("newPrice", value.newPrice);
                      data.append("categoryId", value.categoryId);
                      data.append("gramm", value.gramm);
                      data.append("kkal", value.kkal);
                      if (createModal) {
                        createProduct(data).then(async () => {
                          notifications("Продукт успешно создан!");
                          setOpenProductModal(false);
                          const { data } = await getAllProductAdmin();

                            setNewProduct(undefined);
                            if (data.length) {
                              setupdateProducts(data);
                            }
                          })
                          .catch((err) => {
                            notificationError(err.response.data);
                          });
                      } else {
                        data.append("id", String(product?.id));

                        updateProduct(data).then(async () => {
                          notifications("Продукт успешна изменена");
                          setOpenProductModal(false);
                          const { data } = await getAllProductAdmin();

                          setNewProduct(undefined);
                          if (data.length) {
                            setupdateProducts(data);
                          }
                        });
                      }
                    }}
                    validationSchema={schema}
                    isInitialValid={false}
                  >
                    {({ errors, handleChange, setFieldValue, values }) => (
                      <Form>
                        <Box
                          sx={{
                            marginTop: 1,
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <StyledTextFild
                            value={values.name}
                            required
                            onChange={handleChange}
                            id="name"
                            name="name"
                            label="Имя"
                            fullWidth
                          />
                          <StyledTextFild
                            value={values.description}
                            required
                            onChange={handleChange}
                            id="description"
                            name="description"
                            label="Описание"
                            fullWidth
                          />
                          <StyledTextFild
                            value={values.oldPrice}
                            required
                            onChange={handleChange}
                            id="oldPrice"
                            name="oldPrice"
                            label="Старая цена"
                            fullWidth
                          />
                          {errors.oldPrice && (
                            <ErrorMessage>{errors.oldPrice}</ErrorMessage>
                          )}
                          <StyledTextFild
                            value={values.newPrice}
                            onChange={handleChange}
                            id="newPrice"
                            name="newPrice"
                            label="Новая цена"
                            fullWidth
                          />
                          {errors.newPrice && (
                            <ErrorMessage>{errors.newPrice}</ErrorMessage>
                          )}
                          <Box margin={1} sx={{ width: "100%" }}>
                            <FormControl fullWidth>
                              <InputLabel>Категория</InputLabel>
                              <Select
                                required
                                name="categoryId"
                                labelId="categoryId"
                                id="categoryId"
                                value={values.categoryId}
                                label="Категория"
                                onChange={handleChange}
                              >
                                {categories?.map((item) => (
                                  <MenuItem key={item.id} value={item.id}>
                                    {item.title}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Box>
                          <StyledTextFild
                            onChange={handleChange}
                            required
                            value={values.gramm}
                            id="gramm"
                            name="gramm"
                            label="грамм"
                            fullWidth
                          />
                          {errors.gramm && (
                            <ErrorMessage>{errors.gramm}</ErrorMessage>
                          )}
                          <StyledTextFild
                            onChange={handleChange}
                            value={values.kkal}
                            required
                            id="kkal"
                            name="kkal"
                            label="ккал"
                            fullWidth
                          />
                          {errors.kkal && (
                            <ErrorMessage>{errors.kkal}</ErrorMessage>
                          )}
                          <Flex>
                            {newProduct ? (
                              <>
                                <Image
                                  width={90}
                                  alt=""
                                  height={55}
                                  src={newProduct?.img}
                                />
                                <StyledTextFild
                                  margin="normal"
                                  name="photo"
                                  type="file"
                                  fullWidth
                                  id="photo"
                                  onChange={(
                                    e: ChangeEvent<HTMLInputElement>
                                  ) => {
                                    if (e.currentTarget.files) {
                                      setFieldValue(
                                        "photo",
                                        e.currentTarget.files[0]
                                      );
                                    }
                                  }}
                                />
                              </>
                            ) : (
                              <StyledTextFild
                                name="photo"
                                type="file"
                                id="photo"
                                required
                                onChange={(
                                  e: ChangeEvent<HTMLInputElement>
                                ) => {
                                  if (e.currentTarget.files) {
                                    setFieldValue(
                                      "photo",
                                      e.currentTarget.files[0]
                                    );
                                  }
                                }}
                              />
                            )}
                          </Flex>
                          <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 1, mb: 2 }}
                          >
                            {buttonText}
                          </Button>
                        </Box>
                      </Form>
                    )}
                  </Formik>
                </Wrapper>
              </Container>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

{
}
