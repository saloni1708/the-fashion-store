import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListGroup, Row, Col } from "react-bootstrap";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Global.css";
import CIRCLELEFT from "../images/chevron-circle-left.png";
import CIRCLERIGHT from "../images/chevron-circle-right.png";

const Categories = () => {
  return (
    <>
      <div>
        <ListGroup className="d-flex flex-row mx-3 justify-content-evenly my-3">
          <ListGroup.Item className="listGroup-items">
            <span>
              Go quickly to <FontAwesomeIcon icon={faCircleArrowRight} />
            </span>
          </ListGroup.Item>
          <ListGroup.Item className="listGroup-items">Women</ListGroup.Item>
          <ListGroup.Item className="listGroup-items">:</ListGroup.Item>
          <ListGroup.Item className="listGroup-items">Men</ListGroup.Item>
          <ListGroup.Item className="listGroup-items">:</ListGroup.Item>
          <ListGroup.Item className="listGroup-items">
            Accessories
          </ListGroup.Item>
          <ListGroup.Item className="listGroup-items">:</ListGroup.Item>
          <ListGroup.Item className="listGroup-items">Fashion</ListGroup.Item>
          <ListGroup.Item className="listGroup-items">:</ListGroup.Item>
          <ListGroup.Item className="listGroup-items">Features</ListGroup.Item>
          <ListGroup.Item className="listGroup-items">:</ListGroup.Item>
          <ListGroup.Item className="listGroup-items">Clothings</ListGroup.Item>
          <ListGroup.Item className="listGroup-items">:</ListGroup.Item>
          <ListGroup.Item className="listGroup-items">
            Bags and Wallets
          </ListGroup.Item>
          <ListGroup.Item className="listGroup-items">:</ListGroup.Item>
          <ListGroup.Item className="listGroup-items">
            Fragrances
          </ListGroup.Item>
          <ListGroup.Item className="listGroup-items">:</ListGroup.Item>
          <ListGroup.Item className="listGroup-items">
            Caps & Hats
          </ListGroup.Item>
        </ListGroup>

        <div className="d-flex justify-content-between">
          <div className="grey-box"></div>
          <div className="image-with-text card-image1">
            <h3 className="fs-25 mb-4">CLOTHES</h3>
            <button className="button mt-4">Click here</button>
          </div>
          <div className="image-with-text card-image2">
            <h3 className="fs-25 mb-4">FOOTWEAR</h3>
            <button className="button mt-4">Click here</button>
          </div>
          <div className="image-with-text card-image3">
            <h3 className="fs-25 mb-4">HAND BAGS</h3>
            <button className="button mt-4">Click here</button>
          </div>
          <div className="box"></div>
        </div>

        <div className="horizontal-margin mt-5 d-flex justify-content-between align-middle">
          <div>
            <h3>MEN</h3>
            <div className="horizontal-line-black"></div>
          </div>
          <div className="d-flex">
            <img className="arrow-icon" src={CIRCLELEFT} />
            <img className="arrow-icon" src={CIRCLERIGHT} />
          </div>
        </div>

        <div className="d-flex justify-content-between mt-5">
          <div className="box"></div>
          <div className="image-with-text card-image4">
            <h3 className="fs-25 mb-4">FOR MEN</h3>
            <button className="button mt-4">More</button>
          </div>
          <div>
            <div className="card-image5">
              <p className="sale-badge badge-positioning">SALE!</p>
            </div>
            <p className="fs-15 my-2">Printer Chiffon Dress</p>
            <div className="horizontal-line-grey"></div>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column">
                <b className="text-color fs-20 my-1">E 61.19</b>
                <div class="d-flex flex-row">
                  <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                  <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                  <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                  <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                  <FontAwesomeIcon icon="fa fa-star" />
                </div>
              </div>
              <button className="button mt-2">Add to cart</button>
            </div>
          </div>
          <div>
            <div className="card-image6">
              <p className="new-badge badge-positioning">NEW!</p>
            </div>
            <p className="fs-15 my-2">Printer Chiffon Dress</p>
            <div className="horizontal-line-grey"></div>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column">
                <b className="text-color fs-20 my-1">E 61.19</b>
                <div class="d-flex flex-row">
                  <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                  <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                  <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                  <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                  <FontAwesomeIcon icon="fa fa-star" />
                </div>
              </div>
              <button className="button mt-2">Add to cart</button>
            </div>
          </div>
          <div className="grey-box"></div>
        </div>
      </div>

      <div className="horizontal-margin mt-5 d-flex justify-content-between align-middle">
        <div>
          <h3>WOMEN</h3>
          <div className="horizontal-line-black"></div>
        </div>
        <div className="d-flex">
          <img className="arrow-icon" src={CIRCLELEFT} />
          <img className="arrow-icon" src={CIRCLERIGHT} />
        </div>
      </div>

      <div className="d-flex justify-content-between mt-5">
        <div className="grey-box"></div>
        <div>
          <div className="card-image7"></div>
          <p className="fs-15 my-2">Printer Chiffon Dress</p>
          <div className="horizontal-line-grey"></div>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <b className="text-color fs-20 my-1">E 61.19</b>
              <div class="d-flex flex-row">
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon icon="fa fa-star" />
              </div>
            </div>
            <button className="button mt-2">Add to cart</button>
          </div>
        </div>
        <div>
          <div className="card-image8"></div>
          <p className="fs-15 my-2">Printer Chiffon Dress</p>
          <div className="horizontal-line-grey"></div>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <b className="text-color fs-20 my-1">E 61.19</b>
              <div class="d-flex flex-row">
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon icon="fa fa-star" />
              </div>
            </div>
            <button className="button mt-2">Add to cart</button>
          </div>
        </div>

        <div className="image-with-text card-image9">
          <h3 className="fs-25 mb-4">FOR WOMEN</h3>
          <button className="button mt-4">More</button>
        </div>
        <div className="box"></div>
      </div>

      <div className="horizontal-margin mt-5 d-flex justify-content-between align-middle">
        <div className="">
          <h3>NEW ARRIVALS</h3>
          <div className="horizontal-line-black"></div>
        </div>
        <div className="heading">
          <h3>BEST SELLERS</h3>
          <div className="horizontal-line-black"></div>
        </div>
        <div className="heading">
          <h3>POPULAR</h3>
          <div className="horizontal-line-black"></div>
        </div>
        <div className="d-flex">
          <img className="arrow-icon" src={CIRCLELEFT} />
          <img className="arrow-icon" src={CIRCLERIGHT} />
        </div>
      </div>

      <Row className="my-0 mt-5">
        <Col className="box"></Col>
        <Col>
          <div className="card-image10"></div>
          <p className="fs-15 my-2">Printer Chiffon Dress</p>
          <div className="horizontal-line-grey"></div>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <b className="text-color fs-20 my-1">E 61.19</b>
              <div class="d-flex flex-row">
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon icon="fa fa-star" />
              </div>
            </div>
            <button className="button mt-2">Add to cart</button>
          </div>
        </Col>
        <Col>
          <div className="card-image11"></div>
          <p className="fs-15 my-2">Printer Chiffon Dress</p>
          <div className="horizontal-line-grey"></div>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <b className="text-color fs-20 my-1">E 61.19</b>
              <div class="d-flex flex-row">
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon icon="fa fa-star" />
              </div>
            </div>
            <button className="button mt-2">Add to cart</button>
          </div>
        </Col>
        <Col>
          <div className="card-image12"></div>
          <p className="fs-15 my-2">Printer Chiffon Dress</p>
          <div className="horizontal-line-grey"></div>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <b className="text-color fs-20 my-1">E 61.19</b>
              <div class="d-flex flex-row">
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon icon="fa fa-star" />
              </div>
            </div>
            <button className="button mt-2">Add to cart</button>
          </div>
        </Col>
        <Col>
          <div className="card-image13"></div>
          <p className="fs-15 my-2">Printer Chiffon Dress</p>
          <div className="horizontal-line-grey"></div>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <b className="text-color fs-20 my-1">E 61.19</b>
              <div class="d-flex flex-row">
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon className="star-icon" icon="fa fa-star" />
                <FontAwesomeIcon icon="fa fa-star" />
              </div>
            </div>
            <button className="button mt-2">Add to cart</button>
          </div>
        </Col>
        <Col className="grey-box"></Col>
      </Row>

      <Row className="horizontal-line-grey my-3"></Row>
      <div className="horizontal-margin mt-5 d-flex justify-content-between align-middle">
        <div className="blog">
          <h3>FROM THE BLOG</h3>
          <div className="horizontal-line-black"></div>
        </div>
      </div>

      <Row className="my-0 mt-5">
        <Col className="grey-box"></Col>
        <Col>
          <div className="card-image14"></div>
          <p className="fs-15  write">Curabitur ligulasapien</p>

          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <div className="text-color fs-20 safe">
                <p>
                  Vestibulum sagittis, nisl nec pellentesque suscipit, arcu nisi
                  maximus neque, vitae finibus erat odio eu lacus. Curabitur{" "}
                </p>
              </div>
              <div class="d-flex flex-row"></div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="card-image15"></div>
          <p className="fs-15  write">Curabitur ligulasapien</p>

          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <div className="text-color fs-20 safe">
                <p>
                  Vestibulum sagittis, nisl nec pellentesque suscipit, arcu nisi
                  maximus neque, vitae finibus erat odio eu lacus. Curabitur{" "}
                </p>
              </div>
              <div class="d-flex flex-row"></div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="card-image16"></div>
          <p className="fs-15  write">Curabitur ligulasapien</p>

          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <div className="text-color fs-20 safe">
                <p>
                  Vestibulum sagittis, nisl nec pellentesque suscipit, arcu nisi
                  maximus neque, vitae finibus erat odio eu lacus. Curabitur{" "}
                </p>
              </div>
              <div class="d-flex flex-row"></div>
            </div>
          </div>
        </Col>
        <Col className="box"></Col>
      </Row>

      <Row className="horizontal-line-grey my-3"></Row>
    </>
  );
};

export default Categories;
