import React from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import img from "./../../assets/event2.webp";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="lg:px-20">
      <div>
        <header className="text-2xl text-black font-bold">Shopping Cart</header>
      </div>
      <div className="lg:flex lg:justify-between mt-5 lg:mt-5 ">
        <div className="md:flex justify-between">
          <div className="bg-[#d7d7d9]  flex justify-center items-end w-[250px] h-[200px] rounded-lg">
            <Image src={img} alt="" className="w-auto h-full " />
          </div>
          <div className="grid row-gap-12 w-full px-12">
            <div className="flex justify-between items-center">
              <h1 className="text-lg  font-normal">Cameryn Sash Tie Dress</h1>
              <div className="item-delete">
                <Trash2 className="cursor-pointer" />
              </div>
            </div>
            <p className="text-lg text-gray-600 font-medium">Dress</p>
            <p className="font-bold text-lg">Delivery Estimation</p>
            <p className="text-md text-yellow-400 font-bold"> 5 Working Days</p>
            <div className="flex justify-between item-center">
              <p className="text-lg font-bold"> Price</p>
              <div className="flex justify-between item-center w-28">
                <div className="subtract">
                  <div className="h-7 w-7 cursor-pointer bg-gray-100 rounded-full font-medium text-slate-600 flex justify-center items-center ">
                    <Minus className="h-4" />
                  </div>
                </div>
                <p>1</p>
                <div className="plus">
                  <div className="h-7 w-7 cursor-pointer bg-gray-100 rounded-full font-medium text-slate-600  flex justify-center items-center">
                    <Plus className="h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between py-3 h-52 lg:h-auto bg-gray-100 px-5 mt-5 lg:mt-0 ">
          <header className="font-bold mt-3">Order Summary</header>
          <div className="flex justify-between">
            <p>Quantity</p>
            <p>
              <span> 1</span> Product
            </p>
          </div>
          <div className="flex justify-between">
            <p>Sub Total</p>
            <p>$100</p>
          </div>
          <Button className=" bg-slate-900 tracking-widest leading-5 bored-4  h-9 ld:w-44 rounded-none shadow-none border-[#686868] text-xs border-2  flex-nowrap">
            Process to checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
