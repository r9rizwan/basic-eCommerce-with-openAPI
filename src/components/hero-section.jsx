import React from "react";
import { Button } from "./button";

export const HeroSection = () => {
  return (
    <div
      className="text-background bg-foreground/15 bg-[url('/images/hero-banner.jpg')] bg-blend-overlay h-[500px] w-full bg-[center_59%] bg-cover bg-no-repeat"
      // style={{
      //   background: "url('/images/hero-banner.jpg')",
      //   width: "100%",
      //   height: "500px",
      //   backgroundPositionX: 'center',
      //   backgroundPositionY: "59%",
      //   backgroundSize: "cover",
      //   backgroundRepeat: 'no-repeat'
      // }}
    >
      <div className="flex flex-col gap-8 justify-center h-full w-1/3 mx-16">
        <h1 className="leading-snug text-6xl font-bold">
          Classic Cream Blouse Shirt
        </h1>
        <span>Light breathable blouse for any condition</span>
        <div className="flex gap-2 items-end">
          <h3 className="text-2xl font-bold">$82,61</h3>
          <s>$153,92</s>
        </div>
        <div>
          <Button>View More</Button>
        </div>
      </div>
    </div>
  );
};
