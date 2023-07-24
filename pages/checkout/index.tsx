import { CheckoutComponent } from "@/components/checkout/checkout";
import Meta from "@/components/shared/meta";

const Checkout = () => {
  return (
    <div>
      <Meta
        description="Официальный сайт Ресторан уют бар. Круглосуточная доставка блюд по Москве."
        ogDescription=""
        ogTitle=""
        title="Ресторан уют бар, официальный сайт: доставка по Москве еды и напитков"
      />
      <CheckoutComponent />
    </div>
  );
};
export default Checkout;
