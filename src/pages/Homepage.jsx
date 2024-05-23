import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, FormControl, Button, Dropdown } from "react-bootstrap";
import Logo from "../images/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Global.css";

const Homepage = () => {
  return (
    <>
      <div className="d-flex justify-content-around mt-4 px-5 border-bottom-dark">
        <div className="border-right-dark fs-14">
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className="pr-3" />
          FREE SHIPPING ON ALL ORDERS
        </div>
        <div className="border-right-dark fs-14">
          <FontAwesomeIcon icon="fa-solid fa-money-bill" className="pr-3" />
          100% MONEY BACK GAURANTEE
        </div>
        <div className="fs-14">
          <FontAwesomeIcon icon="fa-solid fa-clock" className="pr-3" />
          ONLINE SUPPORT 24/7
        </div>
      </div>

      <div className="d-flex flex-direction-row logo-div">
        <img src={Logo} alt="logo" />
        <div className=" d-flex justify-content-around logo-div">
          <Form className="d-flex justify-content-around form">
            <FormControl type="text" placeholder="Search" className="input" />
            <div className="outer-for-div">
              <div className="for-divider"></div>
            </div>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className="dropdown">
                All Categories
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button className="button">
              <FontAwesomeIcon icon="fa-search" />
            </Button>
          </Form>
          <div className="img1">
            <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
          </div>
          <div className="img2">
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
          </div>
          <div className="img3">
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </div>
          <div className="img4">
            <FontAwesomeIcon icon="fa-brands fa-youtube" />
          </div>
        </div>
      </div>

      <section>
        <header className="menu d-flex">
          <ul className="d-flex list-unstyled p-0 m-0">
            <li className="menu-items" href="">
              {" "}
              HOME
            </li>
            <li className="menu-items" href="">
              SHOP
            </li>
            <li className="menu-items" href="">
              FEATURE
            </li>
            <li className="menu-items" href="">
              MEGA GROUP
            </li>
            <li className="menu-items" href="">
              ABOUT
            </li>
            <li className="menu-items" href="">
              BLOG
            </li>
            <li className="menu-items" href="">
              CONTACT
            </li>
          </ul>
          <button className="button">
            <FontAwesomeIcon
              icon="fa-solid fa-cart-shopping"
              className="pr-3"
            />{" "}
            Shopping Cart (0)
          </button>
          {/* <div class="ICON">
                <ion-icon name="menu-outline" class="Icon"></ion-icon>
                <ion-icon name="close-outline" class="Icon"></ion-icon>

            </div> */}
        </header>
      </section>
      <div className="main-section">
        <div className="text-center">
          <div>
            <h3 className="fs-25">NEW!</h3>
            <h1 className="fs-86">COLLECTION 2016</h1>
            <h4 className="d-flex justify-content-center align-middle">
              <div className="horizontal-line-white"></div>for
              <div className="horizontal-line-white"></div>
            </h4>
            <h2>MEN & WOMEN</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
