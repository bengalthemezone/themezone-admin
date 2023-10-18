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
import {connect} from "react-redux";
import {getTemplates,activateTemplate} from "../../redux/template/templateActions";
import Proptypes from "prop-types";
import Spinner from "../../containers/spinner.component";

class StartSelling extends React.Component{
  constructor(props) {
    super();
    this.state = {
        tableToggle : true,

    }
}

componentDidMount = () => {
  this.props.getTemplates();
}
ontoggleEdit = () => {

}
render(){
const {templates, loading} = this.props.template;
let sellingContent;
if (templates === null || loading) {
    sellingContent = <Spinner/>
}
else {
    if (templates.length > 0){
        sellingContent = (
          <CCard>
            <CCardBody>
                <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                      <th className="text-center">Tutorial Id</th>
                      <th className="text-center">Posted By</th>
                      <th className="text-center">Category</th>
                      <th className='text-center'>title</th>
                      <th className="text-center">Price</th>
                      <th className='text-center'>Active</th>
                      <th className="text-center">Activity</th>
                  </tr>
                  </thead>
                  <tbody>
                      {
                          templates.map((template) => 
                          <tr key={template._id}>
                              <td className='text-center'>
                                  {template._id}
                              </td>
                              <td className="text-center">
                                  {template.user}
                              </td>
                              <td className="text-center">
                                  {template.category}
                              </td>
                              <td className="text-center">
                                  {template.title}
                              </td>
                              <td className="text-center">
                                  {template.price}
                              </td>
                              <td className="text-center">
                                  {template.activate ? <CBadge color='success'>Active</CBadge> : <CBadge color='danger'>Inactive</CBadge>}
                              </td>
                              <td className="text-center">
                              <CButtonGroup className="mr-2">
                                  <CButton onClick={() => this.props.activateTemplate(template._id,window.location)} value="null" color="secondary"><CIcon name='cil-scrubber'></CIcon></CButton>
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
          {sellingContent}
      </div>
    )
  }
}
StartSelling.proptype = {
  template : Proptypes.object.isRequired,
  getTemplates : Proptypes.func.isRequired,
  activateTemplate: Proptypes.func.isRequired
}
const mapStateToProps = state => ({
  template : state.template
})
export default connect(mapStateToProps, {getTemplates,activateTemplate})(StartSelling);