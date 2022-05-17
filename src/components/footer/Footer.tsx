import { Flex, Table, Image, Thead, Tr, Th, Tbody, Td, Box, Divider, Icon } from '@chakra-ui/react'
import {MdAttachMoney} from "react-icons/md"
import {RiTimerLine, RiAwardLine} from "react-icons/ri"

export function Footer() {
  return (
    <>
      
    <Flex
      
      bg="gray.900"
      h="414px"
    >
      <Image
        mt="16"
        ml="24"
        boxSize="200px"
        src="Frame.svg"
      />
      <Flex
        align="center"
        justify='center'
        ml="200"
      >
        <Table
          colorScheme='blackAlpha'
        >
          <Thead
            
          >
            <Tr >
              <Th color="#ffffff" fontSize="24">Principais tipos de imoveis</Th>
              <Th color="#ffffff" fontSize="24">Principais bairros</Th>
              <Th color="#ffffff" fontSize="24">imoveis por cidade</Th>
            </Tr>
            <Tr>
              <Th><Divider orientation='horizontal' h="15px" w="24" color="#cc3333"/></Th>
              <Th><Divider orientation='horizontal' h="15px" w="24" color="#cc3333"/></Th>
              <Th><Divider orientation='horizontal' h="15px" w="24" color="#cc3333"/></Th>
            </Tr>
          </Thead>
          <Tbody color="#ffffff" fontWeight="light">
            <Td>
              <Tr></Tr>
              <Tr>Apartamentos prontos</Tr>
              <Tr>Apartamentos na planta</Tr>
              <Tr>Salas comerciais à venda</Tr>
              <Tr>Salas comerciais prontas</Tr>
              <Tr>Lajes corporativas à venda</Tr>
            </Td>
            <Td>
              <Tr></Tr>
              <Tr>Jardins</Tr>
              <Tr>Pinheiros</Tr>
              <Tr>Morumbi</Tr>
              <Tr>Alphaville</Tr>
              <Tr>Mooca</Tr>
            </Td>
            <Td>
              <Tr ></Tr>
              <Tr>São Paulo</Tr>
              <Tr>São José dos Campos</Tr>
              <Tr>Curitiba</Tr>
              <Tr>Goiania</Tr>
              <Tr>Campinas</Tr>
            </Td>
            
          </Tbody>
        </Table>
      </Flex>
    </Flex>
    <Flex
      bg="gray.600"
      h="80px"
      
    >
      <Table>
        <Thead ml="80">
          <Tr>
            <Th color="#ffffff"><Icon as={MdAttachMoney} w="40px" h="40px"/>Parcelas fixas durante a obra</Th>
            <Th color="#ffffff">Compra 100% digital</Th>
            <Th color="#ffffff"><Icon as={RiTimerLine} w="40px" h="40px"/>Fast daiting</Th>
            <Th color="#ffffff"><Icon as={RiAwardLine} w="40px" h="40px"/>Prêmios</Th>
          </Tr>
        </Thead>
      </Table>

    </Flex>
    </>
  )
}