import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button,
    Input,
    Box,
    FormControl,
    FormLabel,
    Tooltip,
} from '@chakra-ui/react'
import React from 'react'
import { BiBookAdd } from 'react-icons/bi'

function AddProduct() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box>
                <Tooltip label='Add product' placement='top'>
                    <Button bg='none' fontSize={'25px'} onClick={onOpen} position='left' _hover={{}}>
                        <BiBookAdd />
                    </Button>
                </Tooltip>
                <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader borderBottomWidth='1px' color={'white'}>
                            Add a new Product <span style={{ "marginLeft": '5px' }}><BiBookAdd /> </span>
                        </DrawerHeader>
                        <DrawerBody>
                            <FormControl w='400px' m='auto' >
                                <FormLabel>Title</FormLabel>
                                <Input placeholder='Add Title' />
                                <FormLabel mt='10px'>Category</FormLabel>
                                <Input placeholder='Add Category' />
                                <FormLabel mt='10px'>Image</FormLabel>
                                <Input placeholder='Add image URL' />
                                <FormLabel mt='10px'>Price</FormLabel>
                                <Input type='number' placeholder='Add the price' />
                                <Box m='40px 0'>
                                    <Button mr={3}>Save</Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </Box>
                            </FormControl>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </>
    )
}
export default AddProduct;