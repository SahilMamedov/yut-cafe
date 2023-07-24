import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  deleteProduct,
  getAllProductAdmin,
  getOneProduct,
} from "@/services/dashboardServices/productServices";
import { ProductGetDto } from "@/services/product/types";
import Image from "next/image";
import { CreateButton, DeletButton, EditButton } from "./styled";
import Tooltip from "@mui/material/Tooltip";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";

import { notifications } from "@/utils/notification";
import { UpdateCreateProductModal } from "./updateCreateProductModal";
import { getAllCategoryAdmin } from "@/services/dashboardServices/categoryServices";
import { CategoryGetDto } from "@/services/category/types";

interface Props {
  products: ProductGetDto[];
}

const Products: React.FC<Props> = ({ products }) => {
  const [updateProducts, setupdateProducts] = React.useState<ProductGetDto[]>(
    []
  );
  const [openUpdateModal, setUpdateOpenModal] = React.useState<boolean>(false);
  const [product, setProduct] = React.useState<ProductGetDto>();
  const [openCreateModal, setOpenCreateModal] = React.useState<boolean>(false);
  const [categories, setCategories] = React.useState<CategoryGetDto[]>();
  React.useEffect(() => {
    setupdateProducts(products);
  }, []);

  const handleDeletProduct = (id: number) => {
    Swal.fire({
      title: "Вы уверены, что хотите удалить этот продукт?",
      text: "Вы не сможете вернуть это!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Да, удалить!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id).then(async () => {
          const { data } = await getAllProductAdmin();

          notifications("Продукт успешно удален");
          if (data.length) {
            setupdateProducts(data);
          }
        });
      }
    });
  };

  const handleCreate = async () => {
    setOpenCreateModal(!openCreateModal);
    const { data } = await getAllCategoryAdmin();
    if (data) {
      setCategories(data);
    }
  };

  const handleEditProduct = async (id: number) => {
    setUpdateOpenModal(!openUpdateModal);
    const { data: categories } = await getAllCategoryAdmin();
    if (categories) {
      setCategories(categories);
    }
    const { data } = await getOneProduct(id);
    if (data) {
      setProduct(data);
    }
  };

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
    { field: "id", headerName: "ID", width: 60 },
    {
      field: "categoryId",
      headerName: "КатегорияID",
      width: 100,
      align: "center",
    },
    {
      field: "name",
      headerName: "Продукт Имя",
      width: 180,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "description",
      headerName: "Описание",
      width: 170,
      headerAlign: "center",
      align: "center",
      editable: true,
    },
    {
      field: "price",
      headerName: "Цена",
      width: 80,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "oldPrice",
      headerName: "Старая цена",
      width: 110,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "gramm",
      headerName: "Грамм",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "kkal",
      headerName: "Ккал",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: " ",
      headerName: "Редактировать",
      width: 120,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <EditButton onClick={() => handleEditProduct(params.row.id)}>
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
      width: 90,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <DeletButton>
            <Tooltip title="Delete">
              <IconButton onClick={() => handleDeletProduct(params.row.id)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </DeletButton>
        );
      },
    },
  ];

  return (
    <>
      <CreateButton onClick={handleCreate}>Создать продукт</CreateButton>
      <Box sx={{ height: 630, width: "100%" }}>
        <UpdateCreateProductModal
          openProductModal={openCreateModal}
          setOpenProductModal={setOpenCreateModal}
          setupdateProducts={setupdateProducts}
          createModal={true}
          title="Создать продукт"
          buttonText="Создавать"
          categories={categories}
        />
        {product !== undefined && (
          <UpdateCreateProductModal
            openProductModal={openUpdateModal}
            setOpenProductModal={setUpdateOpenModal}
            product={product}
            setupdateProducts={setupdateProducts}
            createModal={false}
            title="Обновить продукт"
            categories={categories}
            buttonText="Обновлять"
          />
        )}
        <DataGrid
          rows={updateProducts}
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
    </>
  );
};
export const getStaticProps = async () => {
  const { data } = await getAllProductAdmin();

  return {
    props: {
      products: data,
    },
  };
};
export default Products;
