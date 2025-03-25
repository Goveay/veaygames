import Link from "next/link";
import { useState } from "react";
import Select from "react-select";
type sideBarProps = {
  sidebar: boolean;
  setSidebar: (open: boolean) => void;
};
const Sidebar = ({ sidebar, setSidebar }: sideBarProps) => {
  const [dropdown, setDropdown] = useState<null | number>(null);
  const [subMenu, setSubmenu] = useState<null | number>(null);
  const options = [
    { value: "English", label: "Eng" },
    { value: "Bangla", label: "Ban" },
    { value: "Hindi", label: "Hin" },
  ];
  const selectStyles = {
    control: (styles: any) => ({
      ...styles,
      height: "40px",
      width: "60px",
      backgroundColor: "transparent",
      color: "red",
      border: "0",
      boxShadow: "0",
    }),
    option: (styles: any, { isSelected }: { isSelected: any }) => ({
      ...styles,
      color: isSelected ? "#fff" : "#000",
      padding: "0",
      textAlign: "center",
      backgroundColor: isSelected ? "#161829" : "white",
      "&:hover": { backgroundColor: "#161829", color: "#fff" },
    }),
    placeholder: (styles: any) => ({ ...styles, color: "#fff" }),
    singleValue: (styles: any) => ({ ...styles, color: "#fff" }),
  };
  return (
    <div className={`sidebar-wrapper ${sidebar ? "sidebar-active" : ""}`}>
      <div className="position-relative">
        <div className="side-menubar py-6 d-flex flex-column justify-content-between align-items-center d-block d-md-none">
          <div
            onClick={() => setSidebar(!sidebar)}
            className="sidebar-close d-none d-xl-block">
            <button className="d-center d-grid">
              <i className="material-symbols-outlined mat-icon fs-three">
                {sidebar ? "close" : "menu_open"}
              </i>
              <span>MENU</span>
            </button>
          </div>
          <ul className="d-grid gap-4 social-area">
            <li>
              <Link
                href="https://www.facebook.com"
                aria-label="Facebook"
                className="d-center">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com"
                aria-label="Instagram"
                className="d-center">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com"
                aria-label="Linkedin"
                className="d-center">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com"
                aria-label="Twitter"
                className="d-center">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
          </ul>
          <div className="bottom-area">
            <Select
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: () => null,
              }}
              styles={selectStyles}
              menuPlacement="top"
              options={options}
              defaultValue={options[0]}
            />
          </div>
        </div>
        <div className="sidebar-content d-center flex-columnn start-0 ">
          <div className="header-section d-block ">
            <div className="navbar bg-transparent w-100 mx-4">
              <ul className="navbar-nav d-xl-flex gap-2 gap-md-5 py-4 py-lg-0 px-4 px-lg-0 align-self-center">
                <li className="dropdown show-dropdown">
                <Link className="dropdown-item" href="#home" >
                  <button
                    type="button"
                 
                    className="dropdown-nav fs-three heading"
                    onClick={() => setSidebar(!sidebar)}
                    
                    >
                    Home
                  </button>
                  </Link>
                </li>
                <li className="dropdown show-dropdown">
                <Link className="dropdown-item" href="#service" >
                  <button
                    type="button"
                 
                    className="dropdown-nav fs-three heading"
                    onClick={() => setSidebar(!sidebar)}
                    
                    >
                    Services
                  </button>
                  </Link>
                </li>
                <li className="dropdown show-dropdown">
                <Link className="dropdown-item" href="/#games" >
                  <button
                    type="button"
                 
                    className="dropdown-nav fs-three heading"
                    onClick={() => setSidebar(!sidebar)}
                    
                    >
                    games
                  </button>
                  </Link>
                </li>
                <li className="dropdown show-dropdown">
                <Link className="dropdown-item" href="#contact" >
                  <button
                    type="button"
                 
                    className="dropdown-nav fs-three heading"
                    onClick={() => setSidebar(!sidebar)}
                    
                    >
                    Contact
                  </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
            
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
