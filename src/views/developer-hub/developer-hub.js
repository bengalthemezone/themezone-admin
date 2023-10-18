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
import {getPosts,activatePost} from "../../redux/post/postActions";
import Spinner from "../../containers/spinner.component";

class Post extends React.Component {
  constructor(props) {
    super();
    this.state = {
        tableToggle : true,

    }
}

componentDidMount = () => {
  this.props.getPosts();
}
render(){
const {posts, loading} = this.props.post;
let postContent;
if (posts === null || loading) {
    postContent = <Spinner/>
}
else {
    if (posts.length > 0){
        postContent = (
          <CCard>
            <CCardBody>
                <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                      <th className="text-center">Post Id</th>
                      <th className="text-center">Posted By</th>
                      <th className="text-center">Topic</th>
                      <th className='text-center'>Question</th>
                      <th className='text-center'>Active</th>
                      <th className="text-center">Activity</th>
                  </tr>
                  </thead>
                  <tbody>
                      {
                          posts.map((post) => 
                          <tr key={post._id}>
                              <td className='text-center'>
                                  {post._id}
                              </td>
                              <td className="text-center">
                                  {post.user}
                              </td>
                              <td className="text-center">
                                  {post.topic}
                              </td>
                              <td className="text-center">
                                  {post.question}
                              </td>
                              <td>
                                  {post.activate ? <CBadge color='success'>Active</CBadge> : <CBadge color='danger'>Inactive</CBadge>}
                              </td>
                              <td className="text-center">
                              <CButtonGroup className="mr-2">
                                  <CButton onClick={() => this.props.activatePost(post._id,window.location)} value="null" color="secondary"><CIcon name='cil-scrubber'></CIcon></CButton>
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
          {postContent}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  post : state.post
})
export default connect(mapStateToProps, {getPosts,activatePost})(Post)