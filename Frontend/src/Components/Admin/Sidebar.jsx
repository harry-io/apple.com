import logo from '../../Images/boltLogo.png'
import {
    Box,
    Button,
    Flex,
    Grid,
    Heading,
    Hide,
    Image,
    Show,
    Stack,
    Text,
    Tooltip,
} from "@chakra-ui/react";
import {
    FiHome,
    FiSettings,
    FiActivity,
    FiShoppingBag
} from 'react-icons/fi';
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
import { IoAnalyticsSharp } from 'react-icons/io5'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../Redux/Auth/auth.action';

const Sidebar = () => {
    const isAuth = useSelector((store) => store.authReducer.isAuth);
    const dispatch = useDispatch();
    const [domLoaded, setDomLoaded] = useState(false);
    const [show, setshow] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <>
            {domLoaded && (
                <>
                    <Hide below="md">
                        <Flex bgcolor={"white"} w={show ? "220px" : "80px"} direction={{ sm: "column" }}>
                            {show ? (
                                <Stack w={"150px"} m={"auto"} ml='5%' h={"80vh"} textAlign={"center"}>
                                    <Flex h="20" alignItems="center" gap='20px' cursor={'pointer'}
                                        onClick={() => navigate('/')}
                                    >
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
                                        fontSize={'20px'}
                                        onClick={() => {
                                            navigate("/admin/dashboard")
                                        }}
                                    >
                                        <FiHome /> <Text fontSize={'20px'}>Dashboard</Text>
                                    </Grid>
                                    <br />
                                    <Grid
                                        cursor={"pointer"}
                                        w={"70%"}
                                        templateColumns={"50px auto"}
                                        alignItems={"center"}
                                        fontSize={'20px'}
                                        onClick={() => {
                                            navigate('/admin/products')
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
                                        fontSize={'20px'}
                                        onClick={() => {
                                            navigate('/admin/analytics')
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
                                        fontSize={'20px'}
                                        onClick={() => {
                                            navigate('/admin/settings')
                                        }}
                                    >
                                        <FiSettings /> Settings
                                    </Grid>
                                    <br />
                                    <Box
                                        w={"70%"}
                                        templateColumns={"100px"}
                                        cursor={"pointer"}
                                        fontSize={'20px'}

                                    >
                                        {isAuth ? (
                                            <Link color='black' to="" mt='400px' onClick={() => dispatch(logoutAction)}>
                                                <Button
                                                    _hover={{
                                                        background: 'linear-gradient(to right, #90aefe, #0e61f9)',
                                                        color: 'white',
                                                    }}
                                                    background='linear-gradient(to right, #50aefe, #0c61f4)'
                                                    color='white'
                                                >
                                                    Logout
                                                </Button>
                                            </Link>
                                        ) : (
                                            "" )}
                                    </Box>
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
                                        cursor={'pointer'}
                                        onClick={() => navigate('/')}
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
                                            onClick={() => {
                                                navigate("/admin/dashboard")
                                            }}
                                        >
                                            <FiHome style={{ margin: "auto" }} size={"20"} />
                                        </Grid>
                                    </Tooltip>
                                    <br />
                                    <Tooltip label="Products" placement="right">
                                        <Grid
                                            cursor={"pointer"}
                                            w={"100%"}
                                            templateColumns={"50px"}
                                            alignItems={"center"}
                                            onClick={() => {
                                                navigate("/admin/products")
                                            }}
                                        >
                                            <FiShoppingBag style={{ margin: "auto" }} size={"20"} />
                                        </Grid>
                                    </Tooltip>
                                    <br />
                                    <Tooltip label="Analytics" placement="right">
                                        <Grid
                                            w={"100%"}
                                            templateColumns={"50px"}
                                            alignItems={"center"}
                                            cursor={"pointer"}
                                            onClick={() => {
                                                navigate("/admin/analytics")
                                            }}
                                        >
                                            <IoAnalyticsSharp style={{ margin: "auto" }} size={"20"} />
                                        </Grid>
                                    </Tooltip>
                                    <br />
                                    <Tooltip label="settings" placement="right">
                                        <Grid
                                            cursor={"pointer"}
                                            w={"100%"}
                                            templateColumns={"50px"}
                                            alignItems={"center"}
                                            onClick={() => {
                                                navigate("/admin/settings")
                                            }}
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
                        <Stack w={"70px"} m={"auto"} h={"80vh"}>
                            <Heading
                                fontSize={"18px"}
                                ml={"15px"}
                                mb={"20px"}
                                pt={"5"}
                                w={"fit-content"}
                                borderBottomWidth={3}
                                textAlign={"center"}
                                cursor={'pointer'}
                                onClick={() => navigate('/')}
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
                    </Show>
                </>
            )
            }
        </>
    );
};

export default Sidebar;
