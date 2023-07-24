import Meta from "@/components/shared/meta";
import { getAllCategory } from "@/services/category/categoryServices";
import { FC, useState } from "react";
import { CategoryGetDto } from "@/services/category/types";
import { ProductGetDto } from "@/services/product/types";

import { Category } from "@/components/shared/category";
import { Shop } from "@/components/shared/shop";
interface Props {
  categories: CategoryGetDto[];
  products: ProductGetDto[];
  totalCountPagination: number;
}
const Menu: FC<Props> = ({ categories }) => {
  return (
    <div style={{ background: "rgb(221, 234, 250)" }}>
      <Meta
        description="Официальный сайт Ресторан уют бар. Круглосуточная доставка блюд по Москве."
        ogDescription=""
        ogTitle=""
        title="Ресторан уют бар, официальный сайт: доставка по Москве еды и напитков"
      />
      <Shop
        categories={categories}
        renderContent={
          <Category
            categories={categories}
            gridProps={{ xl: 3, lg: 4, md: 6, sm: 12, xs: 12 }}
            height={250}
            width={300}
          />
        }
      />
    </div>
  );
};
export const getStaticProps = async () => {
  const { data: categories } = await getAllCategory();
  return {
    props: {
      categories: categories,
    },
  };
};

export default Menu;
