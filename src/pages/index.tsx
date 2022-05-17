import { Box, Flex, Heading, Icon, Image, Text, GridItem, Grid } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { Header } from "../components/header/Header";
import { MenuComponent } from "../components/menu/Menu";
import { Slider } from "../components/slider/Slider";
import { api } from "../services/api";
import {IoIosBed} from 'react-icons/io'
import {FaRulerCombined} from 'react-icons/fa'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from "../components/footer/Footer";

type ComponentProps = {
  data: ImovelProps;
}

type ImovelProps = {
  imoveis: [{
    nome: string;
    imagem: string;
    cidade: string;
    uf: string;
    bairro: string;
    dormitorios: number;
    metragem: number;
  }]
}

export default function Home({data}: ComponentProps) {
  
  return (
    <>
      <Header />
      <Slider image="linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(images/dp_campo_belo_tecnisa_1.svg)"/>
      <MenuComponent />
      <Grid
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(2, 1fr)"
        gap={6}
      >
        <GridItem
          mt="16"
          ml='24'
          w="100%"
          display="flex"
        > 
          <Flex>
          {data.imoveis.map(imovel => {
            return (
              <>
                <Box
                  mr="12"
                >
                  <Image
                    maxW='282px'
                    h='168px'
                    src={imovel.imagem}
                  />
                
                  <Text fontSize="13px">{imovel.cidade} | {imovel.uf}</Text>
                  <Heading>{imovel.bairro}</Heading>
                  <Text>{imovel.nome}</Text>
                  <Text><Icon as={IoIosBed} h="19" w="19"/>{imovel.dormitorios}</Text>
                  <Text><Icon as={FaRulerCombined}/>{imovel.metragem}</Text>
                </Box>
              </>
              )
            })}
            </Flex>
          </GridItem>
        </Grid>
        <Footer />
      
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  
    const {data} = await api.get('/imoveis')
  
  return {
    props: {
      data
    }
  }
}