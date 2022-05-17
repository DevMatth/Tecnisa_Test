import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      w='100vw'
      h='100px'
      bg='gray.900'
      justify='center'
      align='center'
    >
      <Image 
        boxSize="200px"
        src="Frame.svg"
      />
      
    </Flex>
  )
}