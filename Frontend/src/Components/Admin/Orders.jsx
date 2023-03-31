import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Image,
} from '@chakra-ui/react'
import { MdDeleteOutline } from 'react-icons/md'

const Orders = () => {
    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Product</Th>
                            <Th>Description</Th>
                            <Th>Price</Th>
                            <Th>Status</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>1</Td>
                            <Td><Image w='60px' src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-macbook-air-202110?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1664576115052' /></Td>
                            <Td >MacBook Air with M1 chip</Td>
                            <Td>₹17436.00/mo.Per Month</Td>
                            <Td>Pending</Td>
                            <Td cursor={'pointer'}><MdDeleteOutline /></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Orders;