import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  GetAllOrders,
  GetOrderItemAll,
  UpdateOrderStatus,
} from "@/services/dashboardServices/orderServices";
import { GetOrderItemType, GetOrderType } from "@/types";
import { OrderStatus } from "@/helper";
import { StyledOrderStatus } from "./styled";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { notificationError, notifications } from "@/utils/notification";
import VisibilityIcon from "@mui/icons-material/Visibility";
import OrderItemModal from "./orderItemModal";
import { LoadingBox } from "../categories/styled";
import BeatLoader from "react-spinners/BeatLoader";
interface Props {
  orders: GetOrderType[];
}
const Orders: React.FC<Props> = ({ orders }) => {
  const [updateOrders, setUpdateOrders] = React.useState<GetOrderType[]>([]);
  const [openModal, setopenModal] = React.useState<boolean>(false);
  const [products, setProducts] = React.useState<GetOrderItemType[]>([]);
  const [success, setSuccess] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (orders) {
      setUpdateOrders(orders);
    }
  }, []);

  const handleReject = (orderId: number) => {
    UpdateOrderStatus(orderId, 2).then(async () => {
      const { data } = await GetAllOrders();
      setUpdateOrders(data);
      notificationError("Отклоненно");
    });
  };

  const handleSuccess = (orderId: number) => {
    UpdateOrderStatus(orderId, 1).then(async () => {
      const { data } = await GetAllOrders();
      setUpdateOrders(data);

      notifications("Принято ");
    });
  };

  const handleViewOrderItem = async (orderId: number) => {
    setSuccess(true);
    setopenModal(!openModal);
    await GetOrderItemAll(orderId).then((data) => {
      setProducts(data.data);
      setSuccess(false);
    });
  };

  const Dateoptions: any = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 10 },
    {
      field: "fullName",
      headerName: "Имя Фамилия",
      width: 140,
    },
    {
      field: "mobile",
      headerName: "Телефон",
      align: "center",
      width: 140,
      headerAlign: "center",
    },
    {
      field: "address",
      headerName: "Адрес",
      width: 160,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "createdAt",
      headerName: "Дата",
      width: 130,
      headerAlign: "center",

      renderCell: (params) => {
        return (
          <div>
            {new Date(params.value).toLocaleString("en-US", Dateoptions)}
          </div>
        );
      },
    },
    {
      field: "appartmentOrOffice",
      headerName: "Квартира",
      width: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "floor",
      headerName: "Этаж",
      width: 90,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "intercom",
      headerName: "Домафон ",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "porch",
      headerName: "Подъезд",
      width: 90,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "total",
      headerName: "Итог",
      width: 90,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "comment",
      headerName: "Комментарий",
      width: 130,
      editable: true,
    },
    {
      field: "orderStatus",
      headerName: "Статус заказа",
      headerClassName: "super-app-theme--header",
      width: 105,
      align: "center",
      renderCell: (params) => {
        if (params.value === OrderStatus.Pending) {
          return (
            <StyledOrderStatus background="#f3b04c">
              В ожидании
            </StyledOrderStatus>
          );
        } else if (params.value === OrderStatus.Accept) {
          return (
            <StyledOrderStatus background="#11a63e">Принято</StyledOrderStatus>
          );
        } else {
          return (
            <StyledOrderStatus background="red">Отклонено</StyledOrderStatus>
          );
        }
      },
    },
    {
      field: " ",
      headerName: "",
      width: 150,

      renderCell: (params) => {
        return (
          <Stack direction="row" spacing={1}>
            <Button
              onClick={() => handleSuccess(params.row.id)}
              variant="contained"
              color="success"
              disabled={params.row.orderStatus == 1 ? true : false}
            >
              <Tooltip title="Принять">
                <DoneIcon />
              </Tooltip>
            </Button>
            <Button
              onClick={() => handleReject(params.row.id)}
              variant="outlined"
              color="error"
              disabled={params.row.orderStatus == 2 ? true : false}
            >
              <Tooltip title="Отклонять ">
                <CloseIcon />
              </Tooltip>
            </Button>
          </Stack>
        );
      },
    },
    {
      field: "  ",
      headerName: "Деталь",
      headerAlign: "center",
      align: "center",
      width: 90,
      renderCell: (params) => {
        return (
          <Stack direction="row" spacing={1}>
            <Button
              onClick={() => handleViewOrderItem(params.row.id)}
              variant="contained"
              color="info"
            >
              <Tooltip title="Смотреть">
                <VisibilityIcon />
              </Tooltip>
            </Button>
          </Stack>
        );
      },
    },
  ];
  return (
    <>
      <DataGrid
        rows={updateOrders}
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
      {success ? (
        <LoadingBox>
          <BeatLoader color="#36d7b7" />
        </LoadingBox>
      ) : (
        <OrderItemModal
          products={products}
          setopenModal={setopenModal}
          openModal={openModal}
        />
      )}
    </>
  );
};

export const getStaticProps = async () => {
  const { data } = await GetAllOrders();

  return {
    props: {
      orders: data,
    },
  };
};
export default Orders;
