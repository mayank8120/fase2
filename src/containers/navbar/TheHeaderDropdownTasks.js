import React from 'react'
import {
    Badge,
    Dropdown,
    
    ProgressBar
} from 'react-bootstrap'
// import CIcon from '@coreui/icons-react'

const TheHeaderDropdownTasks = () => {
    const itemsCount = 5
    return (
        <Dropdown
            inNav
            className="c-header-nav-item mx-2"
        >
            <Dropdown.Toggle className="c-header-nav-link" caret={false}>
                {/* <CIcon name="cil-list" /> */}
                <Badge shape="pill" color="warning">{itemsCount}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu placement="bottom-end" className="pt-0">
                <Dropdown.Item
                    header
                    tag="div"
                    className="text-center"
                    color="light"
                >
                    <strong>You have {itemsCount} pending tasks</strong>
                </Dropdown.Item>
                <Dropdown.Item className="d-block">
                    <div className="small mb-1">Upgrade NPM &amp; Bower <span
                        className="float-right"><strong>0%</strong></span></div>
                    <ProgressBar size="xs" color="info" value={0} />
                </Dropdown.Item>
                <Dropdown.Item className="d-block">
                    <div className="small mb-1">ReactJS Version <span className="float-right"><strong>25%</strong></span></div>
                    <ProgressBar size="xs" color="danger" value={25} />
                </Dropdown.Item>
                <Dropdown.Item className="d-block">
                    <div className="small mb-1">VueJS Version <span className="float-right"><strong>50%</strong></span></div>
                    <ProgressBar size="xs" color="warning" value={50} />
                </Dropdown.Item>
                <Dropdown.Item className="d-block">
                    <div className="small mb-1">Add new layouts <span className="float-right"><strong>75%</strong></span></div>
                    <ProgressBar size="xs" color="info" value={75} />
                </Dropdown.Item>
                <Dropdown.Item className="d-block">
                    <div className="small mb-1">Angular 2 Cli Version <span className="float-right"><strong>100%</strong></span></div>
                    <ProgressBar size="xs" color="success" value={100} />
                </Dropdown.Item>
                <Dropdown.Item className="text-center border-top"><strong>View all tasks</strong></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default TheHeaderDropdownTasks