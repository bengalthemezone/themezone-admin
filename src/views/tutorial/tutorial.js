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
import Proptypes from "prop-types";
import {getTutorials} from "../../redux/tutorial/tutorialActions";
import Spinner from "../../containers/spinner.component";

class TutorialAdmin extends React.Component{
  constructor(props) {
    super();
    this.state = {
        tableToggle : true,

    }
}

componentDidMount = () => {
  this.props.getTutorials();
}
ontoggleEdit = () => {

}
render(){
const {tutorials, loading} = this.props.tutorial;
let tutorialsContent;
if (tutorials === null || loading) {
    tutorialsContent = <Spinner/>
}
else {
    if (tutorials.length > 0){
        tutorialsContent = (
          <CCard>
            <CCardBody>
                <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                      <th className="text-center">Tutorial Id</th>
                      <th className="text-center">Posted By</th>
                      <th className="text-center">Category</th>
                      <th className='text-center'>Header</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Activity</th>
                  </tr>
                  </thead>
                  <tbody>
                      {
                          tutorials.map((tutorial) => 
                          <tr key={tutorial._id}>
                              <td className='text-center'>
                                  {tutorial._id}
                              </td>
                              <td className="text-center">
                                  {tutorial.user}
                              </td>
                              <td className="text-center">
                                  {tutorial.category}
                              </td>
                              <td className="text-center">
                                  {tutorial.header}
                              </td>
                              <td className="text-center">
                                  {tutorial.price}
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
          {tutorialsContent}
      </div>
    )
  }
}

TutorialAdmin.proptype = {
  tutorial : Proptypes.object.isRequired,
  getTutorials : Proptypes.func.isRequired,
}
const mapStateToProps = state => ({
  tutorial : state.tutorial
})
export default connect(mapStateToProps, {getTutorials})(TutorialAdmin);