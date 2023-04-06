import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import "../../App.css";
import Cursor from "../../CustomCursor";
import CustomCursor from "../../CustomCursor";
import Footer from "../Footer/Footer";
import logo from "../../images/logo.svg";
// import Footer from "./Footer";

const Container = ({ children }) => {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    window.onload = () => {
      const timeoutId = setTimeout(() => {
        // setIsLoading(false);
        setLoaded(false);
      }, 3000); // Change 3000 to the duration you want the loading screen to show.
      return () => clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="cus-cur">
        <CustomCursor />
      </div>
      <div
        className="wrapper-container"
        style={{
          backgroundColor: "#1F2123",
        }}
      >
        {children}
      </div>
      <Footer />
    </>
    // <>
    //   {loaded == true ? (
    //     <div className="loading-screen">
    //       <div className="loading-line"></div>
    //       <img src={logo} className="loading-logo" alt="logo" />
    //     </div>
    //   ) : (
    //     <>
    //       <Navbar />
    //       <div className="cus-cur">
    //         <CustomCursor />
    //       </div>
    //       <div
    //         className="wrapper-container"
    //         style={{
    //           backgroundColor: "#1F2123",
    //         }}
    //       >
    //         {children}
    //       </div>
    //       <Footer />
    //     </>
    //   )}
    // </>
  );
};

export default Container;
