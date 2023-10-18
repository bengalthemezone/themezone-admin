import React, { lazy ,useState } from 'react'
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

} from '@coreui/react'

import postWorkData from './post-work-data'
import './post-work.css'

const PostWorkAdmin = () => {

    const [toggleEdit , setToggleEdit] = useState(false);
    const [tableToggle, settableToggle] = useState(true);
    const [selectedId , setSelectedId] = useState(' ')

    const ontoggleEdit = (id) => {
        var idVal = id
        console.log(idVal);
        setToggleEdit(true)
        settableToggle(false)
        setSelectedId(idVal)
        console.log(selectedId)
        console.log(toggleEdit)
    }
  return (
    
      <CCard>
        
          <CCardBody>
            

            { tableToggle &&
                
                <table className="table table-hover table-outline mb-0 d-none d-sm-table">
              <thead className="thead-light">
                <tr>
                  <th className="text-center">Post Id</th>
                  <th className="text-center">Post Title</th>
                  <th className="text-center">User ID</th>
                  <th className="text-center">User Name</th>
                  <th className="text-center">Post Details</th>
                </tr>
              </thead>
              <tbody>
                
                  {
                    postWorkData.map(postWorkItems => 
                      <tr className='text-center'>
                        <td>{postWorkItems.id}</td>
                        <td>{postWorkItems.post_title}</td>
                        <td>{postWorkItems.user_id}</td>
                        <td>{postWorkItems.user_name}</td>
                        <td><CButton onClick={() => {ontoggleEdit(postWorkItems.id)}} color='info'>View Post Details</CButton></td>
                      </tr>
                      )
                    }
                    
              </tbody>
            </table>
            }
            {
              toggleEdit && 
                    <CTabs>
                        <CNav variant="tabs">
                            <CNavItem>
                            <CNavLink> Job Details </CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink> Job Requirements  </CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink> Provider Details </CNavLink>
                            </CNavItem>
                        </CNav>
                      <CTabContent>
                        <CTabPane>
                        <CCard>
                                <CCardBody>
                                    <CCardHeader><h2>Job Details</h2> </CCardHeader>       
                                    {
                                        postWorkData.map(postWorkItems => {
                                            if(postWorkItems.id == selectedId){
                                                console.log(true)
                                                return (
                                                  <div className='jobDetailContainer' >
                                                    <div className='itemContainer'>
                                                      <h3 className='label'>Job Title</h3>
                                                      <p className='label-data'>{postWorkItems.post_title}</p>
                                                      <div className='btnArea'>
                                                        <CButton color='info'>Edit</CButton>
                                                        <CButton color='danger'>Delete</CButton>
                                                      </div>
                                                    </div>
                                                    <div className='itemContainer'>
                                                      <h3 className='label'>Job Detail</h3>
                                                      <p className='label-data'>{postWorkItems.job_details}</p>
                                                      <div className='btnArea'>
                                                        <CButton color='info'>Edit</CButton>
                                                        <CButton color='danger'>Delete</CButton>
                                                      </div>
                                                    </div>

                                                    <div className='itemContainer'>
                                                      <h3 className='label'>Job Responsiblity</h3>
                                                      <p className='label-data'>{postWorkItems.job_responsibility}</p>
                                                      <div className='btnArea'>
                                                        <CButton color='info'>Edit</CButton>
                                                        <CButton color='danger'>Delete</CButton>
                                                      </div>
                                                    </div>

                                                    <div className='itemContainer'>
                                                      <h3 className='label'>Job Deadline</h3>
                                                      <p className='label-data'>{postWorkItems.work_deadline}</p>
                                                      <div className='btnArea'>
                                                        <CButton color='info'>Edit</CButton>
                                                        <CButton color='danger'>Delete</CButton>
                                                      </div>
                                                    </div>

                                                    <div className='itemContainer'>
                                                      <h3 className='label'>Job Payment</h3>
                                                      <p className='label-data'>{postWorkItems.job_payment}</p>
                                                      <div className='btnArea'>
                                                        <CButton color='info'>Edit</CButton>
                                                        <CButton color='danger'>Delete</CButton>
                                                      </div>
                                                    </div>
                                                    <div className='itemContainer'>
                                                      <h3 className='label'>Job Type</h3>
                                                      <p className='label-data'>{postWorkItems.job_type}</p>
                                                      <div className='btnArea'>
                                                        <CButton color='info'>Edit</CButton>
                                                        <CButton color='danger'>Delete</CButton>
                                                      </div>
                                                    </div>

                                                    <div className='itemContainer'>
                                                      <h3 className='label'>Published Date</h3>
                                                      <p className='label-data'>{postWorkItems.published_date}</p>
                                                      <div className='btnArea'>
                                                        <CButton color='info'>Edit</CButton>
                                                        <CButton color='danger'>Delete</CButton>
                                                      </div>
                                                    </div>

                                                  </div>
                                                )
                                            }
                                            else {
                                                console.log(false)
                                            }
                                        })
                                    }
                                </CCardBody>
                            </CCard>
                        </CTabPane>
                        <CTabPane>
                            <CCard>
                                <CCardBody>
                                    <p>Job requirement</p>     
                                    {
                                        postWorkData.map(postWorkItems => {
                                            if(postWorkItems.id == selectedId){
                                                console.log(true)
                                                return (
                                                  <div className='jobDetailContainer' >
                                                    <div className='itemContainer'>
                                                      <h3 className='label'>Job Requirements</h3>
                                                      <p className='label-data'>{postWorkItems.job_requirements}</p>
                                                      <div className='btnArea'>
                                                        <CButton color='info'>Edit</CButton>
                                                        <CButton color='danger'>Delete</CButton>
                                                      </div>
                                                    </div>
                                                    <div className='itemContainer'>
                                                      <h3 className='label'>Job Area</h3>
                                                      <p className='label-data'>{postWorkItems.country}</p>
                                                      <div className='btnArea'>
                                                        <CButton color='info'>Edit</CButton>
                                                        <CButton color='danger'>Delete</CButton>
                                                      </div>
                                                    </div>

                                                    <div className='itemContainer'>
                                                      <h3 className='label'>Experience</h3>
                                                      <p className='label-data'>{postWorkItems.experiance}</p>
                                                      <div className='btnArea'>
                                                        <CButton color='info'>Edit</CButton>
                                                        <CButton color='danger'>Delete</CButton>
                                                      </div>
                                                    </div>

                                                    <div className='itemContainer'>
                                                      <h3 className='label'>Job Salary</h3>
                                                      <p className='label-data'>{postWorkItems.salary}</p>
                                                      <div className='btnArea'>
                                                        <CButton color='info'>Edit</CButton>
                                                        <CButton color='danger'>Delete</CButton>
                                                      </div>
                                                    </div>

                                                    <div className='itemContainer'>
                                                      <h3 className='label'>Job Avaibility</h3>
                                                      <p className='label-data'>{postWorkItems.availability}</p>
                                                      <div className='btnArea'>
                                                        <CButton color='info'>Edit</CButton>
                                                        <CButton color='danger'>Delete</CButton>
                                                      </div>
                                                    </div>

                                                    <div className='itemContainer'>
                                                      <h3 className='label'>Skill Required</h3>
                                                      {
                                                        postWorkItems.skills.map(skillItems => 
                                                            <ul className='skillItemList'>
                                                              <li>{skillItems.skill_name}</li>
                                                            </ul>
                                                          )
                                                      }
                                                      <div className='btnArea'>
                                                        <CButton color='info'>Edit</CButton>
                                                        <CButton color='danger'>Delete</CButton>
                                                      </div>
                                                    </div>
                                                    

                                                  </div>
                                                )
                                            }
                                            else {
                                                console.log(false)
                                            }
                                        })
                                    }
                                </CCardBody>
                            </CCard>
                        </CTabPane>
                        <CTabPane>
                        <CCard>
                                <CCardBody>
                                    <CCardHeader><h2>Job Details</h2> </CCardHeader>       
                                    {
                                        postWorkData.map(postWorkItems => {
                                            if(postWorkItems.id == selectedId){
                                                console.log(true)
                                                return (
                                                  <div className='jobDetailContainer' >
                                                    <div className='itemContainer'>
                                                      <h5 className='label'>User ID</h5>
                                                      <p className='label-data'>{postWorkItems.user_id}</p>
                                                      <div className='btnArea'>
                                                        <CButton color='info'>Edit</CButton>
                                                        <CButton color='danger'>Delete</CButton>
                                                      </div>
                                                    </div>
                                                    <div className='itemContainer'>
                                                      <h5 className='label'>User Name</h5>
                                                      <p className='label-data'>{postWorkItems.user_name}</p>
                                                      <div className='btnArea'>
                                                        <CButton color='info'>Edit</CButton>
                                                        <CButton color='danger'>Delete</CButton>
                                                      </div>
                                                    </div>

                                                    <div className='itemContainer'>
                                                      <h5 className='label'>User address</h5>
                                                      <p className='label-data'>{postWorkItems.user_address}</p>
                                                      <div className='btnArea'>
                                                        <CButton color='info'>Edit</CButton>
                                                        <CButton color='danger'>Delete</CButton>
                                                      </div>
                                                    </div>

                                                    <div className='itemContainer'>
                                                      <h5 className='label'>Number of Work Provided</h5>
                                                      <p className='label-data'>{postWorkItems.work_provided}</p>
                                                      <div className='btnArea'>
                                                        <CButton color='info'>Edit</CButton>
                                                        <CButton color='danger'>Delete</CButton>
                                                      </div>
                                                    </div>
                                                  </div>
                                                )
                                            }
                                            else {
                                                console.log(false)
                                            }
                                        })
                                    }
                                </CCardBody>
                            </CCard>
                        </CTabPane>
                  </CTabContent>
                </CTabs>
            }
            </CCardBody>
      </CCard>
   
  )
}
export default PostWorkAdmin
