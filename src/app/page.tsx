/* eslint-disable @next/next/no-img-element */

import styles from './page.module.scss'

import {
  Box,
  Button,
  Card,
  Container,
  Heading,
  Inset,
  Section,
  Text,
} from '@radix-ui/themes'
import moment from 'moment'
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
      <Box className={styles.cardGrid}>
        {contests.map(contest => (
          <Card key={contest.name}>
            <Box>
              {contest.imageType === 'banner' ? (
                <Inset clip="padding-box" side="top" pb="current">
                  <img
                    src={contest.image}
                    className={styles.cardImage}
                    alt={contest.imageType}
                  />
                </Inset>
              ) : (
                <img
                  src={contest.image}
                  className={styles.cardImage}
                  alt={contest.imageType}
                />
              )}
              <Heading size="4" mb="1" className={notoSerif.className}>
                {contest.name}
              </Heading>
              <Text color="gray" as="p">
                {contest.description}
              </Text>
              <Inset
                clip="padding-box"
                side="bottom"
                pb="current"
                className={styles.cardLabels}
              >
                <Text color="gray" weight="medium" size="2">
                  {moment(contest.submission.begin).format('MMM D, YYYY')} -{' '}
                  {moment(contest.submission.end).format('MMM D, YYYY')}
                </Text>
                {contest?.links.map((link: { url: string; text: string }) => (
                  <Button variant="ghost" asChild key={link.url}>
                    <a href={link.url} target="_blank">
                      {link.text}
                    </a>
                  </Button>
                ))}
              </Inset>
            </Box>
          </Card>
        ))}
      </Box>
    </Container>
  )
}

export default Page
