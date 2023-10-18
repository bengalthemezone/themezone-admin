import React, { lazy, useState } from "react";
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CNavLink,
  CNavItem,
  CTabContent,
  CTabPane,
  CTabs,
  CNav,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";

import cartData from "./cart-data.js";
import "../developer/developerAdmin.css";

const CartAdmin = () => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [tableToggle, settableToggle] = useState(true);
  const [selectedId, setSelectedId] = useState(" ");

  const ontoggleEdit = (id) => {
    var idVal = id;
    console.log(idVal);
    setToggleEdit(true);
    settableToggle(false);
    setSelectedId(idVal);
    console.log(selectedId);
    console.log(toggleEdit);
  };
  return (
    <CCard>
      <CCardBody>
        {tableToggle && (
          <table className="table table-hover table-outline mb-0 d-none d-sm-table">
            <thead className="thead-light">
              <tr>
                <th className="text-center">Product Id</th>
                <th className="text-center">User Name</th>
                <th className="text-center">Post Details</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((cartDataItems) => (
                <tr className="text-center">
                  <td>{cartDataItems.Product_id}</td>
                  <td>{cartDataItems.Profile_name}</td>
                  <td>
                    <CButton
                      onClick={() => {
                        ontoggleEdit(cartDataItems.Product_id);
                      }}
                      color="info"
                    >
                      View Post Details
                    </CButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {toggleEdit && (
          <CTabs>
            <CNav variant="tabs">
              <CNavItem>
                <CNavLink> Product Information </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink> Cart Information </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink> Seller Details </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink>Buyer Details </CNavLink>
              </CNavItem>
            </CNav>
            <CTabContent>
              <CTabPane>
                <CCard>
                  <CCardBody>
                    <CCardHeader>Product Details</CCardHeader>
                    {cartData.map((cartDataItems) => {
                      if (cartDataItems.id == selectedId) {
                        console.log(true);
                        return (
                          <div>
                            {cartDataItems.Product_details.map(
                              (productDetailItems) => (
                                <div className="cartItemsContainer">
                                  <div className="itemContainer">
                                    <p className="label">Created Date</p>
                                    <p className="label-data">
                                      {productDetailItems.creation_date}
                                    </p>
                                    <div className="btnArea">
                                      <CButton color="info">Edit</CButton>
                                      <CButton color="danger">Delete</CButton>
                                    </div>
                                  </div>
                                  <div className="itemContainer">
                                    <p className="label">Last updated</p>
                                    <p className="label-data">
                                      {productDetailItems.last_update}
                                    </p>
                                    <div className="btnArea">
                                      <CButton color="info">Edit</CButton>
                                      <CButton color="danger">Delete</CButton>
                                    </div>
                                  </div>
                                  <div className="itemContainer">
                                    <p className="label">
                                      Browser Compatibility
                                    </p>
                                    <p className="label-data">
                                      {productDetailItems.comaptible_browser}
                                    </p>
                                    <div className="btnArea">
                                      <CButton color="info">Edit</CButton>
                                      <CButton color="danger">Delete</CButton>
                                    </div>
                                  </div>
                                  <div className="itemContainer">
                                    <p className="label">Product Version</p>
                                    <p className="label-data">
                                      {productDetailItems.version}
                                    </p>
                                    <div className="btnArea">
                                      <CButton color="info">Edit</CButton>
                                      <CButton color="danger">Delete</CButton>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        );
                      } else {
                        console.log(false);
                      }
                    })}
                  </CCardBody>
                </CCard>
              </CTabPane>
              <CTabPane>
                <CCard>
                  <CCardBody>
                    <CCardHeader>Cart Details</CCardHeader>
                    {cartData.map((cartDataItems) => {
                      if (cartDataItems.id == selectedId) {
                        console.log(true);
                        return (
                          <div>
                            {cartDataItems.cart_details.map(
                              (cartDetailsItem) => (
                                <div className="cartItemsContainer">
                                  <div className="itemContainer">
                                    <p className="label">Credit Card Number</p>
                                    <p className="label-data">
                                      {cartDetailsItem.credit_card_number}
                                    </p>
                                    <div className="btnArea">
                                      <CButton color="info">Edit</CButton>
                                      <CButton color="danger">Delete</CButton>
                                    </div>
                                  </div>
                                  <div className="itemContainer">
                                    <p className="label">Date of Purchase</p>
                                    <p className="label-data">
                                      {cartDetailsItem.buying_date}
                                    </p>
                                    <div className="btnArea">
                                      <CButton color="info">Edit</CButton>
                                      <CButton color="danger">Delete</CButton>
                                    </div>
                                  </div>
                                  <div className="itemContainer">
                                    <p className="label">Billing Details</p>
                                    <p className="label-data">
                                      {cartDetailsItem.billing_details}
                                    </p>
                                    <div className="btnArea">
                                      <CButton color="info">Edit</CButton>
                                      <CButton color="danger">Delete</CButton>
                                    </div>
                                  </div>
                                  <div className="itemContainer">
                                    <p className="label">Payment Method</p>
                                    <p className="label-data">
                                      {cartDetailsItem.payment_method}
                                    </p>
                                    <div className="btnArea">
                                      <CButton color="info">Edit</CButton>
                                      <CButton color="danger">Delete</CButton>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        );
                      } else {
                        console.log(false);
                      }
                    })}
                  </CCardBody>
                </CCard>
              </CTabPane>
              <CTabPane>
                <CCard>
                  <CCardBody>
                    <CCardHeader>Seller Details</CCardHeader>
                    {cartData.map((cartDataItems) => {
                      if (cartDataItems.id == selectedId) {
                        console.log(true);
                        return (
                          <div>
                            {cartDataItems.seller_details.map(
                              (sellerDetailItems) => (
                                <div className="cartItemsContainer">
                                  <div className="itemContainer">
                                    <p className="label">Seller ID</p>
                                    <p className="label-data">
                                      {sellerDetailItems.seller_id}
                                    </p>
                                    <div className="btnArea">
                                      <CButton color="info">Edit</CButton>
                                      <CButton color="danger">Delete</CButton>
                                    </div>
                                  </div>
                                  <div className="itemContainer">
                                    <p className="label">Seller Name</p>
                                    <p className="label-data">
                                      {sellerDetailItems.seller_name}
                                    </p>
                                    <div className="btnArea">
                                      <CButton color="info">Edit</CButton>
                                      <CButton color="danger">Delete</CButton>
                                    </div>
                                  </div>
                                  <div className="itemContainer">
                                    <p className="label">Seller Email</p>
                                    <p className="label-data">
                                      {sellerDetailItems.seller_email}
                                    </p>
                                    <div className="btnArea">
                                      <CButton color="info">Edit</CButton>
                                      <CButton color="danger">Delete</CButton>
                                    </div>
                                  </div>
                                  <div className="itemContainer">
                                    <p className="label">Seller Product item</p>
                                    <p className="label-data">
                                      {sellerDetailItems.seller_product_id}
                                    </p>
                                    <div className="btnArea">
                                      <CButton color="info">Edit</CButton>
                                      <CButton color="danger">Delete</CButton>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        );
                      } else {
                        console.log(false);
                      }
                    })}
                  </CCardBody>
                </CCard>
              </CTabPane>
              <CTabPane>
                <CCard>
                  <CCardBody>
                    <CCardHeader>Buyers Details</CCardHeader>
                    {cartData.map((cartDataItems) => {
                      if (cartDataItems.id == selectedId) {
                        console.log(true);
                        return (
                          <div>
                            {cartDataItems.buyers_details.map(
                              (buyerDetailItems) => (
                                <div className="cartItemsContainer">
                                  <div className="itemContainer">
                                    <p className="label">Buyer ID</p>
                                    <p className="label-data">
                                      {buyerDetailItems.buyers_id}
                                    </p>
                                    <div className="btnArea">
                                      <CButton color="info">Edit</CButton>
                                      <CButton color="danger">Delete</CButton>
                                    </div>
                                  </div>
                                  <div className="itemContainer">
                                    <p className="label">Buyer Name</p>
                                    <p className="label-data">
                                      {buyerDetailItems.buyers_name}
                                    </p>
                                    <div className="btnArea">
                                      <CButton color="info">Edit</CButton>
                                      <CButton color="danger">Delete</CButton>
                                    </div>
                                  </div>
                                  <div className="itemContainer">
                                    <p className="label">Buyer Address </p>
                                    <p className="label-data">
                                      {buyerDetailItems.buyers_address}
                                    </p>
                                    <div className="btnArea">
                                      <CButton color="info">Edit</CButton>
                                      <CButton color="danger">Delete</CButton>
                                    </div>
                                  </div>
                                  <div className="itemContainer">
                                    <p className="label">Buyer Bank Details</p>
                                    <p className="label-data">
                                      {buyerDetailItems.bank_name}
                                    </p>
                                    <div className="btnArea">
                                      <CButton color="info">Edit</CButton>
                                      <CButton color="danger">Delete</CButton>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        );
                      } else {
                        console.log(false);
                      }
                    })}
                  </CCardBody>
                </CCard>
              </CTabPane>
            </CTabContent>
          </CTabs>
        )}
      </CCardBody>
    </CCard>
  );
};
export default CartAdmin;
