import { DeliveryTerms } from "@/components/deliveryTermsComponents/shippingAndPayment";
import Meta from "@/components/shared/meta";

const Delivery = () => {
  return (
    <div>
      <Meta
        description="Официальный сайт Ресторан уют бар. Круглосуточная доставка блюд по Москве."
        ogDescription=""
        ogTitle=""
        title="Ресторан уют бар, официальный сайт: доставка по Москве еды и напитков"
      />
      <DeliveryTerms />
    </div>
  );
};
export default Delivery;
