import React from "react";
import logo from "../assets/vector.svg";

function Footer() {
  return (
    <footer className="bg-[#55E6A5] text-black py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">

        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Logisti logo" className="w-8 h-8" />
            <span className="font-bold text-xl">Logisti</span>
          </div>
          <p className="text-sm max-w-xs mb-6">
            Our team has a successful track record of helping brands scale
            profitably based high-performing strategies.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full hover:opacity-80"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full hover:opacity-80"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
            <a
              href="#"
              className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full hover:opacity-80"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full hover:opacity-80"
            >
              <i className="fab fa-dribbble"></i>
            </a>
          </div>
        </div>


        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Pricing Plans</a></li>
          </ul>
        </div>


        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Style Guide</a></li>
            <li><a href="#">License</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Client Say</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>


        <div>
          <h4 className="font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-2 text-sm">
            <li>Add: Sunamganj, Sylhet, Bangladesh</li>
            <li>
              Email:{" "}
              <a href="mailto:shorifminahbdofficial@gmail.com" className="underline">
                shorifminahbdofficial@gmail.com
              </a>
            </li>
            <li>Call: +8801316203355</li>
          </ul>
          <button className="bg-black text-white px-6 py-2 mt-4 rounded-full text-sm font-medium hover:opacity-80">
            LET'S TALK →
          </button>
        </div>
      </div>


      <div className="mt-12 border-t border-black/30 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Logisti. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;