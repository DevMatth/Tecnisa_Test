import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Box, Center, Divider, Flex, Heading, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface SlideProps {
  image: string;
}

export function Slider(props: SlideProps) {
  return (
    <Flex
      w="100vw"
      h='100%'
      
    >
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 4000, // 4 segundos
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide >
        
        <Flex
          w="100%"
          h={[250, 450]}
          direction="column"
          bg={props.image}        
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
        >        
          <Flex
            direction="column"
            align="center"
            justify="center"
            mt='24'
          >
            <Flex
              
              justify="left"
            >
            <Heading
              alignItems="center"
              display="flex"
              color="#ffffff" 
              fontSize={["l", "1xl", "2xl"]} 
              fontWeight="bold"
            >
              <Divider
                orientation='horizontal'
                color="#cc3333"
                w="80px"
                mr="20px"
                
              />
              Campo Belo | Lançamento 
            </Heading>
            </Flex>
            
            <Text
              color="#ffffff"
              fontSize={["2xl", "3xl", "5xl"]}
              fontWeight="light"
              mt={["2", "4"]}
            >
              Viva uma nova <br/> experiência no <strong>Campo Belo</strong>
            </Text>
            <Flex
              ml="-16"
            >
            <Table 
              colorScheme='blackAlpha' 
              
            >
              <Thead>
                <Tr >
                  <Th fontWeight='light' color='#fff'>APTOS DE</Th>
                  <Divider orientation='vertical' h="20px" />
                  
                  <Th fontWeight='light' color='#fff'>APTOS DE</Th>
                  <Divider orientation='vertical' h="20px" mt="5"/>
                  <Th fontWeight='light' color='#fff'>APTOS DE</Th>
                  
                </Tr>
              </Thead>
              <Tbody >
              <Tr>
                  <Td fontSize='2xl' fontWeight='bold' color='#fff'>2 dorms com 1 suite</Td>
                  
                    <Divider orientation='vertical' h="15px" />
                  
                  <Td fontSize='2xl' fontWeight='bold' color='#fff'>69m²</Td>
                  <Divider orientation='vertical' h="15px" />
                  <Td fontSize='2xl' fontWeight='bold' color='#fff'>R$ 755,330</Td>
                </Tr>
              </Tbody>
            </Table>

          </Flex>
          </Flex>
          
          
        </Flex>
      </SwiperSlide>
      <SwiperSlide >
        
        <Flex
          w="100%"
          h={[250, 450]}
          direction="column"
          bg= 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(images/dp_unik_residense_tecnisa_1.svg)'
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
        >        
          <Flex
            
            align="center"
            justify="center"
            ml='-16'
            mt='24'
          >
            <Heading 
              color="#ffffff" 
              fontSize={["l", "1xl", "2xl"]} 
              fontWeight="bold"
            >
              Campo Belo | Lançamento 
            </Heading>
            <Text
              color="#ffffff"
              fontSize={["2xl", "3xl", "5xl"]}
              fontWeight="light"
              mt={["2", "4"]}
            >
              Viva uma nova <br/> experiência no <strong>Campo Belo</strong>
            </Text>
          </Flex>
          
        </Flex>
      </SwiperSlide>
      
      
    </Swiper>
    </Flex>
  );
};