import { FC } from "react";
import { Wrapper } from "./styled";
import { CategoryGetDto } from "@/services/category/types";
import { Category } from "@/components/shared/category";
import { Container } from "@mui/material";

interface Props {
  categories: CategoryGetDto[];
}
export const MenuDelivery: FC<Props> = ({ categories }) => {
  return (
    <Wrapper>
      <Container maxWidth="xl">
        <Category
          height={300}
          width={350}
          gridProps={{
            xl: 3,
            lg: 4,
            md: 6,
            sm: 6,
            xs: 12,
          }}
          title="МЕНЮ ДОСТАВКИ"
          categories={categories}
        />
      </Container>
    </Wrapper>
  );
};
