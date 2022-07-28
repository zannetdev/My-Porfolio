import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello!, I&apos;m a Ghost, Indie Developer based In México!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Eduardo González
          </Heading>
          <p>Indie Developer (Student / Developer / Freelancer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/zannet.jpg"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Eduardo is a freelance developer, is passionate about technology,
          specializes in the implementation of new technologies, computer
          innovations, is a passionate about video games and music. He loves to
          work in a team, he is very friendly and a technology enthusiast. He is
          not currently studying but in 2023 he will start his career at the
          University called
          <NextLink href="https://www.ucem.edu.mx/" passHref>
            <Link target="_blank"> UCEM </Link>
          </NextLink>
          specializing as a software engineer.
        </Paragraph>
      </Section>
    </Container>
  )
}
export default Page
