"use client";
import Link from "next/link";
import fav from "@/public/images/fav.png";
import logo from "@/public/images/logo-text.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import CartSidebar from "./CartSidebar";
import Sidebar from "./Sidebar";
import LoginModal from "./LoginModal";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const [searchBox, setSearchBox] = useState(false);
  const [cart, setCart] = useState(false);

  const cartItems = useAppSelector((state) => state.cart);
  const totolProducts = cartItems.products.reduce(
    (acc, product) => acc + product.quantity!,
    0
  );

  useEffect(() => {
    document.addEventListener("scroll", function () {
      if (window.scrollY > 600) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (window.scrollY > 50) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
        0;
      }
    });
  }, [scrolled]);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const path = usePathname();
  const homepage = path === "/" || path === "/index-2" || path === "/index-3";
  const ourServices =
    path === "/our-services-1" ||
    path === "/our-services-2" ||
    path === "/our-services-3" ||
    path === "/our-services-details" ||
    path === "/our-services-details-2";
  const pages =
    path == "/pricing-plan" ||
    path == "/store" ||
    path == "/shop-details-1" ||
    path == "/shop-details-2" ||
    path == "/cart" ||
    path == "/checkout" ||
    path == "/career" ||
    path == "/career-details" ||
    path == "/privacy-policy" ||
    path == "/terms-condition";
  return (
    <>
      {/* <div className="preloader align-items-center justify-content-center">
        <span className="loader"></span>
      </div> */}
      {/* <!-- end preloader --> */}

      {/* <!-- Scroll To Top Start--> */}
      <button
        onClick={scrollToTop}
        className={`scrollToTop d-none d-md-flex d-center ${
          scrolled && "active"
        }`}
        aria-label="scroll Bar Button">
        Back To Top
      </button>
      {/* <!-- Scroll To Top End --> */}

      {/* <!-- Start Custom Cursor --> */}
      <div className="mouse-follower">
        <span className="cursor-outline"></span>
        <span className="cursor-dot"></span>
      </div>
      {/* <!-- End Custom Cursor --> */}

      {/* <!-- header-section start --> */}
      <header
        className={`header-section header-menu ${
          headerFixed && "animated fadeInDown header-fixed"
        }`}>
        <nav className="navbar w-100 flex-nowrap  pr-2 py-3  navbar-expand-xl">
          <div
            onClick={() => setSidebar(!sidebar)}
            className="d-block d-md-none sidebar-close mobile-menu ms-3">
            <button className="d-center d-grid d-xl-none">
              <i className="material-symbols-outlined mat-icon fs-four">
                {" "}
                menu_open{" "}
              </i>
              <span className="fs-six">MENU</span>
            </button>
          </div>
          <Link
  href="/"
  className="navbar-brand ms-20 ms-xxl-15 d-flex align-items-center gap-2"
>
  {/* Mobilde gösterilecek, küçük logo */}
  <Image
    src={fav}
    alt="logo"
    className="d-block d-md-none "
    width="80"   // Mobilde daha küçük boyut
    height="40"
  />
   <Image
    src={logo}
    alt="logo-text"
    className="d-block d-md-none "
    width="60"
    height="30"
  />
  {/* Masaüstünde gösterilecek, büyük logo */}
  <Image
    src={fav}
    alt="logo"
    className="d-none d-md-block"
    width="120"  // Masaüstünde orijinal boyut
    height="40"
  />
  <Image
    src={logo}
    alt="logo-text"
    className="pt-2 d-none d-md-block"
    width="120"
    height="40"
  />
</Link>

          <div
            className="collapse navbar-collapse d-flex gap-10 w-100 justify-content-end px-8 pe-10"
            id="navbar-content">
            <div className="contact-info ms-xl-0 ms-xxl-5 d-none d-sm-flex align-items-center gap-2">
            </div>
            <ul className="navbar-nav d-xl-flex d-none gap-7 py-4 py-lg-0 m-auto pe-20 align-self-center">
            
              <li className="dropdown show-dropdown">
               
              <Link className="dropdown-item" href="#home" >

                <button
                
                  type="button"
                  aria-label="Navbar Dropdown Button"
                  onClick={() => console.log("first")}
                  className={` dropdown-nav ${
                    homepage ? "active" : ""
                  }`}>
                  Home
                </button>
                </Link>
            
              </li>
              <li className="dropdown show-dropdown">
                <a href="#service">
                <button
                  type="button"
                  aria-label="Navbar Dropdown Button"
                  className={`dropdown-toggle dropdown-nav ${
                    ourServices && "active"
                  }`}>
                  Services
                </button>
                </a>
                <ul className="dropdown-menu">
                  <li>  
                   
                    <Link href="/#service" className="dropdown-item">
                    Game Development
                    </Link>
              
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/#service">
                    Vr & Ar Solutions                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/#service">
                    Advertising & Promotion
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/#service">
iGaming Solutions
</Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/#service">
                      Game Asset Sales
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown show-dropdown">
              <a href="#games">

                <button
                  type="button"
                  aria-label="Navbar Dropdown Button"
                  className={`dropdown-toggle dropdown-nav ${
                    (path == "/game" || path == "/#games") && "active"
                  }`}>
                  games
                </button>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="/#games">
                      Doxa 
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/#games">
                      Tavla3D
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/#games">
                    Noctavi
                    </Link>
                  </li><li>
                    <Link className="dropdown-item" href="/#games">
                      Worldrule
                    </Link>
                  </li>
                </ul>
              </li>
            
              {/*<li>
                <Link
                  className={`dropdown-nav ${path == "/about-us" && "active"}`}
                  href="/store">
                      Store
                </Link>
              </li>
              */}

              <li>
                 <a href="#contact"
                  className={`dropdown-item ${path == "/contact" && "active"}`}
                  >
                  Contact
                </a>
              </li>
            </ul>
            <div className="right-area position-relative d-flex gap-3 gap-xxl-6 align-items-center">
              <div className={`single-item ${searchBox && "active"}`}>
                <div className="cmn-head ">
                  <div
                    className="icon-area d-center position-relative d-none d-md-block "
                    onClick={() => setSearchBox(!searchBox)}>
                    <i className="material-symbols-outlined mat-icon fs-five ">
                      search
                    </i>
                  </div>
                </div>
                <div className="main-area p-5">
                  <h5 className="mb-2">Search</h5>
                  <form action="#">
                    <div className="input-area mt-6 p-4 d-flex align-items-center">
                      <input type="text" placeholder="Enter Your Email" />
                      <div className="btn-area">
                        <button className="box-style btn-box border-re py-1 p-2">
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="single-item">
                <div className="cmn-head">
                  <div className="icon-area d-center position-relative d-none d-md-block">
                    <i className="material-symbols-outlined mat-icon fs-five">
                      favorite
                    </i>
                  </div>
                </div>
              </div>
              <div className="single-item">
                <div className="cmn-head">
                  <button
                    type="button"
                    className="icon-area d-center position-relative"
                    data-bs-toggle="modal"
                    data-bs-target="#loginMod">
                    <i className="material-symbols-outlined mat-icon fs-five">
                      person
                    </i>
                  </button>
                </div>
              </div>
              <div className={`single-item cart-area ${cart && "active"}`}>
                <div className="cmn-head">
                  <button
                    type="button"
                    aria-label="Shopping Button"
                    onClick={() => setCart(!cart)}
                    className="icon-area d-center position-relative d-none d-md-block">
                    <i className="material-symbols-outlined mat-icon fs-five">
                      shopping_bag
                    </i>
                    <span className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-primary">
                      {totolProducts}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </div>
                <CartSidebar setCart={setCart} />
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- header-section end --> */}

      {/* <!-- Login Registration start --> */}
      <LoginModal />
      {/* <!-- Login Registration end --> */}

      {/* <!-- Sidebar Menu start --> */}
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
    </>
  );
};

export default Header;
