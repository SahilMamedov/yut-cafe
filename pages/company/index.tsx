import { ProductCompany } from "@/components/productCompany";
import Meta from "@/components/shared/meta";
import { useBasket } from "@/hooks/useBasket";
import { GetProductCompanyAll } from "@/services/productCompany/productCompanyServices";
import { ProductCompantDto } from "@/services/productCompany/types";
import { FC } from "react";
interface Props {
  productCompany: ProductCompantDto[];
}
const Company: FC<Props> = ({ productCompany }) => {
  const { handleAddItem, handleDecrement, handleIncrement, items } =
    useBasket();
  return (
    <div>
      <Meta
        description="Официальный сайт Ресторан уют бар. Круглосуточная доставка блюд по Москве."
        ogDescription=""
        ogTitle=""
        title="Ресторан уют бар, официальный сайт: доставка по Москве еды и напитков"
      />
      <ProductCompany
        onAddItem={handleAddItem}
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
        productCompany={productCompany}
        items={items}
      />
    </div>
  );
};
export default Company;

export const getStaticProps = async () => {
  const { data } = await GetProductCompanyAll();

  return {
    props: {
      productCompany: data.result,
    },
  };
};
