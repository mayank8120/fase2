import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './chargingrevenue.css';
import { Line } from 'react-chartjs-2';
import {
    Col,
    FormGroup,
    FormSelect,
    Row,

} from 'react-bootstrap'

// import routes from '../../../routes'


const ChargingRevenue = () => {


    const tooltipmultiLine = {
        id: 'tooltipmultiLine',
        afterDraw: chart => {
            if (chart.tooltip._active && chart.tooltip._active.length) {

                const ctx = chart.ctx;
                ctx.save();
                const activePoint = chart.tooltip._active[0];
                // console.log(chart.ctx);

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
                ctx.strokeStyle = activePoint.element.options.borderColor;
                ctx.stroke();
                ctx.restore();



            }


        }
    }

    const datamultiline = {
        labels: ['Nov 16', 'Nov 17', 'Nov 18', 'Nov 19', 'Nov 20', 'Nov 21', 'Nov 22'],
        datasets: [
            {
                label: '$ ',
                data: [1200, 1900, 3002, 5100, 2200, 3100, 5400],
                fill: false,
                pointRadius: 1,
                backgroundColor: '#6200EE',
                borderColor: '#6200EE',
            },
            {
                label: '$',
                data: [1901, 1200, 1900, 2900, 3008, 5200, 3400],
                fill: false,
                pointRadius: 1,
                backgroundColor: '#26A69A',
                borderColor: '#26A69A',
            },
            {
                label: ' $',
                data: [4001, 2002, 1300, 2300, 4200, 3300, 6700],
                fill: false,
                pointRadius: 1,
                backgroundColor: '#EE6002',
                borderColor: '#EE6002'
            },
        ],
    };

    const optionmultiline = {
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'white',
                // borderColor:'black',
                // borderWidth: 1,
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
                        return datamultiline.datasets.backgroundColor;
                    },
                    labelPointStyle: function (context) {
                        return { pointStyle: 'star', rotation: 0 };
                    }
                }
            }
        },
        elements: {
            line: {
                tension: 0.4
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                }
            },
            y: {
                grid: {
                    display: true
                },
                ticks: {
                    font: {
                        size: 14
                    },
                    beginAtZero: true,
                    // callback: function (label, index, labels) {
                    //   return label / 1000 + 'k';
                    // },
                    stepSize: 1000,

                    callback: function (value) {
                        return `$ ${value}`;
                    }
                }
            }
        },
    };
    return (
        <>
            <main className="chargin-revenue">
                <Row>
                    <Col md="12" className="font-weight700 font-size24 mb-4 colorBlack pl-0 pr-0">

                        <Breadcrumb >
                            <Breadcrumb.Item href="/dashboard" className="font-size16 font-weight600">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="#" className="font-size16 font-weight600">Statistics & Reports </Breadcrumb.Item>
                            <Breadcrumb.Item active className="font-size16 font-weight600">Charging Revenue</Breadcrumb.Item>
                        </Breadcrumb>
                        Charging Revenue

                    </Col>
                </Row>
                <div className="energy-cunsumptions mr-15-15">
                    <Row>
                        <Col md="4">
                            <FormGroup className="mb-0 primaryBlueColor">
                                <FormSelect custom name="FormSelect" id="FormSelect" className="priceSelect price-FormSelect ">
                                    <option value="0" hidden>All Location
                                    </option>
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
                                <span className="font-weight600  primaryBlueColor ml-15 font-size16">Mon, 16 Nov 2021 - Sat, 22 Nov 2021

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
                        <Col md="2" className="pr-0">
                            <button className="skyBluebackground font-size16 font-weight700">Export</button>
                        </Col>


                    </Row>
                    <Row>
                        <Col md="3">
                            <p className="font-size24 mt-24  mb4 primaryBlueColor font-weight700">$28,752.25
                            </p>
                            <p className="font-size12 mb-0 secondaryGreyColor font-weight400">Sum based on selected period</p>
                        </Col>
                        <Col md="3">
                            <p className="font-size24 mt-24  mb4 primaryBlueColor font-weight700">$1,500

                            </p>
                            <p className="font-size12 mb-0 secondaryGreyColor font-weight400">Average based on selected period
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-24 pl-15 pr-15">
                        <Line height={90} data={datamultiline} options={optionmultiline} plugins={[tooltipmultiLine]} />
                    </Row>
                </div>

            </main>
        </>
    )
}

export default ChargingRevenue
