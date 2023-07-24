import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useAppSelector } from "@/store/hooks";
import {} from "./addressForm";
import { CommentBox, LoadingBox } from "./styled";
import { ReturnPropsType } from "./types";

import BeatLoader from "react-spinners/BeatLoader";

interface Props {
  props: ReturnPropsType;
}

export const Review: React.FC<Props> = ({ props }) => {
  return (
    <>
      {props.fullName !== "" ? (
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Итог заказа
          </Typography>
          <List disablePadding>
            {props.products.map((product) => (
              <ListItem key={product.id} sx={{ py: 0, px: 0 }}>
                <ListItemText
                  primary={product.name}
                  secondary={product.description}
                />
                <Typography variant="body2">{product.price} ₽</Typography>
              </ListItem>
            ))}
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Итого" />
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                {props.totalCost} ₽
              </Typography>
            </ListItem>
          </List>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Перевозки
              </Typography>
              <Typography gutterBottom>
                Имя Фамилия: {props.fullName}
              </Typography>
              <Typography gutterBottom>Телефон: {props.phoneNumber}</Typography>
              <Typography gutterBottom>Адрес: {props.address}</Typography>
              <Typography gutterBottom>
                {props.appartmentOrOffice && (
                  <> Кв/офис: {props.appartmentOrOffice},</>
                )}
                {props.porch && <> Подъезд: {props.porch},</>}
              </Typography>
              <Typography>
                {props.floor && <> Этаж: {props.floor},</>}
                {props.intercom && <> Домофон: {props.intercom}</>}
              </Typography>
              <div>
                {props.comment && (
                  <CommentBox>Комментарии: {props.comment}</CommentBox>
                )}
              </div>
            </Grid>
          </Grid>
        </React.Fragment>
      ) : (
        <LoadingBox>
          <BeatLoader color="#36d7b7" />
        </LoadingBox>
      )}
    </>
  );
};
