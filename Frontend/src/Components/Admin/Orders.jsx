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
    useDisclosure,
} from '@chakra-ui/react'
import { MdDeleteOutline } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { DeleteOrdersData } from '../../Redux/Admin/admin.action'

const Orders = ({ orders }) => {
    const dispatch = useDispatch();
    const deleteOrder = (id) => {
        // dispatch(DeleteOrdersData(id));
        console.log(id);
    }

    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Product</Th>
                            <Th>Category</Th>
                            <Th>Description</Th>
                            <Th>Price</Th>
                            <Th>Status</Th>
                            <Th>Cancel</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            orders.map((e, i) => (
                                <Tr key={i + 1}>
                                    <Td>{i + 1}.</Td>
                                    <Td><Image w='60px' src={e.image} /></Td>
                                    <Td>{e.category}</Td>
                                    <Td>{e.title}</Td>
                                    <Td >{e.price.substring(0, 28).concat("...")}</Td>
                                    <Td>Pending</Td>
                                    <Td cursor={'pointer'} onClick={() => deleteOrder(e._id)}><MdDeleteOutline /></Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Orders;