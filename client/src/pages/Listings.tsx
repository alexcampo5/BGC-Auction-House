import {useState, useEffect} from 'react'
import axios from 'axios'
import ListingCard from '../components/ListingCard'
import BASE_URL from '../services/api'
import {useNavigate} from 'react-router-dom'

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
  const navigate = useNavigate()
  const [listings, setListings] = useState<Listing[]>([])

  const getAllListings = async () => {
    let listings = await axios.get(`${BASE_URL}/listings`)
    setListings(listings.data)
  }

  const navigateListingDetails = (listingId: number) => {
    navigate(`/items/${listingId}`)
  }

  useEffect(() => {
    getAllListings()
  }, [])


  return (
  <div>
    <h1> Listings </h1>
    {listings.map((listing) => (
      <div key={listing.title} className='all-listings-container' onClick={() => navigateListingDetails(listing.id)}>
        <ListingCard {...listing}/>
      </div>
    ))}
  </div>
)
}

export default Listings