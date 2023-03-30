import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  Box,
  chakra,
} from '@chakra-ui/react';
import { MdDeleteOutline } from 'react-icons/md'
import { TbEdit } from 'react-icons/tb'
import Search from './Search';
import AddProduct from './AddProduct';

const AdminProducts = () => {
  const [checkedItems, setCheckedItems] = React.useState([false, false])
  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked
  return (
    <>
      <chakra.h1
        textAlign={'left'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        Products
      </chakra.h1>
      <Box display={'flex'}>
        <AddProduct />
        <Search />
      </Box>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Product</Th>
              <Th>Description</Th>
              <Th>Price</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td><Image w='60px' src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-macbook-air-202110?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1664576115052' /></Td>
              <Td >MacBook Air with M1 chip</Td>
              <Td>₹17436.00/mo.Per Month</Td>
              <Td><TbEdit /></Td>
              <Td><MdDeleteOutline /></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default AdminProducts;



{/* <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
      >
        Parent Checkbox
      </Checkbox>
      <Stack pl={6} mt={1} spacing={1}>
        <Checkbox
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
          Child Checkbox 1
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        >
          Child Checkbox 2
        </Checkbox>
      </Stack> */}