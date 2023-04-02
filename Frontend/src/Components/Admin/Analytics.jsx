import { Box, chakra, Flex, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react'
import AreaChart from './AreaChart';
import DoughnutChart from './DoughnutChart';
import Sidebar from './Sidebar';

export const Analytics = () => {
    return (
        <Flex w={"100%"}>
            <Sidebar />
            <Box w='100%' mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                <chakra.h1
                    textAlign={'left'}
                    fontSize={'4xl'}
                    py={10}
                    fontWeight={'600'}>
                    Analytics of the year
                </chakra.h1>
                <Wrap spacing={'150px'}>
                    <WrapItem>
                        <Box w={'350px'}>
                            <DoughnutChart />
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box w={'800px'}>
                            <AreaChart />
                        </Box>
                    </WrapItem>
                </Wrap>
            </Box>
        </Flex >
    )
}