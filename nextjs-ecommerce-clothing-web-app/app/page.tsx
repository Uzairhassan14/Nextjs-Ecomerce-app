import Image from "next/image";
import logo from "./assets/Logo.webp";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

const Home = () => {
  return
  
  <footer className="footer">
    <footer>
      <div className="footer flex justify-evenly">
        <div className="logo w-[25%]">
          <Image src={logo} alt="logo" />
          <p className="mt-[25px]">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="icon-container flex justify-between mt-[25px]">
            <div className="h-12 w-12 bg-slate-300  rounded-lg cursor-pointer grid place-content-center">
              <Facebook className="" />
            </div>
            <div className="h-12 w-12 bg-slate-300  rounded-lg cursor-pointer grid place-content-center">
              <Linkedin className="" />
            </div>
            <div className="h-12 w-12 bg-slate-300  rounded-lg cursor-pointer grid place-content-center">
              <Github className="" />
            </div>
          </div>
        </div>
        <div className="footer-links">
          <h3 className="text-[#666] font-bold">Company</h3>
          <ul>
            <li className="mt-[25px] text-[#666]">About</li>
            <li className="leading-40 mt-4 text-[#666]">Terms of Use</li>
            <li className="leading-40 mt-4 text-[#666]">Privacy Policy</li>
            <li className="leading-40 mt-4 text-[#666]">How it Works</li>
            <li className="leading-40 mt-4 text-[#666]">Contact Us</li>
          </ul>
        </div>
        <div className="footer-links">
          <h3 className="text-[#666] font-bold">Support</h3>
          <ul>
            <li className="leading-40 mt-4 text-[#666]">Support Carrer</li>
            <li className="leading-40 mt-4 text-[#666]">Terms of Use</li>
            <li className="leading-40 mt-4 text-[#666]">24h Service</li>
          </ul>
        </div>
        <div className="footer-links">
          <h3 className="text-[#666] font-bold">Contact</h3>
          <ul>
            <li className="leading-40 mt-4 text-[#666]">Whatsapp</li>
            <li className="leading-40 mt-4 text-[#666]">Support 24h</li>
          </ul>
        </div>
      </div>
      <div className="copyright"></div>
    </footer>
  </footer>
};


