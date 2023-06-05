import Image from "next/image";
import event from "./../../assets/event1.webp";
export default function page() {
  return (
    <div className="mt-10">
      <h6 className="text-blue-600 font-semibold text-center">PROMOTIONS</h6>
      <h6 className="text-black font-semibold text-center text-3xl mt-2">
        Our Promotions Events
      </h6>
      <div className="md:flex md:flex-row gap-5  ">
        <div className="flex flex-col w-full gap-y-5">
          <div className="bg-[#d6d6d8] h-56 w-full p-8 flex items-center  overflow-hidden text-lg leading-0">
            <div>
              <h1 className="text-3xl font-bold ">
                GET UP <span className="text-4xl"> TO 60%</span>{" "}
              </h1>
              for the sumer seasion
            </div>
            <div className="flex justify-center items-center">
              <Image src={event} width={500} height={700} alt="" />
            </div>
          </div>
          <div className="bg-[#212121] h-56 w-full text-center p-10 text-white">
            <h1 className="text-4xl font-bold ">GET 30% Off</h1>
            <h1 className="mt-2 ">USE PROMO CODE</h1>
            <button className="bg-slate">DINEWEEKENDSALE</button>
          </div>
        </div>
        <div className="flex flex-row w-full gap-x-5  ">
          <div className="bg-[#efe1c7] h-122 w-full">x</div>
          <div className="bg-[#d6d6d8] h-122 w-full">zx</div>
        </div>
      </div>
    </div>
  );
}
