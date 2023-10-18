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

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  return (
      <div>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              <br />

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>Admin</th>
                    <th className="text-center">Country</th>
                    <th>Contact</th>
                    <th className="text-center">Skills</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Yiorgos Avraamu</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-us" title="us" id="us" />
                    </td>
                    <td>
                      <p>Email2@gmail.com</p>
                      <span>0173245411458</span>
                    </td>
                    <td className="text-center">
                      <CDropdown className="m-1">
                        <CDropdownToggle>
                          Skill Set
                        </CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem header>See Skills</CDropdownItem>
                          <CDropdownItem >HTML</CDropdownItem>
                          <CDropdownItem>CSS</CDropdownItem>
                          <CDropdownItem>JQuery</CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>10 sec ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/2.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div>Avram Tarasios</div>
                      <div className="small text-muted">

                        <span>Recurring</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-br" title="br" id="br" />
                    </td>
                    <td>
                      <p>Email2@gmail.com</p>
                      <span>0173245411458</span>
                    </td>
                    <td className="text-center">
                    <CDropdown className="m-1">
                        <CDropdownToggle>
                          Skill Set
                        </CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem header>See Skills</CDropdownItem>
                          <CDropdownItem >HTML</CDropdownItem>
                          <CDropdownItem>CSS</CDropdownItem>
                          <CDropdownItem>JQuery</CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>5 minutes ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/3.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-warning"></span>
                      </div>
                    </td>
                    <td>
                      <div>Quintin Ed</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-in" title="in" id="in" />
                    </td>
                    <td>
                      <p>Email2@gmail.com</p>
                      <span>0173245411458</span>
                    </td>
                    <td className="text-center">
                    <CDropdown className="m-1">
                        <CDropdownToggle>
                          Skill Set
                        </CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem header>See Skills</CDropdownItem>
                          <CDropdownItem >HTML</CDropdownItem>
                          <CDropdownItem>CSS</CDropdownItem>
                          <CDropdownItem>JQuery</CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>1 hour ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/4.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-secondary"></span>
                      </div>
                    </td>
                    <td>
                      <div>Enéas Kwadwo</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-fr" title="fr" id="fr" />
                    </td>
                    <td>
                      <p>Email2@gmail.com</p>
                      <span>0173245411458</span>
                    </td>
                    <td className="text-center">
                    <CDropdown className="m-1">
                        <CDropdownToggle>
                          Skill Set
                        </CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem header>See Skills</CDropdownItem>
                          <CDropdownItem >HTML</CDropdownItem>
                          <CDropdownItem>CSS</CDropdownItem>
                          <CDropdownItem>JQuery</CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Last month</strong>
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

export default Dashboard
