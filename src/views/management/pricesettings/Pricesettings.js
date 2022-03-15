import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './pricesettings.css';
import { slideDown, slideUp } from './anim';
import { Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {
    Col,
    InputGroup,
    Row,
    FormSelect,
    Modal,
    ModalBody,
    Button,
    Label,
    CContainer,
    FormGroup
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


            <tr key="main" onClick={this.toggleExpander}>
                <td className="pad-16-16">
                    <div className="d-flex align-items-center checkbox">
                        <input className="uk-checkbox" type="checkbox" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" className={rotate_arrow} height="24" viewBox="0 0 24 24" fill="none"><path d="M6 9L12 15L18 9" stroke="#86A4BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </div>
                </td>
                <td className="uk-text-nowrap pad-16-16">
                    <p className="mb-0 font-size14 font-weight600 primaryColor">10% Cut</p>
                    <p className="mb-0 font-size14 font-weight400 primaryColor">Halloween Promo</p>
                </td>
                <td className="pad-16-16">
                    <div className="statusPrice font-size14 font-weight600 active text-center">
                        Active
                    </div>
                    {/* <div className="statusPrice font-size14 font-weight600 soon text-center">
            Start Soon
          </div>
          <div className="statusPrice font-size14 font-weight600 hold text-center">
            On Hold
          </div>
          <div className="statusPrice font-size14 font-weight600 ended text-center">
            Ended
          </div> */}
                </td>
                <td className="pad-16-16">
                    <p className="mb-0 font-size14 font-weight600 skyBlueSecondColor">3 Aug 2020 - 13 Aug 2020</p>
                    <p className="mb-0 font-size14 font-weight400 primaryColor">08:00 - 10:00 AM</p>
                </td>
                <td className="pad-16-16">
                    <p className="font-size14 font-weight400 primaryColor mb-0">Any Customer</p>
                </td>
                <td className="pad-16-16">
                    <p className="mb-0 font-size14 font-weight600 primaryColor">THNKSEVECHARGE</p>
                </td>
                <td className="pad-16-16">
                    <div className="dropdownIcon text-right">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 13.25C12.6904 13.25 13.25 12.6904 13.25 12C13.25 11.3096 12.6904 10.75 12 10.75C11.3096 10.75 10.75 11.3096 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25Z" fill="#86A4BA" stroke="#86A4BA" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 6.25C12.6904 6.25 13.25 5.69036 13.25 5C13.25 4.30964 12.6904 3.75 12 3.75C11.3096 3.75 10.75 4.30964 10.75 5C10.75 5.69036 11.3096 6.25 12 6.25Z" fill="#86A4BA" stroke="#86A4BA" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 20.25C12.6904 20.25 13.25 19.6904 13.25 19C13.25 18.3096 12.6904 17.75 12 17.75C11.3096 17.75 10.75 18.3096 10.75 19C10.75 19.6904 11.3096 20.25 12 20.25Z" fill="#86A4BA" stroke="#86A4BA" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </td>
            </tr>,
            this.state.expanded && (
                <tr className="expandable" key="tr-expander">
                    <td className="uk-background-muted" colSpan={12}>
                        <div ref="expanderBody" className="inner uk-grid">
                            <div className="uk-width-1-4 uk-text-center">
                                <p className="mb-0 text-center">Expanded Content</p>
                            </div>
                        </div>
                    </td>
                </tr>
            )
        ];
    }
}


class UserTableRowa extends React.Component {
    state = {
        expanded: false,
        rotate: true,

        users: null,
        // openModal: false,
        // openModalpeak: false,
        // openModalregular: false,
        openModalcustompricesettings: false
    }

    // state = {
    // }

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


    onClickButtoncustompricesettings = e => {
        e.preventDefault()
        this.setState({ openModalcustompricesettings: true })

    }

    onCloseModalcustompricesettings = () => {
        this.setState({ openModalcustompricesettings: false })
    }

    render() {
        // const { user } = this.props;
        let rotate_arrow = this.state.rotate ? "rotate0" : "rotate180";
        return [


            <tr key="main">

                <td className="uk-text-nowrap pad-19-16" onClick={this.toggleExpander}>
                    <p className="mb-0 font-size14 font-weight700 primaryBlueColor">CHAdeMO price</p>

                </td>
                <td className="uk-text-nowrap pad-19-16">
                    <p className=" font-size14 mb-2 font-weight400 secondaryGreyColor"><span class="font-size14 font-weight400 secondaryGreyColor font-weight400">First  <strong class="primaryBlueColor font-weight600">4</strong> hours<strong class="primaryBlueColor font-weight600"> $10/h</strong></span></p>
                    <p className="mb-0 font-size14 font-weight400 secondaryGreyColor"><span class="font-size14 font-weight400 secondaryGreyColor font-weight400">First  <strong class="primaryBlueColor font-weight600">3</strong> hours<strong class="primaryBlueColor font-weight600"> $10/ kWh</strong></span></p>
                </td>
                <td className="uk-text-nowrap pad-19-16">
                    <p className=" font-size14 mb-2 font-weight400 secondaryGreyColor"><span class="font-size14 font-weight400 secondaryGreyColor font-weight400">thereafter    <strong class="primaryBlueColor font-weight600">$8/h</strong></span></p>
                    <p className=" font-size14 mb-2 font-weight400 secondaryGreyColor"><span class="font-size14 font-weight400 secondaryGreyColor font-weight400">thereafter    <strong class="primaryBlueColor font-weight600">$8/kWhrwtgdegrfde </strong></span></p>
                </td>

                <td className="uk-text-nowrap pad-19-16">
                    <p className=" font-size14 mb-2 font-weight400 secondaryGreyColor"><span class="font-size14 font-weight400 secondaryGreyColor font-weight400">First  <strong class="primaryBlueColor font-weight600">4</strong> hours<strong class="primaryBlueColor font-weight600"> $10/h</strong></span></p>
                    <p className="mb-0 font-size14 font-weight400 secondaryGreyColor"><span class="font-size14 font-weight400 secondaryGreyColor font-weight400">First  <strong class="primaryBlueColor font-weight600">3</strong> hours<strong class="primaryBlueColor font-weight600"> $10/ kWh</strong></span></p>
                </td>
                <td className="uk-text-nowrap pad-19-16">
                    <p className=" font-size14 mb-2 font-weight400 secondaryGreyColor"><span class="font-size14 font-weight400 secondaryGreyColor font-weight400">thereafter    <strong class="primaryBlueColor font-weight600">$8/h</strong></span></p>
                    <p className=" font-size14 mb-2 font-weight400 secondaryGreyColor"><span class="font-size14 font-weight400 secondaryGreyColor font-weight400">thereafter    <strong class="primaryBlueColor font-weight600">$8/kWh </strong></span></p>
                </td>

                <td className="pad-19-16">
                    <p className="mb-0 font-size14 font-weight600 primaryBlueColor">10%</p>
                </td>
                <td className="pad-19-16">
                    <div class="d-flex align-items-center editDeleteIcon">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M17 3C17.2626 2.73735 17.5744 2.52901 17.9176 2.38687C18.2608 2.24473 18.6286 2.17157 19 2.17157C19.3714 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52901 20.7374 2.73735 21 3C21.2626 3.26264 21.471 3.57444 21.6131 3.9176C21.7553 4.26077 21.8284 4.62856 21.8284 5C21.8284 5.37143 21.7553 5.73923 21.6131 6.08239C21.471 6.42555 21.2626 6.73735 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z" stroke="#9597A1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg>
                        </a>
                        {/* <p > DFDFD</p> */}
                        <a onClick={this.onClickButtoncustompricesettings}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M3 6H5H21" stroke="#F47646" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#F47646" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M10 11V17" stroke="#F47646" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M14 11V17" stroke="#F47646" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </a>



                        {/* <Button onClick={console.log('jhscs')} variant="primary" className="colorblue font-size18 font-weight700 ml-auto">
              <span className="colorblue font-size18 font-weight700 ml-auto" > ALEXA</span>
            </Button>{' '} */}

                        <Modal

                            show={this.state.openModalcustompricesettings}
                            onClose={this.onCloseModalcustompricesettings}
                            size="md"
                            className="regulat-modal"
                        >

                            <ModalBody>
                                <Col md="12">
                                    <p className="font-size24 font-weight700 primaryBlueColor">Default Regular Hours
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <Form.Check defaultChecked type="switch" id="custom-switch5" className="mr-3" />
                                        <p className="font-size16 font-weight600 ml-3  primaryBlueColor mb-0">Charge by Time</p>
                                    </div>
                                    <Row className="mt-4 borderbottommodal">

                                        <Col md="6">
                                            <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">third  <InputGroup className="mr-3 ml-3 width60 height40" type="number" placeholder="3" />hour(s)</p>
                                            <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">Therjdshvicdsbrfehaucnxaogawiueh9xqoiLOeafter</p>
                                        </Col>
                                        <Col md="6">
                                            <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor"><span
                                            >$</span> <InputGroup className="mr-3 ml-3 text-center width60 height40" type="text" placeholder="2.00" />per hour</p>
                                            <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">$ <InputGroup className="mr-3 ml-3 text-center width60 height40" type="text" placeholder="4.00" />per hour</p>
                                        </Col>
                                    </Row>


                                    <button type="button" class="w-100 mt-24 skyBluebackground font-size16 font-weight700 mml-0 btn btn-primary">Save Changes</button>


                                </Col>
                            </ModalBody>


                        </Modal>








                    </div>
                </td>
            </tr>,
            this.state.expanded && (
                <tr className="expandable" key="tr-expander">
                    <td className="uk-background-muted" colSpan={12}>
                        <div ref="expanderBody" className="inner uk-grid">
                            <div className="uk-width-1-4 uk-text-center">
                                <p className="mb-0 text-center">Expanded Content</p>
                            </div>
                        </div>
                    </td>
                </tr>
            )
        ];
    }
}

class PriceSettings extends React.Component {
    state = {
        users: null,
        openModal: false,
        openModalpeak: false,
        openModalregular: false,
        openModalcustompricesettings: false
    }

    onClickButtonpeak = e => {
        e.preventDefault()
        this.setState({ openModalpeak: true })
    }

    onCloseModalpeak = () => {
        this.setState({ openModalpeak: false })
    }

    onClickButtoncustompricesettings = e => {
        e.preventDefault()
        this.setState({ openModalcustompricesettings: true })

    }

    onCloseModalcustompricesettings = () => {
        this.setState({ openModalcustompricesettings: false })
    }


    onClickButtonregular = e => {
        e.preventDefault()
        this.setState({ openModalregular: true })
    }

    onCloseModalregular = e => {
        this.setState({ openModalregular: false })
    }

    onClickButton = e => {
        e.preventDefault()
        this.setState({ openModal: true })
    }

    onCloseModal = () => {
        this.setState({ openModal: false })
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/1.1/?results=5')
            .then(response => response.json())
            .then(data => { this.setState({ users: data.results }) });
    }

    render() {
        const { users } = this.state;
        const isLoading = users === null;
        return (
            <main className="pricing-setting">
                <Row className="pricingBreadcrumb">
                    <Col md="12 pl-0 pr-0" className="font-weight700 font-size24 primaryBlueColor">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#" className="font-size16 font-weight700">Manage Properties </Breadcrumb.Item>
                            <Breadcrumb.Item href="#" className="font-size16 font-weight700">ABC Apartments</Breadcrumb.Item>
                            <Breadcrumb.Item active className="font-size16 font-weight600 ">Price Settings & Promotions</Breadcrumb.Item>
                        </Breadcrumb>
                        Price & Promotions
                    </Col>
                </Row>


                <Row className="mt-2">
                    <Col md="6" className="pl-0">
                        <div className="default-regular-hour">
                            <div class="d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="11.5" stroke="#1D5AA9" />
                                    <g clip-path="url(#clip0)">
                                        <path d="M12 5.58337V18.4167" stroke="#1D5AA9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.9167 7.91663H10.5417C10.0002 7.91663 9.48088 8.13173 9.09799 8.51462C8.7151 8.8975 8.5 9.41681 8.5 9.95829C8.5 10.4998 8.7151 11.0191 9.09799 11.402C9.48088 11.7849 10.0002 12 10.5417 12H13.4583C13.9998 12 14.5191 12.2151 14.902 12.598C15.2849 12.9808 15.5 13.5001 15.5 14.0416C15.5 14.5831 15.2849 15.1024 14.902 15.4853C14.5191 15.8682 13.9998 16.0833 13.4583 16.0833H8.5" stroke="#1D5AA9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="14" height="14" fill="white" transform="translate(5 5)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <strong className="font-size18 font-weight600 pl-3 primaryBlueColor">Default Regular Hours</strong>
                                <Button onClick={this.onClickButtonpeak} variant="primary" className="colorblue font-size18 font-weight700 ml-auto">
                                    <span className="colorblue font-size18 font-weight700 ml-auto" > Edit</span>
                                </Button>{' '}

                                <Modal

                                    show={this.state.openModalpeak}
                                    onClose={this.onCloseModalpeak}
                                    size="md"
                                    className="regulat-modal"
                                >
                                    <ModalBody>
                                        <Col md="12">
                                            <p className="font-size24 font-weight700 primaryBlueColor">Default Regular Hours
                                            </p>
                                            <div className="d-flex align-items-center">
                                                <Form.Check defaultChecked type="switch" id="custom-switch5" className="mr-3" />
                                                <p className="font-size16 font-weight600 ml-3  primaryBlueColor mb-0">Charge by Time</p>
                                            </div>
                                            <Row className="mt-4 borderbottommodal">

                                                <Col md="6">
                                                    <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">First <InputGroup className="mr-3 ml-3 width60 height40" type="number" placeholder="3" />hour(s)</p>
                                                    <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">Thereafter</p>
                                                </Col>
                                                <Col md="6">
                                                    <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor"><span
                                                    >$</span> <InputGroup className="mr-3 ml-3 text-center width60 height40" type="text" placeholder="2.00" />per hour</p>
                                                    <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">$ <InputGroup className="mr-3 ml-3 text-center width60 height40" type="text" placeholder="4.00" />per hour</p>
                                                </Col>
                                            </Row>
                                            <div className="d-flex align-items-center mt-24">
                                                <Form.Check type="switch" id="custom-switch" className="mr-3" />
                                                <p className="font-size16 font-weight600 ml-3  primaryBlueColor mb-0">Charge by Energy</p>
                                            </div>
                                            <Row className="mt-4 opacity7 borderbottommodal">

                                                <Col md="6">
                                                    <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">First <InputGroup className="mr-3 ml-3 width60 height40" type="number" placeholder="3" />kWh</p>
                                                    <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">Thereafter</p>
                                                </Col>
                                                <Col md="6">
                                                    <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor"><span
                                                    >$</span> <InputGroup className="mr-3 ml-3 text-cente width60 height40" type="text" placeholder="2.00" />per kWh</p>
                                                    <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">$ <InputGroup className="mr-3 ml-3 text-center width60 height40" type="text" placeholder="4.00" />per kWh</p>
                                                </Col>
                                            </Row>
                                            <Row className="mt-4 borderbottommodal">

                                                <Col md="6">
                                                    <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">Tax</p>

                                                </Col>
                                                <Col md="6">
                                                    <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor justify-content-center"><InputGroup className="mr-3 ml-3 text-center width60 height40" type="text" placeholder="2.00" />%</p>

                                                </Col>
                                            </Row>
                                            <button type="button" class="w-100 mt-24 skyBluebackground font-size16 font-weight700 mml-0 btn btn-primary">Save Changes</button>


                                        </Col>
                                    </ModalBody>

                                    {/* <ModalBody>
                    <Col md="12">
                      <p className="font-size24 font-weight700 primaryBlueColor">Default Regular Hours
                      </p>
                      <div className="d-flex align-items-center">
                        <Form.Check defaultChecked type="switch" id="custom-switch5" className="mr-3" />
                        <p className="font-size16 font-weight600 ml-3  primaryBlueColor mb-0">Charge by Time</p>
                      </div>
                      <Row className="mt-4 borderbottommodal">

                        <Col md="6">
                          <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">First <InputGroup  className="mr-3 ml-3 width60 height40" type="number" placeholder="3" />hour(s)</p>
                          <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">Thereafter</p>
                        </Col>
                        <Col md="6">
                          <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor"><span
                          >$</span> <InputGroup  className="mr-3 ml-3 text-center width60 height40" type="text" placeholder="2.00" />per hour</p>
                          <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">$ <InputGroup  className="mr-3 ml-3 text-center width60 height40" type="text" placeholder="4.00" />per hour</p>
                        </Col>
                      </Row>
                      <div className="d-flex align-items-center mt-24">
                        <Form.Check type="switch" id="custom-switch" className="mr-3" />
                        <p className="font-size16 font-weight600 ml-3  primaryBlueColor mb-0">Charge by Energy</p>
                      </div>
                      <Row className="mt-4 opacity7 borderbottommodal">

                        <Col md="6">
                          <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">First <InputGroup  className="mr-3 ml-3 width60 height40" type="number" placeholder="3" />kWh</p>
                          <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">Thereafter</p>
                        </Col>
                        <Col md="6">
                          <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor"><span
                          >$</span> <InputGroup  className="mr-3 ml-3 text-cente width60 height40" type="text" placeholder="2.00" />per kWh</p>
                          <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">$ <InputGroup  className="mr-3 ml-3 text-center width60 height40" type="text" placeholder="4.00" />per kWh</p>
                        </Col>
                      </Row>
                      <Row className="mt-4 borderbottommodal">

                        <Col md="6">
                          <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">Tax</p>

                        </Col>
                        <Col md="6">
                          <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor justify-content-center"><InputGroup  className="mr-3 ml-3 text-center width60 height40" type="text" placeholder="2.00" />%</p>

                        </Col>
                      </Row>
                      <button type="button" class="w-100 mt-24 skyBluebackground font-size16 font-weight700 mml-0 btn btn-primary">Save Changes</button>


                    </Col>
                  </ModalBody>
 */}

                                </Modal>


                            </div>
                            <p class="secondaryGreyColor font-weight400 font-size14 mt-12">This is default regular price settings. Specify price for charging during regular hours.</p>
                            <Row className="mt-3">
                                <Col md="6" xs="6">
                                    <div className="regular-box">
                                        <p className="font-size14 font-weight600 primaryBlueColor">by Time</p>
                                        <div className="d-flex aligh-items-center">
                                            <strong className=" font-size18 font-weight600 primaryBlueColor">$2.00 <small className="font-weight400 font-size12">/hour</small><br />
                                                <span class="font-size12 font-weight400">First <strong className="secondaryGreyColor font-weight600">4</strong> hour(s)</span>
                                                <p className="font-size14 font-weight600 d-block mt-3 primaryBlueColor mb-0">10% Tax</p>
                                            </strong>
                                            <strong className="ml-auto font-size18 font-weight600 primaryBlueColor">$4.00 <small className="font-weight400 font-size12">/hour</small><br />
                                                <span class="font-size12 font-weight400">Thereafter</span></strong>
                                        </div>
                                    </div>

                                </Col>
                                <Col md="6" xs="6" className="">
                                    <div className="regular-box opacity7">
                                        <p className="font-size14 font-weight600 primaryBlueColor">by Energy</p>
                                        <div className="d-flex aligh-items-center">
                                            <strong className=" font-size18 font-weight600 primaryBlueColor">$2.00 <small className="font-weight400 font-size12">/kWh</small><br />
                                                <span class="font-size12 font-weight400">First <strong className="secondaryGreyColor font-weight600">4</strong> kWh</span>
                                                <p className="font-size14 font-weight600 d-block mt-3 primaryBlueColor mb-0">10% Tax</p>
                                            </strong>
                                            <strong className="ml-auto font-size18 font-weight600 primaryBlueColor">$4.00 <small className="font-weight400 font-size12">/kWh</small><br />
                                                <span class="font-size12 font-weight400">Thereafter</span></strong>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md="6" className="responsivemt-1">
                        <div className="default-regular-hour">
                            <div class="d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="11.5" stroke="#F47646" />
                                    <g clip-path="url(#clip0)">
                                        <path d="M12 5.58337V18.4167" stroke="#F47646" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.9167 7.91663H10.5417C10.0002 7.91663 9.48088 8.13173 9.09799 8.51462C8.7151 8.8975 8.5 9.41681 8.5 9.95829C8.5 10.4998 8.7151 11.0191 9.09799 11.402C9.48088 11.7849 10.0002 12 10.5417 12H13.4583C13.9998 12 14.5191 12.2151 14.902 12.598C15.2849 12.9808 15.5 13.5001 15.5 14.0416C15.5 14.5831 15.2849 15.1024 14.902 15.4853C14.5191 15.8682 13.9998 16.0833 13.4583 16.0833H8.5" stroke="#F47646" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="14" height="14" fill="white" transform="translate(5 5)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <strong className="font-size18 font-weight600 pl-3 primaryBlueColor">Default Peak Hours</strong>

                                <Button onClick={this.onClickButtonregular} variant="primary" className="colorblue font-size18 font-weight700 ml-auto">
                                    <span className="colorblue font-size18 font-weight700 ml-auto" > Edit</span>
                                </Button>{' '}

                                <Modal
                                    show={this.state.openModalregular}
                                    onClose={this.onCloseModalregular}
                                    size="md">





                                    <ModalBody>
                                        <Col md="12">
                                            <p className="font-size24 font-weight700 primaryBlueColor">Default Peak Hours
                                            </p>
                                            <div className="d-flex align-items-center">
                                                <Form.Check defaultChecked type="switch" id="custom-switch5" className="mr-3" />
                                                <p className="font-size16 font-weight600 ml-3  primaryBlueColor mb-0">Charge by Time</p>
                                            </div>
                                            <Row className="mt-4 borderbottommodal">

                                                <Col md="6">
                                                    <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">First <InputGroup className="mr-3 ml-3 width60 height40" type="number" placeholder="3" />hour(s)</p>
                                                    <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">Thereafter</p>
                                                </Col>
                                                <Col md="6">
                                                    <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor"><span
                                                    >$</span> <InputGroup className="mr-3 ml-3 text-center width60 height40" type="text" placeholder="2.00" />per hour</p>
                                                    <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">$ <InputGroup className="mr-3 ml-3 text-center width60 height40" type="text" placeholder="4.00" />per hour</p>
                                                </Col>
                                            </Row>
                                            <div className="d-flex align-items-center mt-24">
                                                <Form.Check type="switch" id="custom-switch" className="mr-3" />
                                                <p className="font-size16 font-weight600 ml-3  primaryBlueColor mb-0">Charge by Energy</p>
                                            </div>
                                            <Row className="mt-4 opacity7 borderbottommodal">

                                                <Col md="6">
                                                    <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">First <InputGroup className="mr-3 ml-3 width60 height40" type="number" placeholder="3" />kWh</p>
                                                    <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">Thereafter</p>
                                                </Col>
                                                <Col md="6">
                                                    <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor"><span
                                                    >$</span> <InputGroup className="mr-3 ml-3 text-cente width60 height40" type="text" placeholder="2.00" />per kWh</p>
                                                    <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">$ <InputGroup className="mr-3 ml-3 text-center width60 height40" type="text" placeholder="4.00" />per kWh</p>
                                                </Col>
                                            </Row>
                                            <Row className="mt-4 borderbottommodal">

                                                <Col md="6">
                                                    <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor">Tax</p>

                                                </Col>
                                                <Col md="6">
                                                    <p className="d-flex align-items-center font-weight400 font-size16 primaryBlueColor justify-content-center"><InputGroup className="mr-3 ml-3 text-center width60 height40" type="text" placeholder="2.00" />%</p>

                                                </Col>
                                            </Row>
                                            <button type="button" class="w-100 mt-24 skyBluebackground font-size16 font-weight700 mml-0 btn btn-primary">Save Changes</button>


                                        </Col>
                                    </ModalBody>












                                </Modal>




                            </div>
                            <p class="secondaryGreyColor font-weight400 font-size14 mt-12"> This is the peak hour price that customers will pay when they charge their vehicle. The price will apply only on peak hour that you set.</p>
                            <Row className="mt-3">
                                <Col md="6" xs="6">
                                    <div className="regular-box">
                                        <p className="font-size14 font-weight600 primaryBlueColor">by Time</p>
                                        <div className="d-flex aligh-items-center">
                                            <strong className=" font-size18 font-weight600 primaryBlueColor">$2.00 <small className="font-weight400 font-size12">/hour</small><br />
                                                <span class="font-size12 font-weight400">First <strong className="secondaryGreyColor font-weight600">4</strong> hour(s)</span>
                                                <p className="font-size14 font-weight600 d-block mt-3 primaryBlueColor mb-0">10% Tax</p>
                                            </strong>
                                            <strong className="ml-auto font-size18 font-weight600 primaryBlueColor">$4.00 <small className="font-weight400 font-size12">/hour</small><br />
                                                <span class="font-size12 font-weight400">Thereafter</span></strong>
                                        </div>
                                    </div>

                                </Col>
                                <Col md="6" xs="6" className="">
                                    <div className="regular-box">
                                        <p className="font-size14 font-weight600 primaryBlueColor">by Energy</p>
                                        <div className="d-flex aligh-items-center">
                                            <strong className=" font-size18 font-weight600 primaryBlueColor">$2.00 <small className="font-weight400 font-size12">/kWh</small><br />
                                                <span class="font-size12 font-weight400">First <strong className="secondaryGreyColor font-weight600">4</strong> kWh</span>
                                                <p className="font-size14 font-weight600 d-block mt-3 primaryBlueColor mb-0">10% Tax</p>
                                            </strong>
                                            <strong className="ml-auto font-size18 font-weight600 primaryBlueColor">$4.00 <small className="font-weight400 font-size12">/kWh</small><br />
                                                <span class="font-size12 font-weight400">Thereafter</span></strong>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

                <Col md="12" className="pl-0">
                    <h2 className="w-100 font-weight700 mb-2 font-size24 primaryBlueColor priceTop">Custom Price Settings</h2>
                    <p className="font-size16 font-weight400">You can set custom price to use at specific connectors on Properties Management page</p>
                    <div className="table-container">
                        <div className="uk-overflow-auto">
                            <table className="uk-table uk-table-hover uk-table-middle uk-table-divider tableEve customprietable">
                                <thead>
                                    <tr>
                                        <th className="uk-table-shrink pad-16-16">Scheme Name</th>
                                        <th className="uk-table-shrink min-width-150 pad-16-16">Regular Hours</th>
                                        <th className="uk-table-shrink pad-16-16" />
                                        <th className="pad-16-16">Peak Hours</th>
                                        <th className="uk-table-shrink pad-16-16" />
                                        <th className="pad-16-16">Tax</th>
                                        <th className="uk-table-shrink pad-16-16" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {isLoading
                                        ? <tr><td colSpan={6} className="uk-text-center"><em className="uk-text-muted">Loading...</em></td></tr>
                                        : users.map((user, index) =>
                                            <UserTableRowa key={index} index={index + 1} user={user} />
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>

                <Col md="12" className="pl-0 pr-0">
                    <h2 class="font-weight700 mb-3 font-size24 primaryBlueColor priceTop">Promotions</h2>
                    <div className="filterSec brdrRadius8 d-flex align-items-center mt-0">
                        <div>
                            <Button className="filterBtn d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M9.6 9.6L16 3.2V0H0V3.2L6.4 9.6V16L9.6 12.8V9.6Z" fill="#86A4BA" />
                                </svg>
                                <p className="mb-0 font-size16 font-weight400 primaryBlueColor">Filter</p>
                            </Button>
                        </div>
                        <div className="align-items-center form-group mb-0 searchBar posRel">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#86A4BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.9996 13.9996L11.0996 11.0996" stroke="#86A4BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </span>
                            <input className="form-control width432" type="text" id="" placeholder="Search Promotions"></input>
                        </div>
                        <div className="ml-auto responsivemt-1">
                            <Button className="createPromo font-size16 font-weight700">+ Create New Promo</Button>{' '}
                        </div>
                    </div>
                </Col>

                <div className="table-container">
                    <div className="uk-overflow-auto">
                        <table className="uk-table uk-table-hover uk-table-middle uk-table-divider tableEve">
                            <thead>
                                <tr>
                                    <th className="uk-table-shrink pad-11-16"><input className="uk-checkbox" type="checkbox" /></th>
                                    <th className="uk-table-shrink min-width-150 pad-11-16">Value & Name</th>
                                    <th className="pad-11-16">Status</th>
                                    <th className="uk-table-shrink min-width-280 pad-11-16"></th>
                                    <th className="pad-11-16">Customers</th>
                                    <th className="pad-11-16">Promotion Code</th>
                                    <th className="uk-table-shrink pad-11-16" />
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
                            <FormSelect custom name="select" id="select">
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

export default PriceSettings
