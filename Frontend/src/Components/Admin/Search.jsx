import React from 'react'
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
    Tooltip,
} from '@chakra-ui/react'
import { GrFormSearch } from 'react-icons/gr'

function Search() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <Tooltip label='Search product' placement='top'>
                <Button bg='none' fontSize={'32px'} onClick={onOpen} position='left' _hover={{}}>
                    <GrFormSearch />
                </Button>
            </Tooltip>
            <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px' color={'white'}>Search here</DrawerHeader>
                    <DrawerBody>
                        <Input w='60%' placeholder='Type here...' />
                        <Button bg='none' fontSize={'30px'} onClick={onOpen} _hover={{}}>
                            <GrFormSearch />
                        </Button>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default Search;