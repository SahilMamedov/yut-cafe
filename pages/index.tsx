// import { Inter } from "next/font/google";
import { HitsAndNews } from "@/components/homeComponents/hitsAndNews";
import { MenuDelivery } from "@/components/homeComponents/menuDelivery";
import Slider from "@/components/homeComponents/slider";
import Meta from "@/components/shared/meta";
import { useBasket } from "@/hooks/useBasket";
import { getAllCategory } from "@/services/category/categoryServices";
import { CategoryGetDto } from "@/services/category/types";
import { getProductPopular } from "@/services/product/productServices";
import { BasketItemProps } from "@/store/slices/basketSlice";
import { IProduct } from "@/types";
import { FC } from "react";

// const inter = Inter({ subsets: ["latin"] });
interface Props {
  products: IProduct[];
  categories: CategoryGetDto[];
  onAddItem: (item: BasketItemProps) => void;
}
const Home: FC<Props> = ({ categories, products, onAddItem }) => {
  const { handleAddItem, items } = useBasket();
  return (
    <>
      <Meta
        description="Официальный сайт Ресторан уют бар. Круглосуточная доставка блюд по Москве."
        ogDescription=""
        ogTitle=""
        title="Ресторан уют бар, официальный сайт: доставка по Москве еды и напитков"
      />
      <main>
        <Slider />
        <HitsAndNews
          onAddItem={handleAddItem}
          basketItem={items}
          products={products}
        />
        <MenuDelivery categories={categories} />
      </main>
    </>
  );
};
export default Home;
export const getStaticProps = async () => {
  const { data } = await getAllCategory();
  const { data: productPopular } = await getProductPopular();
  return {
    props: {
      products: productPopular.result,
      categories: data,
    },
  };
};
