import * as React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import Link from "next/link";
import { StyledLink } from "../categories/styled";
import ListItemButton from "@mui/material/ListItemButton";
export const mainListItems = (
  <React.Fragment>
    <StyledLink href="/dashboard/products">
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Продукты" />
      </ListItemButton>
    </StyledLink>
    <StyledLink href="/dashboard/categories">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Категории" />
      </ListItemButton>
    </StyledLink>
    <StyledLink href="/dashboard/orders">
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Заказы" />
      </ListItemButton>
    </StyledLink>
  </React.Fragment>
);
