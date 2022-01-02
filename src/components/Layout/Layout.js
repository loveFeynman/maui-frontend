import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slide from "@material-ui/core/Slide";
import useStyles from "./styles";
import Sidebar from "../Sidebar";
import Header from "../Header";
import Footer from "../Footer/footer";
import Mobileheader from "../Mobileheader";
import Stocks from "../Stocks";
// pages
import Dashboard from "../../pages/dashboard";
import Deposit from "../../pages/deposit";
import Earn from "../../pages/earn";
import Borrow from "../../pages/borrow";
import Sidestocks from "../../pages/stocks";
import Cards from "../../pages/cards";
import Settings from "../../pages/settings";

function Layout(props) {
  var classes = useStyles();
  const dispatch = useDispatch();
  const pagestate = useSelector((state) => state.sidebar.listlabel);
  var [isPermanent, setPermanent] = useState(true);
  const key = useSelector((state) => state.user.user.accAddress);
  console.log(key);
  // connect a wallet when mounting
  useEffect(() => {
    dispatch({ type: "WALLET_INFO", payload: key });
  }, []);

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <div style={{ width: "100%", background: "#EDEDF9" }}>
      <ToastContainer />
      <div className={classes.root}>
        <Sidebar />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {isPermanent ? <Header /> : <Mobileheader />}
          <div className={classes.dashboard}>
            <div
              className={
                pagestate === "Stocks" ? classes.stocksboard : classes.mainboard
              }
            >
              <Slide
                direction={pagestate === "Dashboard" ? "up" : "down"}
                in={pagestate === "Dashboard"}
                mountOnEnter
                unmountOnExit
              >
                <div>
                  <Dashboard />
                </div>
              </Slide>
              <Slide
                direction={pagestate === "Deposit" ? "up" : "down"}
                in={pagestate === "Deposit"}
                mountOnEnter
                unmountOnExit
              >
                <div>
                  <Deposit />
                </div>
              </Slide>
              <Slide
                direction={pagestate === "Earn" ? "up" : "down"}
                in={pagestate === "Earn"}
                mountOnEnter
                unmountOnExit
              >
                <div>
                  <Earn />
                </div>
              </Slide>
              <Slide
                direction={pagestate === "Borrow" ? "up" : "down"}
                in={pagestate === "Borrow"}
                mountOnEnter
                unmountOnExit
              >
                <div>
                  <Borrow />
                </div>
              </Slide>
              <Slide
                direction={pagestate === "Stocks" ? "up" : "down"}
                in={pagestate === "Stocks"}
                mountOnEnter
                unmountOnExit
              >
                <div>
                  <Sidestocks />
                </div>
              </Slide>
              <Slide
                direction={pagestate === "Cards" ? "up" : "down"}
                in={pagestate === "Cards"}
                mountOnEnter
                unmountOnExit
              >
                <div>
                  <Cards />
                </div>
              </Slide>
              <Slide
                direction={pagestate === "Settings" ? "up" : "down"}
                in={pagestate === "Settings"}
                mountOnEnter
                unmountOnExit
              >
                <div>
                  <Settings />
                </div>
              </Slide>
            </div>
            <Slide
              direction={pagestate === "Stocks" ? "down" : "up"}
              in={pagestate !== "Stocks"}
              mountOnEnter
              unmountOnExit
            >
              <div>
                <Stocks />
              </div>
            </Slide>
            {!isPermanent && <Footer />}
          </div>
        </div>
      </div>
    </div>
  );
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var isSmallScreen = windowWidth < 800;
    if (isSmallScreen && isPermanent) {
      setPermanent(false);
      dispatch({
        type: "DEV_CHANGED",
        dev: false,
      });
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
      dispatch({
        type: "DEV_CHANGED",
        dev: true,
      });
    }
  }
}

export default Layout;
