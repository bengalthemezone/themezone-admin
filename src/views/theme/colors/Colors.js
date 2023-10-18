import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CRow, CCol,CIcon,CForm,CInput,CButton,CInputGroup,CInputGroupPrepend,CInputGroupText,CCard,CCardBody } from '@coreui/react'
import { rgbToHex } from '@coreui/utils/src'

const AdminForm = () =>{
  return (
    <CCard className="p-4">
    <CCardBody>
      <CForm>
        <h3>Add New Admins</h3>
        
        <CInputGroup className="mb-3">
          <CInput type="text" placeholder="First Name" autoComplete="username" />
        </CInputGroup>
        <CInputGroup className="mb-4">
          <CInput type="text" placeholder="Last Name" autoComplete="" />
        </CInputGroup>
        <CInputGroup className="mb-4">
          <CInput type="email" placeholder="Email" autoComplete="current-password" />
        </CInputGroup>
        <CInputGroup className="mb-4">
          <CInput type="password" placeholder="Contact Number" autoComplete="current-password" />
        </CInputGroup>
        <CRow>
          <CCol xs="6">
            <CButton color="primary" className="px-4">Submit</CButton>
          </CCol>
        </CRow>
      </CForm>
    </CCardBody>
    </CCard>
  )
}

export default AdminForm
