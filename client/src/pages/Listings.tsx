import {useState, useEffect} from 'react'
import axios from 'axios'
import ListingCard from '../components/ListingCard'
import BASE_URL from '../services/api'
import {useNavigate} from 'react-router-dom'

interface User {
  id: number,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  passwordDigest: string,
  phoneNumber: string,
}

type ListingProps = {
  user: User
}

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

const Listings = ({user}: ListingProps) => {
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
    <div className='all-listings-container'>
      {listings.map((listing) => (
        <div key={listing.title} onClick={() => navigateListingDetails(listing.id)}>
          <ListingCard {...listing}/>
        </div>
      ))}
    </div>
    
  </div>
)
}

export default Listings