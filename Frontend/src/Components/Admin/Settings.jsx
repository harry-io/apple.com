import { Box, Flex, chakra, Stack, Button, FormControl, FormLabel, Center, Avatar, Input, } from '@chakra-ui/react';
import React from 'react'
import logo from '../../Images/boltLogo.png'

const Settings = () => {
  return (
    <Box>
      <chakra.h1
        textAlign={'left'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        Admin Settings
      </chakra.h1>
      <Flex
        align={'center'}
        justify={'center'}
      >
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          // bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <FormControl id="userName">
            <Stack direction={['column', 'row']} spacing={6}>
              <Center>
                <Avatar
                  size={'xl'}
                  src={logo}
                  alt={'Avatar Alt'}
                  mb={4}
                  pos={'relative'}
                  _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: 'green.300',
                    border: '2px solid white',
                    rounded: 'full',
                    pos: 'absolute',
                    bottom: 0,
                    right: 3,
                  }}
                />
              </Center>
              <Center w="full">
                <Button
                  bg={'grey'}
                  color={'white'}
                  w="full"
                  _hover={{
                    bg: 'gray.600',
                  }}
                >
                  Change Icon
                </Button>
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="userName" >
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="UserName"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="email" >
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
            />
          </FormControl>
          <FormControl id="age" >
            <FormLabel>Age</FormLabel>
            <Input
              placeholder="password"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="location" >
            <FormLabel>Location</FormLabel>
            <Input
              placeholder="password"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <Stack spacing={6} direction={['column', 'row']}>
            <Button
              bg={'grey'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'gray.600',
              }}
            >
              Cancel
            </Button>
            <Button
              bg={'grey'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'gray.600',
              }}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  )
}

export default Settings;