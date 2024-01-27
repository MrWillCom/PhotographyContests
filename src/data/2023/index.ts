import { promises as fs } from 'fs'

export default async function getContests() {
  return (await fs.readdir(process.cwd() + '/src/data/2023', 'utf8'))
    .map(file => {
      if (file.endsWith('.json')) {
        return require(`./${file}`)
      } else {
        return null
      }
    })
    .filter(data => data !== null)
}
