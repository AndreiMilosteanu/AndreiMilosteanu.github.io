import {
  Box,
  Button,
  Drawer,
  DrawerContent,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  Progress,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaChalkboardTeacher, FaHome } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdPermContactCalendar } from "react-icons/md";
import { NavLink as ReactRouterLink } from "react-router-dom";
import UBBLogo from "../assets/UBB_logo_small.png";

const AdminLinkItems = [
  { name: "Home", icon: FaHome, path: "/" },
  { name: "Personal Info", icon: CgProfile, path: "/personalInfo" },
  { name: "Teaching", icon: FaChalkboardTeacher, path: "/teaching" },
  { name: "Contact", icon: MdPermContactCalendar, path: "/contact" },
];

export default function Navbar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      {/* <Flex h="40" alignItems="center" mx="10" justifyContent="space-between">
        <WrapItem>
          <Avatar
            size="2xl"
            name="Milosteanu Andrei"
            src="https://media.licdn.com/dms/image/C4E03AQGs0LKwHzQuYA/profile-displayphoto-shrink_800_800/0/1616943012892?e=1710979200&v=beta&t=ScEt5HEVHrSRIBMNJyaZlvFe8R60pZXDmywPIjqmeos"
          />{" "}
        </WrapItem>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex> */}
      {AdminLinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          path={link.path}
          onClick={onClose}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, path, children, ...rest }) => {
  return (
    <Link
      as={ReactRouterLink}
      to={path}
      style={({ isActive }) => {
        return {
          display: "block",
          margin: "1rem 0",
          textDecoration: "none",
        };
      }}
      _focus={{ boxShadow: "none" }}
    >
      {({ isActive }) => {
        return (
          <Flex
            align="center"
            p="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            bg={isActive ? "teal.400" : ""}
            color={isActive ? "white" : ""}
            {...rest}
          >
            {icon && <Icon mr="4" fontSize="16" as={icon} />}
            {children}
          </Flex>
        );
      }}
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue("white", "gray.900")}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        justifyContent={{ base: "space-between" }}
        //justifyContent={{ base: "space-between", md: "flex-end" }}
        {...rest}
      >
        <Image
          borderRadius="full"
          boxSize="60px"
          src={UBBLogo}
          alt="UBB Logo"
        />
        <Text
          as={"i"}
          fontSize={{ base: "s", md: "xl", lg: "2xl" }}
          noOfLines={[1, 2]}
        >
          dr. Milosteanu Andrei-Constantin
        </Text>
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
        <Button
          aria-label="Toggle Color Mode"
          onClick={toggleColorMode}
          _focus={{ boxShadow: "none" }}
          w="fit-content"
          ml={5}
        >
          {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
        </Button>
      </Flex>
      <Progress
        size="xs"
        isIndeterminate
        hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        }}
      />
    </>
  );
};
