import {useState, useEffect} from 'react'
import axios from 'axios'
import ListingCard from '../components/ListingCard'

type ListingProps = {}

type Listing = {
  id: number,
  title: string,
  imageUrl: string,
  description: string,
  itemSummary: string,
  startingBid: number,
  bidIncrement: number,
  approximateValue: number
}

const Listings = () => {
  const [listings, setListings] = useState<Listing[]>([])

  const getAllListings = async () => {
    let listings = await axios.get('http://localhost:3001/listings')
    console.log(listings.data)
    setListings(listings.data)
  }

  useEffect(() => {
    getAllListings()
  }, [])


  return (
  <div>
    <h1> Listings </h1>
    {listings.map((listing) => (
      <div key={listing.title} className='all-listings-card'>
        <ListingCard {...listing}/>
      </div>
    ))}
  </div>
)
}

export default Listings