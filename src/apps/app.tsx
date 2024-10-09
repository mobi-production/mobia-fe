import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Global, ThemeProvider } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'

import MultiProvider from './providers/multi-provider'
import { router } from './router/router'
import { global } from './style/global'
import theme, { colors, typography, weight } from './style/theme'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        throwOnError: true
      }
    }
  })

  const chakraTheme = extendTheme({
    colors,
    typography,
    weight,
    fonts: {
      heading: 'Pretendard Variable',
      body: 'Pretendard Variable'
    }
  })

  return (
    <>
      <Global styles={global} />
      <MultiProvider
        providers={[
          <QueryClientProvider client={queryClient} />,
          <ThemeProvider
            theme={theme}
            children={undefined}
            key='theme-provider'
          />,
          <ChakraProvider
            resetCSS={true}
            theme={chakraTheme}
          />,
          <RouterProvider router={router} />
        ]}
      />
    </>
  )
}

export default App
