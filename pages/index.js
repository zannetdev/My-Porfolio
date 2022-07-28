import {
  Container,
  Box,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Button,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoFileTrayStackedSharp
} from 'react-icons/io5'
import { ImageSSR } from '../components/img-ssr'

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
          <NextLink
            href="https://educem.mx/licenciaturas/licenciatura-en-ingenieria-informatica/"
            passHref
          >
            <Link target="_blank"> EDUCEM </Link>
          </NextLink>
          specializing as a software engineer.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="whatsapp">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Guanajuato, México.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Qualify to enter high school & I Started Studying Programation.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>I worked together with
          <NextLink href="https://www.cbtis65.edu.mx/" passHref>
            <Link target="_blank"> CBTis 65 </Link>
          </NextLink>
          (My high school) to make an ERP for the same school.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>I entered the university called
          <NextLink href="https://irapuato.tecnm.mx/" passHref>
            <Link target="_blank"> ITESI</Link>
          </NextLink>
          , but for reasons of time, finances and health I had to stop studying
          for the time being.
        </BioSection>
        <BioSection>
          <BioYear>2021 to Present</BioYear>
          Working as Freelancer and Studying on Home.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          <Link href="https://steamcommunity.com/id/sixlegd" target="_blank">
            VideoGames
          </Link>
          , Digital Content,&nbsp;
          <Link href="https://www.instagram.com/gonedustx/" target="_blank">
            Social Networks
          </Link>
          , Web Development and Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/zannetdev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @zannetdev
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/ZannetCode" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoFileTrayStackedSharp />}
              >
                @gonedustx
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/ZannetCode" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @ZannetCode (Spanish)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/gonedustx" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @gonedustx
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  )
}
export default Page
