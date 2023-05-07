import BlackWidow from '../assets/images/black-widow.jpg'
import AfterHours from '../assets/images/after-hours.jpg'
import AntMan from '../assets/images/ant-man.jpg'
import CaptainMarvel from '../assets/images/captain-marvel.jpg'
import Grimbsby from '../assets/images/grimsby.jpg'
import Moonlight from '../assets/images/moonlight.jpg'
import Spiderman from '../assets/images/spiderman.jpg'
import TheGodfather from '../assets/images/the-godfather.jpg'
import WonderVision from '../assets/images/wonder-vision.jpg'
import WreckItRaplh from '../assets/images/wreck-it-ralph.jpg'
import XMen from '../assets/images/x-men.jpg'
import YogiBear from '../assets/images/yogi-bear.jpg'
import Zootopia from '../assets/images/zootopia.jpg'

export default [
  {
    name: 'Avengers black window',
    category: ['action', 'blockbuster'],
    watchLists: '590,972,542',
    streams: '21,452',
    avatar: BlackWidow,
    owner: 'Sony Entertainment',
    premierDate: '21th May, 2022',
    isTrending: true,
    isUpcomingPremier: true,
    popularity: 6
  },
  {
    name: 'After Hours',
    category: ['horror', 'crime'],
    watchLists: '88,458,892',
    streams: '32,892',
    avatar: AfterHours,
    owner: 'Sony Entertainment',
    premierDate: '21th May, 2022',
    isTrending: false,
    popularity: 8
  },
  {
    name: 'Ant-man',
    category: ['action', 'blockbuster'],
    watchLists: '22,008,901',
    streams: '345,321',
    avatar: AntMan,
    owner: 'Sony Entertainment',
    premierDate: '21th May, 2022',
    isTrending: false,
    popularity: 10
  },
  {
    name: 'Captain Marvel',
    category: ['action', 'fantasy'],
    watchLists: '80,961',
    streams: '903',
    avatar: CaptainMarvel,
    owner: 'Sony Entertainment',
    premierDate: '21th May, 2022',
    isTrending: false,
    popularity: 2
  },
  {
    name: 'Grimsby',
    category: ['comedy', 'crime'],
    watchLists: '670,901',
    streams: '2,453',
    avatar: Grimbsby,
    owner: 'Sony Entertainment',
    premierDate: '12th May, 2022',
    isTrending: true,
    isUpcomingPremier: true,
    popularity: 4
  },
  {
    name: 'Moonlight',
    category: ['true story', 'horrow', 'blockbuster'],
    watchLists: '56,893',
    streams: '24,512,232',
    avatar: Moonlight,
    owner: 'Sony Entertainment',
    premierDate: '4th July, 2012',
    isTrending: true,
    isUpcomingPremier: true,
    popularity: 9
  },
  {
    name: 'Spider Man - Far from Home',
    category: ['action', 'thriller'],
    watchLists: '789,234',
    streams: '13,043,145',
    avatar: Spiderman,
    owner: 'Sony Entertainment',
    premierDate: '14th June, 2012',
    isTrending: false,
    isUpcomingPremier: true,
    popularity: 4
  },
  {
    name: 'Spider Man - Far from Home',
    category: ['action', 'thriller'],
    watchLists: '130,901',
    streams: '13,043,145',
    avatar: Spiderman,
    owner: 'Sony Entertainment',
    premierDate: '21th May, 2003',
    isTrending: true,
    popularity: 6
  },
  {
    name: 'The Godfather',
    category: ['action', 'crime'],
    watchLists: '24,545,235',
    streams: '14,476',
    avatar: TheGodfather,
    owner: 'Sony Entertainment',
    premierDate: '21th May, 2022',
    isTrending: true,
    popularity: 8
  },
  {
    name: 'Wonder Vision',
    category: ['fantasy', 'action'],
    watchLists: '200,901',
    streams: '1,476',
    avatar: WonderVision,
    owner: 'Sony Entertainment',
    premierDate: '21th May, 2003',
    isTrending: false,
    popularity: 1
  },
  {
    name: 'Wreck-it Ralph',
    category: ['comedy', 'animation'],
    watchLists: '96,783,545',
    streams: '3,654,476',
    avatar: WreckItRaplh,
    owner: 'Sony Entertainment',
    premierDate: '21th May, 2022',
    isTrending: true,
    popularity: 8
  },
  {
    name: 'X-Men The Last Stand',
    category: ['action', 'SCI-fi'],
    watchLists: '200,456,609',
    streams: '76,543,342',
    avatar: XMen,
    owner: 'Sony Entertainment',
    premierDate: '21th May, 2003',
    isTrending: true,
    popularity: 10
  },
  {
    name: 'Yogi Bear',
    category: ['animation', 'comedy'],
    watchLists: '200,901',
    streams: '6,542',
    avatar: YogiBear,
    owner: 'Sony Entertainment',
    premierDate: '21th May, 2022',
    isTrending: false,
    popularity: 1
  },
  {
    name: 'Zootopia',
    category: ['comedy', 'animation'],
    watchLists: '890,342,576',
    streams: '7,654,765',
    avatar: Zootopia,
    owner: 'Sony Entertainment',
    premierDate: '21th May, 2022',
    isTrending: true,
    popularity: 10
  }
].map((item, index) => ({
  ...item,
  index: `${index}`
}))
