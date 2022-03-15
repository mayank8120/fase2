import React from 'react'
import {
  Button,
  CForm,
  Card,
  Card.Body,
  CCardHeader,
  Col,
  Dropdown,
  CDropdownDivider,
  CDropdownHeader,
  Dropdown.Item,
  Dropdown.Menu,
  Dropdown.Toggle,
  Row,
  FormGroup,
  Label,
  InputGroup ,
  FormCheck
} from 'react-bootstrap'
import { DocsLink } from 'src/reusable'

const ButtonDropdowns = () => {
  return (
    <Row>
      <Col xs="12">
        <Card>
          <CCardHeader>
            Dropdowns
            <DocsLink name="Dropdown"/>
          </CCardHeader>
          <Card.Body>

            <Dropdown className="m-1">
              <Dropdown.Toggle>
                Dropdown button
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <CDropdownDivider />
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr/>

            <Dropdown className="m-1 btn-group">
              <Dropdown.Toggle color="primary">
                Primary
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <CDropdownDivider />
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="m-1 btn-group">
              <Dropdown.Toggle color="secondary">
                Secondary
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <CDropdownDivider />
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="m-1 btn-group">
              <Dropdown.Toggle color="success">
                Success
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <CDropdownDivider />
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="m-1 btn-group">
              <Dropdown.Toggle color="info">
                Info
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <CDropdownDivider />
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="m-1 btn-group">
              <Dropdown.Toggle color="warning">
                Warning
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <CDropdownDivider />
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="m-1 btn-group">
              <Dropdown.Toggle color="danger">
                Danger
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <CDropdownDivider />
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr/>
            <Dropdown className="m-1">
              <Dropdown.Toggle split color="primary">
                Primary
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <CDropdownDivider />
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="m-1">
              <Dropdown.Toggle split color="secondary">
                Secondary
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <CDropdownDivider />
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="m-1">
              <Dropdown.Toggle split color="success">
                Success
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <CDropdownDivider />
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="m-1">
              <Dropdown.Toggle split color="info">
                Info
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <CDropdownDivider />
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="m-1">
              <Dropdown.Toggle split color="warning">
                Warning
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <CDropdownDivider />
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="m-1">
              <Dropdown.Toggle split color="danger">
                Danger
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <CDropdownDivider />
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr/>

            <Dropdown className="m-1" size="lg">
              <Dropdown.Toggle color="secondary">
                Large button
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <CDropdownDivider />
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {' '}
            <Dropdown className="m-1">
              <Dropdown.Toggle split color="secondary" size="lg">
                Large split button
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <CDropdownDivider />
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr/>

            <Dropdown className="m-1">
              <Dropdown.Toggle color="secondary" size="sm">
                Small button
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <CDropdownDivider />
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {' '}
            <Dropdown className="m-1">
              <Dropdown.Toggle color="secondary" size="sm" split>
                Small split button
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <CDropdownDivider />
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr/>

            <Dropdown className="m-1">
              <Dropdown.Toggle color="secondary">
                Dropup button
              </Dropdown.Toggle>
              <Dropdown.Menu placement="top">
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="m-1">
              <Dropdown.Toggle split color="secondary">
                Split dropup
              </Dropdown.Toggle>
              <Dropdown.Menu placement="top">
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Card.Body>
        </Card>
        <Card>
          <CCardHeader>
            Menus
          </CCardHeader>
          <Card.Body>

            <Dropdown className="m-1 d-inline-block">
              <Dropdown.Toggle color="secondary">
                Direction Up
              </Dropdown.Toggle>
              <Dropdown.Menu placement="top">
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="m-1 d-inline-block">
              <Dropdown.Toggle color="secondary">
                Direction Left
              </Dropdown.Toggle>
              <Dropdown.Menu placement="left">
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="m-1 d-inline-block">
              <Dropdown.Toggle color="secondary">
                Direction Right
              </Dropdown.Toggle>
              <Dropdown.Menu placement="right">
                <CDropdownHeader>Header</CDropdownHeader>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="m-1 d-inline-block">
              <Dropdown.Toggle color="secondary">
                Default Down
              </Dropdown.Toggle>
              <Dropdown.Menu
                placement="bottom"
                modifiers={[{name: 'flip', enabled: false }]}
              >
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr />

            <Dropdown className="m-1">
              <Dropdown.Toggle color="secondary">
                This dropdown{'\''}s menu is right-aligned
              </Dropdown.Toggle>
              <Dropdown.Menu placement="right">
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item disabled>Action Disabled</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr />

            <Dropdown className="m-1">
              <Dropdown.Toggle color="secondary">
                Dropdown with header
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item header>Header</Dropdown.Item>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr />

            <Dropdown className="m-1">
              <Dropdown.Toggle color="secondary">
                Dropdown with divider
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <CDropdownDivider />
                <Dropdown.Item>Another Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr />

            <Dropdown className="m-1">
              <Dropdown.Toggle color="secondary">
                Dropdown with disabled item
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item disabled>Disabled Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr />

            <Dropdown className="m-1">
              <Dropdown.Toggle color="info">
                Dropdown with form
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <CForm className="px-4 py-3" >
                  <FormGroup>
                    <FormLabel htmlFor="exampleDropdownFormEmail1">Email address</FormLabel>
                    <InputGroup  className="form-control" id="exampleDropdownFormEmail1" type="email" placeholder="email@example.com" autoComplete="email"/>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel htmlFor="exampleDropdownFormPassword1">Password</FormLabel>
                    <InputGroup  className="form-control" id="exampleDropdownFormPassword1" type="password" placeholder="Password" autoComplete="current-password"/>
                  </FormGroup>
                  <FormGroup variant="custom-checkbox" className="form-group">
                    <FormCheck custom id="exampleDropdownFormCheckbox1" />
                    <FormLabel variant="custom-checkbox" htmlFor="exampleDropdownFormCheckbox1">Remember me</FormLabel>
                  </FormGroup>
                  <FormGroup className="mt-2">
                    <Button color="primary" type="submit">Sign in</Button>
                  </FormGroup>
                </CForm>
                <CDropdownDivider/>
                <Dropdown.Item to="/register" >Register</Dropdown.Item>
                <Dropdown.Item>Forgot password?</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default ButtonDropdowns
