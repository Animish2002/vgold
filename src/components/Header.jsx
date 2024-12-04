import { Button, Navbar } from "flowbite-react";
import logo from "../assets/V-Gold.png";

export default function Header() {
  return (
    <Navbar className="bg-[#29277a]">
      <Navbar.Brand >
        <img
          src={logo}
          className="mr-3 h-10 sm:h-14"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold md:text-white"></span>
      </Navbar.Brand>
      <div className="flex md:order-2 ">
        <Button className="text-lg bg-[#FF6B00] text-black ">
          Get started
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          className="text-lg md:text-white hover:text-yellow-300 "
          href="#"
          active
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="text-lg md:text-white hover:text-yellow-300"
          active
        >
          About
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="text-lg md:text-white hover:text-yellow-300"
          active
        >
          Services
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="text-lg md:text-white hover:text-yellow-300"
          active
        >
          Pricing
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="text-lg md:text-white hover:text-yellow-300"
          active
        >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
