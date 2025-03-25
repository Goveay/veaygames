import bubble from "@/public/images/abs-items/bubble.png";
import ellipse7 from "@/public/images/abs-items/ellipse-7.png";
import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "../PrimaryBtn";

const Banner = () => {
  return (
    <section className="banner-section index-two overflow-hidden" id="home">
      <div className="shape-area">
       
      </div>
      <div className="overlay overflow-hidden">
        <div className="banner-content position-relative">
          <div className="box-items d-inline-flex flex-wrap position-absolute ps-10 ">
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-50"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item active-item opacity-25"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>
            <div className="single-item"></div>

          </div>
          <div className="container position-relative cus-z1">
            <div className="row justify-content-between justify-content-center align-items-center">
              <div className="col-xl-6 col-lg-7">
                <div className="main-content pt-20" style={{ marginTop: '50px' }}>
                  <div className=" position-relative" style={{ top: '-120px' }}>
                    <h3 className="visible-slowly-bottom sub-title  ">
                      <span>Creativity Meets Adventure</span>                    </h3>

                     <h3>Taking Gaming to  <span>New Heights</span></h3>
                      
                  
                    <p className="fs-four text-white" style={{ top: '-120px' }}>
                    At Veay Games, we excel in delivering immersive experiences ,we invite you to explore a realm of creativity, fun, and epic adventures in every play.
                    </p>
                  </div>
                 {/* <PrimaryBtn text="Explore Our Games" href="game" />*/}
                </div>
              </div>
            </div>
            <div className="row pt-20">
              <div className="col-md-6 order-1 order-md-0">
               <div className="btn-item">
                  <Link
                    href="#"
                    className="d-center second py-14 position-relative">
                    <span className="d-center w-100">
                      Inquiry
                      <i className="material-symbols-outlined position-absolute">
                        {" "}
                        straight{" "}
                      </i>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
              <div className="btn-item">
                  <Link
                    href="game"
                    className="d-center py-14 position-relative">
                    <span className="d-center w-100">
                      explore our games
                      <i className="material-symbols-outlined position-absolute">
                        {" "}
                        straight{" "}
                      </i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
