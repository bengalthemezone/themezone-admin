import React,{useState} from 'react'
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
  CButtonGroup
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import Spinner from "../../containers/spinner.component";
import {connect} from "react-redux";
import {getServices} from "../../redux/service/serviceActions";
import Proptypes from "prop-types";

class GetServiceAdmin extends React.Component{
  componentDidMount = () => {
    this.props.getServices();
  }
  render(){
    const {services, loading} = this.props.service
    let serviceContent;
    if (services === null || loading ) {
      serviceContent = <Spinner/>
    }
    else {
      if (services.length > 0 ){
        serviceContent = (        
          <CCard>
            <CCardBody>
              
                <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th className="text-center">Service Id</th>
                    <th className="text-center">Service Title</th>
                    <th className="text-center">Service Provider</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Description</th>
                    <th className="text-center">Activity</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      services.map(service => 
                        <tr key={service._id}>
                            <td className='text-center'>
                                {service._id}
                            </td>
                            <td className="text-center">
                                {service.header}
                            </td>
                            <td className="text-center">
                                {}
                            </td>
                            <td className="text-center">
                                {service.price}
                            </td>
                            <td className="text-center">
                                {service.description}
                            </td>
                            <td className="text-center">
                                <CBadge color='success'>Active</CBadge>
                            </td>
                        </tr>
                    )}                       
                  </tbody>
                </table>
              
            </CCardBody>
          </CCard>
          
        )
      }
      
    } 
    return (
      <div>
        {serviceContent}
      </div>
    )
  }
}
GetServiceAdmin.proptype = {
  service : Proptypes.object.isRequired,
  getServices : Proptypes.func.isRequired,
}
const mapStateToProps = state => ({
  service : state.service
})
export default connect(mapStateToProps, {getServices})(GetServiceAdmin);