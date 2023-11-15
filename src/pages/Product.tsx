import { useParams } from "react-router-dom";
import Items from "../data/items.json";

export default function ProductPage() {
  const { id } = useParams();
  const item = Items.find((item) => item.id === id);

  console.log(id);
  return (
    <>
      <h1>{item?.name}</h1>
      <p>Price: {item?.price}</p>
      <p>{item?.description}</p>
    </>
  );
}
