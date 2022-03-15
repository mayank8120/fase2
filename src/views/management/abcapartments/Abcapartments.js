import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import './abcapartment.css';
import { Row, Col } from 'react-bootstrap';
import { Bar, Doughnut } from 'react-chartjs-2';

// import ChartLineSimple from '../../charts/ChartLineSimple'


import { CategoryScale } from 'chart.js';
import { Chart } from 'react-chartjs-2';


import "chartjs-plugin-datalabels";
import ChartDataLabels from 'chartjs-plugin-datalabels';

import Breadcrumbs from '../../../containers/navbar/Breadcrumbs';

const workoptions = {
    maintainAspectRatio: true,
    padding: 20,
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            enabled: false,
            external: function (context) {
                // Tooltip Element
                var tooltipEl = document.getElementById('chartjs-tooltip');
                var tooltipModel = context.tooltip;
                if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = 0;
                    return;
                }

                var tooltipModel = context.tooltip;
                var tooldata = tooltipModel.dataPoints[0];

                // console.log(tooldata.dataset.datalastweek[tooldata.dataIndex]);
                // Create element on first render
                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltip';
                    tooltipEl.innerHTML = '<div style="border: 1px solid rgba(0, 0, 0, 0.1);background:#fff;border-radius: 8px;width: 220px;"><div class="d-flex align-items-center" style="padding:16px 16px 12px;border-bottom: 1px solid #DEDEDE;"> <p style="color:#252840;font-size:16px;font-weight:700;" class="mb-0">40 <span style="color:rgb(37 40 64 / 70%);font-size:16px;font-weight:700;">Vehicles</span></p><p class="ml-auto mb-0" style="color:#3C9E26;font-size:16px;font-weight:700;">$400</p></div><p style="font-size:12px;font-weight:500;color: rgba(37, 40, 64, 0.7);padding:11px 16px 12px;" class="mb-0"> Compare to</p><div class="d-flex align-items-center" style="padding:0px 16px 0px 16px;"> <p style="color:#252840;font-size:16px;font-weight:700;" class="mb-0">30 <span style="color:rgb(37 40 64 / 70%);font-size:16px;font-weight:700;">Vehicles</span></p><p class="ml-auto mb-0" style="color:#3C9E26;font-size:16px;font-weight:700;">$300</p></div><p style="font-size:12px;font-weight:500;color: #252840;padding:4px 0 0 16px;" class="mb-0">Last Week (Sun, 15 Nov)</p><div class="d-flex align-items-center" style="padding:12px 16px 0px;"> <p style="color:#252840;font-size:16px;font-weight:700;" class="mb-0">20 <span style="color:rgb(37 40 64 / 70%);font-size:16px;font-weight:700;">Vehicles</span></p><p class="ml-auto mb-0" style="color:#3C9E26;font-size:16px;font-weight:700;">$200</p></div><p style="font-size:12px;font-weight:400;color: rgba(37, 40, 64, 0.7);padding:4px 0 21px 16px;" class="mb-0"> Last Two Weeks (Sun, 15 Nov)</p><p style="position: absolute;width: 24px;height: 24px;background: #ffffff;left: 95px;transform: rotate(224deg);top: 94%;z-index: 0;"> </p></div>';
                    document.body.appendChild(tooltipEl);
                }

                // Hide if no tooltip
                if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = 0;
                    return;
                }
                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                    tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                    return bodyItem.lines;
                }





                // these c0mments are for the developer to change the values in the innerhtml through the 

                // console.log(tooldata.dataset.datalastweek[tooldata.dataIndex]);
                // Set Text
                // if (tooltipModel.body) {
                //   var titleLines = tooltipModel.title || [];
                //   var bodyLines = tooltipModel.body.map(getBody);

                //   var innerHtml = '<thead>';

                //   titleLines.forEach(function (title) {
                //     innerHtml += '<tr><th>' + title + '</th></tr>';
                //   });
                //   innerHtml += '</thead><tbody>';

                //   bodyLines.forEach(function (body, i) {
                //     var colors = tooltipModel.labelColors[i];
                //     var style = 'background:' + colors.backgroundColor;
                //     style += '; border-color:' + colors.borderColor;
                //     style += '; border-width: 2px';
                //     var span = '<span style="' + style + '"></span>';
                //     innerHtml += '<tr><td>' + span + body + '</td></tr>';
                //     console.log(i);
                //   });
                //   innerHtml += '</tbody>';

                //   var tableRoot = tooltipEl.querySelector('table');
                //   tableRoot.innerHTML = innerHtml;
                //   console.log(tooltipModel.body);
                // }
                var position = context.chart.canvas.getBoundingClientRect();
                tooltipEl.style.opacity = 1;
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                // tooltipEl.style.margin = 40 + 'px ' + 40 + 'px';
                tooltipEl.style.pointerEvents = 'none';
                tooltipEl.style.transform = 'translate(-50%, -75%)';
                tooltipEl.style.transition = 'all .1s ease';
                // console.log(position);
                // context.restore();
                // ctx.restore();
            }
        }
    },
    elements: {
        line: {
            tension: 0.5
        },
    },
    scales: {
        x: {

            grid: {
                display: false,
                borderWidth: 1,
            }
        },
        y: {
            title: {
                display: true,
                text: 'Number of vehicles',
            },
            grid: {
                display: true,
                drawBorder: false,
                borderDash: [4, 5],
            },
            ticks: {
                beginAtZero: true,
                stepSize: 20,

                callback: function (value) {
                    return `${value}`;
                }
            }
        }
    },
};



const workdata = canvas => {
    const ctx = canvas.getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#1776BB');
    gradient.addColorStop(1, '#0CA4D7');
    return {
        labels: ['16 Nov', '17 Nov', '18 Nov', '19 Nov', '20 Nov', '21 Nov', 'Today(so far)'],
        datasets: [
            {
                label: '# of Votes',
                data: [19, 25, 33, 15, 80, 50, 40],
                datalabels: {
                    display: true,
                    color: "#3C9E26",
                    align: "top",
                    textAlign: "center",
                    padding: '10',
                    anchor: "end",
                    font: {
                        size: "20",
                        weight: 'bold'
                    },
                    formatter: function (value) {
                        return `$${value * 10}\n${value} vehicles`;
                    },
                },
                datalastweek: [120, 190, 300, 5050, 2000, 380, 879],
                datalasttwoweeks: [390, 620, 500, 120, 780, 420, 400],
                data32: [100, 900, 3060, 5500, 2100, 3100, 3900],
                backgroundColor: gradient,
                // backgroundColor: 'blue',
                borderColor: '#1776BB',
                borderWidth: 1,
                barThickness: '50',
                maxBarThickness: '50',
            },
        ],
    };

}

const AbcApartments = () => {


    const datadonut = {
        labels: ['In Use', 'In Installation', 'Available', 'Down', 'Offline'],
        datasets: [
            {
                labels: ['In Use', 'In Installation', 'Available', 'Down', 'Offline'],
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    '#11A1FD',
                    '#E3E3E3',
                    '#2D3F8E',
                    '#FF9A32',
                    '#0FEE9F'
                ],
                // borderColor: [
                //   'rgba(255, 99, 132, 1)',
                //   'rgba(54, 162, 235, 1)',
                //   'rgba(255, 206, 86, 1)',
                //   'rgba(75, 192, 192, 1)',
                //   'rgba(153, 102, 255, 1)',
                // ],
                // borderWidth: 1,
            },
        ],
    };
    const optiondonut = {
        // datalabels: {
        //   color: 'black'
        // },
        // font: {
        //   size: 36
        // },
        responsive: true,
        plugins: {

            legend: {
                display: false,
            },
            tooltip: {
                padding: 8,
                borderColor: '#ffffff',
                borderWidth: 1,
                position: 'nearest',
                titleFont: {
                    size: 10,
                    weight: '400'
                },
                // labelFont: {
                //   size: 12
                // },
                bodyFont: {
                    size: 18,
                    weight: '700'
                },
                // bodyFontSize:400,
                backgroundColor: 'white',
                // borderColor:'black',
                //    borderWidth: 1,
                titleColor: 'black',
                titleAlign: 'center',
                displayColors: true,
                boxWidth: 0,
                boxHeight: 0,
                usePointStyle: true,
                // yAlign: 'top',
                bodyAlign: 'center',

                callbacks: {
                    // title: (tooltipItem, data) => {
                    //   // console.log(tooltipItem);
                    //   return `${tooltipItem.0.dataset.labels[tooltipItem.dataIndex]}`;
                    // },
                    labelTextColor: function (context) {
                        return datadonut.datasets.backgroundColor;
                    },
                    titleFontColor: function (context) {
                        return datadonut.datasets.backgroundColor;
                    },
                    title: (tooltipItem, data) => {
                        // const index = tooltipItem.index;
                        // const datasetIndex = tooltipItem.datasetIndex;

                        // const actualData = data.datasets[datasetIndex].allData[index];
                        // console.log(tooltipItem);
                        // console.log(tooltipItem.dataset.backgroundColor[tooltipItem.dataIndex]);
                        // console.log(tooltipItem.dataset.labels[tooltipItem.dataIndex]);

                        // console.log(tooltipItem[0].dataset.labels[tooltipItem[0].dataIndex]);

                        // console.log(tooltipItem.dataset.data[0]);
                        return `${tooltipItem[0].dataset.labels[tooltipItem[0].dataIndex]}`;
                    },

                    labelPointStyle: function (context) {
                        return { pointStyle: 'star', rotation: 0 };
                    },
                    // beforeLabel: (tooltipItem, data) => {

                    //   return `${tooltipItem.dataset.labels[tooltipItem.dataIndex]}\n${tooltipItem.dataset.data[tooltipItem.dataIndex]}%`;
                    // },




                    // afterLabel: (tooltipItem, data) => {
                    //   // const index = tooltipItem.index;
                    //   // const datasetIndex = tooltipItem.datasetIndex;

                    //   // const actualData = data.datasets[datasetIndex].allData[index];
                    //   // console.log(tooltipItem);
                    //   // console.log(tooltipItem.dataset.backgroundColor[tooltipItem.dataIndex]);
                    //   // console.log(tooltipItem.dataset.labels[tooltipItem.dataIndex]);
                    //   // console.log(data);
                    //   // console.log(tooltipItem.dataset.data[0]);
                    //   // return `${tooltipItem.dataset.labels[tooltipItem.dataIndex]}\n${tooltipItem.dataset.data[tooltipItem.dataIndex]}%`;


                    //   return `${tooltipItem.dataset.data[tooltipItem.dataIndex]}%`;

                    // },


                    // label :
                    //   () => {
                    //     return ""
                    //   }
                    // ,

                    label: function (tooltipItem, datadonut) {
                        // return " ";
                        // console.log(tooltipItem);
                        // console.log(tooltipItem.dataset.data[tooltipItem.dataIndex]);
                        return `${tooltipItem.dataset.data[tooltipItem.dataIndex]}%`;
                    },


                    // label: function (context) {
                    //   var label = context.dataset.label || '';

                    //   if (label) {
                    //     label += ': ';
                    //   }
                    //   if (context.parsed.y !== null) {
                    //     label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                    //   }
                    //   return `${label}`;
                    // }

                    // label: function (tooltipItems, data) {
                    //   return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.yLabel + ' €';
                    // }
                    // label: function (context) {
                    //   var label = context.dataset.label || '';

                    //   if (label) {
                    //     label += ': ';
                    //   }
                    //   if (context.parsed.y !== null) {
                    //     label += "$";
                    //   }
                    //   return label;
                    // }



                    // backgroundColor: function(context){
                    //   // console.log(datamultiline.datasets.borderColor);
                    //   return datamultiline.datasets.backgroundColor;
                    // }
                }
            }
        }
    };
    /*chargin session*/
    const databarchart = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                // label: '',
                data: [5000, 1900, 3000, 5100, 2200, 5400],
                // backgroundColor: [
                //   'rgba(255, 99, 132, 0.2)',
                //   'rgba(54, 162, 235, 0.2)',
                //   'rgba(255, 206, 86, 0.2)',
                //   'rgba(75, 192, 192, 0.2)',
                //   'rgba(153, 102, 255, 0.2)',
                //   'rgba(255, 159, 64, 0.2)',
                // ],
                // borderColor: [
                //   'rgba(255, 99, 132, 1)',
                //   'rgba(54, 162, 235, 1)',
                //   'rgba(255, 206, 86, 1)',
                //   'rgba(75, 192, 192, 1)',
                //   'rgba(153, 102, 255, 1)',
                //   'rgba(255, 159, 64, 1)',
                // ],
                backgroundColor: '#FF9A32',
                borderColor: '#FF9A32',
                borderWidth: 1,
            },
        ],
    };

    const optionbarchart = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {

                borderColor: 'black',
                borderWidth: 1,
                titleFont: {
                    size: 10,
                    weight: 'bold'
                },

                bodyFont: {
                    size: 18,
                    weight: 'bold'
                },

                backgroundColor: 'white',
                // borderColor:'black',
                //borderWidth: 1,
                titleColor: 'black',
                titleAlign: 'center',
                displayColors: true,
                boxWidth: 0,
                boxHeight: 0,
                usePointStyle: true,
                yAlign: 'bottom',
                bodyAlign: 'center',
                callbacks: {
                    labelTextColor: function (context) {
                        return '#FF9A32';
                    },
                    labelPointStyle: function (context) {
                        return { pointStyle: 'star', rotation: 0 };
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    borderWidth: 1,
                }
            },
            y: {

                grid: {
                    display: false,
                    color: 'black',
                    borderWidth: 1,
                },
                ticks: {
                    callback: function (label, index, labels) {
                        return label / 1000 + 'k';
                    },
                    stepSize: 2000,
                }
            }
        },
    };
    return (
        <>
            <main className="abcaprtments">
                Blessed Rock Apt
                <Breadcrumbs />
                <Row>

                    {/* <Col md="12" className="font-weight700 font-size24 colorBlack">
           
            <Breadcrumb>
              <Breadcrumb.Item href="#" className="font-size16 font-weight600">Manage Properties</Breadcrumb.Item>
              <Breadcrumb.Item active className="font-size16 font-weight600">ABC Apartments</Breadcrumb.Item>
            </Breadcrumb>
          </Col> */}



                    <Col lg="9" md="9" sm="12" xs="12">
                        <Row>


                            {/* main header */}
                            <Col lg="8" md="8" sm="12" xs="12" className="pl-0 mmb-24">
                                <div className="statementBox bg-white  brdrRadius8 height268">
                                    <Row>
                                        <Col sm="6" className="sdd">

                                            <div class="d-flex align-items-center mb-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                                    <circle opacity="0.1" cx="22" cy="22" r="22" fill="#11A1FD" />
                                                    <path d="M29.616 16.48L29.63 16.463L25.63 13.223L24.37 14.777L26.437 16.451C25.9242 16.7626 25.5171 17.2212 25.2685 17.7673C25.0199 18.3134 24.9413 18.9217 25.043 19.513C25.193 20.412 25.812 21.189 26.613 21.624C27.508 22.111 28.293 22.066 28.991 21.818L28.976 28C28.9772 28.1656 28.9371 28.3289 28.8593 28.475C28.7816 28.6212 28.6686 28.7457 28.5306 28.8373C28.3926 28.9288 28.2339 28.9845 28.069 28.9993C27.9041 29.0141 27.7381 28.9875 27.586 28.922C27.4669 28.8711 27.3589 28.7973 27.268 28.705C27.1756 28.6124 27.1023 28.5024 27.0523 28.3815C27.0024 28.2605 26.9768 28.1309 26.977 28L27 26C27.001 25.6064 26.924 25.2165 26.7735 24.8528C26.623 24.4891 26.4019 24.1588 26.123 23.881C25.8444 23.6018 25.5135 23.3803 25.1492 23.2291C24.7849 23.0779 24.3944 23.0001 24 23H23V15C23 14.4696 22.7893 13.9609 22.4142 13.5858C22.0391 13.2107 21.5304 13 21 13H14C13.4696 13 12.9609 13.2107 12.5858 13.5858C12.2107 13.9609 12 14.4696 12 15V29C12 29.5304 12.2107 30.0391 12.5858 30.4142C12.9609 30.7893 13.4696 31 14 31H21C21.5304 31 22.0391 30.7893 22.4142 30.4142C22.7893 30.0391 23 29.5304 23 29V25H24C24.136 25 24.267 25.027 24.391 25.078C24.629 25.1822 24.8187 25.3726 24.922 25.611C24.9739 25.7341 25.0004 25.8664 25 26L24.976 28C24.976 28.406 25.055 28.799 25.212 29.168C25.363 29.527 25.58 29.848 25.853 30.119C26.1306 30.3995 26.4613 30.6219 26.8258 30.7732C27.1903 30.9245 27.5813 31.0016 27.976 31C28.382 31 28.774 30.922 29.144 30.764C29.502 30.614 29.824 30.397 30.095 30.123C30.375 29.845 30.597 29.5142 30.7482 29.1498C30.8994 28.7853 30.9768 28.3945 30.976 28L31 19C30.999 18.4976 30.8717 18.0035 30.6299 17.5632C30.3881 17.1229 30.0394 16.7504 29.616 16.48ZM28 20C27.7348 20 27.4804 19.8946 27.2929 19.7071C27.1054 19.5196 27 19.2652 27 19C27 18.7348 27.1054 18.4804 27.2929 18.2929C27.4804 18.1054 27.7348 18 28 18C28.2652 18 28.5196 18.1054 28.7071 18.2929C28.8946 18.4804 29 18.7348 29 19C29 19.2652 28.8946 19.5196 28.7071 19.7071C28.5196 19.8946 28.2652 20 28 20Z" fill="#11A1FD" />
                                                    <path d="M17 18.75C17 18.338 17.338 18 17.75 18H18.25C18.662 18 19 18.338 19 18.75V19.25C19 19.662 18.662 20 18.25 20H17.75C17.5513 19.9992 17.361 19.9199 17.2205 19.7795C17.0801 19.639 17.0008 19.4487 17 19.25V18.75Z" fill="#E8F6FF" />
                                                    <path d="M20 26H16V25H17V22H16V21H19V25H20V26Z" fill="#E8F6FF" />
                                                </svg>
                                                <strong className="font-size16 font-weight600 ml-3 primaryBlueColor">Stations</strong>
                                            </div>
                                            <Doughnut height={168} data={datadonut} options={optiondonut} />

                                        </Col>
                                        <Col sm="6">
                                            <Row>
                                                <Col >
                                                    <strong className="h4 font-size24 mt-24 mb-8 font-weight700 primaryBlueColor">1,318  Stations
                                                    </strong><br />
                                                    <span class="font-size12  font-weight400 secondaryGreyColor">Data updated on 8 Aug 2020 19:32</span>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col >
                                                    <strong className="h4 mt-30 d-block mb-10 font-size16 primaryBlueColor font-weight600">Statuses <br /></strong>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col >
                                                    <strong className="h4 font-size12 font-weight600 d-flex align-items-center mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                        <rect width="8" height="8" rx="2" fill="#0FEE9F" />
                                                    </svg>
                                                        <span class="font-size12 font-weight400 ml-2 primaryBlueColor"> In Use</span></strong>
                                                </Col>
                                                <Col >
                                                    <strong className="h4 font-size12 font-weight600 d-flex align-items-center mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                        <rect width="8" height="8" rx="2" fill="#2D3F8E" />
                                                    </svg>
                                                        <span class="font-size12 font-weight400 ml-2 primaryBlueColor"> In Installation</span></strong>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col >
                                                    <strong className="h4 font-size12 font-weight600 d-flex align-items-center mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                        <rect width="8" height="8" rx="2" fill="#11A1FD" />
                                                    </svg>
                                                        <span class="font-size12 font-weight400 ml-2 primaryBlueColor"> Available</span></strong>
                                                </Col>
                                                <Col >
                                                    <strong className="h4 font-size12 font-weight600 d-flex align-items-center mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                        <rect width="8" height="8" rx="2" fill="#FF9A32" />
                                                    </svg>
                                                        <span class="font-size12 font-weight400 ml-2 primaryBlueColor"> Down</span></strong>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col >
                                                    <strong className="h4 font-size12 font-weight600 d-flex align-items-center mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                        <rect width="8" height="8" rx="2" fill="#CECECE" />
                                                    </svg>
                                                        <span class="font-size12 font-weight400 ml-2 primaryBlueColor"> Offline</span></strong>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col >
                                                    <span class="font-size10 font-weight400 mt-22 d-block secondaryGreyColor">Data updated on 8 Aug 2020 19:32</span>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>


                            {/* Revenue column */}
                            <Col lg="4" md="4" sm="12" xs="12" className="pr-0 mpl-0 px-2">
                                <div className=" revenueBox bg-white  brdrRadius8 height268">
                                    <div class="d-flex align-items-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                            <circle opacity="0.1" cx="22" cy="22" r="22" fill="#0FEE9F" />
                                            <path d="M22 11V33" stroke="#0FEE9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M27 15H19.5C18.5717 15 17.6815 15.3687 17.0251 16.0251C16.3687 16.6815 16 17.5717 16 18.5C16 19.4283 16.3687 20.3185 17.0251 20.9749C17.6815 21.6313 18.5717 22 19.5 22H24.5C25.4283 22 26.3185 22.3687 26.9749 23.0251C27.6313 23.6815 28 24.5717 28 25.5C28 26.4283 27.6313 27.3185 26.9749 27.9749C26.3185 28.6313 25.4283 29 24.5 29H16" stroke="#0FEE9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <strong className="font-size16 font-weight600 primaryBlueColor ml-3">Revenue</strong>
                                        <svg className="ml-auto" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                            <path d="M9.375 18.75L15.625 12.5L9.375 6.25" stroke="#3F5EF0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <Col>
                                        <Row md="4">
                                            <strong className="h4 font-size24 font-weight700 mb-3 primaryBlueColor line-height21">$500  <small className="font-weight700 font-size14 greena">+2.3%</small><br />
                                                <span class="font-size12 font-weight400 secondaryGreyColor">Today</span></strong>
                                        </Row>
                                        <Row md="4">
                                            <strong className="h4 font-size24 font-weight700 mb-0 primaryBlueColor line-height21">$8,239    <small className="font-weight700 font-size14 greena">+1.3%</small><br />
                                                <span class="font-size12 font-weight400 secondaryGreyColor">This Month</span></strong>
                                        </Row>
                                    </Col>
                                    {/* <ChartLineSimple

                                        className="mt-3"
                                        style={{ height: '34px', color: 'red' }}
                                        dataPoints={[1, 18, 9, 17, 34, 22, 11]}
                                        pointHoverBackgroundColor="info"
                                        borderColor='rgb(15, 238, 159)'
                                        options={{ elements: { line: { tension: 0.4 } } }}
                                        label="Members"
                                        labels="months"
                                        backgroundColor="rgba(15, 238, 159, 0.1)"
                                    /> */}
                                </div>
                            </Col>
                        </Row>


                        <Row className="mt-24">
                            {/* Energy consumption column */}
                            <Col lg="4" md="4" sm="12" xs="12" className="pl-0 mmb-24">
                                <div className="revenueBox bg-white  brdrRadius8 height268">
                                    <div class="d-flex align-items-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                            <circle opacity="0.1" cx="22" cy="22" r="22" fill="#11A1FD" />
                                            <path d="M29.8735 18.4211H24.7102L29.3532 12.5547C29.4493 12.4305 29.3626 12.25 29.2055 12.25H20.2172C20.1516 12.25 20.0883 12.2852 20.0555 12.3437L13.9829 22.832C13.9102 22.9562 13.9993 23.1133 14.1446 23.1133H18.2321L16.1368 31.4945C16.0922 31.6773 16.3126 31.8062 16.4485 31.675L30.0024 18.7422C30.1243 18.6273 30.0422 18.4211 29.8735 18.4211Z" fill="#11A1FD" />
                                        </svg>
                                        <strong className="font-size16 font-weight600 ml-3 primaryBlueColor">Energy Cunsumption</strong>
                                        <svg className="ml-auto" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                            <path d="M9.375 18.75L15.625 12.5L9.375 6.25" stroke="#3F5EF0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <Col>
                                        <Row md="5">
                                            <strong className="h4 font-size24 font-weight700 mb-3 primaryBlueColor">621 kWh <br />
                                                <span class="font-size12 font-weight400 secondaryGreyColor">Today</span></strong>
                                            <small className="font-weight700 font-size14 greena ml-auto">+2.3%</small>
                                        </Row>
                                        <Row md="7">
                                            <strong className="h4 font-size24 skytxtolor font-weight700  mb-0 ">210,619 kWh  <br />
                                                <span class="font-size12 secondaryGreyColor font-weight400">This Month</span></strong>
                                            <small className="font-weight700 font-size14 greena ml-auto" >+1.3%</small>
                                        </Row>
                                    </Col>
                                    {/* <ChartLineSimple

                                        className="mt-3"
                                        style={{ height: '34px', color: 'rgba(17, 161, 253, 0.1)' }}
                                        dataPoints={[1, 18, 9, 17, 34, 22, 11]}
                                        pointHoverBackgroundColor="info"
                                        borderColor='rgb(17, 161, 253)'
                                        options={{ elements: { line: { tension: 0.4 } } }}
                                        label="Members"
                                        labels="months"
                                        backgroundColor="rgba(17, 161, 253, 0.1)"
                                    /> */}
                                </div>
                            </Col>


                            {/* charging session column */}
                            <Col lg="4" md="4" sm="12" xs="12" className="pl-0 mmb-24 mpl-0">
                                <div className="statementBox bg-white  brdrRadius8 cs height268">
                                    <div class="d-flex align-items-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                            <circle opacity="0.1" cx="22" cy="22" r="22" fill="#FF9A32" />
                                            <path d="M30.9996 19C30.7344 19 30.48 19.1054 30.2925 19.2929C30.1049 19.4804 29.9996 19.7348 29.9996 20V24C29.9996 24.2652 30.1049 24.5196 30.2925 24.7071C30.48 24.8946 30.7344 25 30.9996 25C31.2648 25 31.5191 24.8946 31.7067 24.7071C31.8942 24.5196 31.9996 24.2652 31.9996 24V20C31.9996 19.7348 31.8942 19.4804 31.7067 19.2929C31.5191 19.1054 31.2648 19 30.9996 19ZM25.8296 16H22.7296L21.5896 18H25.8196C25.8822 18.0517 25.9314 18.1178 25.9628 18.1927C25.9941 18.2677 26.0068 18.3491 25.9996 18.43V25.57C26.0063 25.6499 25.9945 25.7303 25.965 25.8049C25.9355 25.8795 25.8892 25.9463 25.8296 26H22.9996L21.8496 28H25.8496C26.4554 27.9588 27.0207 27.6808 27.423 27.226C27.8254 26.7712 28.0325 26.1763 27.9996 25.57V18.43C28.0324 17.8204 27.8225 17.2226 27.4159 16.7673C27.0093 16.312 26.439 16.0361 25.8296 16ZM13.9996 25.57V18.43C13.9936 18.3501 14.0058 18.27 14.0352 18.1955C14.0647 18.121 14.1106 18.0542 14.1696 18H16.9996L18.1296 16H14.1296C13.5273 16.0462 12.9671 16.3264 12.569 16.7806C12.1708 17.2348 11.9664 17.8269 11.9996 18.43V25.57C11.9668 26.1796 12.1766 26.7774 12.5833 27.2327C12.9899 27.688 13.5602 27.9639 14.1696 28H17.2696L18.4096 26H14.1796C14.1169 25.9483 14.0678 25.8822 14.0364 25.8073C14.005 25.7323 13.9924 25.6509 13.9996 25.57Z" fill="#FF9A32" />
                                            <path d="M18.9979 29.9995C18.822 30.0002 18.6491 29.9545 18.4965 29.8671C18.3439 29.7796 18.2171 29.6534 18.1289 29.5013C18.0406 29.3491 17.9941 29.1764 17.9939 29.0005C17.9937 28.8247 18.0399 28.6519 18.1279 28.4995L21.2779 22.9995H16.9979C16.8234 22.9985 16.6522 22.9518 16.5013 22.8641C16.3504 22.7764 16.2251 22.6507 16.1379 22.4995C16.0501 22.3475 16.0039 22.1751 16.0039 21.9995C16.0039 21.824 16.0501 21.6516 16.1379 21.4995L20.1379 14.4995C20.2705 14.2688 20.4893 14.1002 20.7463 14.0308C21.0032 13.9614 21.2771 13.9969 21.5079 14.1295C21.7386 14.2621 21.9072 14.481 21.9766 14.7379C22.046 14.9948 22.0105 15.2688 21.8779 15.4995L18.7179 20.9995H22.9979C23.1724 21.0006 23.3436 21.0473 23.4945 21.135C23.6453 21.2227 23.7706 21.3484 23.8579 21.4995C23.9456 21.6516 23.9919 21.824 23.9919 21.9995C23.9919 22.1751 23.9456 22.3475 23.8579 22.4995L19.8579 29.4995C19.7706 29.6507 19.6453 29.7763 19.4945 29.8641C19.3436 29.9518 19.1724 29.9985 18.9979 29.9995Z" fill="#FF9A32" />
                                        </svg>
                                        <strong className="font-size16 font-weight600 ml-3 primaryBlueColor">Charging Session</strong>
                                        <svg className="ml-auto" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                            <path d="M9.375 18.75L15.625 12.5L9.375 6.25" stroke="#3F5EF0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <Row>
                                        <Col >
                                            <strong className="h4 font-size24 font-weight700 primaryBlueColor">16,221 Sessions <br />
                                                <span class="font-size12 font-weight400 mb-24  d-block mt-6 secondaryGreyColor">Last 6 months</span></strong>
                                        </Col>
                                    </Row>
                                    {/* <Bar data={databarchart} options={optionbarchart} /> */}

                                </div>
                            </Col>

                            {/* USERS column */}
                            <Col lg="4" md="4" sm="12" xs="12" className="pr-0 mpl-0 mmb-24 px-2">
                                <div className="revenueBox bg-white  brdrRadius8 height268">
                                    <div className="d-flex align-items-center mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                            <circle opacity="0.1" cx="22" cy="22" r="22" fill="#11A1FD" />
                                            <path d="M27 31V29C27 27.9391 26.5786 26.9217 25.8284 26.1716C25.0783 25.4214 24.0609 25 23 25H15C13.9391 25 12.9217 25.4214 12.1716 26.1716C11.4214 26.9217 11 27.9391 11 29V31" stroke="#11A1FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M19 21C21.2091 21 23 19.2091 23 17C23 14.7909 21.2091 13 19 13C16.7909 13 15 14.7909 15 17C15 19.2091 16.7909 21 19 21Z" stroke="#11A1FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M33 31V29C32.9993 28.1137 32.7044 27.2528 32.1614 26.5523C31.6184 25.8519 30.8581 25.3516 30 25.13" stroke="#11A1FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M26 13.13C26.8604 13.3503 27.623 13.8507 28.1676 14.5523C28.7122 15.2539 29.0078 16.1168 29.0078 17.005C29.0078 17.8932 28.7122 18.7561 28.1676 19.4577C27.623 20.1593 26.8604 20.6597 26 20.88" stroke="#11A1FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <strong className="font-size16 font-weight600 ml-3 primaryBlueColor">Users</strong>
                                        <svg className="ml-auto" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                            <path d="M9.375 18.75L15.625 12.5L9.375 6.25" stroke="#3F5EF0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <Row>
                                        <Col md="5">
                                            <strong className="h4 font-size24 font-weight700 px-1 primaryBlueColor">14  <br />
                                                <span class="font-size12 font-weight400 px-1 mb-20 d-block mt-6 secondaryGreyColor" >Today</span></strong>
                                        </Col>
                                        <Col md="7">
                                            <strong className="h4 font-size24 font-weight700 primaryBlueColor">1,100<br />
                                                <span class="font-size12 font-weight400 mb-20 d-block mt-6 secondaryGreyColor">This Month</span></strong>
                                        </Col>
                                    </Row>
                                    {/* <ChartLineSimple

                                        className="mt-0"
                                        style={{ height: '91px', color: 'red' }}
                                        dataPoints={[1, 10, 9, 17, 15, 22, 11]}
                                        pointHoverBackgroundColor="info"
                                        borderColor='rgb(17, 161, 253)'
                                        options={{ elements: { line: { tension: 0.4 } } }}
                                        label="Members"
                                        labels="months"
                                        backgroundColor="rgba(17, 161, 253, 0.1)"
                                    /> */}
                                </div>
                            </Col>









                        </Row>
                    </Col>
                    <Col lg="3" md="3" sm="12" xs="12" className="pr-0">
                        <div className="apartmentBox  mmb-24">
                            <a href className="editBtn font-size16 font-weight700">Edit</a>
                            <div className="imageBox text-center">
                                <img className="w-100" src={require('./../../../assets/img/apartment.png').default} alt="" />
                            </div>
                            <h2 className="mb-0 font-size16 font-weight700 primaryBlueColor text-center mt-2">Blessed Rock Apt</h2>
                            <div className="d-flex align-items-center propertyCode">
                                <p className="mb-0 font-size12">Property Code</p>
                                <p className="mb-0 ml-auto primaryBlueColor font-weight700 font-size12">3014ABC31</p>
                            </div>
                            <div class="brdrLine2"></div>
                            <div className="detailSection">
                                <div class="d-flex align-items-top detailList">
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.4 6.66699C13.4 8.75916 12.0406 10.7795 10.5644 12.3377C9.83863 13.1038 9.1108 13.7308 8.56374 14.1664C8.34079 14.3439 8.14867 14.489 8 14.5982C7.85134 14.489 7.65921 14.3439 7.43626 14.1664C6.8892 13.7308 6.16137 13.1038 5.43557 12.3377C3.95944 10.7795 2.6 8.75916 2.6 6.66699C2.6 5.23482 3.16893 3.86131 4.18162 2.84862C5.19432 1.83592 6.56783 1.26699 8 1.26699C9.43217 1.26699 10.8057 1.83592 11.8184 2.84862C12.8311 3.86131 13.4 5.23482 13.4 6.66699Z" stroke="#86A4BA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9.4 6.66699C9.4 7.44019 8.7732 8.06699 8 8.06699C7.2268 8.06699 6.6 7.44019 6.6 6.66699C6.6 5.89379 7.2268 5.26699 8 5.26699C8.7732 5.26699 9.4 5.89379 9.4 6.66699Z" stroke="#86A4BA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <div>
                                        <p class="secondaryGreyColor font-size12 font-weight700 mb-0">Property Address</p>
                                        <p className="font-size12 font-weight400 mb-0">3014 Brockport Spencerport Rd Spencerport, New York(NY), 14559</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-top detailList">
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.6669 11.2797V13.2797C14.6677 13.4654 14.6297 13.6492 14.5553 13.8193C14.4809 13.9894 14.3718 14.1421 14.235 14.2676C14.0982 14.3932 13.9367 14.4887 13.7608 14.5482C13.5849 14.6077 13.3985 14.6298 13.2136 14.6131C11.1622 14.3902 9.19161 13.6892 7.46028 12.5664C5.8495 11.5428 4.48384 10.1772 3.46028 8.56641C2.3336 6.82721 1.63244 4.84707 1.41361 2.78641C1.39695 2.60205 1.41886 2.41625 1.47795 2.24082C1.53703 2.0654 1.63199 1.9042 1.75679 1.76749C1.88159 1.63077 2.03348 1.52155 2.20281 1.44675C2.37213 1.37196 2.55517 1.33325 2.74028 1.33307H4.74028C5.06382 1.32989 5.37748 1.44446 5.62279 1.65543C5.8681 1.8664 6.02833 2.15937 6.07361 2.47974C6.15803 3.11978 6.31458 3.74822 6.54028 4.35307C6.62998 4.59169 6.64939 4.85102 6.59622 5.10033C6.54305 5.34964 6.41952 5.57848 6.24028 5.75974L5.39361 6.60641C6.34265 8.27544 7.72458 9.65737 9.39361 10.6064L10.2403 9.75974C10.4215 9.5805 10.6504 9.45697 10.8997 9.4038C11.149 9.35063 11.4083 9.37004 11.6469 9.45974C12.2518 9.68544 12.8802 9.84199 13.5203 9.92641C13.8441 9.97209 14.1399 10.1352 14.3513 10.3847C14.5627 10.6343 14.6751 10.9528 14.6669 11.2797Z" stroke="#86A4BA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <div>
                                        <p class="secondaryGreyColor font-size12 font-weight700 mb-0">Property Phone Number</p>
                                        <p className="font-size12 font-weight400 mb-0">(585) 392-1684</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-top detailList">
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.66634 2.66699H13.333C14.0663 2.66699 14.6663 3.26699 14.6663 4.00033V12.0003C14.6663 12.7337 14.0663 13.3337 13.333 13.3337H2.66634C1.93301 13.3337 1.33301 12.7337 1.33301 12.0003V4.00033C1.33301 3.26699 1.93301 2.66699 2.66634 2.66699Z" stroke="#86A4BA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M14.6663 4L7.99967 8.66667L1.33301 4" stroke="#86A4BA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <div>
                                        <p class="secondaryGreyColor font-size12 font-weight700 mb-0">Property Email</p>
                                        <p className="font-size12 font-weight400 mb-0">abcproperty@gmail.com</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-top detailList">
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.3337 14V12.6667C13.3337 11.9594 13.0527 11.2811 12.5526 10.781C12.0525 10.281 11.3742 10 10.667 10H5.33366C4.62641 10 3.94814 10.281 3.44804 10.781C2.94794 11.2811 2.66699 11.9594 2.66699 12.6667V14" stroke="#86A4BA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M7.99967 7.33333C9.47243 7.33333 10.6663 6.13943 10.6663 4.66667C10.6663 3.19391 9.47243 2 7.99967 2C6.52692 2 5.33301 3.19391 5.33301 4.66667C5.33301 6.13943 6.52692 7.33333 7.99967 7.33333Z" stroke="#86A4BA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <div>
                                        <p class="secondaryGreyColor font-size12 font-weight700 mb-0">Property Manager</p>
                                        <p className="font-size12 font-weight400 mb-0">Zohn Yang</p>
                                        <p className="font-size12 font-weight400 mb-0">hello@gmail.com</p>
                                        <p className="font-size12 font-weight400 mb-0">(585) 392-1684</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
                <Row className="mt-24 bgwhite">
                    <Col md="6">
                        <p className="font-size16 font-weight600">Charging Trends</p>
                    </Col>
                    <Col md="6">

                    </Col>
                    <Col md="6">

                    </Col>

                    <Col md="6">
                        <div className="d-flex align-items-center calender">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#86A4BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16 2V6" stroke="#86A4BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8 2V6" stroke="#86A4BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3 10H21" stroke="#86A4BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span className="font-weight700  primaryBlueColor ml-15 font-size16">11/16/2020 - 11/21/2020

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
                    <Col lg="12" md="12" sm="12" xs="12" className="mt-24 pl-0 pr-0 ">
                        {/* <Bar id='barchartid' data={workdata} options={workoptions} plugins={[ChartDataLabels]} /> */}
                    </Col>

                </Row>
            </main>
        </>
    )
}

export default AbcApartments
