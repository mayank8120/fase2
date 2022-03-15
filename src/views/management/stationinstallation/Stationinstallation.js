import React from 'react';
import './stationinstallation.css';
import { slideDown, slideUp } from './anim';
import { Button } from 'react-bootstrap';
import Plus from './../../../assets/img/Plus.png';
import { Link } from "react-router-dom";
import {
    Col,
    Row,
} from 'react-bootstrap'

// function formatDate(str) {
//   return str.substr(0, 10);
// }

// function capitalize(str) {
//   return str.split(' ').map(s => {
//     return s.charAt(0).toUpperCase() + s.substr(1);
//   }).join(' ');
// }


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
                <td className="uk-text-nowrap font-size14 font-weight400 colorSecondaryBlack">

                    <p className="mb-0 font-size14 font-weight400 colorSecondaryBlack">123213</p>
                </td>
                <td className="uk-text-nowrap">
                    <h4 className="mb-1 secondaryGreyColor font-size14 font-weight400">ABC Property</h4>
                </td>
                <td className="uk-text-nowrap d-flex align-items-center">
                    <h4 className="mb-0 secondaryGreyColor font-size14 font-weight400">10 AC</h4>
                    <p className="mb-0 font-size14 font-weight400 secondaryGreyColor ml-20">5 DC</p>
                </td>
                <td>
                    <div className=" font-size14 colorSecondaryBlack font-weight400">
                        Robert Downey Jr
                    </div>
                    {/* <div className="tagsBlock inactive font-size14 font-weight600 text-center">
            Inactive
          </div> */}
                </td>

                <td>
                    <div className="d-flex align-items-top">
                        <p className="mb-0 font-size14 font-weight600 statucgreencolor">Installed
                        </p>
                    </div>
                </td>

                <td>
                    <div className="d-flex align-items-center editDeleteIcon">

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
                        <a href>
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
                        </a>
                    </div>
                </td>
            </tr>,
            <tr key="main">
                <td className="uk-text-nowrap font-size14 font-weight400 colorSecondaryBlack">

                    <p className="mb-0 font-size14 font-weight400 colorSecondaryBlack">123127</p>
                </td>
                <td className="uk-text-nowrap">
                    <h4 className="mb-1 secondaryGreyColor font-size14 font-weight400">San Gabriel Grand Village</h4>
                </td>
                <td className="uk-text-nowrap d-flex align-items-center">
                    <h4 className="mb-0 secondaryGreyColor font-size14 font-weight400">15 AC</h4>
                    <p className="mb-0 font-size14 font-weight400 secondaryGreyColor ml-20">5 DC</p>
                </td>
                <td>
                    <div className=" font-size14 colorSecondaryBlack font-weight400">
                        John Yang

                    </div>
                    {/* <div className="tagsBlock inactive font-size14 font-weight600 text-center">
            Inactive
          </div> */}
                </td>

                <td>
                    <div className="d-flex align-items-top">
                        <p className="mb-0 font-size14 font-weight600 statucskycolor">To be installed
                        </p>
                    </div>
                </td>

                <td>
                    <div className="d-flex align-items-center editDeleteIcon">

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
                        <a href>
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

class StationInstallation extends React.Component {
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
            <main className="station-installation">
                <Row>
                    <Col lg="12" className="pl-0 pr-0">
                        <div className="d-flex align-items-center responsiveTable">
                            <div className="topTitle">
                                <h3 className="mb-0 font-size24 font-weight700 colorBlack">Installation Management</h3>
                                <p className="mb-0 font-size16 font-weight600 mt-1 grey">Manage Installation Project</p>
                            </div>
                            <div class="ml-auto">
                                <Link to="/management/newinstallation"><Button variant="primary" className="responsivemt-1 text-uppercase gradientBtn font-size14 font-weight700 d-flex mml-0 align-items-center"><img src={Plus} alt="" />NEW INSTALLATION
                                </Button>{' '}</Link>
                            </div>

                        </div>

                    </Col>
                </Row>
                <div className="table-container">
                    <div className="uk-overflow-auto flexColumn">
                        <table className="uk-table uk-table-hover uk-table-middle uk-table-divider tableEve">
                            <thead className="searchBarIcon">
                                <tr className="borderBottomNone">
                                    <th className="uk-table-shrink pad-11-4">INSTALLATION CODE</th>
                                    <th className="min-width-150 pad-11-4">PROPERTY SITE</th>
                                    <th className="min-width-200 pad-11-4">NUMBER OF CHARGERS</th>
                                    <th>INSTALLER</th>

                                    <th className="uk-table-shrink min-width-280 pad-11-4">STATUS
                                    </th>

                                    <th className="uk-table-shrink pad-11-4"></th>
                                </tr>
                                <tr>
                                    <th className="pad-4-11">
                                        <div className="rounderSearchBar posRel">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <g opacity="0.5">
                                                    <path d="M5.4375 9.375C7.61212 9.375 9.375 7.61212 9.375 5.4375C9.375 3.26288 7.61212 1.5 5.4375 1.5C3.26288 1.5 1.5 3.26288 1.5 5.4375C1.5 7.61212 3.26288 9.375 5.4375 9.375Z" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M8.22162 8.22168L10.4998 10.4998" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                            </svg>
                                            <input class="form-control max-width-153" type="text" id="" />
                                        </div>
                                    </th>
                                    <th className="pad-4-11">
                                        <div className="rounderSearchBar posRel">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <g opacity="0.5">
                                                    <path d="M5.4375 9.375C7.61212 9.375 9.375 7.61212 9.375 5.4375C9.375 3.26288 7.61212 1.5 5.4375 1.5C3.26288 1.5 1.5 3.26288 1.5 5.4375C1.5 7.61212 3.26288 9.375 5.4375 9.375Z" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M8.22162 8.22168L10.4998 10.4998" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                            </svg>
                                            <input class="form-control max-width-115" type="text" id="" />
                                        </div>
                                    </th>
                                    <th className="pad-4-11">
                                        <select className="custom-select priceSelect   max-width-177" name="select" id="select"><option value="0" hidden="">All</option><option value="1">Property Manager</option><option value="2">Property Manager</option><option value="3">Property Manager</option></select>
                                    </th>
                                    <th className="pad-4-11">
                                        <div className="rounderSearchBar posRel">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <g opacity="0.5">
                                                    <path d="M5.4375 9.375C7.61212 9.375 9.375 7.61212 9.375 5.4375C9.375 3.26288 7.61212 1.5 5.4375 1.5C3.26288 1.5 1.5 3.26288 1.5 5.4375C1.5 7.61212 3.26288 9.375 5.4375 9.375Z" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M8.22162 8.22168L10.4998 10.4998" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                            </svg>
                                            <input class="form-control max-width-110" type="text" id="" />
                                        </div>
                                    </th>
                                    <th className="pad-4-11">
                                        <select className="custom-select priceSelect   max-width-177" name="select" id="select"><option value="0" hidden="">All</option><option value="1">Property Manager</option><option value="2">Property Manager</option><option value="3">Property Manager</option></select>

                                    </th>
                                    <th className="uk-table-shrink pad-4-11"></th>

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
            </main>
        );
    }
}

export default StationInstallation