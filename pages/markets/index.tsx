import ProductList from "../../src/components/units/market/list/productList.index";
import { useAuth } from "../../src/components/commons/hooks/useAuth";
import BestProduct from "../../src/components/units/market/bestProduct/bestProduct.index";

export default function Market(): JSX.Element {
  useAuth();

  return (
    <>
      <BestProduct />
      <ProductList />
    </>
  );
}
