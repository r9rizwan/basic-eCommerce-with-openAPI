import { React, useEffect } from "react";
import { DisplayPicture, Logo } from "../components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

import {
  HeartIcon as HeartIconSolid,
  ChatBubbleBottomCenterTextIcon as ChatBubbleBottomCenterTextIconSolid,
  ShoppingCartIcon as ShoppingCartIconSolid,
} from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";
import { resetNewCount } from "../store/slices/wishlistSlice";
import { useDispatch } from "react-redux";

const allIcons = {
  message: {
    filled: {
      icon: ChatBubbleBottomCenterTextIconSolid,
      className: "w-8 h-8 fill-gray-600",
    },
    outline: {
      icon: ChatBubbleBottomCenterTextIcon,
      className: "w-8 h-8 stroke-gray-600",
    },
  },
  heart: {
    filled: {
      icon: HeartIconSolid,
      className: "w-8 h-8 fill-red-500",
      size: 20,
    },
    outline: {
      icon: HeartIcon,
      className: "w-8 h-8 stroke-red-500",
      size: 16,
    },
  },
  cart: {
    filled: {
      icon: ShoppingCartIconSolid,
      className: "w-8 h-8 fill-primary",
    },
    outline: {
      icon: ShoppingCartIcon,
      className: "w-8 h-8 stroke-primary/60",
    },
  },
};

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const authStore = useSelector((store) => store.auth);
  const { newCount } = useSelector((store) => store.wishlist);

  // const [isHeartHover, setIsHeartHover] = useState(false);
  // const [isMessageHover, setIsMessageHover] = useState(false);
  // const [isCartHover, setIsCartHover] = useState(false);

  const [icons, setIcons] = useState({
    message: allIcons.message.outline,
    heart: allIcons.heart.outline,
    cart: allIcons.cart.outline,
  });

  const scrollFn = () => {
    if (window.scrollY > 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFn);

    return () => window.removeEventListener("scroll", scrollFn);
  }, []);

  const fillIcon = (name) => {
    setIcons((prev) => ({
      ...prev,
      [name]: allIcons[name].filled,
    }));
  };

  const outlineIcon = (name) => {
    setIcons((prev) => ({
      ...prev,
      [name]: allIcons[name].outline,
    }));
  };

  // type -> filled | outlined, name -> message | heart | cart
  // const toggleIconFeature = (name, type) =>
  //   setIcons((prev) => ({
  //     ...prev,
  //     [name]: allIcons[name][type],
  //   }));

  // const Heart =
  //   isHeartHover || location.pathname === "/favorite-list" ? (
  //     <HeartIconSolid className="w-8 h-8 fill-red-500" />
  //   ) : (
  //     <HeartIcon className="w-8 h-8 stroke-red-500" />
  //   );
  // const Message = isMessageHover ? (
  //   <ChatBubbleBottomCenterTextIconSolid className="w-8 h-8 fill-gray-600" />
  // ) : (
  //   <ChatBubbleBottomCenterTextIcon className="w-8 h-8 stroke-gray-500" />
  // );
  // const Cart = isCartHover ? (
  //   <ShoppingCartIconSolid className="w-8 h-8 fill-primary" />
  // ) : (
  //   <ShoppingCartIcon className="w-8 h-8 stroke-primary/60" />
  // );

  return (
    <nav
      className={`flex items-center justify-around h-24 sticky top-0 z-10 bg-white ${
        isScrolled && "shadow-lg"
      }`}
    >
      <Logo />
      <div className="flex items-center w-3/5 mx-4">
        <span className="mr-4">Categories:</span>
        <input
          type="text"
          placeholder="Search Product"
          className="w-full px-4 py-2 border border-gray-300 rounded bg-transparent"
        />
      </div>
      <div className="flex items-center space-x-10">
        <div className="flex items-center space-x-2">
          <span
            role="button"
            title="Chat with our customer service center."
            onMouseEnter={() => fillIcon("message")}
            onMouseLeave={() => outlineIcon("message")}
            className="hover:bg-gray-100 px-2 py-1 rounded-lg"
          >
            {/* {isMessageHover ? (
              <ChatBubbleBottomCenterTextIconSolid className="w-8 h-8 fill-gray-600" />
            ) : (
              <ChatBubbleBottomCenterTextIcon className="w-8 h-8 stroke-gray-500" />
            )} */}

            {/* <Heart */}
            {/* {Message} */}
            <icons.message.icon className={icons.message.className} />
          </span>
          <Link
            role="button"
            to="/favorite-list"
            onMouseEnter={() => fillIcon("heart")}
            onMouseLeave={() => outlineIcon("heart")}
            title="See your favorite list."
            className="flex flex-row-reverse relative hover:bg-gray-100 px-2 py-1 rounded-lg text-gray-500 hover:text-gray-900"
          >
            <icons.heart.icon className={icons.heart.className} />
            {newCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-200 text-foreground text-sm size-5 inline-flex justify-center items-center rounded-full">
                {newCount}
              </span>
            )}
            {/* {Heart} */}
            {/* {location.pathname === "/favorite-list" || isHeartHover ? (
              <HeartIconSolid className="w-8 h-8 transition fill-red-500" />
            ) : (
              <HeartIcon className="w-8 h-8 transition stroke-red-500" />
            )} */}
          </Link>

          <Link
            onMouseEnter={() => fillIcon("cart")}
            title="Add Items to your cart."
            onMouseLeave={() => outlineIcon("cart")}
            className="hover:bg-gray-100 px-2 py-1 rounded-lg`"
            to='/add-cart'
          >
            {/* {isCartHover ? (
              <ShoppingCartIconSolid className="w-8 h-8 fill-primary" />
            ) : (
              <ShoppingCartIcon className="w-8 h-8 stroke-primary/60" />
            )} */}
            {/* {Cart} */}
            <icons.cart.icon className={icons.cart.className} />
          </Link>
        </div>
        <div className="h-10 border-r border-[1.8px] border-gray-300" />
        {authStore.isAuthenticated ? (
          <DisplayPicture />
        ) : (
          <Link
            to="/signIn"
            className="hover:text-blue-600 hover:bg-blue-50 transition px-2 py-2 rounded-3xl duration-300 text-xl font-bold text-gray-600"
          >
            LOGIN
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
