export type TrailData = {
  id: string;
  title: string;
  town: string;
  state: string;
  difficulty_rating: string;
  length: number;
  rating: number;
  lat: number;
  long: number;
  summary: string;
  url: string;
  img: string;
}

export type ItemProps = {
  item: TrailData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

export const Trails: TrailData[] = [
  {
    id: '0',
    title: 'Lake Trail',
    town: 'Cary',
    state: 'NC',
    difficulty_rating: 'Green/Blue',
    length: 1.3,
    rating: 3.5,
    lat: 35.8392,
    long: -78.7821,
    summary: 'Lake trail - Great views!, but be aware of hikers.',
    url: 'https://www.mtbproject.com/trail/7000215/lake-trail',
    img: 'https://mtbproject.com/assets/photos/mtb/7024260_medium_1555000851.jpg?cache=1689377805'
  },
  {
    id: '1',
    title: 'Purple Trail',
    town: 'Justice',
    state: 'OK',
    difficulty_rating: 'Green/Blue',
    length: 1.4,
    rating: 4.0,
    lat: 36.336,
    long: -95.5597,
    summary: 'Adds a few technical pieces into an otherwise fast and flowing trail that circles the perimeter.',
    url: 'https://www.mtbproject.com/trail/7022578/purple-trail',
    img: 'https://images.pexels.com/photos/7433714/pexels-photo-7433714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    title: 'Sprain Ridge',
    town: 'Ardsley',
    state: 'NJ',
    difficulty_rating: 'Blue/Black',
    length: 8.4,
    rating: 3.9,
    lat: 40.9854,
    long: -73.8488,
    summary: 'A great loop close to the city that includes technical climbs, rollers, drops and decents.',
    url: 'https://www.mtbproject.com/trail/7000490/sprain-ridge',
    img: 'https://mtbproject.com/assets/photos/mtb/7027369_medium_1555010866.jpg?cache=1689377929'
  },
  {
    id: '3',
    title: 'General Creek Trail',
    town: 'Tahoma',
    state: 'CA',
    difficulty_rating: 'Black',
    length: 4.4,
    rating: 4.0,
    lat: 39.0432,
    long: -120.1493,
    summary: 'A singletrack that ranges in difficulty from rugged backcountry to easy and wide.',
    url: 'https://www.mtbproject.com/trail/7014428/general-creek-trail',
    img: 'https://mtbproject.com/assets/photos/mtb/7010669_medium_1554838314.jpg?cache=1689377289'
  },
  {
    id: '4',
    title: 'Bowery',
    town: 'Sun Valley',
    state: 'ID',
    difficulty_rating: 'Double Black',
    length: 4.2,
    rating: 3.0,
    lat: 43.9767,
    long: -114.4987,
    summary: 'A steep bypass with expansive views.',
    url: 'https://www.mtbproject.com/trail/7006569/bowery',
    img: 'https://images.pexels.com/photos/17023649/pexels-photo-17023649/free-photo-of-mountains-in-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '5',
    title: 'Mobius Strip (103)',
    town: 'Hood River',
    state: 'OR',
    difficulty_rating: 'Blue',
    length: 1.5,
    rating: 3.5,
    lat: 45.6916,
    long: -121.6023,
    summary: 'Designed as a fun, technical climbing trail with narrow tread and over a dozen tight switchbacks.',
    url: 'https://www.mtbproject.com/trail/7010567/mobius-strip-103',
    img: 'https://mtbproject.com/assets/photos/mtb/7012048_medium_1554843777.jpg?cache=1689377338'
  },
  {
    id: '6',
    title: 'Briggs Creek',
    town: 'Fort Benton',
    state: 'MT',
    difficulty_rating: 'Black',
    length: 3.1,
    rating: 4.0,
    lat: 47.4773,
    long: -110.5765,
    summary: 'Connects Briggs Creek and Kirby Creek drainages with a steep climb in between.',
    url: 'https://www.mtbproject.com/trail/7020560/briggs-creek',
    img: 'https://mtbproject.com/assets/photos/mtb/7044620_medium_1662866346.jpg?cache=1689378623'
  },
  {
    id: '7',
    title: 'Guard Camp Forest Road FS87',
    town: 'Toccoa',
    state: 'GA',
    difficulty_rating: 'Green/Blue',
    length: 4.3,
    rating: 2.0,
    lat: 34.551,
    long: -83.4089,
    summary: 'A typical north Georgia forest road.',
    url: 'https://www.mtbproject.com/trail/7023498/guard-camp-forest-road-fs87',
    img: 'https://images.pexels.com/photos/17084477/pexels-photo-17084477/free-photo-of-view-of-a-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '8',
    title: 'Pulliam Creek',
    town: 'East Flat Rock',
    state: 'NC',
    difficulty_rating: 'Blue/Black',
    length: 2.3,
    rating: 4.0,
    lat: 35.2736,
    long: -82.3368,
    summary: 'This singletrack trail is either a crazy climb to the top or a ton-of-fun downhill to the bottom.',
    url: 'https://www.mtbproject.com/trail/7013220/pulliam-creek',
    img: 'https://mtbproject.com/assets/photos/mtb/7009165_medium_1554830112.jpg?cache=1689377237'
  },
  {
    id: '9',
    title: 'Gauley Mountain Trail',
    town: 'Marlinton',
    state: 'WV',
    difficulty_rating: 'Blue',
    length: 5.4,
    rating: 4.0,
    lat: 38.3917,
    long: -80.1567,
    summary: 'Gauley Mountain Trail is an access trail to the singletrack trails around Tea Creek Mountain.',
    url: 'https://www.mtbproject.com/trail/7012398/gauley-mountain-trail',
    img: 'https://mtbproject.com/assets/photos/mtb/7027444_medium_1555010989.jpg?cache=1689377932'
  }
]

export default Trails;