import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { DeleteAdminProducts, getAdminProducts } from '../../Redux/Admin/admin.action';
import AdminproductEditBtn from './adminproductEditBtn';

const AdminProducts = () => {
  // const [checkedItems, setCheckedItems] = React.useState([false, false])
  // const allChecked = checkedItems.every(Boolean)
  // const isIndeterminate = checkedItems.some(Boolean) && !allChecked

  const dispatch = useDispatch();
  const { adminProducts } = useSelector(store => store.AdminReducer);
  // console.log(adminProducts, 'adminProducts');

  useEffect(() => {
    dispatch(getAdminProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDelete = (id) => {
    // dispatch(DeleteAdminProducts(id));
    // dispatch(getAdminProducts());
    console.log(id, 'deleted');
  }

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
              <Th>Category</Th>
              <Th>Description</Th>
              <Th>Price</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              adminProducts?.map((e, i) => (
                <Tr>
                  <Td>{i + 1}.</Td>
                  <Td><Image w='60px' src={e.image} /></Td>
                  <Td>{e.category}</Td>
                  <Td >{e.title}</Td>
                  <Td>{e.price.substring(0, 28).concat("...")}</Td>
                  <Td cursor={'pointer'}>
                    <AdminproductEditBtn />
                  </Td>
                  <Td cursor={'pointer'} onClick={() => handleDelete(e._id)}><MdDeleteOutline /></Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default AdminProducts;


