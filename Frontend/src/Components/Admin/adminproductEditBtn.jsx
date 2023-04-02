import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Box,
    Text,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { TbEdit } from 'react-icons/tb'

export default function AdminproductEditBtn() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [edit, setEdit] = useState({});

    const handleEdit = (e) => {
        const { name, value } = e.target;
        setEdit({ ...edit, [name]: value });
        // console.log(e.target.name);

    }
    // console.log(edit);

 
    return (
        <>
            <Text fontSize={'lg'} onClick={onOpen} color='black'><TbEdit /></Text>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader color='white'>Edit Product details </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl w='400px' m='auto' >
                            <FormLabel>Title</FormLabel>
                            <Input
                                placeholder='Add Title'
                                onChange={handleEdit}
                                name='title'
                            />
                            <FormLabel mt='10px'>Category</FormLabel>
                            <Input
                                placeholder='Add Category'
                                onChange={handleEdit}
                                name='category'
                            />
                            <FormLabel mt='10px'>Image</FormLabel>
                            <Input
                                placeholder='Add image URL'
                                onChange={handleEdit}
                                name='image'
                            />
                            <FormLabel mt='10px'>Price</FormLabel>
                            <Input
                                type='number'
                                placeholder='Add the price'
                                onChange={handleEdit}
                                name='price'
                            />
                            <Box m='40px 0'>
                                <Button mr={3} onClick={''}>Save</Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </Box>
                        </FormControl>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}