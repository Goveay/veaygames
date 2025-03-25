import star from "@/public/images/abs-items/star.png";
import servicesthumb from "@/public/images/services-thumb.png";
import Image from "next/image";
import Link from "next/link";

const Service = () => {
  return (
    <section className="our-services index-two pt-120 pb-120" id="service">
      <div className="container position-relative">
    
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="section-header">
              <h4 className="sub-title">
                Bringing Your <span> Vision</span> to Life
              </h4>
              <span className="fs-two heading mb-6">
              Innovative Digital Solutions
               for 
              <span>&nbsp;  Gaming & Beyond</span> 
              
              </span>
              <p>
              Our studio offers a diverse range of high-quality services, including game development, asset creation, iGaming solutions, and VR & AR experiences. We empower businesses with innovative and customized solutions for various platforms and industries.
              </p>
            </div>
            <div className="services-thumb d-inline-block position-relative">
              <div className="thumb">
                <Image src={servicesthumb} alt="Image" />
              </div>
             
            </div>
          </div>
          <div className="col-lg-6 mt-10 mt-lg-0" >
            <div className="cus-mar">
              <div className="single-box box-style box-second py-5 py-sm-8 d-flex gap-4 gap-md-6 justify-content-between align-items-center">
                <div className="content-box" >
                  <Link href="/">
                    <h3 className="visible-slowly-bottom mb-3">
                      Game Development
                    </h3>
                  </Link>
                  <p>
                  We create unique and engaging games for various platforms, focusing on mobile and PC. Additionally, we offer high-quality assets for Unity and Unreal Engine, empowering developers to build amazing experiences.
                  </p>
                </div>
                <Link
                  href="/"
                  className="end-area d-center">
                  <i className="material-symbols-outlined"> call_made </i>
                </Link>
              </div>
              <div className="single-box box-style box-second py-5 py-sm-8 d-flex gap-4 gap-md-6 justify-content-between align-items-center">
                <div className="content-box">
                  <Link href="/">
                    <h3 className="visible-slowly-bottom mb-3">
                    Advertising & Promotion                    </h3>
                  </Link>
                  <p>
                  Promote your brand effectively through our games. Reach your target audience with engaging in-game advertising and boost your brand visibility.
                  </p>
                </div>
                <Link
                  href="/"
                  className="end-area d-center">
                  <i className="material-symbols-outlined"> call_made </i>
                </Link>
              </div>
              <div className="single-box box-style box-second py-5 py-sm-8 d-flex gap-4 gap-md-6 justify-content-between align-items-center">
                <div className="content-box">
                  <Link href="/">
                    <h3 className="visible-slowly-bottom mb-3">
                    iGaming Solutions
                    </h3>
                  </Link>
                  <p>
                  We provide comprehensive consulting and turnkey solutions for online casinos, including slot game integration and optional betting systems. Elevate your iGaming platform with our expert services.
                  </p>
                </div>
                <Link
                  href="/"
                  className="end-area d-center">
                  <i className="material-symbols-outlined"> call_made </i>
                </Link>
              </div>
              <div className="single-box box-style box-second py-5 py-sm-8 d-flex gap-4 gap-md-6 justify-content-between align-items-center">
                <div className="content-box">
                  <Link href="/">
                    <h3 className="visible-slowly-bottom mb-3">
                      Vr & Ar Solutions
                    </h3>
                  </Link>
                  <p>
                  We offer cutting-edge VR and AR solutions for various industries. From creating AR product models for retail to developing immersive VR tours for real estate and construction, we bring your vision to life.
                  </p>
                </div>
                <Link
                  href="/"
                  className="end-area d-center">
                  <i className="material-symbols-outlined"> call_made </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
