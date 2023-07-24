import CssBaseline from "@mui/material/CssBaseline";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { useState } from "react";
import { DetailCloseBtn } from "@/components/menuComponents/DetailModal/styled";
import { GetOrderItemAll } from "@/services/dashboardServices/orderServices";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { GetOrderItemType } from "@/types";
import Image from "next/image";
import Grid from "@mui/material/Grid";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "14px",
};

interface Props {
  openModal: boolean;
  setopenModal: (value: boolean) => void;
  products: GetOrderItemType[];
}
const OrderItemModal: React.FC<Props> = ({
  products,
  openModal,
  setopenModal,
}) => {
  const columns: GridColDef[] = [
    {
      field: "img",
      headerName: "Фото",
      width: 110,
      type: "img",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <Image
            style={{ objectFit: "contain" }}
            width={90}
            height={90}
            src={params.row.product.img}
            alt={""}
          />
        );
      },
    },
    {
      field: "productId",
      headerName: "ИД",
      width: 10,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Имя",
      width: 110,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return <>{params.row.product.name}</>;
      },
    },
    {
      field: "description",
      headerName: "Описание",
      width: 110,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return <>{params.row.product.description}</>;
      },
    },
    {
      field: "price",
      headerName: "Цена",
      width: 60,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return <>{params.row.product.price}</>;
      },
    },
    {
      field: "oldPrice",
      headerName: "Старая цена",
      width: 110,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return <>{params.row.product.oldPrice}</>;
      },
    },
    {
      field: "kkal",
      headerName: "ккал",
      width: 70,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return <>{params.row.product.kkal}</>;
      },
    },
    {
      field: "gramm",
      headerName: "грамм",
      width: 70,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return <>{params.row.product.gramm}</>;
      },
    },
    {
      field: "count",
      headerName: "Количество",
      width: 120,
      headerAlign: "center",
      align: "center",
    },
  ];

  return (
    <div>
      <Modal
        open={openModal}
        onClose={() => {
          setopenModal(false);
        }}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Grid lg={12} xl={12}>
          <Box
            sx={{
              ...style,
            }}
          >
            
            <DetailCloseBtn
              onClick={() => {
                setopenModal(false);
              }}
            >
              X
            </DetailCloseBtn>
            <Box sx={{ mt: 7 }}>
              <DataGrid
                rows={products}
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
        </Grid>
      </Modal>
    </div>
  );
};

export default OrderItemModal;
