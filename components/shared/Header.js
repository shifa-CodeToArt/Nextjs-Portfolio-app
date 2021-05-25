import React, { useState } from "react";
import Link from "next/link";
import { isAuthorized } from "@/utils/auth0";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const LoginLink = () => {
  return (
    <a href="/api/v1/login" className="nav-link port-navbar-link">
      Login
    </a>
  );
};

const LogoutLink = () => {
  return (
    <a href="/api/v1/logout" className="nav-link port-navbar-link">
      Logout
    </a>
  );
};
const BsNavLink = (props) => {
  const { href, title,className="" } = props;
  return (
    <Link href={href}>
      <a className={`nav-link port-navbar-link ${className}`}>{title}</a>
    </Link>
  );
};

const Header = ({ user, loading,className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);



  const AdminMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Dropdown
        className="port-navbar-link port-dropdown-menu"
        nav
        isOpen={isOpen}
        toggle={() => setIsOpen(!isOpen)}>
          <DropdownToggle className="port-dropdown-toggle" nav caret>
            Admin
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <BsNavLink
                className="port-dropdown-item"
                href="/portfolios/new"
                title="Create Portfolio"
              />
            </DropdownItem>
            <DropdownItem>
            <BsNavLink
              className="port-dropdown-item"
              href="/blogs/editor"
              title="Blog Editor"
            />
          </DropdownItem>
          <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            href="/dashboard"
            title="Dashboard"
          />
        </DropdownItem>
          </DropdownMenu>
      </Dropdown>
    )
  }


  return (
    <div>
    <Navbar
    className={`port-navbar port-default absolute ${className}`}
    dark
    expand="md">
        <div className="navbar-brand">
          <Link href="/">
            <a className="port-navbar-brand">Filip Jerga</a>
          </Link>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/portfolios" title="Portfolios" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/blogs" title="Blogs" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/cv" title="Cv" />
            </NavItem>
            {/*<NavItem className="port-navbar-item">
              <BsNavLink href="/secret" title="Secret" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyadmin" title="Admin" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyadminssr" title="AdminSSR" />
  </NavItem>*/}
          </Nav>
          <Nav navbar>
            {!loading && (
              <>
                {!user && (
                  <NavItem className="port-navbar-item clickable">
                    <LoginLink />
                  </NavItem>
                )}
                {user && (
            <>
            {isAuthorized(user,'admin') &&<AdminMenu/>}
            <NavItem className="port-navbar-item clickable">
                    <LogoutLink />
                  </NavItem>
            </>
                  
                )}
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
