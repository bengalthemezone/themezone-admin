import React, { useState } from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CCollapse,
  CButton,
} from "@coreui/react";

import SellerData from "./sellerData";

const fields = [
  "seller_id",
  "seller_name",
  "categories",
  "Author_Details",
  "Files",
  "additional_attribute",
  "price",
];
const creditCardFields = [
  "card_number",
  "buying_date",
  "buyers_address",
  "billing_details",
  "payment_method",
];

const Seller = () => {
  const [collapse, setCollapse] = useState(false);
  const [details, setDetails] = useState([]);
  const [fileDetails, setFileDetails] = useState([]);
  const [attributeDetails, setAttributeDetails] = useState([]);
  const [items, setItems] = useState(SellerData);

  const toggleAddToCart = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };
  const toggleFile = (index) => {
    const position1 = fileDetails.indexOf(index);
    let newDetails1 = fileDetails.slice();
    if (position1 !== -1) {
      newDetails1.splice(position1, 1);
    } else {
      newDetails1 = [...fileDetails, index];
    }
    setFileDetails(newDetails1);
  };
  const toggleAttribute = (index) => {
    const position2 = attributeDetails.indexOf(index);
    let newDetails2 = attributeDetails.slice();
    if (position2 !== -1) {
      newDetails2.splice(position2, 1);
    } else {
      newDetails2 = [...attributeDetails, index];
    }
    setAttributeDetails(newDetails2);
  };
  return (
    <CCard>
      <CCardHeader>Tutorial Information Table</CCardHeader>
      <CCardBody>
        <CDataTable
          items={items}
          fields={fields}
          striped
          itemsPerPage={5}
          pagination
          scopedSlots={{
            Author_Details: (item, index) => {
              return (
                <td className="py-2">
                  <CButton
                    color="primary"
                    variant="outline"
                    shape="square"
                    size="sm"
                    onClick={() => {
                      toggleAddToCart(index);
                    }}
                  >
                    {details.includes(index) ? "Hide" : "Show"}
                  </CButton>
                </td>
              );
            },
            Files: (item, index) => {
              return (
                <td className="py-2">
                  <CButton
                    color="primary"
                    variant="outline"
                    shape="square"
                    size="sm"
                    onClick={() => {
                      toggleFile(index);
                    }}
                  >
                    {fileDetails.includes(index) ? "Hide" : "Show"}
                  </CButton>
                </td>
              );
            },
            additional_attribute: (item, index) => {
              return (
                <td className="py-2">
                  <CButton
                    color="primary"
                    variant="outline"
                    shape="square"
                    size="sm"
                    onClick={() => {
                      toggleAttribute(index);
                    }}
                  >
                    {attributeDetails.includes(index) ? "Hide" : "Show"}
                  </CButton>
                </td>
              );
            },
            details: (item, index) => {
              return (
                <CCollapse show={details.includes(index)}>
                  <CCardBody>
                    {SellerData.map((items) => (
                      <div>
                        {items.author_details.map((itemsData) => (
                          <div>
                            <h5>Author Name : </h5>
                            <p>{itemsData.author_name}</p>
                            <h5>Product Name : </h5>
                            <p>{itemsData.product_name}</p>
                            <h5>Product Details : </h5>
                            <p>{itemsData.product_description}</p>
                            <h5>Live Demo</h5>
                            <p>{itemsData.live_demo}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </CCardBody>
                </CCollapse>
              );
            },
            fileDetails: (item, index) => {
              return (
                <CCollapse show={fileDetails.includes(index)}>
                  <CCardBody>
                    <div>SEcond Dev</div>
                  </CCardBody>
                </CCollapse>
              );
            },
          }}
        />
      </CCardBody>
    </CCard>
  );
};
export default Seller;
