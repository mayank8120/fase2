import React from 'react';
import './staffrules.css';
import { slideDown, slideUp } from './anim';
import { Link } from "react-router-dom";
import Plus from './../../../assets/img/Plus.png';
import {
    Col,
    Row,
    FormGroup,
    FormSelect,
    Modal,
    ModalBody,
    Button,
    FormLabel,
    InputGroup
} from 'react-bootstrap'



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

            // <tr key="main" onClick={this.toggleExpander}>
            //   <td><InputGroup className="uk-checkbox" type="checkbox" /></td>
            //   <td className="uk-text-nowrap">{this.props.index}.</td>
            //   <td><img className="uk-preserve-width uk-border-circle" src={user.picture.thumbnail} width={48} alt="avatar" /></td>
            //   <td>{capitalize(user.name.first + ' ' + user.name.last)}<br /><small>{user.email}</small></td>
            //   <td>{capitalize(user.location.city)} ({user.nat})</td>
            //   <td>{formatDate(user.registered)}</td>
            // </tr>,
            <tr key="main" onClick={this.toggleExpander}>
            
                <td>
                    <svg xmlns="http://www.w3.org/2000/svg" className={rotate_arrow} width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="#86A4BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </td>
                <td>
                    <div className=" checkbox font-weight600 font-size14 primaryBlueColor">

                        12345

                    </div>
                </td>
                <td className="uk-text-nowrap font-size14 font-weight600 primaryBlueColor">Alan Walker
                </td>
                <td>
                    <div className=" energyConsump">

                        <div className=" font-size12">
                            <p className="mb-0 secondaryGreyColor font-size14 font-weight400 ">bruce@gmail.com
                            </p>

                        </div>
                    </div>
                </td>
                <td>
                    <div className="">

                        <p className="mb-0 font-size14 font-weight400 secondaryGreyColor">+12346781231
                        </p>
                    </div>
                </td>
                <td>
                    <p className="font-size142 font-weight400 secondaryGreyColor mb-0">Property Manager</p>
                </td>

                <td>
                    <div className=" editDeleteIcon text-right d-flex justify-content-end">
                        <a href>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M15.894 7.52515C14.1545 3.84969 11.525 2 8 2C4.47319 2 1.84551 3.84969 0.105961 7.52699C0.0361868 7.67518 0 7.83704 0 8.00092C0 8.1648 0.0361868 8.32666 0.105961 8.47485C1.84551 12.1503 4.47502 14 8 14C11.5268 14 14.1545 12.1503 15.894 8.47301C16.0353 8.17485 16.0353 7.82883 15.894 7.52515ZM8 12.6748C5.04019 12.6748 2.87309 11.1693 1.34456 8C2.87309 4.83067 5.04019 3.32515 8 3.32515C10.9598 3.32515 13.1269 4.83067 14.6554 8C13.1287 11.1693 10.9616 12.6748 8 12.6748ZM7.9266 4.76074C6.14301 4.76074 4.69705 6.21104 4.69705 8C4.69705 9.78896 6.14301 11.2393 7.9266 11.2393C9.71019 11.2393 11.1561 9.78896 11.1561 8C11.1561 6.21104 9.71019 4.76074 7.9266 4.76074ZM7.9266 10.0613C6.79075 10.0613 5.87143 9.13926 5.87143 8C5.87143 6.86074 6.79075 5.93865 7.9266 5.93865C9.06244 5.93865 9.98176 6.86074 9.98176 8C9.98176 9.13926 9.06244 10.0613 7.9266 10.0613Z" fill="#86A4BA" />
                            </svg>
                        </a>
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
                                <table class="tableEve">
                                    <thead>
                                        <tr>
                                            <th className="max-width-58"></th>
                                            <th className="max-width-80 pl-0">CHARGE ID</th>
                                            <th className="pl-0 max-width-200">DATE</th>
                                            <th className="pl-0">TIME</th>
                                            <th className="pl-0">PROPERTY</th>
                                            <th className="pl-0">STATION</th>
                                            <th className="pl-0">ENERGY</th>
                                            <th className="pl-0 max-width-95">AMOUNT</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td className="pl-0">
                                                <div className="d-flex align-items-center primaryBlueColor font-weight600 font-size14">
                                                    12345
                                                </div>
                                            </td>
                                            <td className="address-filed primaryBlueColor pl-0"><p className="mb-0 font-size14 primaryBlueColor font-weight600">
                                                2 Feb 2021</p>
                                            </td>
                                            <td className="pl-0">
                                                <div className=" font-size14 font-weight600">
                                                    <p className="mb-0 font-size14 font-weight600 skyBlueSecondColor">
                                                        2h 23m 12s</p><p class="font-weight400 font-size14 mb-0 secondaryGreyColor">20:00:00 - 22:23:12
                                                    </p>
                                                </div>
                                                {/* <div className="tagsBlock inactive font-size14 font-weight600 text-center">
            Inactive
          </div> */}
                                            </td>
                                            <td className="pl-0">
                                                <div className="d-flex align-items-top">
                                                    <p class="font-size14 font-weight600 primaryBlueColor">Blessed Rock Apt.</p>
                                                </div>
                                            </td>
                                            <td className="pl-0"><div class="priceSettingButton font-size14 font-weight600 primaryBlueColor brdrNone p-0">Station 1
                                            </div></td>
                                            <td class="primaryBlueColor font-size14 font-weight600 pl-0">

                                                <div class="d-flex align-items-center font-size14">
                                                    <p class="mb-0 primaryColor font-size14 font-weight600">10 </p>
                                                    <span class="secondaryGreyColor font-weight400 ml-1">kWh</span></div>
                                            </td>
                                            <td class="primaryBlueColor font-size14 font-weight600 pl-0">

                                                $21.23
                                            </td>

                                        </tr>
                                        <tr>
                                            <td className="checkNone">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 9L12 15L18 9" stroke="#86A4BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </td>
                                            <td className="pl-0">
                                                <div className="d-flex align-items-center primaryBlueColor font-weight600 font-size14">
                                                    12345
                                                </div>
                                            </td>
                                            <td className="address-filed primaryBlueColor pl-0"><p className="mb-0 font-size14 primaryBlueColor font-weight600">
                                                2 Feb 2021</p>
                                            </td>
                                            <td className="pl-0">
                                                <div className=" font-size14 font-weight600">
                                                    <p className="mb-0 font-size14 font-weight600 skyBlueSecondColor">
                                                        2h 23m 12s</p><p class="font-weight400 font-size14 mb-0 secondaryGreyColor">20:00:00 - 22:23:12
                                                    </p>
                                                </div>
                                                {/* <div className="tagsBlock inactive font-size14 font-weight600 text-center">
            Inactive
          </div> */}
                                            </td>
                                            <td className="pl-0">
                                                <div className="d-flex align-items-top">
                                                    <p class="font-size14 font-weight600 primaryBlueColor">Blessed Rock Apt.</p>
                                                </div>
                                            </td>
                                            <td className="pl-0"><div class="priceSettingButton font-size14 font-weight600 primaryBlueColor brdrNone p-0">Station 1
                                            </div></td>
                                            <td class="primaryBlueColor font-size14 font-weight600 pl-0">
                                                <div class="d-flex align-items-center font-size14">
                                                    <p class="mb-0 primaryColor font-size14 font-weight600">10 </p>
                                                    <span class="secondaryGreyColor font-weight400 ml-1">kWh</span></div>
                                            </td>
                                            <td class="primaryBlueColor font-size14 font-weight600 pl-0">

                                                $21.23
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



class StaffRules extends React.Component {
    state = { users: null }
    state = {
        users: null,
        openModal: false
    }
    onClickButton = e => {
        e.preventDefault()
        this.setState({ openModal: true })
    }

    onCloseModal = () => {
        this.setState({ openModal: false })
    }
    componentDidMount() {
        fetch('https://randomuser.me/api/1.1/?results=15')
            .then(response => response.json())
            .then(data => { this.setState({ users: data.results }) });
    }

    render() {
        const { users } = this.state;
        const isLoading = users === null;
        return (
            <main className="staff-rules">
                <Row>
                    <Col lg="12" className="pl-0 pr-0">
                        <div className="d-flex align-items-center responsiveTable">
                            <div className="topTitle">
                                <h3 className="mb-0 font-size24 font-weight700 colorBlack">Staff & Roles Management</h3>
                                <p className="mb-0 font-size16 font-weight600 mt-1 grey">Manage all staff and roles </p>
                            </div>
                            <div class="ml-auto d-flex align-items-center ">
                                <Link to="/management/managerole"><Button variant="primary" className="responsivemt-1 text-uppercase gradientBtn font-size16 font-weight700 d-flex mml-0 align-items-center"><img src={Plus} alt="" />Manage Role</Button>{' '}</Link>
                                <Button onClick={this.onClickButton} variant="primary" className="mr-1 colorWhite gradientBtn font-size14 font-weight700 d-flex align-items-center">
                                    <img src={Plus} alt="" />ADD NEW STAFF
                                </Button>{' '}
                                <Modal
                                    show={this.state.openModal}
                                    onClose={this.onCloseModal}
                                    size="md">

                                    <ModalBody>
                                        <div className="add-staff">
                                            <Row className="align-items-center justify-content-center">

                                                <Col md="12" className="maxWidth">

                                                    <p className="font-size32 font-weight700 primaryBlueColor">Add New Staff</p>
                                                    <FormGroup className="col-sm-12 p-0 mb32">
                                                        <FormLabel htmlFor="">Name</FormLabel>
                                                        <InputGroup id="" placeholder="Name" />
                                                    </FormGroup>
                                                    <FormGroup className="col-sm-12 p-0 mb32">
                                                        <FormLabel htmlFor="">Email</FormLabel>
                                                        <InputGroup id="" placeholder="Email Address" />
                                                    </FormGroup>
                                                    <FormGroup className="col-sm-12 p-0 mb32">
                                                        <FormLabel htmlFor="ccnumber" className="d-flex">Mobile Number </FormLabel>
                                                        <InputGroup id="" placeholder="Password" />
                                                    </FormGroup>
                                                    <FormGroup className="col-sm-12  p-0">
                                                        <FormLabel htmlFor="select">Roles</FormLabel>
                                                        <FormSelect className="price-select" name="select" id="select">
                                                            <option value="0">Choose Role</option>
                                                            <option value="1">Option #1</option>
                                                            <option value="2">Option #2</option>
                                                            <option value="3">Option #3</option>
                                                        </FormSelect>
                                                    </FormGroup>
                                                    <FormGroup className="">
                                                        <Link to='/login'><Button variant="primary" className=" skyBluebackground font-size16 font-weight700 mml-0">Apply</Button> </Link>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </div>
                                    </ModalBody>
                                    {/* <CModalFooter>
                      <Button color="primary" >Do Something</Button>{' '}
                      <Button color="secondary" onClick={this.onCloseModal}>Cancel</Button>
                    </CModalFooter> */}
                                </Modal>
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
                                    <th className="uk-table-shrink max-width-80 pad-11-4">USER ID</th>
                                    <th className="uk-table-shrink max-width-200 pad-11-4">NAME</th>
                                    <th className="min-width-145 pad-11-4">EMAIL</th>
                                    <th className="min-width-145 pad-11-4">MOBILE NUMBER</th>
                                    <th className="pad-11-4 min-width-185">Role</th>
                                    <th className="uk-table-shrink" />
                                    <th />
                                </tr>
                                <tr>
                                    <th />
                                    <th className="pad-4-11">
                                        <div className="rounderSearchBar posRel">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <g opacity="0.5">
                                                    <path d="M5.4375 9.375C7.61212 9.375 9.375 7.61212 9.375 5.4375C9.375 3.26288 7.61212 1.5 5.4375 1.5C3.26288 1.5 1.5 3.26288 1.5 5.4375C1.5 7.61212 3.26288 9.375 5.4375 9.375Z" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M8.22162 8.22168L10.4998 10.4998" stroke="#252840" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                            </svg>
                                            <InputGroup class="form-control max-width-80" type="text" id="" />
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
                                            <InputGroup class="form-control max-width-200" type="text" id="" />
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
                                            <InputGroup class="form-control min-width-145" type="text" id="" />
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
                                            <InputGroup class="form-control min-width-145" type="text" id="" />
                                        </div>
                                    </th>
                                    <th className="pad-4-11  ">
                                        <select className="custom-select priceSelect min-width-185" name="select" id="select"><option value="0" hidden="">All</option><option value="1">Property Manager</option><option value="2">Property Manager</option><option value="3">Property Manager</option></select>
                                    </th>
                                    <th className="uk-table-shrink"></th>
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

export default StaffRules
