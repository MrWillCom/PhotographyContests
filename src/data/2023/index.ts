import { promises as fs } from 'fs'

export default async function getContests() {
  const files = await fs.readdir(process.cwd() + '/src/data/2023', 'utf8')

  return files
    .map(file => {
      if (file.endsWith('.json')) {
        return require(`./${file}`)
      } else {
        return null
      }
    })
    .filter(data => data !== null)
    .toSorted((a, b) => {
      const dateA = a.timeline['submission-begin']
        .split('/')
        .map((val: string) => parseInt(val, 10))
      const dateB = b.timeline['submission-begin']
        .split('/')
        .map((val: string) => parseInt(val, 10))

      if (dateA[0] != dateB[0]) {
        return dateB[0] - dateA[0]
      } else if (dateA[1] != dateB[1]) {
        return dateB[1] - dateA[1]
      } else {
        return dateB[2] - dateA[2]
      }
    })
}
