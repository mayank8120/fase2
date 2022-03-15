import React from 'react';
import Form from 'react-bootstrap/Form';
import './managementcompanies.css';
import { slideDown, slideUp } from './anim';
import { Button } from 'react-bootstrap';
import Plus from '../../../assets/img/Plus.png';
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  FormGroup,
  FormSelect
} from 'react-bootstrap'

import Breadcrumbs from '../../../containers/navbar/Breadcrumbs';



class UserTableRow extends React.Component {
  state = {
    expanded: false,
    rotate: true
  }

  toggleExpander = (e) => {
    if (e.target.type === 'checkbox') return;

    if (!this.state.expanded) {
      this.setState(
        { expanded: true },
        () => {
          if (this.refs.expanderBody) {
            slideDown(this.refs.expanderBody);
            this.rotateArrow(this);
          }
        },
      );
    } else {
      this.rotateArrow(this);
      slideUp(this.refs.expanderBody, {
        onComplete: () => { this.setState({ expanded: false }); }
      });
    }
  }
  rotateArrow() {
    this.setState({ rotate: !this.state.rotate })
  }

  render() {
    // const { user } = this.props;
    let rotate_arrow = this.state.rotate ? "rotate0" : "rotate180";




    return [
      <tr key="main" onClick={this.toggleExpander}>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" className={rotate_arrow} height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="#86A4BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </td>
        <td>
          <div className="d-flex align-items-center checkbox font-weight600 font-size14">

            12345

          </div>
        </td>
        <td className="uk-text-nowrap font-size14 font-weight600 blueColor"> <Link className="blueColor" to="/management-company/frankcompany">Alan Walker Electric Vehicle Company</Link>
        </td>
        <td>
          <div className="d-flex align-items-center energyConsump">

            <div className="d-flex align-items-center font-size12">
              <p className="mb-0 primaryColor font-size12 font-weight500">2464 Royal Ln. Mesa,<br /> New Jersey 45463</p>

            </div>
          </div>
        </td>
        <td>
          <div className="d-flex align-items-center">

            <p className="mb-0 font-size12 font-weight500 primaryColor">Ln. Mesa
            </p>
          </div>
        </td>
        <td>
          <p className="font-size12 font-weight500 primaryColor mb-0">NJ</p>
        </td>

        <td>
          <div className="d-flex align-items-center editDeleteIcon text-right justify-content-end">
            <a href>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path d="M1.6 11.04L0 16.0001L4.96 14.4001L1.6 11.04Z" fill="#86A4BA" />
                  <path d="M10.53 2.08431L2.72363 9.89062L6.11769 13.2847L13.924 5.47837L10.53 2.08431Z" fill="#86A4BA" />
                  <path d="M15.7597 2.48L13.5197 0.24C13.1997 -0.08 12.7197 -0.08 12.3997 0.24L11.6797 0.96L15.0397 4.32L15.7597 3.6C16.0797 3.28 16.0797 2.8 15.7597 2.48Z" fill="#86A4BA" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            {/* <a href>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path d="M10.2067 5.7959C9.99977 5.7959 9.83203 5.96364 9.83203 6.17061V13.2526C9.83203 13.4594 9.99977 13.6273 10.2067 13.6273C10.4137 13.6273 10.5814 13.4594 10.5814 13.2526V6.17061C10.5814 5.96364 10.4137 5.7959 10.2067 5.7959Z" fill="#86A4BA" />
                  <path d="M5.78584 5.7959C5.57887 5.7959 5.41113 5.96364 5.41113 6.17061V13.2526C5.41113 13.4594 5.57887 13.6273 5.78584 13.6273C5.99281 13.6273 6.16055 13.4594 6.16055 13.2526V6.17061C6.16055 5.96364 5.99281 5.7959 5.78584 5.7959Z" fill="#86A4BA" />
                  <path d="M2.56325 4.76335V13.9953C2.56325 14.541 2.76334 15.0534 3.11287 15.4211C3.46079 15.7898 3.94498 15.9991 4.45171 16H11.5413C12.0481 15.9991 12.5323 15.7898 12.8801 15.4211C13.2296 15.0534 13.4297 14.541 13.4297 13.9953V4.76335C14.1245 4.57893 14.5748 3.90768 14.4818 3.19471C14.3887 2.48189 13.7815 1.94867 13.0625 1.94852H11.144V1.48014C11.1462 1.08626 10.9905 0.708039 10.7116 0.42979C10.4328 0.151688 10.054 -0.0031709 9.66012 4.92333e-05H6.33285C5.93897 -0.0031709 5.56017 0.151688 5.28133 0.42979C5.0025 0.708039 4.84676 1.08626 4.84896 1.48014V1.94852H2.93049C2.21152 1.94867 1.60424 2.48189 1.51115 3.19471C1.4182 3.90768 1.86843 4.57893 2.56325 4.76335ZM11.5413 15.2506H4.45171C3.81105 15.2506 3.31266 14.7002 3.31266 13.9953V4.79629H12.6803V13.9953C12.6803 14.7002 12.1819 15.2506 11.5413 15.2506ZM5.59837 1.48014C5.59588 1.28503 5.67258 1.09724 5.81104 0.959502C5.94936 0.821768 6.13759 0.746095 6.33285 0.749461H9.66012C9.85538 0.746095 10.0436 0.821768 10.1819 0.959502C10.3204 1.09709 10.3971 1.28503 10.3946 1.48014V1.94852H5.59837V1.48014ZM2.93049 2.69793H13.0625C13.435 2.69793 13.737 2.99989 13.737 3.3724C13.737 3.74492 13.435 4.04688 13.0625 4.04688H2.93049C2.55798 4.04688 2.25602 3.74492 2.25602 3.3724C2.25602 2.99989 2.55798 2.69793 2.93049 2.69793Z" fill="#86A4BA" />
                  <path d="M7.99579 5.7959C7.78883 5.7959 7.62109 5.96364 7.62109 6.17061V13.2526C7.62109 13.4594 7.78883 13.6273 7.99579 13.6273C8.20276 13.6273 8.37049 13.4594 8.37049 13.2526V6.17061C8.37049 5.96364 8.20276 5.7959 7.99579 5.7959Z" fill="#86A4BA" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a> */}
          </div>
        </td>
      </tr>,
      this.state.expanded && (
        <tr className="expandable" key="tr-expander">
          <td className="uk-background-muted" colSpan={12}>
            <div ref="expanderBody" className="inner uk-grid">
              <div className="uk-width-1-4 uk-text-center">
                <table class="tableEve">
                  <thead>
                    <tr className="borderBottomNone">
                      <th className="uk-table-shrink padding-19-4-8">ID</th>
                      <th className="width128 padding-19-4-8">Property Name</th>
                      <th className="uk-table-shrink padding-19-4-8"></th>

                      <th className="uk-table-shrink padding-19-4-8">Stations</th>
                      <th className="padding-19-4-8">Enabled?</th>
                      <th className="uk-table-shrink min-width-150 padding-19-4-8">Action</th>
                      <th className="uk-table-shrink padding-19-4-8"></th>
                      <th className="uk-table-shrink padding-19-4-8"></th>
                    </tr>
                    <tr>
                      <th className="padding-4-8">
                        <div className="rounderSearchBar serachradius posRel ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <g opacity="0.5">
                              <path d="M5.4375 9.375C7.61212 9.375 9.375 7.61212 9.375 5.4375C9.375 3.26288 7.61212 1.5 5.4375 1.5C3.26288 1.5 1.5 3.26288 1.5 5.4375C1.5 7.61212 3.26288 9.375 5.4375 9.375Z" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M8.22162 8.22168L10.4998 10.4998" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                          </svg>
                          <input class="form-control width56 boxshadowNone" type="text" id="" />
                        </div>
                      </th>
                      <th className="width128 padding-4-8">
                        <div className="rounderSearchBar posRel">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <g opacity="0.5">
                              <path d="M5.4375 9.375C7.61212 9.375 9.375 7.61212 9.375 5.4375C9.375 3.26288 7.61212 1.5 5.4375 1.5C3.26288 1.5 1.5 3.26288 1.5 5.4375C1.5 7.61212 3.26288 9.375 5.4375 9.375Z" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M8.22162 8.22168L10.4998 10.4998" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                          </svg>
                          <input class="form-control width128 boxshadowNone" type="text" id="" />
                        </div>
                      </th>
                      <th className="uk-table-shrink padding-4-8"></th>
                      <th className="uk-table-shrink padding-4-8"></th>
                      <th className="uk-table-shrink padding-4-8"></th>
                      <th className="uk-table-shrink padding-4-8"></th>
                      <th className="uk-table-shrink padding-4-8"></th>
                      <th className="uk-table-shrink padding-4-8"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="uk-text-nowrap font-size14 font-weight500 colorBlack padding-19-22-24 ">12345</td>
                      <td className="uk-text-nowrap padding-19-22-24">
                        <h4 className="mb-2  font-size14 font-weight600 "> <Link to="/management/abcapartments" class="">Blessed Rock Apt</Link></h4>

                      </td>
                      <td className="uk-text-nowrap padding-19-22-24">
                        <p className="mb-0 font-size12 font-weight500 colorSecondaryBlack  ">2464 Royal Ln. Mesa,<br />New Jersey 45463</p>
                      </td>

                      <td class="padding-19-22-24 d-flex align-items-center"><a class="colorBlack stationLink font-size14 font-weight600 ml-4" href="#/management/stationmanagements">03</a>
                        <p class="mb-0 font-size14 font-weight600 showbutton">Show</p></td>
                      <td className="padding-19-22-24"> <Form.Check type="switch" id="custom-switch3" /></td>
                      <td className="padding-19-22-24">
                        <div class="priceSettingButton font-size14 font-weight700 blueColor">
                          <Link className="blueColor" to="/management/pricesettings">  Price Settings</Link>
                        </div>
                      </td>
                      <td className="padding-19-22-24">
                        <div className="d-flex align-items-center editDeleteIcon">
                          <a href>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M17 3C17.2626 2.73735 17.5744 2.52901 17.9176 2.38687C18.2608 2.24473 18.6286 2.17157 19 2.17157C19.3714 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52901 20.7374 2.73735 21 3C21.2626 3.26264 21.471 3.57444 21.6131 3.9176C21.7553 4.26077 21.8284 4.62856 21.8284 5C21.8284 5.37143 21.7553 5.73923 21.6131 6.08239C21.471 6.42555 21.2626 6.73735 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z" stroke="#9597A1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </a>
                          <a href>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M3 6H5H21" stroke="#F47646" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#F47646" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M10 11V17" stroke="#F47646" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M14 11V17" stroke="#F47646" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>





                  </tbody>
                </table>
              </div>
            </div>
          </td>
        </tr>
      )
    ];
  }
}



class ManagementCompanies extends React.Component {
  state = { users: null }

  componentDidMount() {
    fetch('https://randomuser.me/api/1.1/?results=15')
      .then(response => response.json())
      .then(data => { this.setState({ users: data.results }) });
  }

  render() {
    const { users } = this.state;
    const isLoading = users === null;
    return (
      <main className="managemanagement">
        <Row>
          <Col lg="12" className="pl-0 pr-0">
            <div className="d-flex align-items-center responsiveTable">
              <div className="topTitle">
                <h3 className="mb-0 font-size24 font-weight700 colorBlack">Manage Management Companies</h3>
                <p className="mb-0 font-size16 font-weight600 mt-1"> <Breadcrumbs /></p>
              </div>
              <div class="ml-auto">
                <Link to="/addcompany"><Button variant="primary" className="responsivemt-1 text-uppercase gradientBtn font-size16 font-weight700 d-flex mml-0 align-items-center"><img src={Plus} alt="" />Add Company</Button>{' '}</Link>
              </div>
            </div>
          </Col>
        </Row>
        <div className="table-container">
          <div className="uk-overflow-auto">
            <table className="responsive uk-table uk-table-hover uk-table-middle uk-table-divider tableEve">
              <thead className="searchBarIcon">
                <tr className="borderBottomNone">
                  <th />
                  <th className="uk-table-shrink paddingSearchHead">COMPANY ID</th>
                  <th className="uk-table-shrink paddingSearchHead">Management Company</th>
                  <th className="uk-table-shrink paddingSearchHead">ADDRESS</th>
                  <th className="uk-table-shrink paddingSearchHead">CITY</th>
                  <th className="uk-table-shrink paddingSearchHead">STATE</th>
                  <th className="uk-table-shrink" />
                </tr>
                <tr>
                  <th />
                  <th className="paddingSearchHead2">
                    <div className="rounderSearchBar posRel">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <g opacity="0.5">
                          <path d="M5.4375 9.375C7.61212 9.375 9.375 7.61212 9.375 5.4375C9.375 3.26288 7.61212 1.5 5.4375 1.5C3.26288 1.5 1.5 3.26288 1.5 5.4375C1.5 7.61212 3.26288 9.375 5.4375 9.375Z" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M8.22162 8.22168L10.4998 10.4998" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                      </svg>
                      <input class="form-control max-width-97" type="text" id="" />
                    </div>
                  </th>
                  <th className="paddingSearchHead2">
                    <div className="rounderSearchBar posRel">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <g opacity="0.5">
                          <path d="M5.4375 9.375C7.61212 9.375 9.375 7.61212 9.375 5.4375C9.375 3.26288 7.61212 1.5 5.4375 1.5C3.26288 1.5 1.5 3.26288 1.5 5.4375C1.5 7.61212 3.26288 9.375 5.4375 9.375Z" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M8.22162 8.22168L10.4998 10.4998" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                      </svg>
                      <input class="form-control max-width-304" type="text" id="" />
                    </div>
                  </th>
                  <th className="paddingSearchHead2">
                    <div className="rounderSearchBar posRel">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <g opacity="0.5">
                          <path d="M5.4375 9.375C7.61212 9.375 9.375 7.61212 9.375 5.4375C9.375 3.26288 7.61212 1.5 5.4375 1.5C3.26288 1.5 1.5 3.26288 1.5 5.4375C1.5 7.61212 3.26288 9.375 5.4375 9.375Z" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M8.22162 8.22168L10.4998 10.4998" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                      </svg>
                      <input class="form-control max-width-145" type="text" id="" />
                    </div>
                  </th>
                  <th className="paddingSearchHead2">
                    <div className="rounderSearchBar posRel">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <g opacity="0.5">
                          <path d="M5.4375 9.375C7.61212 9.375 9.375 7.61212 9.375 5.4375C9.375 3.26288 7.61212 1.5 5.4375 1.5C3.26288 1.5 1.5 3.26288 1.5 5.4375C1.5 7.61212 3.26288 9.375 5.4375 9.375Z" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M8.22162 8.22168L10.4998 10.4998" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                      </svg>
                      <input class="form-control max-width-145" type="text" id="" />
                    </div>
                  </th>
                  <th className="paddingSearchHead2 max-width-145">
                    <div className="rounderSearchBar posRel">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <g opacity="0.5">
                          <path d="M5.4375 9.375C7.61212 9.375 9.375 7.61212 9.375 5.4375C9.375 3.26288 7.61212 1.5 5.4375 1.5C3.26288 1.5 1.5 3.26288 1.5 5.4375C1.5 7.61212 3.26288 9.375 5.4375 9.375Z" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M8.22162 8.22168L10.4998 10.4998" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                      </svg>
                      <input class="form-control max-width-60" type="text" id="" />
                    </div>
                  </th>
                  <th className="uk-table-shrink"></th>
                </tr>
              </thead>
              <tbody>
                {isLoading
                  ? <tr><td colSpan={6} className="uk-text-center"><em className="uk-text-muted">Loading...</em></td></tr>
                  : users.map((user, index) =>
                    <UserTableRow key={index} index={index + 1} user={user} />
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className="d-flex align-items-center tableFooter">
          <div className="d-flex align-items-center"></div>
          <p className="mb-0 font-size12 font-weight400 secondaryColor">Rows per page:</p>
          <div>
            <FormGroup className="col-sm-12 mb-0 tableSelect">
              <FormSelect name="select" id="select">
                <option value="0">1</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
                <option value="0">5</option>
                <option value="1">6</option>
                <option value="2">7</option>
                <option value="3">8</option>
                <option value="2">9</option>
                <option value="3">10</option>
              </FormSelect>
            </FormGroup>
          </div>
          <div className="ml-auto pagination">
            <div className="d-flex align-items-center">
              <p className="mb-0 font-size12 font-weight400 secondaryColor">1-5 items</p>
              <span className="btnBox">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 6L9 12L15 18" stroke="#86A4BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <span className="btnBox">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="#86A4BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default ManagementCompanies
