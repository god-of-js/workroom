export default interface Movie {
  name: string
  index: string
  category: string[]
  watchLists: string
  streams: string
  avatar: string | File
  bannerImg: string | File
  owner: string
  premierDate: string
  isTrending: boolean
  popularity: number
  isUpcomingPremier?: boolean
}
