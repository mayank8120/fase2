import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './summary.css';
import { Line } from 'react-chartjs-2';
import {
    Col,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,

    Tabs,

} from 'react-bootstrap'
import {

    FormGroup,
    FormSelect,


} from 'react-bootstrap'



const Summary = () => {
    /**graph*/
    const datasingleline = canvas => {
        // const ctx = canvas.getContext('2d');

        return {
            labels: ['Nov 16', 'Nov 17', 'Nov 18', 'Nov 19', 'Nov 20', 'Nov 21', 'Nov 22'],
            datasets: [
                {
                    // label: 'Energy ',
                    data: [1800, 1900, 3000, 5100, 2200, 3100, 5400],
                    pointRadius: 1,
                    fill: true,
                    backgroundColor: '#0FEE9F1A',
                    borderColor: '#0FEE9F',
                },
            ],
        };
    }

    const optionsingleline = {
        chartArea: {
            backgroundColor: 'white'
        },
        // backgroundColor:'#fff',
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'white',
                // borderColor:'black',
                borderWidth: 1,
                titleColor: 'black',
                titleAlign: 'center',
                displayColors: true,
                boxWidth: 0,
                boxHeight: 0,
                usePointStyle: true,
                yAlign: 'bottom',
                bodyAlign: 'center',
                // labelTextColor:'black',
                callbacks: {
                    labelTextColor: function (context) {
                        return 'black';
                    },
                    labelPointStyle: function (context) {
                        return { pointStyle: 'star', rotation: 0 };
                    }
                    // backgroundColor: function(context){
                    //   // console.log(datamultiline.datasets.borderColor);
                    //   return datamultiline.datasets.backgroundColor;
                    // }
                }
            }
        },
        elements: {
            line: {
                tension: 0.5
            },
            // borderWidth: 5

        },
        scales: {
            x: {
                grid: {
                    display: false,
                    borderWidth: 1,
                    // borderColor:'black',
                }
            },
            y: {
                grid: {
                    display: true,
                    drawBorder: false,
                    // lineWidth: 0.5,

                    // color: 'black',
                    // borderColor:'black',
                    // borderWidth: 1,
                },
                ticks: {
                    beginAtZero: true,
                    // callback: function (label, index, labels) {
                    //   return label / 1000 + ' kW';
                    // },
                    stepSize: 1000,

                    callback: function (value) {
                        return `$ ${value}`;
                    }
                    // min: 0,
                    // max: 19,
                    // stepSize: 20
                }
            }
        },
    };
    const tooltipLine = {
        id: 'tooltipLine',
        beforeDraw: chart => {
            if (chart.tooltip._active && chart.tooltip._active.length) {

                const ctx = chart.ctx;
                ctx.save();
                const activePoint = chart.tooltip._active[0];
                // console.log(activePoint);

                // ctx.beginPath();
                // ctx.setLineDash([5, 7]);
                // ctx.moveTo(activePoint.element.x, chart.chartArea.top);
                // ctx.lineTo(activePoint.element.x, activePoint.element.y);
                // ctx.lineWidth = 2;
                // ctx.strokeStyle = 'grey';
                // ctx.stroke();
                // ctx.restore();

                ctx.beginPath();
                ctx.moveTo(activePoint.element.x, activePoint.element.y);
                ctx.lineTo(activePoint.element.x, chart.chartArea.bottom);
                ctx.lineWidth = 3;
                ctx.strokeStyle = '#0FEE9F';
                ctx.stroke();
                ctx.restore();



            }


        }
    }

    return (
        <>
            <main className="summary">
                <div class="backBlueColor">
                    <Row className="statementBreadcrumb mb-24">
                        <Col md="12" className="font-weight700 font-size24 dark-black">
                            <Breadcrumb>
                                <Breadcrumb.Item href="#" className="font-size16 font-weight600">Statistics & Reports</Breadcrumb.Item>

                            </Breadcrumb>
                            Statistics & Reports
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <FormGroup className=" mb-0 primaryBlueColor">
                                <FormSelect custom name="select" id="select" className="priceSelect price-FormSelect">
                                    <option value="0" hidden>All Chargers</option>
                                    <option value="1">Option #1</option>
                                    <option value="2">Option #2</option>
                                    <option value="3">Option #3</option>
                                </FormSelect>
                            </FormGroup>
                        </Col>

                        <Col md="6">
                            <div className="d-flex align-items-center calender bgwhite">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#86A4BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16 2V6" stroke="#86A4BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8 2V6" stroke="#86A4BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3 10H21" stroke="#86A4BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span className="font-weight700  primaryBlueColor ml-15 font-size16">Mon, 16 Nov 2021 - Sat, 22 Nov 2021
                                </span>
                                <div className="arrowSection ml-auto">
                                    <span className="left"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15 6L9 12L15 18" stroke="#86A4BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></span>
                                    <span className="right"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 18L15 12L9 6" stroke="#86A4BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></span>
                                </div>


                            </div>

                        </Col>

                        <Col>

                        </Col>
                    </Row>
                    <Row className="">
                        <Col md="6" className="mt-3 dark-black">
                            <div className="statementBox bg-white box-shadow brdrRadius8">
                                <div class="d-flex align-items-center mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                        <circle opacity="0.1" cx="22" cy="22" r="22" fill="#0FEE9F" />
                                        <path d="M22 11V33" stroke="#0FEE9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M27 15H19.5C18.5717 15 17.6815 15.3687 17.0251 16.0251C16.3687 16.6815 16 17.5717 16 18.5C16 19.4283 16.3687 20.3185 17.0251 20.9749C17.6815 21.6313 18.5717 22 19.5 22H24.5C25.4283 22 26.3185 22.3687 26.9749 23.0251C27.6313 23.6815 28 24.5717 28 25.5C28 26.4283 27.6313 27.3185 26.9749 27.9749C26.3185 28.6313 25.4283 29 24.5 29H16" stroke="#0FEE9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <strong className="font-size18 font-weight600 ml-3">Revenue</strong>
                                </div>
                                <Row>
                                    <Col md="4">
                                        <strong className="h4 font-size18 font-weight600">$3,821  <small className="font-weight700 font-size16 greena">+2.3%</small><br />
                                            <span class="font-size12 font-weight400 secondaryGreyColor">Today</span></strong>
                                    </Col>
                                    <Col md="4">
                                        <strong className="h4 font-size18 font-weight600   ">$28,329  <small className="font-weight700 font-size16 greena">+1.3%</small><br />
                                            <span class="font-size12 font-weight400 secondaryGreyColor">This Month</span></strong>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md="6" className="mt-3 dark-black">
                            <div className="statementBox bg-white box-shadow brdrRadius8">
                                <div class="d-flex align-items-center mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                        <circle opacity="0.1" cx="22" cy="22" r="22" fill="#FF9A32" />
                                        <path d="M30.9996 19C30.7344 19 30.48 19.1054 30.2925 19.2929C30.1049 19.4804 29.9996 19.7348 29.9996 20V24C29.9996 24.2652 30.1049 24.5196 30.2925 24.7071C30.48 24.8946 30.7344 25 30.9996 25C31.2648 25 31.5191 24.8946 31.7067 24.7071C31.8942 24.5196 31.9996 24.2652 31.9996 24V20C31.9996 19.7348 31.8942 19.4804 31.7067 19.2929C31.5191 19.1054 31.2648 19 30.9996 19ZM25.8296 16H22.7296L21.5896 18H25.8196C25.8822 18.0517 25.9314 18.1178 25.9628 18.1927C25.9941 18.2677 26.0068 18.3491 25.9996 18.43V25.57C26.0063 25.6499 25.9945 25.7303 25.965 25.8049C25.9355 25.8795 25.8892 25.9463 25.8296 26H22.9996L21.8496 28H25.8496C26.4554 27.9588 27.0207 27.6808 27.423 27.226C27.8254 26.7712 28.0325 26.1763 27.9996 25.57V18.43C28.0324 17.8204 27.8225 17.2226 27.4159 16.7673C27.0093 16.312 26.439 16.0361 25.8296 16ZM13.9996 25.57V18.43C13.9936 18.3501 14.0058 18.27 14.0352 18.1955C14.0647 18.121 14.1106 18.0542 14.1696 18H16.9996L18.1296 16H14.1296C13.5273 16.0462 12.9671 16.3264 12.569 16.7806C12.1708 17.2348 11.9664 17.8269 11.9996 18.43V25.57C11.9668 26.1796 12.1766 26.7774 12.5833 27.2327C12.9899 27.688 13.5602 27.9639 14.1696 28H17.2696L18.4096 26H14.1796C14.1169 25.9483 14.0678 25.8822 14.0364 25.8073C14.005 25.7323 13.9924 25.6509 13.9996 25.57Z" fill="#FF9A32" />
                                        <path d="M18.9979 29.9995C18.822 30.0002 18.6491 29.9545 18.4965 29.8671C18.3439 29.7796 18.2171 29.6534 18.1289 29.5013C18.0406 29.3491 17.9941 29.1764 17.9939 29.0005C17.9937 28.8247 18.0399 28.6519 18.1279 28.4995L21.2779 22.9995H16.9979C16.8234 22.9985 16.6522 22.9518 16.5013 22.8641C16.3504 22.7764 16.2251 22.6507 16.1379 22.4995C16.0501 22.3475 16.0039 22.1751 16.0039 21.9995C16.0039 21.824 16.0501 21.6516 16.1379 21.4995L20.1379 14.4995C20.2705 14.2688 20.4893 14.1002 20.7463 14.0308C21.0032 13.9614 21.2771 13.9969 21.5079 14.1295C21.7386 14.2621 21.9072 14.481 21.9766 14.7379C22.046 14.9948 22.0105 15.2688 21.8779 15.4995L18.7179 20.9995H22.9979C23.1724 21.0006 23.3436 21.0473 23.4945 21.135C23.6453 21.2227 23.7706 21.3484 23.8579 21.4995C23.9456 21.6516 23.9919 21.824 23.9919 21.9995C23.9919 22.1751 23.9456 22.3475 23.8579 22.4995L19.8579 29.4995C19.7706 29.6507 19.6453 29.7763 19.4945 29.8641C19.3436 29.9518 19.1724 29.9985 18.9979 29.9995Z" fill="#FF9A32" />
                                    </svg>
                                    <strong className="font-size18 font-weight600 ml-3">Charging Session</strong>
                                </div>
                                <Row>
                                    <Col md="5">
                                        <strong className="h4 font-size18 font-weight600">21 Sessions <br />
                                            <span class="font-size12 font-weight400 secondaryGreyColor">Today</span></strong>
                                    </Col>
                                    <Col md="7">
                                        <strong className="h4 font-size18 font-weight600">16,221 Sessions<br />
                                            <span class="font-size12 font-weight400 secondaryGreyColor">This Month</span></strong>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row className="pt-3 pb-4">
                        <Col md="6" className="mt-2 dark-black">
                            <div className="statementBox bg-white box-shadow brdrRadius8">
                                <div class="d-flex align-items-center mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                        <circle opacity="0.1" cx="22" cy="22" r="22" fill="#FF9A32" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5008 15.9508H29.5008C29.7793 15.9508 30.0463 16.0614 30.2432 16.2583C30.4402 16.4552 30.5508 16.7223 30.5508 17.0008V27.0008C30.5508 27.2793 30.4402 27.5463 30.2432 27.7432C30.0463 27.9402 29.7793 28.0508 29.5008 28.0508H14.5008C14.2223 28.0508 13.9552 27.9402 13.7583 27.7432C13.5614 27.5463 13.4508 27.2793 13.4508 27.0008V17.0008C13.4508 16.7223 13.5614 16.4552 13.7583 16.2583C13.9552 16.0614 14.2223 15.9508 14.5008 15.9508ZM14.5008 14.3008C13.7847 14.3008 13.0979 14.5852 12.5916 15.0916C12.0852 15.5979 11.8008 16.2847 11.8008 17.0008V27.0008C11.8008 27.7169 12.0852 28.4036 12.5916 28.91C13.0979 29.4163 13.7847 29.7008 14.5008 29.7008H29.5008C30.2169 29.7008 30.9036 29.4163 31.41 28.91C31.9163 28.4036 32.2008 27.7169 32.2008 27.0008V17.0008C32.2008 16.2847 31.9163 15.5979 31.41 15.0916C30.9036 14.5852 30.2169 14.3008 29.5008 14.3008H14.5008ZM30.3875 16.1197C30.6201 16.3539 30.7508 16.6706 30.7508 17.0008V27.0008C30.7508 27.3323 30.6191 27.6502 30.3847 27.8847C30.1502 28.1191 29.8323 28.2508 29.5008 28.2508H14.5008C14.1694 28.2508 13.8515 28.1192 13.6171 27.8849C13.8515 28.1193 14.1695 28.251 14.501 28.251H29.501C29.8325 28.251 30.1504 28.1193 30.3849 27.8849C30.6193 27.6504 30.751 27.3325 30.751 27.001V17.001C30.751 16.6707 30.6203 16.3539 30.3875 16.1197ZM14.5008 14.5008C13.8377 14.5008 13.2019 14.7642 12.733 15.233C12.2642 15.7019 12.0008 16.3377 12.0008 17.0008V27.0008C12.0008 27.6431 12.248 28.2599 12.6897 28.7241C12.2481 28.26 12.001 27.6432 12.001 27.001V17.001C12.001 16.3379 12.2644 15.7021 12.7332 15.2332C13.2021 14.7644 13.8379 14.501 14.501 14.501H29.501C30.164 14.501 30.7999 14.7644 31.2687 15.2332C31.2687 15.2331 31.2686 15.2331 31.2685 15.233C30.7997 14.7642 30.1638 14.5008 29.5008 14.5008H14.5008Z" fill="#FF9A32" />
                                        <path d="M14.5 18.875C14.5 18.7092 14.5658 18.5503 14.6831 18.4331C14.8003 18.3158 14.9592 18.25 15.125 18.25H17.625C17.7908 18.25 17.9497 18.3158 18.0669 18.4331C18.1842 18.5503 18.25 18.7092 18.25 18.875V20.125C18.25 20.2908 18.1842 20.4497 18.0669 20.5669C17.9497 20.6842 17.7908 20.75 17.625 20.75H15.125C14.9592 20.75 14.8003 20.6842 14.6831 20.5669C14.5658 20.4497 14.5 20.2908 14.5 20.125V18.875Z" fill="#FF9A32" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 22.625C14.5 22.4592 14.5658 22.3003 14.6831 22.1831C14.8003 22.0658 14.9592 22 15.125 22H21.375C21.5408 22 21.6997 22.0658 21.8169 22.1831C21.9342 22.3003 22 22.4592 22 22.625C22 22.7908 21.9342 22.9497 21.8169 23.0669C21.6997 23.1842 21.5408 23.25 21.375 23.25H15.125C14.9592 23.25 14.8003 23.1842 14.6831 23.0669C14.5658 22.9497 14.5 22.7908 14.5 22.625ZM14.5 25.125C14.5 24.9592 14.5658 24.8003 14.6831 24.6831C14.8003 24.5658 14.9592 24.5 15.125 24.5H16.375C16.5408 24.5 16.6997 24.5658 16.8169 24.6831C16.9342 24.8003 17 24.9592 17 25.125C17 25.2908 16.9342 25.4497 16.8169 25.5669C16.6997 25.6842 16.5408 25.75 16.375 25.75H15.125C14.9592 25.75 14.8003 25.6842 14.6831 25.5669C14.5658 25.4497 14.5 25.2908 14.5 25.125ZM18.25 25.125C18.25 24.9592 18.3158 24.8003 18.4331 24.6831C18.5503 24.5658 18.7092 24.5 18.875 24.5H20.125C20.2908 24.5 20.4497 24.5658 20.5669 24.6831C20.6842 24.8003 20.75 24.9592 20.75 25.125C20.75 25.2908 20.6842 25.4497 20.5669 25.5669C20.4497 25.6842 20.2908 25.75 20.125 25.75H18.875C18.7092 25.75 18.5503 25.6842 18.4331 25.5669C18.3158 25.4497 18.25 25.2908 18.25 25.125ZM22 25.125C22 24.9592 22.0658 24.8003 22.1831 24.6831C22.3003 24.5658 22.4592 24.5 22.625 24.5H23.875C24.0408 24.5 24.1997 24.5658 24.3169 24.6831C24.4342 24.8003 24.5 24.9592 24.5 25.125C24.5 25.2908 24.4342 25.4497 24.3169 25.5669C24.1997 25.6842 24.0408 25.75 23.875 25.75H22.625C22.4592 25.75 22.3003 25.6842 22.1831 25.5669C22.0658 25.4497 22 25.2908 22 25.125ZM25.75 25.125C25.75 24.9592 25.8158 24.8003 25.9331 24.6831C26.0503 24.5658 26.2092 24.5 26.375 24.5H27.625C27.7908 24.5 27.9497 24.5658 28.0669 24.6831C28.1842 24.8003 28.25 24.9592 28.25 25.125C28.25 25.2908 28.1842 25.4497 28.0669 25.5669C27.9497 25.6842 27.7908 25.75 27.625 25.75H26.375C26.2092 25.75 26.0503 25.6842 25.9331 25.5669C25.8158 25.4497 25.75 25.2908 25.75 25.125Z" fill="#FF9A32" />
                                    </svg>
                                    <strong className="font-size18 font-weight600 ml-3">Payment Type</strong>
                                </div>
                                <Row className="mt-1">
                                    <Col md="4" className="pr-0">
                                        <strong className="h4 font-size12 font-weight600 d-flex align-items-center mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                            <rect width="8" height="8" rx="2" fill="#0FEE9F" />
                                        </svg><small className="font-weight700 font-size12 pl-1">43.8% </small>
                                            <span class="font-size12 font-weight400 ml-1"> Cards</span></strong>
                                    </Col>
                                    <Col md="4" className="pr-0">
                                        <strong className="h4 font-size12 font-weight600 d-flex align-items-center mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                            <rect width="8" height="8" rx="2" fill="#2D3F8E" />
                                        </svg><small className="font-weight700 font-size12 ml-2">17.1% </small>
                                            <span class="font-size12 font-weight400 ml-1"> Charging Code</span></strong>
                                    </Col>
                                    <Col md="4" className="pr-0">
                                        <strong className="h4 font-size12 font-weight600 d-flex align-items-center mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                            <rect width="8" height="8" rx="2" fill="#CECECE" />
                                        </svg><small className="font-weight700 font-size12 ml-2">1.2% </small>
                                            <span class="font-size12 font-weight400 ml-1"> Master Key Card</span></strong>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="4">
                                        <strong className="h4 font-size12 font-weight600 d-flex align-items-center mmb-3"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                            <rect width="8" height="8" rx="2" fill="#11A1FD" />
                                        </svg><small className="font-weight700 font-size12 ml-2">32.6% </small>
                                            <span class="font-size12 font-weight400 ml-1"> Google Pay</span></strong>
                                    </Col>
                                    <Col md="4">
                                        <strong className="h4 font-size12 font-weight600 d-flex align-items-center mmb-3"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                            <rect width="8" height="8" rx="2" fill="#FF9A32" />
                                        </svg><small className="font-weight700 font-size12 ml-2">6.5% </small>
                                            <span class="font-size12 font-weight400 ml-1"> Apple Pay</span></strong>
                                    </Col>
                                    <Col md="4">
                                        <strong className="h4 font-size12 font-weight600 d-flex align-items-center mmb-3"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                            <rect width="8" height="8" rx="2" fill="#F43EF8" />
                                        </svg><small className="font-weight700 font-size12 ml-2">0.8% </small>
                                            <span class="font-size12 font-weight400 ml-1"> Free Charging</span></strong>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md="6" className="mt-2 dark-black">
                            <div className="statementBox bg-white box-shadow brdrRadius8 minHgt152">
                                <div class="d-flex align-items-center mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                        <circle opacity="0.1" cx="22" cy="22" r="22" fill="#11A1FD" />
                                        <path d="M29.8735 18.4211H24.7102L29.3532 12.5547C29.4493 12.4305 29.3626 12.25 29.2055 12.25H20.2172C20.1516 12.25 20.0883 12.2852 20.0555 12.3437L13.9829 22.832C13.9102 22.9562 13.9993 23.1133 14.1446 23.1133H18.2321L16.1368 31.4945C16.0922 31.6773 16.3126 31.8062 16.4485 31.675L30.0024 18.7422C30.1243 18.6273 30.0422 18.4211 29.8735 18.4211Z" fill="#11A1FD" />
                                    </svg>
                                    <strong className="font-size18 font-weight600 ml-3">Energy Cunsumption</strong>
                                </div>
                                <Row>
                                    <Col md="5">
                                        <strong className="h4 font-size18 font-weight600">621 KWH  <small className="font-weight700 font-size16 greena">+2.3%</small><br />
                                            <span class="font-size12 font-weight400">Today</span></strong>
                                    </Col>
                                    <Col md="7">
                                        <strong className="h4 font-size18 font-weight600">210,619 KWH   <small className="font-weight700 font-size16 greena">+1.3%</small><br />
                                            <span class="font-size12 font-weight400">This Month</span></strong>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="energy-cunsumptions">
                    <Row className="mb-24">
                        <Col md="6">
                            <FormGroup className="mb-0 primaryBlueColor">
                                <FormSelect custom name="select" id="select" className="priceSelect price-FormSelect">
                                    <option value="0" hidden>All Chargers</option>
                                    <option value="1">Option #1</option>
                                    <option value="2">Option #2</option>
                                    <option value="3">Option #3</option>
                                </FormSelect>
                            </FormGroup>
                        </Col>

                        <Col md="6">
                            <div className="d-flex align-items-center calender">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#86A4BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16 2V6" stroke="#86A4BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8 2V6" stroke="#86A4BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3 10H21" stroke="#86A4BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span className="font-weight700  primaryBlueColor ml-15 font-size16">Mon, 16 Nov 2021 - Sat, 22 Nov 2021
                                </span>
                                <div className="arrowSection ml-auto">
                                    <span className="left"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15 6L9 12L15 18" stroke="#86A4BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></span>
                                    <span className="right"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 18L15 12L9 6" stroke="#86A4BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></span>
                                </div>


                            </div>

                        </Col>

                        <Col>

                        </Col>
                    </Row>
                    <Tabs activeTab="home">
                        <Nav variant="tabs">
                            <NavItem>
                                <NavLink data-tab="home">
                                    <div class="d-flex align-items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clip-path="url(#clip0)">
                                                <path d="M12 6V18" stroke="#11A1FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M14.7273 8.18164H10.6364C10.1301 8.18164 9.64448 8.38278 9.28645 8.7408C8.92843 9.09882 8.72729 9.58441 8.72729 10.0907C8.72729 10.5971 8.92843 11.0826 9.28645 11.4407C9.64448 11.7987 10.1301 11.9998 10.6364 11.9998H13.3637C13.87 11.9998 14.3556 12.201 14.7136 12.559C15.0716 12.917 15.2728 13.4026 15.2728 13.9089C15.2728 14.4152 15.0716 14.9008 14.7136 15.2588C14.3556 15.6169 13.87 15.818 13.3637 15.818H8.72729" stroke="#11A1FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width="13.0909" height="13.0909" fill="white" transform="translate(5.45459 5.45508)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <strong class="font-size14 font-weight700 ml-3 primaryBlueColor">Revenue
                                        </strong></div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink data-tab="profile">
                                    <div class="d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g opacity="0.7">
                                                <path d="M18 10C17.8232 10 17.6537 10.0702 17.5286 10.1953C17.4036 10.3203 17.3334 10.4899 17.3334 10.6667V13.3333C17.3334 13.5101 17.4036 13.6797 17.5286 13.8047C17.6537 13.9298 17.8232 14 18 14C18.1769 14 18.3464 13.9298 18.4714 13.8047C18.5965 13.6797 18.6667 13.5101 18.6667 13.3333V10.6667C18.6667 10.4899 18.5965 10.3203 18.4714 10.1953C18.3464 10.0702 18.1769 10 18 10ZM14.5534 8H12.4867L11.7267 9.33333H14.5467C14.5885 9.36778 14.6213 9.41188 14.6422 9.46183C14.6631 9.51177 14.6715 9.56606 14.6667 9.62V14.38C14.6712 14.4333 14.6633 14.4869 14.6437 14.5366C14.624 14.5864 14.5931 14.6309 14.5534 14.6667H12.6667L11.9 16H14.5667C14.9706 15.9726 15.3474 15.7872 15.6157 15.484C15.8839 15.1808 16.022 14.7842 16 14.38V9.62C16.0219 9.21361 15.882 8.8151 15.6109 8.51154C15.3399 8.20799 14.9596 8.02408 14.5534 8ZM6.66671 14.38V9.62C6.66272 9.56676 6.67084 9.51331 6.69047 9.46366C6.7101 9.414 6.74072 9.36945 6.78004 9.33333H8.66671L9.42004 8H6.75338C6.35188 8.03077 5.9784 8.21758 5.71297 8.52039C5.44755 8.8232 5.31128 9.21793 5.33338 9.62V14.38C5.31152 14.7864 5.45142 15.1849 5.72249 15.4885C5.99357 15.792 6.37378 15.9759 6.78004 16H8.84671L9.60671 14.6667H6.78671C6.74493 14.6322 6.71217 14.5881 6.69126 14.5382C6.67035 14.4882 6.66192 14.4339 6.66671 14.38Z" fill="#1D2337" />
                                                <path d="M10.0001 17.333C9.88288 17.3335 9.76759 17.303 9.66587 17.2447C9.56415 17.1864 9.47962 17.1023 9.42079 17.0008C9.36197 16.8994 9.33093 16.7843 9.33081 16.667C9.3307 16.5498 9.36151 16.4346 9.42013 16.333L11.5201 12.6664H8.6668C8.55046 12.6657 8.43632 12.6345 8.33574 12.576C8.23516 12.5176 8.15164 12.4338 8.09347 12.333C8.03495 12.2317 8.00415 12.1167 8.00415 11.9997C8.00415 11.8827 8.03495 11.7677 8.09347 11.6664L10.7601 6.99969C10.8485 6.84587 10.9944 6.73346 11.1657 6.6872C11.337 6.64094 11.5196 6.66462 11.6735 6.75303C11.8273 6.84143 11.9397 6.98732 11.986 7.15861C12.0322 7.32989 12.0085 7.51253 11.9201 7.66636L9.81347 11.333H12.6668C12.7831 11.3337 12.8973 11.3649 12.9979 11.4233C13.0984 11.4818 13.182 11.5656 13.2401 11.6664C13.2986 11.7677 13.3294 11.8827 13.3294 11.9997C13.3294 12.1167 13.2986 12.2317 13.2401 12.333L10.5735 16.9997C10.5153 17.1005 10.4318 17.1842 10.3312 17.2427C10.2306 17.3012 10.1165 17.3323 10.0001 17.333Z" fill="#1D2337" />
                                            </g>
                                        </svg>
                                        <strong class="font-size14 font-weight700 ml-3 primaryBlueColor">Sessions
                                        </strong></div>

                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink data-tab="messages">
                                    <div class="d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g opacity="0.7">
                                                <path d="M16.2955 10.0477H13.4791L16.0117 6.84783C16.0641 6.78008 16.0168 6.68164 15.9311 6.68164H11.0284C10.9926 6.68164 10.9581 6.70082 10.9402 6.73278L7.62786 12.4537C7.58823 12.5214 7.63681 12.6071 7.71607 12.6071H9.94562L8.80272 17.1787C8.77843 17.2784 8.8986 17.3487 8.97275 17.2771L16.3658 10.2228C16.4323 10.1602 16.3875 10.0477 16.2955 10.0477Z" fill="#1D2337" />
                                            </g>
                                        </svg>
                                        <strong class="font-size14 font-weight700 ml-3 primaryBlueColor">Energy

                                        </strong></div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink data-tab="payment">
                                    <div class="d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.11829 2.255H13.8825C14.1009 2.255 14.3103 2.34176 14.4648 2.49619C14.6192 2.65063 14.706 2.86009 14.706 3.07849V10.9213C14.706 11.1397 14.6192 11.3491 14.4648 11.5036C14.3103 11.658 14.1009 11.7448 13.8825 11.7448H2.11829C1.89988 11.7448 1.69042 11.658 1.53599 11.5036C1.38155 11.3491 1.29479 11.1397 1.29479 10.9213V3.07849C1.29479 2.86009 1.38155 2.65063 1.53599 2.49619C1.69042 2.34176 1.89988 2.255 2.11829 2.255ZM2.11829 0.960938C1.55668 0.960938 1.01807 1.18404 0.620949 1.58115C0.223831 1.97827 0.000732422 2.51688 0.000732422 3.07849V10.9213C0.000732422 11.4829 0.223831 12.0215 0.620949 12.4186C1.01807 12.8157 1.55668 13.0388 2.11829 13.0388H13.8825C14.4441 13.0388 14.9827 12.8157 15.3798 12.4186C15.7769 12.0215 16 11.4829 16 10.9213V3.07849C16 2.51688 15.7769 1.97827 15.3798 1.58115C14.9827 1.18404 14.4441 0.960938 13.8825 0.960938H2.11829ZM14.5864 2.39619C14.7636 2.57893 14.8628 2.8236 14.8628 3.07849V10.9213C14.8628 11.1813 14.7595 11.4306 14.5757 11.6145C14.3918 11.7983 14.1425 11.9016 13.8825 11.9016H2.11829C1.85828 11.9016 1.60893 11.7983 1.42507 11.6145C1.42294 11.6124 1.42082 11.6102 1.41871 11.6081C1.42086 11.6103 1.42303 11.6124 1.4252 11.6146C1.60906 11.7985 1.85841 11.9018 2.11842 11.9018H13.8826C14.1426 11.9018 14.392 11.7985 14.5758 11.6146C14.7597 11.4308 14.8629 11.1814 14.8629 10.9214V3.07862C14.8629 2.82367 14.7636 2.57895 14.5864 2.39619ZM2.11829 1.11779C1.59828 1.11779 1.09957 1.32437 0.731863 1.69207C0.364161 2.05977 0.157588 2.55848 0.157588 3.07849V10.9213C0.157588 11.4088 0.339146 11.8776 0.664818 12.2372C0.339225 11.8776 0.157718 11.4089 0.157718 10.9214V3.07862C0.157718 2.55862 0.364291 2.0599 0.731993 1.6922C1.0997 1.3245 1.59841 1.11793 2.11842 1.11793H13.8826C14.4026 1.11793 14.9013 1.3245 15.269 1.6922C15.269 1.69216 15.2689 1.69211 15.2689 1.69207C14.9012 1.32437 14.4025 1.11779 13.8825 1.11779H2.11829Z" fill="#1D2337" />
                                            <path d="M2.90259 4.54877C2.90259 4.41877 2.95423 4.29409 3.04616 4.20216C3.13808 4.11024 3.26276 4.05859 3.39276 4.05859H5.35346C5.48346 4.05859 5.60814 4.11024 5.70006 4.20216C5.79199 4.29409 5.84363 4.41877 5.84363 4.54877V6.52912C5.84363 6.65912 5.79199 6.7838 5.70006 6.87572C5.60814 6.96765 5.48346 7.01929 5.35346 7.01929H3.39276C3.26276 7.01929 3.13808 6.96765 3.04616 6.87572C2.95423 6.7838 2.90259 6.65912 2.90259 6.52912V4.54877Z" fill="#1D2337" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.90259 9.49017C2.90259 9.36017 2.95423 9.23549 3.04616 9.14357C3.13808 9.05164 3.26276 9 3.39276 9H8.29451C8.42451 9 8.54919 9.05164 8.64111 9.14357C8.73304 9.23549 8.78468 9.36017 8.78468 9.49017C8.78468 9.62018 8.73304 9.74485 8.64111 9.83678C8.54919 9.92871 8.42451 9.98035 8.29451 9.98035H3.39276C3.26276 9.98035 3.13808 9.92871 3.04616 9.83678C2.95423 9.74485 2.90259 9.62018 2.90259 9.49017Z" fill="#1D2337" />
                                        </svg>
                                        <strong class="font-size14 font-weight700 ml-3 primaryBlueColor">Payment Type


                                        </strong></div>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent>
                            <TabPane data-tab="home">
                                <Row>
                                    <Col md="3">
                                        <p className="font-size24 mt-24  mb4 primaryBlueColor font-weight700">$8,239

                                        </p>
                                        <p className="font-size12 mb-0 secondaryGreyColor font-weight400">Total based on selected period</p>
                                    </Col>

                                </Row>
                                <Row className="mt-24 pl-15 pr-15">
                                    {/* <Line height={500} data={datasingleline} options={optionsingleline} plugins={[tooltipLine]} /> */}
                                </Row>
                            </TabPane>
                            <TabPane data-tab="profile">
                                <Row>
                                    <Col md="3">
                                        <p className="font-size24 mt-24  mb4 primaryBlueColor font-weight700">$8,239

                                        </p>
                                        <p className="font-size12 mb-0 secondaryGreyColor font-weight400">Total based on selected period</p>
                                    </Col>

                                </Row>
                                <Row className="mt-24 pl-15 pr-15">
                                    {/* <Line height={500} data={datasingleline} options={optionsingleline} plugins={[tooltipLine]} /> */}
                                </Row>
                            </TabPane>
                            <TabPane data-tab="messages">
                                <Row>
                                    <Col md="3">
                                        <p className="font-size24 mt-24  mb4 primaryBlueColor font-weight700">$8,239

                                        </p>
                                        <p className="font-size12 mb-0 secondaryGreyColor font-weight400">Total based on selected period</p>
                                    </Col>

                                </Row>
                                <Row className="mt-24 pl-15 pr-15">
                                    {/* <Line height={500} data={datasingleline} options={optionsingleline} plugins={[tooltipLine]} /> */}
                                </Row>
                            </TabPane>
                            <TabPane data-tab="payment">
                                <Row>
                                    <Col md="3">
                                        <p className="font-size24 mt-24  mb4 primaryBlueColor font-weight700">$8,239

                                        </p>
                                        <p className="font-size12 mb-0 secondaryGreyColor font-weight400">Total based on selected period</p>
                                    </Col>

                                </Row>
                                <Row className="mt-24 pl-15 pr-15">
                                    {/* <Line height={500} data={datasingleline} options={optionsingleline} plugins={[tooltipLine]} /> */}
                                </Row>
                            </TabPane>
                        </TabContent>
                    </Tabs>
                </div>
            </main>
        </>
    )
}

export default Summary
