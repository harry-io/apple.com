import {
    FiHome,
    FiSettings,
    FiActivity,
} from 'react-icons/fi';
import { IoAnalyticsSharp } from 'react-icons/io5'
import { FiShoppingBag } from 'react-icons/fi';
import logo from '../../Images/boltLogo.png'
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
    Button,
    Flex,
    Grid,
    Heading,
    Hide,
    Image,
    Menu,
    Show,
    Stack,
    Text,
    Tooltip,
} from "@chakra-ui/react";
// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
import { Navigate } from "react-router-dom";

const Sidebar = () => {
    const [domLoaded, setDomLoaded] = useState(false);
    const [show, setshow] = useState(true);
    //   const router = useRouter();

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <>
            {domLoaded && (
                <>
                    <Hide below="md">
                        <Flex bgcolor={"white"} w={show ? "220px" : "80px"}>
                            {show ? (
                                <Stack w={"150px"} m={"auto"} h={"80vh"} textAlign={"center"}>
                                    <Flex h="20" alignItems="center" mx="8" gap='20px'>
                                        <Image w='40px' src={logo} />
                                        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                                            BOLT
                                        </Text>
                                    </Flex>
                                    <Grid
                                        w={"70%"}
                                        templateColumns={"50px auto"}
                                        alignItems={"center"}
                                        cursor={"pointer"}
                                        onClick={() => {
                                            //   router.push("/admin");
                                            // console.log('check');
                                            // <Navigate to='/' />;
                                        }}
                                    >
                                        <FiHome /> <Text>Dashboard</Text>
                                    </Grid>
                                    <br />
                                    <Grid
                                        cursor={"pointer"}
                                        w={"70%"}
                                        templateColumns={"50px auto"}
                                        alignItems={"center"}
                                        onClick={() => {
                                            //   router.push("/admin/productdetails");
                                            <Navigate to='/' />
                                        }}
                                    >
                                        <FiShoppingBag /> Products
                                    </Grid>
                                    <br />
                                    <Grid
                                        w={"70%"}
                                        templateColumns={"50px auto"}
                                        alignItems={"center"}
                                        cursor={"pointer"}
                                        onClick={() => {
                                            //   router.push("/admin/activity");
                                            <Navigate to='/admin/dashboard' />

                                        }}
                                    >
                                        <IoAnalyticsSharp /> Analytics
                                    </Grid>
                                    <br />
                                    <Grid
                                        w={"70%"}
                                        templateColumns={"50px auto"}
                                        alignItems={"center"}
                                        cursor={"pointer"}
                                        onClick={() => {
                                            //   router.push("/admin/settings");
                                            // <Navigate to='/admin/dashboard' />
                                            console.log('working')
                                        }}
                                    >
                                        <FiSettings /> Settings
                                    </Grid>
                                </Stack>
                            ) : (
                                <Stack w={"70px"} m={"auto"} h={"80vh"}>
                                    <Heading
                                        fontSize={"18px"}
                                        ml={"15px"}
                                        mb={"20px"}
                                        pt={"5"}
                                        w={"fit-content"}
                                        borderBottomWidth={3}
                                        textAlign={"center"}
                                    >
                                        BOLT
                                    </Heading>
                                    <Tooltip
                                        cursor={"pointer"}
                                        label="Dashboard"
                                        placement="right"
                                    >
                                        <Grid
                                            cursor={"pointer"}
                                            w={"100%"}
                                            templateColumns={"50px"}
                                            alignItems={"center"}
                                        >
                                            <AiFillHome style={{ margin: "auto" }} size={"20"} />
                                        </Grid>
                                    </Tooltip>
                                    <br />
                                    <Tooltip label="Product Details" placement="right">
                                        <Grid
                                            cursor={"pointer"}
                                            w={"100%"}
                                            templateColumns={"50px"}
                                            alignItems={"center"}
                                        >
                                            <BsClipboardData style={{ margin: "auto" }} size={"20"} />
                                        </Grid>
                                    </Tooltip>
                                    <br />
                                    <Tooltip label="Activity" placement="right">
                                        <Grid
                                            w={"100%"}
                                            templateColumns={"50px"}
                                            alignItems={"center"}
                                            cursor={"pointer"}
                                        >
                                            <FiActivity style={{ margin: "auto" }} size={"20"} />
                                        </Grid>
                                    </Tooltip>
                                    <br />
                                    <Tooltip label="settings" placement="right">
                                        <Grid
                                            cursor={"pointer"}
                                            w={"100%"}
                                            templateColumns={"50px"}
                                            alignItems={"center"}
                                        >
                                            <FiSettings style={{ margin: "auto" }} size={"20"} />
                                        </Grid>
                                    </Tooltip>
                                </Stack>
                            )}
                            <Button
                                h={"80vh"}
                                bgColor={"white"}
                                w={"30px"}
                                alignSelf={"flex-end"}
                                onClick={() => {
                                    setshow(!show);
                                }}
                                _hover={{ bgcolor: "white" }}
                            >
                                {show ? <ArrowLeftIcon /> : <ArrowRightIcon />}
                            </Button>
                        </Flex>
                    </Hide>
                    <Show below="md">
                        <Menu></Menu>
                    </Show>
                </>
            )}
        </>
    );
};

export default Sidebar;
