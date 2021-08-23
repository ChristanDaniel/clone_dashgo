import { Flex, Heading, Box, Text, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, useBreakpointValue, } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { useQuery } from 'react-query';

import Link from 'next/link'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination';
import { Siderbar } from '../../components/Sidebar/index'
import { useEffect } from 'react';

export default function UserList() {
    const {data, isLoading, error } = useQuery('users', async () => {
        const response = await fetch('http://localhost:3000/api/users')
        const data = await response.json()

        return data;
    })

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return(
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
              <Siderbar />

              <Box flex="1" borderRadius="8" bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                      <Heading size="lg" fontWeight="normal">Usuários</Heading>

                      <Link href="/users/create" passHref>
                        <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={<Icon as={ RiAddLine } fontSize="20" />}
                            >
                                Criar novo
                        </Button>
                      </Link>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                                <Th>Usuário</Th>
                                { isWideVersion && <Th>Data de cadastro</Th>}
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Christian Daniel</Text>
                                        <Text fontSize="sm" color="gray.300">Christian_daniel04@hotmail.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>04 de Abril, 2021</Td>}
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={ RiPencilLine } fontSize="16" />}
                                        >
                                          Editar
                                        </Button>
                                    </Td>
                            </Tr>

                        </Tbody>
                    </Table>

                    <Pagination />
              </Box>
            </Flex>
        </Box>
    );
}