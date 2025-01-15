import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/slices/wishlistSlice";
import { removeItem } from "../../store/slices/wishlistSlice";
import { HeartIcon } from "@heroicons/react/24/outline";

const HeartIconWrapper = ({ item }) => {
  const dispatch = useDispatch();

  const { wishlist } = useSelector((state) => state.wishlist);
  const isInWishlist = wishlist.find(
    (wishlistItem) => wishlistItem.id === item.id
  );

  // const [isFilled, setIsFilled] = useState(isInWishlist);

  // const handleClick = () => {
  //   if (isFilled) {
  //     dispatch(removeItem(item));
  //   } else {
  //     dispatch(addItem(item));
  //   }
  //   setIsFilled(!isFilled);
  // };

  // return (
  //   <div
  //     onClick={handleClick}
  //     className={`cursor-pointer transition-transform duration-200 ${
  //       isFilled ? "text-red-500" : "text-gray-500"
  //     } ${isFilled ? "scale-110" : ""}`}
  //   >
  //     <Heart />
  //   </div>
  // );

  // const [isFilled, setIsFilled] = useState("");
  // const toggleFilled = () =>
  // isFilled ? setIsFilled("") : setIsFilled("fill-red-500 scale-125");

  const addToWishlist = () => {
    if (isInWishlist) dispatch(removeItem({ id: item.id }));
    // dispatch to redux an action for pushing an item to wishlist.
    else dispatch(addItem(item));
  };

  const title = isInWishlist ? "Remove from wishlist" : "Add to wishlist";
  return (
    <span role="button" className="block" title={title} onClick={addToWishlist}>
      <HeartIcon
        className={`size-6 text-red-500 transition ${
          isInWishlist && "fill-red-500 scale-125"
        }`}
      />
    </span>
  );
};

// const name = "Mubeen"`My name is ${name}`;

export default HeartIconWrapper;
