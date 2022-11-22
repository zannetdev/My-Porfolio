import {
  Container,
  Box,
  Heading,
  Image,
  List,
  ListItem,
  Button,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoFileTrayStackedSharp
} from 'react-icons/io5'
import {  SimpleGrid } from '@chakra-ui/react/dist/chakra-ui-react.cjs'
import { GridItem } from '../components/grid-item'
import { WorkGridItem } from '../components/grid-item'
import thumbPibi from '../public/works/pibi.png'
import thumbFudu from '../public/works/fudu.png'

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
        These are my projects :)
      </Box>
      <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            My Projects
          </Heading>
          <p>These are the projects I´ve been working on these last few months.</p>
        </Box>
      <Box display={{ md: 'flex' }} pt={4}>
      <Section delay={0.3}>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <WorkGridItem
            id="pibi"
            title="PIBI VIRTUAL PSYCHOLOGIST"
            thumbnail={thumbPibi}
            href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"
          />
           <WorkGridItem
           id="fudu"
            title="FUDU - RESTAURANT APP"
            thumbnail={thumbFudu}
            href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"
          />
        </SimpleGrid>
       
      </Section>
      </Box>

      <Section delay={0.1}></Section>
    </Container>
  )
}
export default Page
