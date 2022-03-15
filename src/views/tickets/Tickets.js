import React from 'react';
import './ticket.css'
import { slideDown, slideUp } from './anim';
import Plus from './../../assets/img/Plus.png';

import { Dropdown } from 'react-bootstrap';
import {
    Col,
    Row,
    FormGroup,
    FormSelect,
    FormLabel,
    InputGroup,
    Form,

} from 'react-bootstrap'

import {
    Button,
    Modal,
    ModalBody,
} from 'react-bootstrap'




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
        //const { user } = this.props;

        return [

            // <tr key="main" onClick={this.toggleExpander}>
            //   <td><input className="uk-checkbox" type="checkbox" /></td>
            //   <td className="uk-text-nowrap">{this.props.index}.</td>
            //   <td><img className="uk-preserve-width uk-border-circle" src={user.picture.thumbnail} width={48} alt="avatar" /></td>
            //   <td>{capitalize(user.name.first + ' ' + user.name.last)}<br /><small>{user.email}</small></td>
            //   <td>{capitalize(user.location.city)} ({user.nat})</td>
            //   <td>{formatDate(user.registered)}</td>
            // </tr>,
            <tr key="main" className="bgtr">
                <td className="uk-text-nowrap font-size12 font-weight700 primaryBlueColor pad-14-15-16">12345</td>
                <td className="uk-text-nowrap font-size12 font-weight700 primaryBlueColor pad-14-15-16">2 Feb 2021</td>
                <td className="uk-text-nowrap pad-14-15-16">
                    <p className="mb-0 font-size12 font-weight700 secondaryGreyColor">Automatic reply: Report: All tickets
                    </p>
                </td>
                <td className="uk-table-shrink pad-14-15-16" />
                <td className="uk-table-shrink pad-14-15-16" />
                <td className="uk-table-shrink pad-14-15-16" />
                <td className="uk-table-shrink pad-14-15-16" />

                <td className="pad-14-15-16 buttona">
                    <div className="statusTag btn-primary gradientBtn font-size12 font-weight700 bgWhitebutton mr-2">
                        Accept
                    </div>
                    <div className="statusTag btn-primary gradientBtn font-size12 font-weight700 mr-0">
                        Assign to
                    </div>
                    {/* <div className="statusTag solving font-size10 font-weight700">
             Solving
          </div>
          <div className="statusTag solved font-size10 font-weight700">
             Solved
          </div> */}
                </td>
                <td className="pad-14-10-15-16">
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
            <tr key="main">
                <td className="uk-text-nowrap font-size12 font-weight400 primaryBlueColor pad-14-15-16">12345</td>
                <td className="uk-text-nowrap font-size12 font-weight400 primaryBlueColor pad-14-15-16">2 Feb 2021</td>
                <td className="uk-text-nowrap pad-14-15-16">
                    <p className="mb-0 font-size12 font-weight400 secondaryGreyColor ">Automatic reply: Report: All tickets
                    </p>
                </td>
                <td className="pad-14-15-16">
                    <p className="font-size12 font-weight700 primaryBlueColor mb-0">You</p>
                </td>
                <td className="pad-14-15-16">
                    <p className="mb-0 ffont-size12 font-weight400 secondaryGreyColor">Medium</p>
                </td>
                <td className="pad-14-15-16">
                    <p className="mb-0 font-size12 font-weight400 secondaryGreyColor">  2 Feb 2021</p>
                </td>
                <td className="pad-14-15-16">
                    <p className="mb-0 font-size12 font-weight400 secondaryGreyColor"> ABC Property</p>
                </td>
                <td className="pad-14-15-16 buttona">
                    <div className="statusTag btn-primary gradientBtn font-size12 font-weight700 bgWhitebutton mr-2">
                        Accept
                    </div>
                    <div className="statusTag btn-primary gradientBtn font-size12 font-weight700 mr-0">
                        Assign to
                    </div>
                    {/* <div className="statusTag solving font-size10 font-weight700">
             Solving
          </div>
          <div className="statusTag solved font-size10 font-weight700">
             Solved
          </div> */}
                </td>
                <td className="pad-14-10-15-16">
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
                                <img className="w-100" src={require('./../../assets/img/station-graph.png').default} alt="" />
                            </div>
                        </div>
                    </td>
                </tr>
            )
        ];
    }
}

class Tables extends React.Component {
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
            <main className="tickets">
                <Row>
                    <Col lg="12">
                        <div className="topTitle">
                            <h3 className="mb-0 font-size24 font-weight700 colorBlack">Tickets</h3>
                            <p className="mb-0 font-size16 font-weight600 mt-1">Tickets</p>
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
                                    <input class="form-control" type="text" id="" placeholder="Search Ticket" />
                                </div>
                                <div className="ml-auto d-flex align-items-center btnsSec">

                                    <Button onClick={this.onClickButton} variant="primary" className="mr-3 colorWhite gradientBtn font-size14 font-weight700 d-flex align-items-center">
                                        <img src={Plus} alt="" />New Ticket
                                    </Button>{' '}
                                    <Modal
                                        show={this.state.openModal}
                                        onClose={this.onCloseModal}
                                        size="xl">

                                        <ModalBody>
                                            <div className="ticket-form">
                                                <p className="font-size24 font-weight700 primaryBlueColor mt-4">Assign Ticket
                                                </p>
                                                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">

                                                    <FormGroup row>
                                                        <Col md="2">
                                                            <FormLabel htmlFor="select">Assign to</FormLabel>
                                                        </Col>
                                                        <Col xs="12" md="10">
                                                            <FormSelect custom name="select" id="select">
                                                                <option value="0"> FormSelect an option</option>
                                                                <option value="1">Option #1</option>
                                                                <option value="2">Option #2</option>
                                                                <option value="3">Option #3</option>
                                                            </FormSelect>
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup row>
                                                        <Col md="2">
                                                            <FormLabel htmlFor="text-input">CC Users</FormLabel>
                                                        </Col>
                                                        <Col xs="12" md="10">
                                                            <InputGroup id="text-input" name="text-input" placeholder="Enter CC Users" />

                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup row>
                                                        <Col md="2">
                                                            <FormLabel htmlFor="text-input">Due Date</FormLabel>
                                                        </Col>
                                                        <Col xs="12" md="10">
                                                            <InputGroup id="text-input" name="text-input" placeholder=" Due Date" />

                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup row>
                                                        <Col md="2">
                                                            <FormLabel htmlFor="text-input">Due Time
                                                            </FormLabel>
                                                        </Col>
                                                        <Col xs="12" md="10">
                                                            <InputGroup id="text-input" name="text-input" placeholder="5:00 PM. 18:00. etc" />

                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup row>
                                                        <Col md="2">
                                                            <FormLabel htmlFor="select">Priority</FormLabel>
                                                        </Col>
                                                        <Col xs="12" md="10">
                                                            <FormSelect custom name="select" id="select">
                                                                <option value="0"> FormSelect Priority</option>
                                                                <option value="1">Option #1</option>
                                                                <option value="2">Option #2</option>
                                                                <option value="3">Option #3</option>
                                                            </FormSelect>
                                                        </Col>
                                                    </FormGroup>
                                                    <div className="ml-auto d-block statusTag btn-primary gradientBtn font-size12 font-weight700  mr-2">
                                                        Accept
                                                    </div>
                                                </Form>

                                            </div>
                                            <Row className="bgWhite">
                                                <Col md="12">
                                                    <div className="ticketDisscription ">
                                                        <p className="font-size12  font-weight600 mb-0 tickettextcolor">Ticket #12345</p>
                                                        <p className="font-size24  font-weight700 mt-8 mb-0 primaryBlueColor">Automatic reply: Report: All tickets</p>
                                                        <p className="font-size12  font-weight400 mt-8  mb-3 primaryBlueColor">Submitted by ABC Apartment on 31 March 2021 at 06:01 PM</p>
                                                        <div className="d-flex align-items-center liststylenone ticket_list">
                                                            <ul class="pl-0">
                                                                <li className="font-size14 font-weight400 secondaryGreyColor liststylenone mb-3">Unit Serial No.</li>
                                                                <li className="font-size14 font-weight400 secondaryGreyColor liststylenone mb-3">Email Address</li>
                                                                <li className="font-size14 font-weight400 secondaryGreyColor liststylenone">I need help with</li>
                                                            </ul>
                                                            <ul>
                                                                <li className="font-size14 font-weight600 primaryBlueColor liststylenone mb-3">1234</li>
                                                                <li className="font-size14 font-weight600 primaryBlueColor liststylenone mb-3">abcapartment@gmail.com</li>
                                                                <li className="font-size14 font-weight600 primaryBlueColor liststylenone">Error On Screen
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <p className="font-size16 font-weight400 mt-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula congue ultricies. Vivamus placerat, arcu quis tristique convallis, lacus ex pretium nunc, in ornare massa odio nec massa. Phasellus mauris nulla, porttitor at tincidunt eu, rutrum et urna. Phasellus justo odio, laoreet id sodales sit amet, accumsan vitae felis. Nam dignissim eros eget augue ultrices ornare. Mauris tincidunt lorem dictum sem sodales, interdum rhoncus nisl cursus. Praesent nulla erat, ultricies eu mauris at, finibus facilisis quam. </p>
                                                        <p className="font-size16 font-weight400">Integer sit amet vestibulum mi. Nam egestas arcu massa, non ullamcorper ligula suscipit in. Sed tristique nisi quis nibh convallis finibus at vitae ligula. Vivamus fermentum erat eget nunc vestibulum, non elementum sem rhoncus. Nunc in lacus mi. Aenean scelerisque non turpis vitae.</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </ModalBody>
                                        {/* <CModalFooter>
                      <Button color="primary" >Do Something</Button>{' '}
                      <Button color="secondary" onClick={this.onCloseModal}>Cancel</Button>
                    </CModalFooter> */}
                                    </Modal>
                                    <Button variant="primary" className=" bgwhitebtn font-size14 font-weight700 d-flex mml-0 align-items-center tickettextcolor">REFRESH TICKET</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="table-container">
                    <div className="uk-overflow-auto">
                        <table className="uk-table uk-table-hover uk-table-middle uk-table-divider tableEve">
                            <thead>
                                <tr>
                                    <th className="uk-table-shrink min-width-100 pad-15-16">ID</th>
                                    <th className="min-width-100 pad-15-16">DATE</th>

                                    <th className="min-width-200 pad-15-16">Issue Topic</th>
                                    <th className="uk-table-shrink min-width-300 pad-15-16">ASSIGNEE</th>
                                    <th className="uk-table-shrink pad-15-16">PRIORITY</th>
                                    <th className="uk-table-shrink pad-15-16">DUE</th>
                                    <th className="uk-table-shrink pad-15-16">CREATED BY</th>
                                    <th className="uk-table-shrink pad-15-16" />
                                    <th className="uk-table-shrink pad-15-16" />

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

                <Row className="bgWhite">
                    <Col md="12">
                        <div className="ticketDisscription ">
                            <p className="font-size12  font-weight600 mb-0 tickettextcolor">Ticket #12345</p>
                            <p className="font-size24  font-weight700 mt-8 mb-0 primaryBlueColor">Automatic reply: Report: All tickets</p>
                            <p className="font-size12  font-weight400 mt-8  mb-3 primaryBlueColor">Submitted by ABC Apartment on 31 March 2021 at 06:01 PM</p>
                            <div className="d-flex align-items-center liststylenone ticket_list">
                                <ul class="pl-0">
                                    <li className="font-size14 font-weight400 secondaryGreyColor liststylenone mb-3">Unit Serial No.</li>
                                    <li className="font-size14 font-weight400 secondaryGreyColor liststylenone mb-3">Email Address</li>
                                    <li className="font-size14 font-weight400 secondaryGreyColor liststylenone">I need help with</li>
                                </ul>
                                <ul>
                                    <li className="font-size14 font-weight600 primaryBlueColor liststylenone mb-3">1234</li>
                                    <li className="font-size14 font-weight600 primaryBlueColor liststylenone mb-3">abcapartment@gmail.com</li>
                                    <li className="font-size14 font-weight600 primaryBlueColor liststylenone">Error On Screen
                                    </li>
                                </ul>
                            </div>
                            <p className="font-size16 font-weight400 mt-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula congue ultricies. Vivamus placerat, arcu quis tristique convallis, lacus ex pretium nunc, in ornare massa odio nec massa. Phasellus mauris nulla, porttitor at tincidunt eu, rutrum et urna. Phasellus justo odio, laoreet id sodales sit amet, accumsan vitae felis. Nam dignissim eros eget augue ultrices ornare. Mauris tincidunt lorem dictum sem sodales, interdum rhoncus nisl cursus. Praesent nulla erat, ultricies eu mauris at, finibus facilisis quam. </p>
                            <p className="font-size16 font-weight400">Integer sit amet vestibulum mi. Nam egestas arcu massa, non ullamcorper ligula suscipit in. Sed tristique nisi quis nibh convallis finibus at vitae ligula. Vivamus fermentum erat eget nunc vestibulum, non elementum sem rhoncus. Nunc in lacus mi. Aenean scelerisque non turpis vitae egestas. Morbi congue vitae dui vitae finibus. Aenean eleifend vestibulum elit vel finibus. Nunc urna felis, ultrices non consectetur quis, mattis quis arcu. Suspendisse ligula velit, fermentum vitae consequat ac, sollicitudin non mauris.</p>
                        </div>
                    </Col>
                </Row>



            </main>

        );
    }
}

export default Tables
