import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors:{
    gray: {
      '600':'#363636',
      '900':'#000000'
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        color: '#484848'
      }
    }
  }
})