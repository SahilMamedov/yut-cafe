import { Product } from "@/components/menuComponents/product";
import Meta from "@/components/shared/meta";
import { Pagination } from "@/components/shared/pagination";
import { Shop } from "@/components/shared/shop";
import { getAllCategory } from "@/services/category/categoryServices";
import { CategoryGetDto } from "@/services/category/types";
import {
  getAllProduct,
  getOneProduct,
} from "@/services/product/productServices";
import { ProductGetDto } from "@/services/product/types";
import { GetServerSideProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";

import { ChangeEvent, FC, useEffect, useState } from "react";

import { useBasket } from "@/hooks/useBasket";
import { IProduct } from "@/types";
import { DetailModal } from "@/components/menuComponents/DetailModal";
interface Props {
  categories: CategoryGetDto[];
  products: ProductGetDto[];
  productCount: number;
  product: IProduct;
}
type Query = {
  categoryId: string | string[] | undefined;
  page: number;
  productId?: number;
};
const ProductPage: FC<Props> = ({
  product,
  categories,
  products,
  productCount,
}) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number>();

  const { handleAddItem, handleDecrement, handleIncrement, items } =
    useBasket();

  const handleChangePage = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSelectProduct = (productId: number) => {
    setSelectedProductId(productId);
    setOpenModal(!openModal);
  };

  useEffect(() => {
    const { categoryId } = router.query;
    const query: Query = { categoryId, page };
    if (selectedProductId !== undefined) {
      query.productId = selectedProductId;
    }
    router.push({
      pathname: router.pathname,
      query,
    });
  }, [page, selectedProductId]);
  return (
    <>
      <div style={{ background: "#F5F4F2" }}>
        <Meta
          description="Официальный сайт Ресторан уют бар. Круглосуточная доставка блюд по Москве."
          ogDescription=""
          ogTitle=""
          title="Ресторан уют бар, официальный сайт: доставка по Москве еды и напитков"
        />
        <Shop
          categories={categories}
          renderContent={
            <Product
              onSelectProduct={handleSelectProduct}
              items={items}
              onAddItem={handleAddItem}
              onDecrement={handleDecrement}
              onIncrement={handleIncrement}
              products={products}
            />
          }
        />
        <Pagination
          onChange={handleChangePage}
          page={page}
          productCount={productCount}
        />
      </div>
      <DetailModal
        product={product}
        openDetailModal={openModal}
        setOpenDetailModal={setOpenModal}
      />
    </>
  );
};
interface IParams extends ParsedUrlQuery {
  categoryId: string;
  page: string;
  productId: string;
}
export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
}) => {
  const { categoryId } = params as IParams;
  const { page, productId } = query as IParams;
  let product = {};
  const { data: products } = await getAllProduct(categoryId, page);

  const { data: categories } = await getAllCategory();

  if (productId) {
    const { data } = await getOneProduct(productId);
    product = data.result;
  }
  return {
    props: {
      products: products.result,
      product: product,
      categories: categories,
      productCount: products.totalCount,
    },
  };
};

export default ProductPage;
