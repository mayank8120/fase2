import './App.css';
import '../src/assets/css/custom.css';
import '../src/assets/css/responsive.css';
import '../src/assets/css/fixes.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Index from './views/Index/Index';
import { Trial } from './views/Trial/Trial';
import Addproperty from './views/addproperty/Addproperty';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from './containers/navbar/Navbar';
import Addcompany from './views/addcompany/Addcompany';
import Createnew from './views/create-new/Createnew';
import Dashboard from './views/dashboard/Dashboard';
import Forgot from './views/forgot/Forgot';
import Login from './views/login/Login';
import Profile from './views/profile/Profile';
import Tickets from './views/tickets/Tickets';
import Abcapartments from './views/management/abcapartments/Abcapartments';

import Summary from './views/statistics-reports/summary/Summary';

import Properties from './views/management/properties/Properties';
import ManagementCompanies from './views/management/managementcompanies/Managementcompanies';
import AppUsers from './views/management/appusers/Appusers';
import StaffRules from './views/management/staffrules/Staffrules';
import StationInventory from './views/management/stationinventory/Stationinventory';
import StationInstallation from './views/management/stationinstallation/Stationinstallation';
import PriceSettings from './views/management/pricesettings/Pricesettings';
import FrankCompany from './views/management-company/frankcompany/Frankcompany';
import ManageRoles from './views/management/managerole/Managerole';


import logo from '../src/assets/img/logo.svg';
import menuIcon from '../src/assets/img/open-menu.svg';
// import { Nav, NavDropdown } from 'react-bootstrap';

// import SimpleBar from 'simplebar-react';
// import SimpleBar from 'simplebar';

// import 'simplebar/dist/simplebar.min.css';


import 'chart.js/auto';
import ChargingStations from './views/statistics-reports/chargingstations/Chargingstations';
import ChargingSessions from './views/statistics-reports/chargingsessions/Chargingsessions';
import ChargingRevenue from './views/statistics-reports/chargingrevenue/Chargingrevenue';
import EnergyConsumption from './views/statistics-reports/energyconsumption/Energyconsumption';

import TheHeaderDropdown from './containers/navbar/TheHeaderDropdown';
import TheHeaderDropdownMssg from './containers/navbar/TheHeaderDropdownMssg';
import TheHeaderDropdownNotif from './containers/navbar/TheHeaderDropdownNotif';
import TheHeaderDropdownTasks from './containers/navbar/TheHeaderDropdownTasks';



const Nav = styled.div`
background: #15171c;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SidebarNav = styled.nav`
background: #15171c;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
transition: 350ms;
z-index: 10;
`;


const SidebarWrap = styled.div`
  width: 100%;
`;

function App() {
    const [navlinkclick, setNavlinkclick] = useState(true);

    const openNav = () => {
        setNavlinkclick(!navlinkclick);
    }

    const [showdrop, setshowdrop] = useState(true);

    const opendrop = () => {
        setshowdrop(!showdrop);
    }

    const [showdrop1, setshowdrop1] = useState(true);

    const opendrop1 = () => {
        setshowdrop1(!showdrop1);
    }


    return (
        <>
            {/* this section is containing the navbar and the side bar + the the dynamic routes to show in the dashboard and other dynamic sections */}
            <>
            <div className="header-section d-flex align-items-center">
                    <div class="logo-section">
                       
                            <img src={logo} alt={"logo"} />
                          
                        
                    </div>
                    <div class="toggle-menu c-header-toggler ml-40 d-md-down-none">
                    <img src={menuIcon} alt={"logo"} onClick={openNav} />
                    </div>
                    <div className="header-nav  d-flex align-items-center ml-auto">
                        <div className="px-3 ml-auto mr-2 d-flex align-items-center">
                            <TheHeaderDropdownMssg />
                            <TheHeaderDropdownNotif />
                            <div className="brdrLine"></div>
                            <TheHeaderDropdown />
                        </div>
                    </div>
            </div>
             
                <div className="c-wrapper">
                <div className="c-body">
                        <div className="c-main">
                            <div className="">
                <div className="">
                    {/* this is the sidebar toggle area */}
                    {
                        navlinkclick == false ?
                            null
                            :
                            <>
                                <div className="sidebar" >
                                    <ul class="navbar-nav mr-auto">
                                        <li class="nav-item active">
                                            <a class="nav-link" href="/dashboard">Dashboard</a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <span class="nav-link dropdown-toggle" onClick={opendrop}>
                                                Management
                                            </span>
                                            {
                                                showdrop == true ?
                                                    null :
                                                    <ul class="navbar-nav mr-auto ml-50">
                                                        <li class="nav-item active">
                                                            <a class="nav-link" href="/management/properties">Properties</a>
                                                        </li>
                                                        <li class="nav-item active">
                                                            <a class="nav-link" href="/management/managementcompanies">Management Companies</a>
                                                        </li>
                                                        <li class="nav-item active">
                                                            <a class="nav-link" href="/management/appusers">Users</a>
                                                        </li>
                                                        <li class="nav-item active">
                                                            <a class="nav-link" href="/management/staffrules">Staff Roles</a>
                                                        </li>
                                                        <li class="nav-item active">
                                                            <a class="nav-link" href="/management/stationinventory">Station Inventory</a>
                                                        </li>
                                                        <li class="nav-item active">
                                                            <a class="nav-link" href="/management/stationinstallation">Station Installation</a>
                                                        </li>

                                                    </ul>
                                            }

                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" onClick={opendrop1}>
                                                Statistics & Reports
                                            </a>
                                            {
                                                showdrop1 == true ?
                                                    null :
                                                    <ul class="navbar-nav mr-auto ml-50">
                                                        <li class="nav-item active">
                                                            <a class="nav-link" href="/statistics-reports/summary">Summary</a>
                                                        </li>
                                                        <li class="nav-item active">
                                                            <a class="nav-link" href="/statistics-reports/chargingstations">Charging Stations</a>
                                                        </li>
                                                        <li class="nav-item active">
                                                            <a class="nav-link" href="/statistics-reports/chargingsessions">Charging Sessions</a>
                                                        </li>
                                                        <li class="nav-item active">
                                                            <a class="nav-link" href="/statistics-reports/chargingrevenue">Charging Revenue</a>
                                                        </li>
                                                        <li class="nav-item active">
                                                            <a class="nav-link" href="/statistics-reports/energyconsumption">Energy Consumption</a>
                                                        </li>
                                                    </ul>
                                            }

                                        </li>
                                        <li class="nav-item active">
                                            <a class="nav-link" href="/tickets/tickets">Tickets</a>
                                        </li>
                                    </ul>
                                </div>
                            </>
                    }
                    {/* this is the dynamic right section */}
                    <div className="right-sidebar" >
                        <Router>
                            <Switch>
                                <Route path="/" exact component={Index} />
                                <Route path="/trial" component={Trial} />
                                <Route path='/addproperty' component={Addproperty} />
                                <Route path='/addcompany' component={Addcompany} />
                                <Route path='/createnew' component={Createnew} />
                                <Route path='/dashboard' component={Index} />
                                <Route path='/forgot' component={Forgot} />
                                <Route path='/login' component={Login} />
                                <Route path='/profile' component={Profile} />
                                {/* <Route path='/tickets' component={Tickets} /> */}
                                <Route path='/management/abcapartments' component={Abcapartments} />


                                <Route path='/statistics-reports/summary' component={Summary} />

                                <Route path='/management/properties' component={Properties} />

                                <Route path='/management/managementcompanies' component={ManagementCompanies} />
                                <Route path='/management/appusers' component={AppUsers} />
                                <Route path='/management/staffrules' component={StaffRules} />
                                <Route path='/management/stationinventory' component={StationInventory} />
                                <Route path='/management/stationinstallation' component={StationInstallation} />

                                <Route path='/management/pricesettings' component={PriceSettings} />
                                <Route path='/management-company/frankcompany' component={FrankCompany} />
                                <Route path='/management/managerole' component={ManageRoles} />

                                <Route path='/statistics-reports/chargingstations' component={ChargingStations} />
                                <Route path='/statistics-reports/chargingsessions' component={ChargingSessions} />
                                <Route path='/statistics-reports/chargingrevenue' component={ChargingRevenue} />
                                <Route path='/statistics-reports/energyconsumption' component={EnergyConsumption} />



                                <Route path='/tickets/tickets' component={Tickets} />
                            </Switch>
                        </Router>
                    </div>
                </div>
                </div>
                </div>
                </div>
                </div>
            </>

        </>
    );
}

export default App;
