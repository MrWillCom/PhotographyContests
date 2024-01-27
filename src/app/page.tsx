import styles from './page.module.scss'

import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Section,
  Table,
  Text,
  Tooltip,
} from '@radix-ui/themes'
import getContests from '@/data'

import { Noto_Serif } from 'next/font/google'
const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: 'italic',
})

interface PageProps {}

const Page: React.FunctionComponent<PageProps> = async () => {
  const contests = await getContests()

  return (
    <Container>
      <Section>
        <Heading align="center" size="8" mb="2" className={notoSerif.className}>
          Photography Contests
        </Heading>
        <Text
          align="center"
          as="p"
          color="gray"
          className={notoSerif.className}
        >
          An all-in-one list of photography contests.
        </Text>
      </Section>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Contests</Table.ColumnHeaderCell>
            <Tooltip content="Open for Submissions">
              <Table.ColumnHeaderCell align="center">
                Begin
              </Table.ColumnHeaderCell>
            </Tooltip>
            <Tooltip content="Submission Deadline">
              <Table.ColumnHeaderCell align="center">
                End
              </Table.ColumnHeaderCell>
            </Tooltip>
            <Table.ColumnHeaderCell>Links</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {contests.map(contest => (
            <Table.Row key={contest.name}>
              <Table.RowHeaderCell>
                <Heading size="2" mb="1">
                  {contest.name}
                </Heading>
                <Text color="gray">{contest.description}</Text>
              </Table.RowHeaderCell>
              <Table.Cell>{contest.timeline['submission-begin']}</Table.Cell>
              <Table.Cell>{contest.timeline['submission-end']}</Table.Cell>
              <Table.Cell>
                {contest?.links.map((link: { url: string; text: string }) => (
                  <Button variant="ghost" asChild key={link.url}>
                    <a href={link.url} target="_blank">
                      {link.text}
                    </a>
                  </Button>
                ))}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Container>
  )
}

export default Page
