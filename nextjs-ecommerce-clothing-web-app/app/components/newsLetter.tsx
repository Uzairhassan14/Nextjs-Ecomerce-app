import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="relative flex justify-center align-center w-full">
      <p className="text-9xl opacity-5">NewsLetter</p>
      <div className="absolute top-0">
        <header className="text-4xl  text-black font-bold leading-loose ">
          {" "}
          Subscribe Our Newsletter
        </header>
        <p className="text-center ">
          Get the latest information and promo offers directly
        </p>
        <div className="flex items-center  justify-between gap-4">
          <Input
            className="my-4 w-3/4 border-[2px] outline-0 border-black"
            placeholder="input email address"
          />
          <Button className="bg-slate-900 tracking-widest leading-5   h-12 w-44 rounded-none shadow-none border-[#686868] text-sm border-2 ">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
