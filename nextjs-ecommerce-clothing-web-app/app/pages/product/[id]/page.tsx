import Image from "next/image";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import getproduct from "./../../../components/getproduct";

export default function page({ params }: { params: { id: number } }) {
  const data = getproduct();
  const data2 = data.filter((item) => item.id == params.id);
  console.log(data2);



  return (
    <>
      {data2.map((item) => {
        return (
          <>
            <div className="flex  gap-5 flex-wrap" key={item.id}>
              <div className="flex flex-nowrap gap-5">
                <div className="flex-col ">
                  {item.images.map((item) => {
                    return (
                      <>
                        <Image
                          src={item}
                          alt="productImages"
                          height={120}
                          width={120}
                          className="mb-5"
                        />
                      </>
                    );
                  })}
                </div>

                <div>
                  <Image
                    src={item.img}
                    alt="productImages"
                    height={500}
                    width={500}
                  />
                </div>
              </div>

              <div className="flex-col justify-between ">
                <h3 className="font-semibold text-3xl flex-wrap ">
                  {item.product.heading}
                </h3>
                <h6 className="font-semibold text-xl mt-1 text-slate-500">
                  {item.product.subHeading}
                </h6>

                <h6 className="font-semibold  mt-5 text-xl">
                  {item.product.Sizeheading}
                </h6>
                <div className="flex justify-between items-center mt-1">
                  {item.product.sizes.map((item) => {
                    return (
                      <>
                        <div className="hover:bg-slate-100 w-12 h-12 rounded-full text-gray-500 font-semibold pointer text-center flex justify-center items-center">
                          {item}
                        </div>
                      </>
                    );
                  })}
                  {/* <div className="hover:bg-slate-100 w-12 h-12 rounded-full text-gray-500 font-semibold pointer text-center flex justify-center items-center">
                    S
                  </div>
                  <div className="hover:bg-slate-100 w-12 h-12 rounded-full text-gray-500 font-semibold pointer text-center flex justify-center items-center">
                    M
                  </div>
                  <div className="hover:bg-slate-100 w-12 h-12 rounded-full text-gray-500 font-semibold pointer text-center flex justify-center items-center">
                    L
                  </div>
                  <div className="hover:bg-slate-100 w-12 h-12 rounded-full text-gray-500 font-semibold pointer text-center flex justify-center items-center">
                    XL
                  </div> */}
                </div>

                <div className="flex justify-between mt-5">
                  <h2 className="font-semibold  text-xl text-slate-900">
                    {item.product.quantity}
                  </h2>
                  <div className="flex justify-between item-center w-28">
                    <div className="subtract">
                      <div className="h-7 w-7 cursor-pointer bg-gray-100 rounded-full font-medium text-slate-600 flex justify-center items-center ">
                        <Minus className="h-4" />
                      </div>
                    </div>
                    <p>{item.product.quantityitem}</p>
                    <div className="plus">
                      <div className="h-7 w-7 cursor-pointer bg-gray-100 rounded-full font-medium text-slate-600  flex justify-center items-center">
                        <Plus className="h-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center  mt-5">
                  <Button className="bg-slate-900 tracking-widest leading-5 bored-4  h-12   w-44 rounded-none shadow-none border-3 border-[#4e4e4e] flex-wrap">
                    <ShoppingCart className="mr-5 h-6 w-6    " />
                    {item.product.button}
                  </Button>

                  <p className="font-semibold text-3xl ml-2">
                    ${item.product.price}
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
