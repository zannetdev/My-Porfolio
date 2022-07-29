import Head from 'next/head'
import Navbar from '../navbar'
import dynamic from 'next/dynamic'
import Footer from '../footer'
import { Box, Container } from '@chakra-ui/react'
import VoxelDogLoader from '../voxel-loader'
const LazyVoxelDog = dynamic(() => import('../voxel-model'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Zannet | Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />
        {children}
        <Footer/>
      </Container>
    </Box>
  )
}

export default Main
