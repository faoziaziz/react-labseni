import React from 'react';
import {
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Collapse,
  Jumbotron,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';



export default class KepalaApp extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return ([
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">labSeni</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/news/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/faoziaziz">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>,
      GedeTron
     ]
    );
  }
}
const GedeTron =(
    <div>
      <Jumbotron>
        <h1 className="display-3">Je aime tu!</h1>
        <p className="lead">Ini papan pengumuman "Maneh geulis beud", asseek.</p>
        <hr className="my-2" />
        <p>Tunggu waktu buat ngerjain ta dulu.</p>
        <p className="lead">
          <Button color="primary">Asseek More</Button>
        </p>
      </Jumbotron>
    </div>
);
