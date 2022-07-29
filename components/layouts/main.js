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
        <meta name="description" content="ZannetDev Homesite" />
        <meta name="author" content="Eduardo González" />
        <meta name="author" content="zannet" />
        <link rel="apple-touch-icon" href="/contents/profile.png" />
        <link rel="shortcut icon" href="/contents/profile.png" type="image/x-icon" />
        <meta name="twitter:title" content="ZannetDev Homesite" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ZannetCode" />
        <meta name="twitter:creator" content="@ZannetCode" />
        <meta name="twitter:image" content="https://user-images.githubusercontent.com/72852996/180954671-c531efaf-2bee-405e-bf66-d3510122a45f.png" />
        <meta property="og:site_name" content="" />
        <meta name="og:title" content="ZannetDev Homesite" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://user-images.githubusercontent.com/72852996/180954671-c531efaf-2bee-405e-bf66-d3510122a45f.png" />
        <title>Zannet</title>
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
