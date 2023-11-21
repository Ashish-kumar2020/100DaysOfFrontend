import { Navbar, Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Input, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { AvatarGroup, Avatar } from "rsuite";
import { useNavigate } from "react-router-dom";
const CustomNavbar = ({ onSelect, activeKey, ...props }) => {
  const styles = {
    width: 300,
    marginTop: 10,
    marginLeft: 500,
  };
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };
  return (
    <Navbar {...props}>
      <Navbar.Brand href="#">
        <img className="logo" src={logo} alt="" />
      </Navbar.Brand>
      <Nav onSelect={backToHome} activeKey={activeKey}>
        <Nav.Item eventKey="1" icon={<HomeIcon />}>
          Home
        </Nav.Item>
        <InputGroup style={styles}>
          <Input />
          <InputGroup.Button>
            <SearchIcon />
          </InputGroup.Button>
        </InputGroup>
      </Nav>
      <Nav pullRight>
        <AvatarGroup spacing={30} style={{ marginTop: 5 }}>
          <Avatar
            src="https://avatars.githubusercontent.com/u/8225666"
            alt="@SevenOutman"
          />
        </AvatarGroup>
      </Nav>
    </Navbar>
  );
};

const Header = () => {
  const [activeKey, setActiveKey] = useState(null);

  return (
    <>
      <CustomNavbar
        appearance="inverse"
        activeKey={activeKey}
        onSelect={setActiveKey}
      />
    </>
  );
};

export default Header;
