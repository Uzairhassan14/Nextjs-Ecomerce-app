import Image from "next/image";
import logo from "./../../assets/Logo.webp";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

const page = () => {  
  return (
    <footer className="wrapper-footer mb-10">
        <div className=" md:flex md:justify-evenly mx-10 lg:mx-0  flex-wrap">
          <div className="logo md:w-[25%]">
            <Image src={logo} alt="logo" />
            <p className="mt-[25px]">
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials made.
            </p>
            <div className="icon-container flex gap-2 mt-[25px]  mb-10 pr-10" >
              <div className="h-12 w-12 bg-[#f1f1f1]  rounded-lg cursor-pointer grid place-content-center">
                <Facebook className="" />
              </div>
              <div className="h-12 w-12 bg-[#f1f1f1]  rounded-lg cursor-pointer grid place-content-center">
                <Linkedin className="" />
              </div>
              <div className="h-12 w-12 bg-[#f1f1f1]  rounded-lg cursor-pointer grid place-content-center">
                <Github className="" />
              </div>
            </div>
          </div>
          <div className="footer-links">
            <h3 className="text-[#666] font-bold">Company</h3>
            <ul>
              <li className="leading-40 mt-[25px] text-[#666] cursor-pointer">About</li>
              <li className="leading-40 mt-4 text-[#666] cursor-pointer">Terms of Use</li>
              <li className="leading-40 mt-4 text-[#666] cursor-pointer">Privacy Policy</li>
              <li className="leading-40 mt-4 text-[#666] cursor-pointer">How it Works</li>
              <li className="leading-40 mt-4 text-[#666] cursor-pointer">Contact Us</li>
            </ul>
          </div>
          <div className="footer-links">
            <h3 className="leading-40 text-[#666] font-bold">Support</h3>
            <ul>
              <li className="leading-40 mt-4 text-[#666] cursor-pointer">Support Carrer</li>
              <li className="leading-40 mt-4 text-[#666] cursor-pointer">Terms of Use</li>
              <li className="leading-40 mt-4 text-[#666] cursor-pointer">24h Service</li>
            </ul>
          </div>
          <div className="footer-links">
            <h3 className="leading-40 text-[#666] font-bold">Contact</h3>
            <ul>
              <li className="leading-40 mt-4 text-[#666] cursor-pointer">Whatsapp</li>
              <li className="leading-40 mt-4 text-[#666] ">Support 24h</li>
            </ul>
          </div>
        </div>
        <div className="copyright mt-[6rem] border-t-2  border-slate-300 ">
          <div className="mx-10 md:flex md:justify-evenly flex-wrap-wrap">
          <p className="md:mx-[7rem] mt-5">Copyright © 2022 Dine Market</p>
          <p className="md:mx-[7rem] mt-5">
            Design by. <strong> Weird Design Studio</strong>
          </p>
          <p className="md:mx-[7rem] mt-5">
            Code by. <strong>uzairhassan14 on github</strong>
          </p>
          </div>
        </div>
    </footer>
  );
};

export default page;
