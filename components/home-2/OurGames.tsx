import { gameTabHome2 } from "@/public/data/gametabHome2";
import shape1 from "@/public/images/abs-items/our-games-shape-1.png";
import shape2 from "@/public/images/abs-items/our-games-shape-2.png";
import shape3 from "@/public/images/abs-items/our-games-shape-3.png";
import shape4 from "@/public/images/abs-items/our-games-shape-4.png";

import appStore from "@/public/images/appstore.webp";
import googlePlay from "@/public/images/googleplay.webp";
import amazon from "@/public/images/amazonstore.png";
import ModalVideo from "react-modal-video";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const OurGames = () => {
  const [isOpen, setOpen] = useState(false);
  const [active, setActive] = useState(1);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const handleMouseMove = (e: any) => {
    setX(e.nativeEvent.offsetX);
    setY(e.nativeEvent.offsetY);
  };
  const style = {
    "--x": `${x}px`,
    "--y": `${y}px`,
  } as React.CSSProperties;
  return (
    <section className="our-games overflow-hidden index-two position-relative pt-100 pb-120" id="games">
      {/*<div className="shape-area">
        <Image src={shape1} className="shape-1" alt="icon" />
        <Image src={shape2} className="shape-2" alt="icon" />
        <Image src={shape3} className="shape-3" alt="icon" />
        <Image src={shape4} className="shape-4" alt="icon" />
      </div>*/}
      <div className="container singletab position-relative cus-z1">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className="section-text text-center">
              <h4 className="sub-title">
                Unlock a World of <span>Gaming Possibilities,</span> Full
                Immersion
              </h4>
              <span className="fs-two heading mb-6">
                Join <span>Gaming Community,</span> Explore Virtual World
                Boundaries
              </span>
              <p>
                Join the revolution in gaming and experience the thrill of the
                game like never before, with our advanced technology and dynamic
                gameplay.
              </p>
            </div>
          </div>
        </div>
        
       
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="tabcontents visible-from-bottom">
              {gameTabHome2.map((item) => (
                <div
                  key={item.id}
                  className={`tabitem ${active == item.id && "active"}`}>
                  <div className="row cus-mar">
                    {item.items.map((card) => (
                      <div key={card.id} className="col-md-6">
                        <div className="single-box">
                          <div className="position-relative d-center">
                            <span className="feature-tag start d-center position-absolute">
                              Feature
                            </span>
                            <Image
                              src={card.img}
                              className="w-100 thumb-img"
                              alt="sec-img"
                            />
                            <span
                              onClick={() => setOpen(false)}
                              onMouseMove={handleMouseMove}
                              style={style}
                              className="box-style pointer btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase d-center position-absolute">
                              Play
                            </span>
                          </div>
                          <div className="info-area position-relative p-3 p-lg-5">
                            <div className="d-flex align-items-end gap-4 gap-sm-8">
                              <div className="img-area">
                                <Image src={card.imglogo} alt="image" />
                              </div>
                              <div className="info-area">
                                <Link href="game-details">
                                  <h3 className="visible-slowly-bottom mb-4">
                                  {card.title}
                                  </h3>
                                </Link>
                                {/*<ul className="d-flex flex-wrap fs-seven align-items-center gap-5 gap-md-10">
                                  <li>Horror Adventure</li>
                                  <li>Mobile</li>
                                  <li>Action RPG</li>
                                  <li>PC</li>
                                </ul>*/}
                              </div>
                            </div>
                            <div className="review-box mt-5 mt-md-8 mb-6 mb-md-10 w-100 p-2 p-sm-4 d-center gap-3 justify-content-between">
                              <div className="single-area d-flex align-items-center gap-2">
                                <div className="d-flex gap-2 align-items-center mb-1">
                                  <i className="material-symbols-outlined mat-icon">
                                    star
                                  </i>
                                  <h4 className="fs-four">{card.rating}</h4>
                                </div>
                                <p className="fs-seven"> Reviews</p>
                              </div>
                              <div className="single-area d-grid d-sm-flex gap-2 align-items-center">
                                <h4 className="fs-four mb-1">{card.downloads}</h4>
                                <p className="fs-seven">Downloads</p>
                              </div>
                            </div>
                            <div className="app-download d-flex gap-4 align-items-center">
                              <Link
                                href="https://www.apple.com/app-store/"
                                className="w-100">
                                <Image
                                  src={appStore}
                                  className="w-100"
                                  alt="Image"
                                />
                              </Link>
                              <Link
                                href="https://play.google.com/"
                                className="w-100">
                                <Image
                                  src={googlePlay}
                                  className="w-100"
                                  alt="Image"
                                />
                              </Link>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                 
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="IaT4DneyKLc"
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default OurGames;
