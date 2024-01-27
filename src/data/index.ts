import getContests2023 from './2023/index'

export default async function getContests() {
  const contests2023 = await getContests2023()

  return [contests2023].flat()
}
