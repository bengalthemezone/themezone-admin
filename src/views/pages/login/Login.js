import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {login} from "../../../redux/auth/authActions";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";


class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      email : '',
      password: '',
    }
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillUpdate(prevProps,PrevStates) {
    if (prevProps.auth.isAuthenticated !== this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({[name]: value })
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      email : this.state.email,
      password : this.state.password,
    }
    this.props.login(loginData);
  }
  render(){
    const {error} = this.props.error
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" name='email' onChange={(e) => this.onInputChange(e)} placeholder="Username" autoComplete="username" />
                        {
                          error.email && <p className='errorText'>{error.email}</p>
                        }
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" name='password' onChange={(e) => this.onInputChange(e)} placeholder="Password" autoComplete="current-password" />
                        {
                          error.password && <p className='errorText'>{error.password}</p>
                        }
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton color="primary"  type='submit' onClick={(e) => this.onFormSubmit(e)} className="px-4">Login</CButton>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          <CButton color="link" className="px-0">Forgot password?</CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CCardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Become an admin on approval</p>
                      <Link to="/register">
                        <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error : state.error,
  auth : state.auth
})
export default withRouter(connect(mapStateToProps, {login})(Login))
