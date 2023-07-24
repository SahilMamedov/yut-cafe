import { FC, useState, useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  deleteParentCategory,
  getAllCategoryAdmin,
  getOneCategory,
} from "@/services/dashboardServices/categoryServices";
import { CategoryGetDto } from "@/services/category/types";
import Image from "next/image";
import { CreateButton, DeletButton, EditButton } from "../products/styled";
import Tooltip from "@mui/material/Tooltip";
import { Wrapper } from "./styled";
import UpdateCreateCategoryModal from "./updateCreateCategory";
import { notifications } from "@/utils/notification";
interface Props {
  categories: CategoryGetDto[];
}

const Categories: FC<Props> = ({ categories }) => {
  const [updateCategories, setUpdateCategories] = useState<CategoryGetDto[]>(
    []
  );
  const [category, setCategory] = useState<CategoryGetDto>();
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const [openUpdateModal, setUpdateOpenModal] = useState<boolean>(false);

  const handleEditCategory = async (id: number) => {
    setUpdateOpenModal(!openUpdateModal);

    const { data } = await getOneCategory(id);
    if (data) {
      setCategory(data);
    }
  };
  const handleDeletCategory = (id: number) => {
    Swal.fire({
      title: "Вы уверены, что хотите удалить  категорию?",
      text: "Вы не сможете вернуть это!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Да, удалить!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteParentCategory(id).then(async () => {
          const { data } = await getAllCategoryAdmin();

          notifications("Категория успешно удалено");
          if (data.length) {
            setUpdateCategories(data);
          }
        });
      }
    });
  };
  const handleCreateCategory = () => {
    setOpenCreateModal(!openCreateModal);
  };

  useEffect(() => {
    setUpdateCategories(categories);
  }, []);

  const columns: GridColDef[] = [
    {
      field: "img",
      headerName: "Фото",
      width: 120,
      type: "img",
      renderCell: (params) => {
        return (
          <Image
            style={{ objectFit: "contain" }}
            width={90}
            height={90}
            src={params.value}
            alt={""}
          />
        );
      },
    },
    { field: "id", headerName: "ID", width: 20 },
    {
      field: "title",
      headerName: "Название категории",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: " ",
      headerName: "Редактировать",
      width: 120,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <EditButton onClick={() => handleEditCategory(params.row.id)}>
            <Tooltip title="Редактировать">
              <CreateIcon fontSize="small" />
            </Tooltip>
          </EditButton>
        );
      },
    },
    {
      field: "delete",
      headerName: "Удалить",
      width: 120,
      headerAlign: "center",
      align: "center",
      headerClassName: "header",
      renderCell: (params) => {
        return (
          <DeletButton>
            <Tooltip title="Удалить">
              <IconButton
                disabled={params.row.isSystem && true}
                onClick={() => handleDeletCategory(params.row.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </DeletButton>
        );
      },
    },
  ];

  return (
    <Wrapper>
      <CreateButton onClick={handleCreateCategory}>
        Создать категорию
      </CreateButton>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            height: 630,
          }}
        >
          <UpdateCreateCategoryModal
            openCategoryModal={openCreateModal}
            setOpenCategoryModal={setOpenCreateModal}
            createModal={true}
            title="Создать категорию"
            buttonText="Создавать"
            setUpdateCategories={setUpdateCategories}
          />
          {category !== undefined && (
            <UpdateCreateCategoryModal
              openCategoryModal={openUpdateModal}
              setOpenCategoryModal={setUpdateOpenModal}
              setUpdateCategories={setUpdateCategories}
              createModal={false}
              title="Обновить категорию"
              buttonText="Обновлять"
              category={category}
            />
          )}

          <DataGrid
            rows={updateCategories}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            disableRowSelectionOnClick
          />
        </Box>
      </Box>
    </Wrapper>
  );
};

export const getStaticProps = async () => {
  const { data } = await getAllCategoryAdmin();
  return {
    props: {
      categories: data,
    },
  };
};

export default Categories;
