import React from "react";
import image1 from "/images/image1.jpg";

export const DisplayPicture = () => {
  return (
    <div>
      <img
        src="/images/image1.jpg"
        alt="User Avatar"
        className="rounded-full w-10 h-10 lg:h-[3.5rem] lg:w-[3.5rem] "
      />
    </div>
  );
};
