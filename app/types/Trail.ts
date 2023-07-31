type TrailType = {
  id: string,
  title: string,
  description: string,
  start_lat: number,
  start_lon: number,
  end_lat: number,
  end_lon: number,
  length: number,
  image_url?: string,
  difficulty_rating?: string,
  town?: string,
  state?: string,
  url: string,
  rating?: number,
  lat?: number,
  long?: number,
  summary?: string,
  flow?: number,
  imba_score?: string,
  score?: number
}

export default TrailType