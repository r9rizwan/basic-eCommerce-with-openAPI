import { useDispatch, useSelector } from "react-redux";
import { useFetchProduct } from "../../hooks";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";
import { addItem, removeItem } from "../../store/slices/wishlistSlice";
import { ColorBadge } from "../../components/icons/colours";
import { SizeBadge } from "../../components/UI/sizeBadge";

function ProductDetailsPage() {
  const { product, isLoading, error } = useFetchProduct();
  const { cart } = useSelector((store) => store.cart);
  const { wishlist } = useSelector((state) => state.wishlist); // Get wishlist from Redux
  const dispatch = useDispatch();

  const isWithinCart = cart.find((item) => item.id === product.id);
  const isInWishlist = wishlist.find(
    (wishlistItem) => wishlistItem.id === product.id
  ); // Check if the product is in wishlist

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
      console.log("Removing item:", product.id);
      dispatch(removeFromCart({ id: product.id }));
    } else {
      console.log("Adding item:", product.id);
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  const toggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeItem({ id: product.id })); // Remove from wishlist
    } else {
      dispatch(addItem(product)); // Add to wishlist
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
          {/* Add to wishlist button */}
          <button
            onClick={toggleWishlist}
            className="font-semibold h-10 w-full border px-3 bg-gray-200 transition hover:bg-gray-300 rounded-full block">
            {isInWishlist ? "Item is in Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <h3 className="text-3xl font-bold">{product.title}</h3>
        <p className="text-muted-foreground">{product.description}</p>
        <div className="flex items-center gap-5">
          <h6 className="font-semibold">
            Price: <span className="ms-0.5 font-normal">£{product.price}</span>
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
            <ColorBadge color="bg-red-500" />
            <ColorBadge color="bg-green-500" />
            <ColorBadge color="bg-blue-600" />
            <ColorBadge color="bg-yellow-500" />
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
