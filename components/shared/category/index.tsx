import { Container, Grid } from "@mui/material";
import { Content, Categories, FoodTitle, Title } from "./styled";

import Image from "next/image";
import { FC } from "react";
import { CategoryGetDto } from "@/services/category/types";
import { StyledLink } from "@/components/layouts/header/styled";
import { Links } from "@/constant";

interface Props {
  categories: CategoryGetDto[];
  title?: string;
  gridProps?: {
    xl: number;
    lg: number;
    md: number;
    sm: number;
    xs: number;
  };
  width: number;
  height: number;
}
export const Category: FC<Props> = ({ categories, title, gridProps }) => {


  return (
    <Content>
      {title && <Title>{title}</Title>}

      <Grid spacing={2} container>
        {categories?.map((item, i) => (
          <Grid item key={i} {...gridProps}>
            <StyledLink href={`${Links.MENU}/${item.id}?page=1`}>
              <Categories>
                <Image src={item.img} alt={item.title} fill />
                <FoodTitle>{item.title}</FoodTitle>
              </Categories>
            </StyledLink>
          </Grid>
        ))}
      </Grid>
    </Content>
  );
};
