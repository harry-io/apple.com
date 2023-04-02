import {
  Box,
  Flex,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Center,
  Avatar,
  Input,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../Images/boltLogo.png";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { editAdminDetails } from "../../Redux/Admin/admin.action";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { BiError } from "react-icons/bi";

const Settings = () => {
  const [details, setDetails] = useState({});
  const id = useSelector((store) => store.authReducer.id);
  const dispatch = useDispatch();

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  console.log(details);
  const handleDetailsClick = () => {
    if (details) {
      dispatch(editAdminDetails(id, details));
      toast.success("Admin profile updated successfully!", {
        style: {
          borderRadius: "50px",
          background: "#989898",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
    } else {
      toast.error("Fields are empty!", {
        icon: (
          <BiError
            style={{ color: "yellow", fontSize: "1.5rem", fontWeight: "800" }}
          />
        ),
        style: {
          borderRadius: "50px",
          background: "#989898",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
    }
  };

  return (
    <Flex w={"100%"}>
      <Sidebar />
      <Box w="100%">
        <Flex align={"center"} justify={"center"}>
          <Stack
            spacing={0}
            w={"full"}
            maxW={"lg"}
            rounded={"xl"}
            boxShadow={"lg"}
            p={6}
            mt={8}
          >
            <FormControl id="userName">
              <Stack direction={["column", "row"]} spacing={6}>
                <Center>
                  <Avatar
                    size={"xl"}
                    src={logo}
                    alt={"Avatar Alt"}
                    mb={4}
                    pos={"relative"}
                    _after={{
                      content: '""',
                      w: 4,
                      h: 4,
                      bg: "green.300",
                      border: "2px solid white",
                      rounded: "full",
                      pos: "absolute",
                      bottom: 0,
                      right: 3,
                    }}
                  />
                </Center>
                <Center w="full">
                  <Button
                    bg={"grey"}
                    w="full"
                    _hover={{
                      background: "linear-gradient(to right, #90aefe, #0e61f9)",
                      color: "white",
                    }}
                    background="linear-gradient(to right, #50aefe, #0c61f4)"
                    color="white"
                  >
                    Change Profile picture
                  </Button>
                </Center>
              </Stack>
            </FormControl>
            <FormControl id="userName">
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="UserName"
                _placeholder={{ color: "gray.500" }}
                type="text"
                name="name"
                onChange={handleDetailsChange}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="your-email@example.com"
                _placeholder={{ color: "gray.500" }}
                type="email"
                name="email"
                onChange={handleDetailsChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="password"
                _placeholder={{ color: "gray.500" }}
                type="email"
                name="password"
                onChange={handleDetailsChange}
              />
            </FormControl>
            <FormControl id="age">
              <FormLabel>Age</FormLabel>
              <Input
                placeholder="age"
                _placeholder={{ color: "gray.500" }}
                type="text"
                name="age"
                onChange={handleDetailsChange}
              />
            </FormControl>
            <FormControl id="location">
              <FormLabel>Location</FormLabel>
              <Input
                placeholder="location"
                _placeholder={{ color: "gray.500" }}
                type="text"
                name="location"
                onChange={handleDetailsChange}
              />
            </FormControl>
            <Stack spacing={6} direction={["column", "row"]} pt="20px">
              <Button
                bg={"grey"}
                w="full"
                _hover={{
                  background: "linear-gradient(to right, #90aefe, #0e61f9)",
                  color: "white",
                }}
                background="linear-gradient(to right, #50aefe, #0c61f4)"
                color="white"
              >
                Cancel
              </Button>
              <Button
                bg={"grey"}
                w="full"
                _hover={{
                  background: "linear-gradient(to right, #90aefe, #0e61f9)",
                  color: "white",
                }}
                background="linear-gradient(to right, #50aefe, #0c61f4)"
                color="white"
                onClick={() => handleDetailsClick()}
              >
                Submit the changes
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Settings;
