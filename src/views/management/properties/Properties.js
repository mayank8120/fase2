import React from 'react';
import './properties.css';
import { slideDown, slideUp } from './anim';
import { Button, Col, FormGroup, FormSelect, Row } from 'react-bootstrap';
import Plus from './../../../assets/img/Plus.png';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';



class UserTableRow extends React.Component {
    state = { expanded: false }

    toggleExpander = (e) => {
        if (e.target.type === 'checkbox') return;

        if (!this.state.expanded) {
            this.setState(
                { expanded: true },
                () => {
                    if (this.refs.expanderBody) {
                        slideDown(this.refs.expanderBody);
                    }
                }
            );
        } else {
            slideUp(this.refs.expanderBody, {
                onComplete: () => { this.setState({ expanded: false }); }
            });
        }
    }

    render() {
        // const { user } = this.props;
        return [

            // <tr key="main" onClick={this.toggleExpander}>
            //   <td><input className="uk-checkbox" type="checkbox" /></td>
            //   <td className="uk-text-nowrap">{this.props.index}.</td>
            //   <td><img className="uk-preserve-width uk-border-circle" src={user.picture.thumbnail} width={48} alt="avatar" /></td>
            //   <td>{capitalize(user.name.first + ' ' + user.name.last)}<br /><small>{user.email}</small></td>
            //   <td>{capitalize(user.location.city)} ({user.nat})</td>
            //   <td>{formatDate(user.registered)}</td>
            // </tr>,

            <tr key="main">
                <td className="uk-text-nowrap font-size14 font-weight500 colorBlack padding-19-22-24 ">12345</td>
                <td className="uk-text-nowrap padding-19-22-24">
                    <h4 className="mb-2  font-size14 font-weight600 "> <Link to="/management/abcapartments" class="">Blessed Rock Apt</Link></h4>
                    <p className="mb-0 font-size12 font-weight500 colorSecondaryBlack  ">2464 Royal Ln. Mesa,<br />New Jersey 45463</p>
                </td>
                <td className="uk-text-nowrap padding-19-22-24">
                    <h4 className="mb-0  colorblue font-size14 font-weight500">EV Charger Company</h4>
                </td>

                <td class="padding-19-22-24">
                    <div class="d-flex align-items-center"> <a class="colorBlack stationLink font-size14 font-weight600 ml-4" href="#/management/stationmanagements">03</a>
                        <p class="mb-0 font-size14 font-weight600 showbutton">Show</p></div>

                </td>
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
            </tr>,
            <tr key="main">
                <td className="uk-text-nowrap font-size14 font-weight500 colorBlack padding-19-22-24 ">12345</td>
                <td className="uk-text-nowrap padding-19-22-24">
                    <h4 className="mb-2  font-size14 font-weight600 "> <Link to="/management/abcapartments" class="">Blessed Rock Apt</Link></h4>
                    <p className="mb-0 font-size12 font-weight500 colorSecondaryBlack  ">2464 Royal Ln. Mesa,<br />New Jersey 45463</p>
                </td>
                <td className="uk-text-nowrap padding-19-22-24">
                    <h4 className="mb-0  colorblue font-size14 font-weight500">EV Charger Company</h4>
                </td>

                <td class="padding-19-22-24">
                    <div class="d-flex align-items-center"> <a class="colorBlack stationLink font-size14 font-weight600 ml-4" href="#/management/stationmanagements">03</a>
                        <p class="mb-0 font-size14 font-weight600 showbutton">Show</p></div>

                </td>
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
            </tr>,
            this.state.expanded && (
                <tr className="expandable" key="tr-expander">
                    <td className="uk-background-muted" colSpan={12}>
                        <div ref="expanderBody" className="inner uk-grid">
                            <div className="uk-width-1-4 uk-text-center">
                                <img className="w-100" src={require('./../../../assets/img/station-graph.png').default} alt="" />
                            </div>
                        </div>
                    </td>
                </tr>
            )
        ];
    }
}

class Properties extends React.Component {
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
            <main className="properties">
                <Row>
                    <Col lg="12" className="pl-0 pr-0">
                        <div className="d-flex align-items-center responsiveTable">
                            <div className="topTitle">
                                <h3 className="mb-0 font-size24 font-weight700 colorBlack">Manage Properties</h3>
                                <p className="mb-0 font-size16 font-weight600 mt-1 colorGrey7">Manage Properties</p>
                            </div>
                            <div class="ml-auto">
                                <Link to="/addproperty"><Button variant="primary" className="responsivemt-1 text-uppercase gradientBtn font-size16 font-weight700 d-flex mml-0 align-items-center"><img src={Plus} alt="" />Add Property</Button>{' '}</Link>
                            </div>
                        </div>
                        <div className="filterSection mt-24">
                            <div className="filter-section d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M9.6 9.6L16 3.2V0H0V3.2L6.4 9.6V16L9.6 12.8V9.6Z" fill="#252840" />
                                    </svg>
                                    <h5 className="mb-0 colorBlack font-size16 font-weight600">Filter</h5>
                                </div>
                                <div className="rounderSearchBar posRel ml-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M8.15625 14.0625C11.4182 14.0625 14.0625 11.4182 14.0625 8.15625C14.0625 4.89432 11.4182 2.25 8.15625 2.25C4.89432 2.25 2.25 4.89432 2.25 8.15625C2.25 11.4182 4.89432 14.0625 8.15625 14.0625Z" stroke="#252840" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.332 12.3325L15.7493 15.7497" stroke="#252840" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <input class="form-control" type="text" id="" placeholder="Search Promotion" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="table-container">
                    <div className="uk-overflow-auto flexColumn">
                        <table className="uk-table uk-table-hover uk-table-middle uk-table-divider tableEve">
                            <thead className="whiteBackground">
                                <tr className="borderBottomNone">
                                    <th className="uk-table-shrink padding-19-4-8">ID</th>
                                    <th className="width128 padding-19-4-8">Property Name</th>
                                    <th className="min-width-153 padding-19-4-8">Company</th>

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
                                    <th className="padding-4-8">
                                        <div className="rounderSearchBar posRel">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <g opacity="0.5">
                                                    <path d="M5.4375 9.375C7.61212 9.375 9.375 7.61212 9.375 5.4375C9.375 3.26288 7.61212 1.5 5.4375 1.5C3.26288 1.5 1.5 3.26288 1.5 5.4375C1.5 7.61212 3.26288 9.375 5.4375 9.375Z" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M8.22162 8.22168L10.4998 10.4998" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                            </svg>
                                            <input class="form-control max-width-153 boxshadowNone" type="text" id="" />
                                        </div>
                                    </th>
                                    <th className="uk-table-shrink padding-4-8"></th>
                                    <th className="uk-table-shrink padding-4-8"></th>
                                    <th className="uk-table-shrink padding-4-8"></th>
                                    <th className="uk-table-shrink padding-4-8"></th>
                                    <th className="uk-table-shrink padding-4-8"></th>
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
                        <FormGroup className="col-sm-12 mb-0 rowSelect">
                            <FormSelect custom name="select" id="select" className="custom-select">
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="#86A4BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </span>
                            <span className="btnBox">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="#86A4BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Properties
