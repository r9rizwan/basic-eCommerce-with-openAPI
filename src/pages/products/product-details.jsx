import { useDispatch } from "react-redux";
import { useFetchProduct } from "../../hooks";
import { addToCard, removeFromCart } from "../../store/slices/cart-slice";
import { useSelector } from "react-redux";

export const ColorBadge = ({ color = "bg-primary" }) => {
  return <div className={`size-5 rounded-full ${color}`} role="button" />;
};

export const SizeBadge = ({ size }) => {
  return (
    <div
      className="size-11 rounded-full bg-gray-200 flex justify-center items-center font-semibold hover:bg-gray-300 transition"
      role="button">
      {size}
    </div>
  );
};

function ProductDetailsPage() {
  const { product, isLoading, error } = useFetchProduct();
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const isWithinCart = cart.find((item) => item.id === product.id);

  if (isLoading) {
    return <div className="text-center py-10">Loading Data...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        Error... {JSON.stringify(error)}
      </div>
    );
  }

  const addProductToCart = () => {
    if (isWithinCart) {
      // remove from cart.
      dispatch(removeFromCart({ id: product.id }));
    } else {
      dispatch(addToCard(product));
    }
  };

  return (
    <article className="container mx-auto p-4 my-10 flex items-start gap-16 w-9/12">
      <div className="w-10/12 flex flex-col gap-5">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="rounded border-2 shadow-md w-full h-[460px] aspect-square object-contain"
        />
        <div className="flex gap-4 items-center">
          <button
            onClick={addProductToCart}
            className="font-semibold h-10 w-full border px-3 rounded-full block bg-foreground hover:bg-foreground/80 transition text-background">
            {isWithinCart ? "Remove from cart" : "Add to Cart"}
          </button>
          <button className="font-semibold h-10 w-full border px-3 bg-gray-200 transition hover:bg-gray-300 rounded-full block">
            Add to Wishlist
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <h3 className="text-3xl font-bold">{product.title}</h3>
        <p className="text-muted-foreground">{product.description}</p>
        <div className="flex items-center gap-5">
          <h6 className="font-semibold">
            Price: <span className="ms-0.5 font-normal">${product.price}</span>
          </h6>
          <h6 className="font-semibold">
            Availability:{" "}
            <span className="ms-0.5 font-normal">
              {product.availabilityStatus}
            </span>
          </h6>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="font-semibold">Select Color: </h6>
          <div className="flex gap-2 items-center">
            <ColorBadge color="bg-foreground" />
            <ColorBadge color="bg-danger" />
            <ColorBadge />
            <ColorBadge color="bg-warning" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="font-semibold">Select Size: </h6>
          <div className="flex gap-2">
            <SizeBadge size="SM" />
            <SizeBadge size="MD" />
            <SizeBadge size="LG" />
            <SizeBadge size="XL" />
            <SizeBadge size="XXL" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="font-semibold">Description: </h6>
          <p className="text-muted-foreground">{product.description}</p>
        </div>
      </div>
    </article>
  );
}

export default ProductDetailsPage;

// 1. get by id general steps
// 2. pass the unique identifier in the routes / url
// 3. make the route a dynamic route segment by adding : before route name (eg., :id, :product, :lang, :mode)
// 4. access the dynamic route segment by using react-router-dom hook called useParams. make sure the
//    access key must be same as the name of dynamic route segment.
// 5. fetch data in useEffect by sending the identifier to server with path/ route.
// 6. set the received data to state for further use.
// 7. render the data on appropriate places in the UI.
// 8. (optional) sometimes we have to adjust the received data according to our ui requirement.
