import React from 'react'
import {
    Badge,
    Dropdown,
} from 'react-bootstrap'
// import CIcon from '@coreui/icons-react'
const TheHeaderDropdown = () => {
    return (
        <Dropdown
            inNav
            className="c-header-nav-items mx-2"
            direction="down"
        >
            <Dropdown.Toggle className="c-header-nav-link" caret={false}>
                <div className="c-avatar">
                    <img className="w-100" src={require('../../assets/img/profile.png').default} alt="" />
                </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="pt-0" placement="bottom-end">
                <Dropdown.Item
                    header
                    tag="div"
                    color="light"
                    className="text-center"
                >
                    <strong>Account</strong>
                </Dropdown.Item>
                <Dropdown.Item>
                    {/* <CIcon name="cil-bell" className="mfe-2" /> */}
                    Updates
                    <Badge color="info" className="mfs-auto">42</Badge>
                </Dropdown.Item>
                <Dropdown.Item>
                    {/* <CIcon name="cil-envelope-open" className="mfe-2" /> */}
                    Messages
                    <Badge color="success" className="mfs-auto">42</Badge>
                </Dropdown.Item>
                <Dropdown.Item>
                    {/* <CIcon name="cil-task" className="mfe-2" /> */}
                    Tasks
                    <Badge color="danger" className="mfs-auto">42</Badge>
                </Dropdown.Item>
                <Dropdown.Item>
                    {/* <CIcon name="cil-comment-square" className="mfe-2" /> */}
                    Comments
                    <Badge color="warning" className="mfs-auto">42</Badge>
                </Dropdown.Item>
                <Dropdown.Item
                    header
                    tag="div"
                    color="light"
                    className="text-center"
                >
                    <strong>Settings</strong>
                </Dropdown.Item>
                <Dropdown.Item>
                    {/* <CIcon name="cil-user" className="mfe-2" /> */}
                    Profile
                </Dropdown.Item>
                <Dropdown.Item>
                    {/* <CIcon name="cil-settings" className="mfe-2" /> */}
                    Settings
                </Dropdown.Item>
                <Dropdown.Item>
                    {/* <CIcon name="cil-credit-card" className="mfe-2" /> */}
                    Payments
                    <Badge color="secondary" className="mfs-auto">42</Badge>
                </Dropdown.Item>
                <Dropdown.Item>
                    {/* <CIcon name="cil-file" className="mfe-2" /> */}
                    Projects
                    <Badge color="primary" className="mfs-auto">42</Badge>
                </Dropdown.Item>
                <Dropdown.Item divider />
                <Dropdown.Item>
                    {/* <CIcon name="cil-lock-locked" className="mfe-2" /> */}
                    Lock Account
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default TheHeaderDropdown
