import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './newinstallation.scss';
import {
    Button,
    Card,
    Col,
    FormGroup,
    InputGroup,
    Label,
    FormSelect,
    Row,

} from 'react-bootstrap'
const BasicForms = () => {
    return (
        <>
            <Row>
                <Col md="12" className="font-weight700 font-size24 mb-4 colorBlack">
                    Add New Installation Project

                    <Breadcrumb>
                        <Breadcrumb.Item href="#" className="font-size16 font-weight600">Manage Installation Project</Breadcrumb.Item>
                        <Breadcrumb.Item active className="font-size16 font-weight600">Add New Project</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>


            <div className="bginstall">
                <Row className="new-installation">

                    <Col xs="12">
                        <Card>
                            <Card.Body className="row">
                                <FormGroup className="col-sm-12">
                                    <FormLabel htmlFor="" className="d-flex">Installation Code
                                    </FormLabel>
                                    <InputGroup id="" placeholder="AR1238ASD" />
                                </FormGroup>
                                <FormGroup className="col-sm-12">
                                    <FormLabel htmlFor="select">Choose Management Company</FormLabel>
                                    <FormSelect className="priceSelect" name="select" id="select">
                                        <option value="0" hidden>Choose Management Company</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                    </FormSelect>
                                </FormGroup>
                                <FormGroup className="col-sm-12">
                                    <FormLabel htmlFor="select">Choose Property</FormLabel>
                                    <FormSelect className="priceSelect" name="select" id="select">
                                        <option value="0" hidden>Choose Property</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                    </FormSelect>
                                </FormGroup>

                                <FormGroup className="col-sm-6">
                                    <FormLabel htmlFor="">Number of DC Chargers</FormLabel>
                                    <InputGroup id="" placeholder="Number of DC Chargers" />
                                </FormGroup>

                                <FormGroup className="col-sm-6">
                                    <FormLabel htmlFor="">Number of AC Chargers</FormLabel>
                                    <InputGroup id="" placeholder="Number of AC Chargers" />
                                </FormGroup>

                                <FormGroup className="col-sm-12">
                                    <FormLabel htmlFor="street">Choose Installer</FormLabel>
                                    <InputGroup id="street" placeholder="Choose Installer" />
                                </FormGroup>








                                <FormGroup className="col-sm-3">  <Button className="text-uppercase gradientBtn white font-size16 font-weight700 d-flex align-items-center btn btn-primary bt">SUBMIT</Button></FormGroup>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </div>
        </>
    )
}

export default BasicForms
