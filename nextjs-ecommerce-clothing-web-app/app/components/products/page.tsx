import Image from "next/image";
import product1 from "./../../assets/product1.png";
import product2 from "./../../assets/product2.png";
import product3 from "./../../assets/product3.png";
import product5 from "./../../assets/product5.png";
import { Button } from "@/components/ui/button";
export default function page() {
  return (
    <div className="mt-10">
      <header>
        <h6 className="text-blue-600 font-semibold text-center">PRODUCTS</h6>
        <h6 className="text-black font-semibold text-center text-3xl mt-2">
          Check What We Have
        </h6>
      </header>
      <section className="flex gap-5 mt-10">
        <div className=" w-full  justify-between hover:scale-110 hover:ease-in duration-300 cursor-pointer ">
          <div className="bg-[#d7d7d9]  flex justify-center items-end">
            <Image src={product1}   height={500} alt="" />
          </div>
          <div className="flex flex-col">
            <strong> Brushed Rangled Sweatshirt</strong>
            <strong>$195</strong>
          </div>
        </div>
        <div className="  w-full  justify-between hover:scale-110 hover:ease-in duration-300  cursor-pointer  ">
          <div className="bg-[#ece8e5] flex justify-center  items-end">
            <Image src={product3}  height={500}  alt="" />
          </div>
          <div className="flex flex-col">
            <strong> Brushed Rangled Sweatshirt</strong>
            <strong>$195</strong>
          </div>
        </div>
        <div className=" w-full  justify-between hover:scale-110 hover:ease-in duration-300  cursor-pointer  ">
          <div className=" bg-[#d6d6d8] flex justify-center items-end">
            <Image src={product5}  height={500}  alt="" />
          </div>
          <div className="flex flex-col">
            <strong> Brushed Rangled Sweatshirt</strong>
            <strong>$195</strong>
          </div>
        </div>
      </section>
    </div>
  );
}
