import { DetailCloseBtn } from "@/components/menuComponents/DetailModal/styled";
import { CategoryGetDto } from "@/services/category/types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { Flex, StyledTextFild, Wrapper } from "../products/styled";
import Image from "next/image";
import Button from "@mui/material/Button";
import {
  createParentCategory,
  getAllCategoryAdmin,
  updateParentCategory,
} from "@/services/dashboardServices/categoryServices";
import { notifications } from "@/utils/notification";
import { ErrorMessage, LoadingBox } from "./styled";

interface Props {
  title: string;
  buttonText: string;
  category?: CategoryGetDto;
  setUpdateCategories: (value: CategoryGetDto[]) => void;
  openCategoryModal: boolean;
  createModal: boolean;
  setOpenCategoryModal: (value: boolean) => void;
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
const UpdateCreateCategoryModal: React.FC<Props> = ({
  buttonText,
  setOpenCategoryModal,
  openCategoryModal,
  setUpdateCategories,
  title,
  category,
  createModal,
}) => {
  const [newCategory, setNewCategory] = React.useState<CategoryGetDto>();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState<boolean>(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    setSuccess(true);
    if (createModal) {
      createParentCategory(data)
        .then(async () => {
          notifications("Категория  успешно создано!");
          setOpenCategoryModal(false);
          const { data } = await getAllCategoryAdmin();
          setSuccess(false);
          setNewCategory(undefined);
          if (data.length) {
            setUpdateCategories(data);
          }
        })
        .catch((err) => {
          setError(err.response.data);
          setSuccess(false);
        });
    } else {
      data.append("id", String(category?.id));
      data.append("title", String(category?.title));
      setSuccess(true);
      updateParentCategory(data)
        .then(async () => {
          setSuccess(false);
          notifications("Категория успешно изменена!");
          setOpenCategoryModal(false);
          const { data } = await getAllCategoryAdmin();

          setNewCategory(undefined);
          if (data.length) {
            setUpdateCategories(data);
          }
        })
        .catch((err) => {
          setError(err.response.data);
          setSuccess(false);
        });
    }
  };
  React.useEffect(() => {
    setNewCategory(category);
  }, [category]);

  return (
    <div>
      <Modal
        open={openCategoryModal}
        onClose={() => {
          setOpenCategoryModal(false), setNewCategory(undefined);
        }}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: 450,
            height: 260,
          }}
        >
          {createModal == false && newCategory == undefined ? (
            <LoadingBox>
              <BeatLoader color="#36d7b7" />
            </LoadingBox>
          ) : (
            <div>
              <DetailCloseBtn
                onClick={() => {
                  setOpenCategoryModal(false), setNewCategory(undefined);
                }}
              >
                X
              </DetailCloseBtn>
              <Container>
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  component="form"
                  onSubmit={handleSubmit}
                >
                  <Typography component="h1" variant="h5">
                    {title}
                  </Typography>
                  <Box>
                    <Wrapper>
                      {success && (
                        <LoadingBox>
                          <BeatLoader color="#36d7b7" />
                        </LoadingBox>
                      )}
                      <StyledTextFild
                        defaultValue={newCategory?.title}
                        margin="normal"
                        required
                        id="title"
                        fullWidth
                        label="Имя"
                        name="title"
                        disabled={newCategory?.isSystem}
                      />
                      <Flex>
                        {newCategory ? (
                          <>
                            <Image
                              width={90}
                              alt=""
                              height={55}
                              src={newCategory?.img}
                            />
                            <StyledTextFild
                              margin="normal"
                              name="photo"
                              type="file"
                              fullWidth
                              id="photo"
                            />
                          </>
                        ) : (
                          <StyledTextFild
                            margin="normal"
                            name="photo"
                            type="file"
                            fullWidth
                            id="photo"
                            required
                          />
                        )}
                      </Flex>
                      <ErrorMessage>{error}</ErrorMessage>
                    </Wrapper>
                  </Box>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 1, mb: 2 }}
                  >
                    {buttonText}
                  </Button>
                </Box>
              </Container>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateCreateCategoryModal;
