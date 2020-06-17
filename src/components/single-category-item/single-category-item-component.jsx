import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions";
import "./single-category-item-styles.css";

const SingleCategoryItem = (props) => {
  const { name, url, pricepre, pricenow, item } = props;
  const dispatch = useDispatch();
  return (
    <div
      className="col-lg-3 col-md-4 col-sm-6 col-6"
      style={{ marginTop: "10px" }}
    >
      <Card
        style={{
          // margin: "30% auto",

          border: "1px solid #bdbdbd",
          textAlign: "center",
          borderRadius: "10px",
          padding: "10%",
        }}
      >
        <Card.Img
          style={{
            width: "auto",
            width: "80%",
            height: "130px",
            cursor: "pointer",
            margin: "auto",
            paddingTop: "10px",
          }}
          variant="top"
          src={url}
        />
        <Card.Body>
          <Card.Title className="singlecatItemHead">{name}</Card.Title>
          <div className="row">
            <div
              className="col-6 singlecatItempricePre"
              style={{
                textDecoration: "line-through",

                fontWeight: "500",
                color: "#9B9B9B",
              }}
            >
              {pricepre}
            </div>

            <div
              className="col-6 singlecatItempriceNow"
              style={{
                color: "#28a745",

                fontWeight: "500",
              }}
            >
              ${pricenow}
            </div>
          </div>
          <div className="row" style={{ marginTop: "10px" }}>
            <div
              className="col-lg-2 col-md-2 col-sm-12 "
              style={{
                padding: "4px",
                textAlign: "initial",
                border: "1px solid #bdbdbd",
                fontSize: "16px",
                fontWeight: "500",
                color: "#9B9B9B",
                marginTop: "3px",
              }}
            >
              1
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 "> </div>
            {typeof item.cartAdded === "undefined" || item.cartAdded === 0 ? (
              <div
                onClick={() => dispatch(addToCart(item))}
                className="col-lg-7 col-md-6 col-sm-12"
                style={{
                  cursor: "pointer",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "500",
                  backgroundColor: "#28a745",
                  borderRadius: "17px",
                  padding: "7px",
                  marginTop: "3px",
                }}
              >
                Add to cart
              </div>
            ) : (
              <div
                onClick={() => dispatch(addToCart(item))}
                className="col-lg-7 col-md-6 col-sm-12"
                style={{
                  cursor: "pointer",
                  color: "#17a2b8",
                  fontSize: "15px",
                  fontWeight: "500",
                  border: "1px solid #17a2b8",
                  borderRadius: "17px",
                  marginTop: "3px",
                  padding: "7px",
                }}
              >
                Update
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleCategoryItem;
