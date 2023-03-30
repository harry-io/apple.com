import { Box, chakra, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react'
import AreaChart from './AreaChart';
import DoughnutChart from './DoughnutChart';

export const Analytics = () => {
    return (
        <Box>
            <chakra.h1
                textAlign={'left'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}>
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
    )
}