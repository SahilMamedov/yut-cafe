import MuiPagination from "@mui/material/Pagination";
import * as React from "react";
import { styled as MuiStyled } from "@mui/material/styles";
import { ChangeEvent, FC } from "react";

export const StyledPagination = MuiStyled(MuiPagination)`
 display:flex;
 align-items: center;
 justify-content: center;
 padding:15px 0px;
`;
interface Props {
  productCount: number;
  page: number;
  onChange: (ev: ChangeEvent<unknown>, value: number) => void;
}

export const Pagination: FC<Props> = ({ productCount, page, onChange }) => {
  const calculatePaginationCount = () => {
    const count = productCount / 3;
    return Math.round(count);
  };
  return (
    <StyledPagination
      page={page}
      onChange={onChange}
      count={calculatePaginationCount()}
      color="secondary"
    />
  );
};
