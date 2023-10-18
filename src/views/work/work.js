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
import {getWork,activateWork} from "../../redux/work/workActions";
import Spinner from "../../containers/spinner.component";

class Work extends React.Component {
  constructor(props) {
    super();
    this.state = {
        tableToggle : true,

    }
}

componentDidMount = () => {
  this.props.getWork();
}
ontoggleEdit = () => {

}
render(){
const {work, loading} = this.props.work;
let workContent;
if (work === null || loading) {
    workContent = <Spinner/>
}
else {
    if (work.length > 0){
        workContent = (
          <CCard>
            <CCardBody>
                <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                      <th className="text-center">Post Id</th>
                      <th className="text-center">Posted By</th>
                      <th className="text-center">Category</th>
                      <th className='text-center'>Sub Category</th>
                      <th className="text-center">Location</th>
                      <th className="text-center">Title</th>
                      <th className='text-center'>Active</th>
                      <th className="text-center">Activity</th>
                  </tr>
                  </thead>
                  <tbody>
                      {
                          work.map((work) => 
                          <tr key={work._id}>
                              <td className='text-center'>
                                  {work._id}
                              </td>
                              <td className="text-center">
                                  {work.user}
                              </td>
                              <td className="text-center">
                                  {work.category}
                              </td>
                              <td className="text-center">
                                  {work.subCategory}
                              </td>
                              <td className="text-center">
                                  {work.location}
                              </td>
                              <td className="text-center">
                                  {work.title}
                              </td>
                              <td>
                                  {work.activate ? <CBadge color='success'>Active</CBadge> : <CBadge color='danger'>Inactive</CBadge>}
                              </td>
                              <td className="text-center">
                              <CButtonGroup className="mr-2">
                                  <CButton onClick={() => this.props.activateWork(work._id,window.location)} value="null" color="secondary"><CIcon name='cil-scrubber'></CIcon></CButton>
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
          {workContent}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  work : state.work
})
export default connect(mapStateToProps, {getWork,activateWork})(Work)