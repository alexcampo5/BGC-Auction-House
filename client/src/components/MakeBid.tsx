import { userInfo } from "os"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ListingCard from "./ListingCard"
import axios from "axios"
import BASE_URL from "../services/api"


interface User {
  id: number,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  passwordDigest: string,
  phoneNumber: string,
}

interface Listing {
  id: number,
  title: string,
  imageUrl: string,
  description: string,
  itemSummary: string,
  startingBid: number,
  bidIncrement: number,
  approximateValue: number
}

interface BidProps{
  user: User,
  listing: Listing
}

interface BidValues{
  userId: number,
  listingId: number,
  bidAmount: number | null,
  maxBid?: number | null,
  bidIncrement?: number | null
}

const MakeBid = ({user, listing}: BidProps) => {

  const initialFormValues: BidValues = {
    userId: user.id,
    listingId: listing.id!,
    bidAmount: null,
    maxBid: null,
    bidIncrement: null,
  }

  const navigate = useNavigate()
  const [formValues, setFormValues] = useState(initialFormValues)

  const handleBidSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    let bid = await axios.post(`${BASE_URL}/bids/`, formValues)
    console.log(bid)
    setFormValues(initialFormValues)
    navigate('/items')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
    console.log(formValues)
  }
  return (
  <div>
    <form onSubmit={handleBidSubmit}>
      <div>
        <input type='number' onChange={handleChange} name='bidAmount' placeholder='Bid Amount' value={formValues.bidAmount!} required/>
      </div>
      <div>
        <input type='number' onChange={handleChange} name='maxBid' placeholder='Optional: Max Bid' value={formValues.maxBid!} />
      </div>
      <div>
        <input type='number' onChange={handleChange} name='bidIncrement' placeholder='Optional: Bid Increment' value={formValues.bidIncrement!}/>
      </div>
      <button>Submit Bid</button>
    </form>
  </div>
)
}

export default MakeBid