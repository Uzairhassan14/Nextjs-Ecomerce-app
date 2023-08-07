import Image from "next/image";
import product2 from "./../../assets/imperialAlpaceHoodie.png";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <section>
      <div className="flex justify-end">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl  md:w-[40%] md:leading-loose ">
          Unique and Authentic Vintage Designer Jewellery
        </h1>
      </div>
      <div className="flex justify-between flex-wrap md:flex-nowrap gap-10 mt-10 ">
        <div className="container-bg relative flex justify-between flex-wrap gap-y-4 ">
          <div className="text-bg absolute -top-10 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-8xl w-[40%] leading-loose text-gray-100 -z-50">
            Diffrent from other
          </div>
          <div className="w-[50%]">
            <h3 className="text-xl text-black font-semibold">
              Using Good Quality Materials
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nesciunt, totam.
            </p>
          </div>
          <div className="w-[50%]">
            <h3 className="text-xl text-black font-semibold">
              Using Good Quality Materials
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nesciunt, totam.
            </p>
          </div>
          <div className="w-[50%]">
            <h3 className="text-xl text-black font-semibold">
              Using Good Quality Materials
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nesciunt, totam.
            </p>
          </div>
          <div className="w-[50%]">
            <h3 className="text-xl text-black font-semibold">
              Using Good Quality Materials
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nesciunt, totam.
            </p>
          </div>
        </div>
        <div className="right flex justify-between gap-5 flex-wrap md:flex-nowrap ">
          <Image src={product2} className=" h-auto" alt="product2" />
          <div className="w-[50%]">
            <p>
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <div className="my-5">
              <Button className="bg-slate-900 tracking-widest leading-5 bored-4  h-14 w-44 rounded-none shadow-none border-[#ddd] flex-wrap">
                See All Product
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
