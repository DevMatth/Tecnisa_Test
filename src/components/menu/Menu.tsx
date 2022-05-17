import { Box, Flex, Heading, Text, Menu, MenuButton, Button, 
  MenuOptionGroup, MenuItemOption, MenuList, MenuDivider, MenuItem, Checkbox, Divider, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from '@chakra-ui/react'

export function MenuComponent() {
  return (
    <Flex justify='space-between' mt="24" ml="24">
      <Box>
        <Heading fontSize='24'>
          Conheça nossos imóveis à venda
        </Heading>
        <Text>Conforto, alta qualidade e a localização que você sempre quis. Encontre o seu imóvel.</Text>
      </Box>
      <Flex mr="24">
        <Box pr="12">
          <Menu closeOnSelect={false} >
            <MenuButton fontWeight="light" as={Button} bg='#fff'>
              Bairro
            </MenuButton>
            <MenuList 
              boxShadow="3px 3px 7px gray"
              border="none"
              minWidth='252px'
              minHeight='559px'
            >
              <MenuItemOption>
                <Flex mt="5">
                <MenuItem ml="-7">Vila Clementino</MenuItem><Checkbox border="2px gray" iconColor='gray' colorScheme="gray" iconSize='1'></Checkbox>
                </Flex>
                <Divider border="1px gray" w="216" ml="-5"></Divider>
                <Flex mt="5" >
                <MenuItem ml="-7">Mooca</MenuItem><Checkbox border="2px gray" iconColor='gray' colorScheme="gray" iconSize='1'></Checkbox> 
                </Flex>
                <Divider border="1px gray" w="216" ml="-5"></Divider>
                <Flex mt="5">
                <MenuItem ml="-7">Campo Belo</MenuItem><Checkbox border="2px gray" iconColor='gray' colorScheme="gray" iconSize='1'></Checkbox> 
                </Flex>
                <Divider border="1px gray" w="216" ml="-5"></Divider>
                <Flex mt="5">
                <MenuItem ml="-7">Vila Romana</MenuItem><Checkbox border="2px gray" iconColor='gray' colorScheme="gray" iconSize='1'></Checkbox> 
                </Flex>
                <Divider border="1px gray" w="216" ml="-5"></Divider>
                <Flex mt="5">
                <MenuItem ml="-7">Santo amaro</MenuItem><Checkbox border="2px gray" iconColor='gray' colorScheme="gray" iconSize='1'></Checkbox>
                </Flex>
                <Divider border="1px gray" w="216" ml="-5"></Divider>
                <Flex mt="5">
                <MenuItem ml="-7">Jardins</MenuItem><Checkbox border="2px gray" iconColor='gray' colorScheme="gray" iconSize='1'></Checkbox> 
                </Flex>
                <Divider border="1px gray" w="216" ml="-5"></Divider>
                <Flex mt="5">
                <MenuItem ml="-7">Pinheiros</MenuItem><Checkbox border="2px gray" iconColor='gray' colorScheme="gray" iconSize='1'></Checkbox> 
                </Flex>
                <Divider border="1px gray" w="216" ml="-5"></Divider>
                <Flex mt="5">
                <MenuItem ml="-7">Nova Klabin</MenuItem><Checkbox border="2px gray" iconColor='gray' colorScheme="gray" iconSize='1'></Checkbox> 
                </Flex>
                <Divider border="1px gray" w="216" ml="-5"></Divider>
                <Flex mt="12" justify="space-between">
                <Button ml="-5"bg="#ffffff">Limpar</Button>
                <Button w="24" bg="#cc3333" borderRadius="50" fontWeight="normal" color="#ffffff">Filtrar</Button>
                </Flex>
              </MenuItemOption>
            </MenuList>
          </Menu>
        </Box>
        <Box pr="12">
          <Menu closeOnSelect={false}>
            <MenuButton fontWeight="light" as={Button} bg='#fff'>
              Metragem
            </MenuButton>
            <MenuList 
              boxShadow="3px 3px 7px gray"
              border="none"
              minWidth='240px'
              minHeight='200px'
            >
              <RangeSlider
                aria-label={['min', 'max']}
                colorScheme='red'
                defaultValue={[10, 30]}
                w="200px"
                ml="5"
                mt="5"
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} bg="#cc3333"/>
                <RangeSliderThumb index={1} bg="#cc3333"/>
              </RangeSlider>
              <Flex mt="80px" ml="8">
                <Button bg="#ffffff">Limpar</Button>
                <Button ml="5" bg="#cc3333" borderRadius="50" fontWeight="normal" color="#ffffff">Filtrar</Button>
                </Flex>
            </MenuList>
          </Menu>
        </Box>
      </Flex>

    </Flex>
  )
}