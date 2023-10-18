import React, { lazy ,useState } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import './developerAdmin.css'
import developerData from './developerData'
import MainChartExample from '../charts/MainChartExample.js'
import { Link } from 'react-router-dom'
import {connect} from "react-redux"
import {getProfiles} from "../../redux/user/userActions";
import Proptypes from 'prop-types';
import Spinner from "../../containers/spinner.component";
import {URL} from "../../redux/utils";

class DeveloperAdmin extends React.Component {
    constructor(props) {
        super();
        this.state = {
            tableToggle : true,

        }
    }

  componentDidMount = () => {
      this.props.getProfiles();
  }
  ontoggleEdit = () => {

  }
  render(){
    const {users, loading} = this.props.user;
    let developersContent;
    if (users === null || loading) {
        developersContent = <Spinner/>
    }
    else {
        if (users.length > 0){
            developersContent = (
                <CCard>
                    <CCardBody>
                        <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                            <thead className="thead-light">
                            <tr>
                                <th className="text-center">Developer Id</th>
                                <th className="text-center">Developer Name</th>
                                <th className="text-center">Country</th>
                                <th className="text-center">Picture</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Activity</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user) => 
                                    <tr>
                                        <td className='text-center'>
                                            {user._id}
                                        </td>
                                        <td className="text-center">
                                            {user.user.name}
                                        </td>
                                        <td className="text-center">
                                            {user.location}
                                        </td>
                                        <td className="text-center">
                                            <img className='developerProfilePic' src={`${URL}${user.profilePicture}`}></img>
                                        </td>
                                        <td className="text-center">
                                            {user.status}
                                        </td>
                                        <td className="text-center">
                                        <CButtonGroup className="mr-2">
                                            <CButton onClick={() => this.ontoggleEdit()} value="null" color="secondary"><CIcon name='cil-scrubber'></CIcon></CButton>
                                            <CButton color="secondary"><CIcon name='cil-trash'></CIcon></CButton>
                                            <CButton color="secondary"><CIcon name='cil-user-follow'></CIcon></CButton>
                                            <CButton color="secondary"><CIcon name='cil-x-circle'></CIcon></CButton>
                                        </CButtonGroup>
                                        </td>
                                    </tr>
                                    )
                                }
                                        
                            </tbody>
                        </table>
                    </CCardBody>
                </CCard>
                
            )
        }
    }   
    return (
        <div>
            {developersContent}
        
        {/*<div>
            <CCard>
            
                <CCardBody>
                

                { tableToggle &&
                    
                    <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                    <tr>
                        <th className="text-center">Developer Id</th>
                        <th className="text-center">Developer Name</th>
                        <th className="text-center">Country</th>
                        <th className="text-center">Contact</th>
                        <th className="text-center">Active</th>
                        <th className="text-center">Activity</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                        {
                            developerData.map(developerItems => 

                                <tr>
                                    <td className='text-center'>
                                        {developerItems.id}
                                    </td>
                                    <td className="text-center">
                                        <div>{developerItems.developer_name}</div>
                                    </td>
                                    <td className="text-center">
                                        <CIcon height={25} name={`cif-${developerItems.country}`} title="us" id="us" />
                                    </td>
                                    <td className="text-center">
                                        <p>{developerItems.email}</p>
                                    </td>
                                    <td className="text-center">
                                        <CBadge color='success'>Active</CBadge>
                                    </td>
                                    <td className="text-center">
                                    <CButtonGroup className="mr-2">
                                        <CButton onClick={() =>{ ontoggleEdit(developerItems.id)}} value={developerItems.id} color="secondary"><CIcon name='cil-scrubber'></CIcon></CButton>
                                        <CButton color="secondary"><CIcon name='cil-trash'></CIcon></CButton>
                                        <CButton color="secondary"><CIcon name='cil-user-follow'></CIcon></CButton>
                                        <CButton color="secondary"><CIcon name='cil-x-circle'></CIcon></CButton>
                                    </CButtonGroup>
                                    </td>
                                
                                </tr>
                            )
                        }
                    </tbody>
                </table>}

                {
                toggleEdit && 

                    <CTabs>
                        <CNav variant="tabs">
                            <CNavItem>
                            <CNavLink> Personal Info </CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink> Education  </CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink> Employment </CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink>Other info </CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink> Picture </CNavLink>
                            </CNavItem>
                        </CNav>
                        <CTabContent>
                        <CTabPane>
                        <CCard>
                            <CCardBody>
                                <CCardHeader>Personal Information</CCardHeader>
                                
                                    
                                {
                                    developerData.map(developerItems => {
                                        if(developerItems.id == selectedId){
                                            console.log(true)
                                            return (
                                                <div className='personalInfoContainer'>
                                                    
                                                    <div className='adminGridContainer'>
                                                
                                                        <div className='itemContainer'>
                                                            <p className='label'>First Name : </p>
                                                            <p className='label-answer'>{developerItems.developer_name}</p>
                                                        </div>
                                                        <div className='itemContainer'>
                                                            <p className='label'>Fathers Name : </p>
                                                            <p className='label-answer'>{developerItems.f_name}</p>
                                                        </div>
                                                        <div className='itemContainer'>
                                                            <p className='label'>Mothers Name : </p>
                                                            <p className='label-answer'>{developerItems.m_name}</p>
                                                        </div>
                                                        <div className='itemContainer'>
                                                            <p className='label'>Date of Birth : </p>
                                                            <p className='label-answer'>{developerItems.dob}</p>
                                                        </div>
                                                        <div className='itemContainer'>
                                                            <p className='label'>Gender : </p>
                                                            <p className='label-answer'>{developerItems.gender}</p>
                                                        </div>
                                                        <div className='itemContainer'>
                                                            <p className='label'>Religion : </p>
                                                            <p className='label-answer'>{developerItems.religion}</p>
                                                        </div>
                                                
                                                    </div>
                                                    <div className='adminGridContainer' >
                                                        <div className='itemContainer'>
                                                            <p className='label'>Nationality : </p>
                                                            <p className='label-answer'>{developerItems.country}</p>
                                                        </div>
                                                        <div className='itemContainer'>
                                                            <p className='label'>National Id : </p>
                                                            <p className='label-answer'>{developerItems.national_id}</p>
                                                        </div>
                                                        <div className='itemContainer'>
                                                            <p className='label'>Marital Status : </p>
                                                            <p className='label-answer'>{developerItems.marital_status}</p>
                                                        </div>
                                                        <div className='itemContainer'>
                                                            <p className='label'>Email : </p>
                                                            <p className='label-answer'>{developerItems.email}</p>
                                                        </div>
                                                        <div className='itemContainer'>
                                                            <p className='label'>Mobile Number : </p>
                                                            <p className='label-answer'>{developerItems.mobile_no}</p>
                                                        </div>
                                                    </div>
                                                    <div className='adminGridContainer'>
                                                        <CButton color='info'>EDIT</CButton>
                                                        <CButton color='danger'>Delete</CButton>
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
                                    <CCardHeader>Educational Information</CCardHeader>       
                                    {
                                        developerData.map(developerItems => {
                                            if(developerItems.id == selectedId){
                                                console.log(true)
                                                return (
                                                    <div className='personalInfoContainer'>
                                                        
                                                        <div className='adminGridContainer'>
                                                    
                                                            <div className='itemContainer'>
                                                                <p className='label'>Level of Education: </p>
                                                                <p className='label-answer'>{developerItems.level_of_education}</p>
                                                            </div>
                                                            <div className='itemContainer'>
                                                                <p className='label'>Major : </p>
                                                                <p className='label-answer'>{developerItems.major}</p>
                                                            </div>
                                                            <div className='itemContainer'>
                                                                <p className='label'>CGPA : </p>
                                                                <p className='label-answer'>{developerItems.cgpa}</p>
                                                            </div>
                                                            <div className='itemContainer'>
                                                                <p className='label'>University : </p>
                                                                <p className='label-answer'>{developerItems.university}</p>
                                                            </div>
                                                        </div>
                                                        <div className='adminGridContainer' >
                                                            <div className='itemContainer'>
                                                                <p className='label'>O Level/ SSC Grade Point: </p>
                                                                <p className='label-answer'>{developerItems.o_level}</p>
                                                            </div>
                                                            <div className='itemContainer'>
                                                                <p className='label'>A Level / HSC Grade Point : </p>
                                                                <p className='label-answer'>{developerItems.a_level}</p>
                                                            </div>
                                                            <div className='itemContainer'>
                                                                <p className='label'>Year of Passing : </p>
                                                                <p className='label-answer'>{developerItems.year_of_passing}</p>
                                                            </div>
                                                            <div className='itemContainer'>
                                                                <p className='label'>Masters : </p>
                                                                <p className='label-answer'>{developerItems.masters}</p>
                                                            </div>
                                                        </div>
                                                        <div className='adminGridContainer'>
                                                            <CButton color='info'>EDIT</CButton>
                                                            <CButton color='danger'>Delete</CButton>
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
                                    <CCardHeader>Experiance Information</CCardHeader>       
                                    {
                                        developerData.map(developerItems => {
                                            if(developerItems.id == selectedId){
                                                console.log(true)
                                                return (
                                                    <div className='personalInfoContainer'>
                                                        
                                                        <div className='adminGridContainer'>
                                                    
                                                            <div className='itemContainer'>
                                                                <p className='label'>Company Name : </p>
                                                                <p className='label-answer'>{developerItems.company_name}</p>
                                                            </div>
                                                            <div className='itemContainer'>
                                                                <p className='label'>Company Location : </p>
                                                                <p className='label-answer'>{developerItems.company_location}</p>
                                                            </div>
                                                            <div className='itemContainer'>
                                                                <p className='label'>Department : </p>
                                                                <p className='label-answer'>{developerItems.department}</p>
                                                            </div>
                                                            <div className='itemContainer'>
                                                                <p className='label'>Designation : </p>
                                                                <p className='label-answer'>{developerItems.designation}</p>
                                                            </div>

                                                    
                                                        </div>
                                                        <div className='adminGridContainer' >
                                                            <div className='itemContainer'>
                                                                <p className='label'>Years of Experiance : </p>
                                                                <p className='label-answer'>{developerItems.years}</p>
                                                            </div>
                                                            <div className='itemContainer'>
                                                                <p className='label'>From  : </p>
                                                                <p className='label-answer'>{developerItems.year_from}</p>
                                                            </div>
                                                            <div className='itemContainer'>
                                                                <p className='label'>Till : </p>
                                                                <p className='label-answer'>{developerItems.year_to}</p>
                                                            </div>
                                                        </div>
                                                        <div className='adminGridContainer'>
                                                            <CButton color='info'>EDIT</CButton>
                                                            <CButton color='danger'>Delete</CButton>
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
                        <div>
                            {developerData.map(developerItems => {
                                if (developerItems.id == selectedId){
                                return (
                                <CCard>
                                    <CCardBody>
                                        <CCardHeader>Developer Skills </CCardHeader>
                                            {
                                                developerItems.skills.map(skillItems => 
                                                    <div className='skillSectionContainer'>
                                                        <div className='skillArea'>
                                                            <p className='skillHeader'>Skill {skillItems.skill_id}</p>
                                                            <p className='skillName'>{skillItems.skill_name}</p>
                                                        </div>
                                                        <div className='skillArea skillButtonArea'>
                                                            <CButton color='info'>Edit</CButton>
                                                            <CButton color='danger'>Delete</CButton>
                                                        </div>
                                                    </div>
                                                    )
                                            }
                                    </CCardBody>
                                </CCard>
                            )}})}
                        </div>
                        </CTabPane>
                        <CTabPane>
                                <CCard>
                                    <CCardBody>
                                        <CCardHeader>Developer Profile Picture</CCardHeader>
                                        {
                                            developerData.map(developerItems => {
                                                if(developerItems.id == selectedId){
                                                    return (
                                                        <div className='pictureTabContainer'>
                                                            <img className='img' src={developerItems.picture_url}></img>
                                                            <div className='pictureBtnArea'>
                                                                <CButton color='warning'>Upload</CButton>
                                                                <CButton color='danger'> Delete</CButton>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            }
                                                
                                                )
                                        }
                                    </CCardBody>
                                </CCard>
                        </CTabPane>
                    </CTabContent>
                    </CTabs>
                }

                </CCardBody>
            </CCard>
            
        </div>
            */}
            </div>
        )
    }
}
DeveloperAdmin.proptype = {
    user : Proptypes.object.isRequired,
    getProfiles : Proptypes.func.isRequired
}
const mapStateToProps = state => ({
    user : state.user
})
export default connect(mapStateToProps, {getProfiles})(DeveloperAdmin)

