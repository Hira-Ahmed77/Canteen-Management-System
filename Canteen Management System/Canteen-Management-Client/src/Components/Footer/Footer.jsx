import { Link } from "react-router-dom";
import OurSupport from "../OurSupport/OurSupport";
import { IoLogoInstagram } from "react-icons/io5";
import TermsAndConditionsPage from "./TermsAndConditionsPage";
import { useRef } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import CookiesPolicy from "./CookiesPolicy";

const Footer = () => {
  const modalContentRef1 = useRef(null);
  const modalContentRef2 = useRef(null);
  const modalContentRef3 = useRef(null);
  const showModalAndScrollToTop = () => {
    // Show modal
    const modal = document.getElementById("my_modal_1");
    if (modal) {
      modal.showModal();
    }

    // Scroll modal content to top
    if (modalContentRef1.current) {
      modalContentRef1.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  //
  const newShowModalAndScrollToTop = () => {
    // Show modal
    const modal = document.getElementById("my_modal_2");
    if (modal) {
      modal.showModal();
    }

    // Scroll modal content to top
    if (modalContentRef2.current) {
      modalContentRef2.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  //
  const newNewShowModalAndScrollToTop = () => {
    // Show modal
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.showModal();
    }

    // Scroll modal content to top
    if (modalContentRef3.current) {
      modalContentRef3.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <OurSupport></OurSupport>
      <div className=" bg-base-200 pb-8">
        <footer className="footer p-10 text-base-content">
          <div className="text-center lg:text-left mx-auto lg:mx-0 flex flex-col items-center">
            <div>
              <img
                className=" w-[160px] h-[60px]"
                src="https://i.ibb.co/8n3xxBS/Green-and-Black-Simple-Clean-Vegan-Food-Logo-1.png"
                alt=""
              />
            </div>

            <span className=" md:inline hidden">
              <span className=" flex items-center lg:gap-6 md:gap-2 xl:gap-6 2xl:gap-6">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
                <IoLogoInstagram className=" text-[30px]" />
              </span>
            </span>
          </div>
          <nav>
            <h6 className="footer-title border-b-2 border-[#ff9f0d]">
              SERVICES
            </h6>
            <a className="link link-hover">
              <Link to={"/shop"}>Shop</Link>
            </a>
            <a className="link link-hover">
              <Link to={"/blog"}>Blog</Link>
            </a>
            <a className="link link-hover">
              <Link to={"/orders"}>My Cart</Link>
            </a>
          </nav>
          <nav>
            <h6 className="footer-title border-b-2 border-[#ff9f0d]">
              COMPANY
            </h6>
            <a className="link link-hover">
              <Link to={"/getInTouch"}>Get In Touch</Link>
            </a>
            <a className="link link-hover">
              <Link to={"/about"}>About Us</Link>
            </a>
            <a className="link link-hover">
              <Link to={"/meetOurTeam"}> Meet Our Team</Link>
            </a>
          </nav>

          <nav>
            <h6 className="footer-title border-b-2 border-[#ff9f0d]">LEGAL</h6>
            <button
              className="link link-hover"
              onClick={showModalAndScrollToTop}
            >
              Terms and Conditions
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box" ref={modalContentRef1}>
                <TermsAndConditionsPage></TermsAndConditionsPage>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn bg-[#006bcb] text-white hover:bg-[#1659a6]">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>

            <button
              className="link link-hover"
              onClick={newShowModalAndScrollToTop}
            >
              Privacy Policy
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box" ref={modalContentRef2}>
                <PrivacyPolicy></PrivacyPolicy>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn bg-[#006bcb] text-white hover:bg-[#1659a6]">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>

            <button
              className="link link-hover"
              onClick={newNewShowModalAndScrollToTop}
            >
              Cookie policy
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box" ref={modalContentRef3}>
                <CookiesPolicy></CookiesPolicy>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn bg-[#006bcb] text-white hover:bg-[#1659a6]">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </nav>
        </footer>
        <hr className=" border border-[#ff9f0d] mx-10" />
        <p className=" text-center mt-8">
          Copyright © 2024 - All right reserved by Green Canteen
        </p>
      </div>
    </div>
  );
};

export default Footer;
