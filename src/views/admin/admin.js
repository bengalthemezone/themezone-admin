import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
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

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import './adminTable.css'

import MainChartExample from '../charts/MainChartExample.js'
import { Link } from 'react-router-dom'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const AdminList = () => {
  return (
      <div>
      <CRow>
        <CCol>
          <CCard>
          
            <CCardBody>
              <br />
                <CRow className="align-items-center">
                    <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                    <Link to='/adminForm'>
                    <CButton block color="success">Add Admin</CButton>
                    </Link>
                    </CCol>
                    <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                    <CButton block color="danger">Delete admins</CButton>
                    </CCol>
                </CRow>
                <br/>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">Admin Id</th>
                    <th className="text-center"><CIcon name="cil-people" /> Picture</th>
                    <th className="text-center">Admin</th>
                    <th className="text-center">Country</th>
                    <th className="text-center">Contact</th>
                    <th className="text-center">Active</th>
                    <th className="text-center">Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='text-center'>
                       <span>1</span>
                    </td>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td className="text-center">
                      <div>Yiorgos Avraamu</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-us" title="us" id="us" />
                    </td>
                    <td className="text-center">
                      <p>Email2@gmail.com</p>
                      <span>0173245411458</span>
                    </td>
                    <td className="text-center">
                      <CBadge color='success'>Active</CBadge>
                    </td>
                    <td className="text-center">
                    <CButtonGroup className="mr-2">
                        <CButton color="secondary"><CIcon name='cil-scrubber'></CIcon></CButton>
                        <CButton color="secondary"><CIcon name='cil-trash'></CIcon></CButton>
                        <CButton color="secondary"><CIcon name='cil-user-follow'></CIcon></CButton>
                        <CButton color="secondary"><CIcon name='cil-x-circle'></CIcon></CButton>
                    </CButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-center'>
                       <span>2</span>
                    </td>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/2.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-danger"></span>
                      </div>
                    </td>
                    <td className="text-center">
                      <div>Avram Tarasios</div>
                      <div className="small text-muted">

                        <span>Recurring</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-br" title="br" id="br" />
                    </td>
                    <td className="text-center">
                      <p>Email2@gmail.com</p>
                      <span>0173245411458</span>
                    </td>
                    <td className="text-center">
                        <CBadge color='success'>Active</CBadge>
                    </td>
                    <td className="text-center">
                    <CButtonGroup className="mr-2">
                        <CButton color="secondary"><CIcon name='cil-scrubber'></CIcon></CButton>
                        <CButton color="secondary"><CIcon name='cil-trash'></CIcon></CButton>
                        <CButton color="secondary"><CIcon name='cil-user-follow'></CIcon></CButton>
                        <CButton color="secondary"><CIcon name='cil-x-circle'></CIcon></CButton>
                    </CButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-center'>
                       <span>3</span>
                    </td>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/3.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-warning"></span>
                      </div>
                    </td>
                    <td className="text-center">
                      <div>Quintin Ed</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-in" title="in" id="in" />
                    </td>
                    <td className="text-center">
                      <p>Email2@gmail.com</p>
                      <span>0173245411458</span>
                    </td>
                    <td className="text-center">
                        <CBadge color='success'>Active</CBadge>
                    </td>
                    <td className="text-center">
                    <CButtonGroup className="mr-2">
                        <CButton color="secondary"><CIcon name='cil-scrubber'></CIcon></CButton>
                        <CButton color="secondary"><CIcon name='cil-trash'></CIcon></CButton>
                        <CButton color="secondary"><CIcon name='cil-user-follow'></CIcon></CButton>
                        <CButton color="secondary"><CIcon name='cil-x-circle'></CIcon></CButton>
                    </CButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-center'>
                       <span>4</span>
                    </td>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/4.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-secondary"></span>
                      </div>
                    </td>
                    <td className="text-center">
                      <div>Enéas Kwadwo</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-fr" title="fr" id="fr" />
                    </td>
                    <td className="text-center">
                      <p>Email2@gmail.com</p>
                      <span>0173245411458</span>
                    </td>
                    <td className="text-center">
                        <CBadge color='success'>Active</CBadge>
                    </td>
                    <td className="text-center">
                    <CButtonGroup className="mr-2">
                        <CButton color="secondary"><CIcon name='cil-scrubber'></CIcon></CButton>
                        <CButton color="secondary"><CIcon name='cil-trash'></CIcon></CButton>
                        <CButton color="secondary"><CIcon name='cil-user-follow'></CIcon></CButton>
                        <CButton color="secondary"><CIcon name='cil-x-circle'></CIcon></CButton>
                    </CButtonGroup>
                    </td>
                  </tr>
                </tbody>
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      </div>
  )
}

export default AdminList
