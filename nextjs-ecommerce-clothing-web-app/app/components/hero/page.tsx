import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import header from "./../../assets/header.webp";
import Featured1 from "./../../assets/Featured1.webp";
import Featured2 from "./../../assets/Featured2.webp";
import Featured3 from "./../../assets/Featured3.webp";
import Featured4 from "./../../assets/Featured4.webp";
import { ShoppingCart } from "lucide-react";
import { Button } from "./../../../components/ui/button";

export default function page() {
  return (
    <div className="flex justify-between">
      <div className="header-left-side">
        <Badge
          variant="outline"
          className="rounded-sm w-24 h-8 grid  place-content-center text-md bg-[#e1edff] text-blue-600"
        >
          Sale 70%
        </Badge>
        <h1 className="md:text-6xl text-4xl font-bold mt-5 mr-5">
          An Industrial Take on Streetwear
        </h1>
        <p className="pr-10 mt-5">
          Streetwear Anyone can beat you but no one can beat your outfit as long
          as you wear Dine outfits.
        </p>
        <div className="my-5">
          <Button className="bg-slate-900 tracking-widest leading-5 bored-4  h-16 w-44 rounded-none shadow-none border-[#686868] flex-wrap">
            <ShoppingCart className="mr-5 h-6 w-6    " /> Start <br /> Shopping
          </Button>
        </div>
        <div className="flex gap-5 flex-wrap">
          <Image src={Featured1} alt="" width={100} height={100}/>
          <Image src={Featured2} alt="" width={100} height={100}/>
          <Image src={Featured3} alt="" width={100} height={100}/>
          <Image src={Featured4} alt="" width={100} height={100}/>
        </div>
      </div>
      <div className="bg-[#ffece3] h-full w-full rounded-full self-center hidden lg:block">
        <Image src={header} alt="header" />
      </div>
    </div>
  );
}
