import { Link as LinkRouter } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Login from "./Login";
import SignIn from "./SignIn";
function Header() {
  return (
    <Navbar isBordered className="z-10">
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <LinkRouter className="logo-link text-purple-600 text-2xl" to="/">
            Beslenme Dünyası
          </LinkRouter>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarBrand>
          <LinkRouter className="logo-link text-purple-600 text-3xl" to="/">
            Beslenme Dünyası
          </LinkRouter>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <Login />
        <SignIn />
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
