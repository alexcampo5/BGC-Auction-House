import { useParams } from "react-router-dom"
import axios from 'axios'
import BASE_URL from "../services/api"
import { useEffect, useState } from "react"
import MakeBid from "./MakeBid"


interface ListingCard {
  id: number,
  title: string,
  imageUrl: string,
  description: string,
  itemSummary: string,
  startingBid: number,
  bidIncrement: number ,
  approximateValue: number 
}

interface User {
  id: number,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  passwordDigest: string,
  phoneNumber: string,
}

interface ListingProps {
  user: User
}

const FullListingCard = ({user}: ListingProps) => {

  let initialItemDetails: ListingCard= {
    id: 0,
    title: '',
    imageUrl: '',
    description: '',
    itemSummary: '',
    startingBid: 0,
    bidIncrement: 0,
    approximateValue: 0
  }

  let {itemId} = useParams()
  const [fullItemDetails, setFullItemDetails] = useState<ListingCard | null>(null)

  const getListingDetails = async () => {
    let itemDetails = await axios.get(`${BASE_URL}/listings/${itemId}`)
    setFullItemDetails(itemDetails.data)
  }

  useEffect(() => {
    getListingDetails()
  }, [])

  return fullItemDetails ? (
  <div>
    <h1>{fullItemDetails.title}</h1>
    <img src={fullItemDetails.imageUrl} />
    <p>{fullItemDetails.description}</p>
    <h3>{fullItemDetails.itemSummary}</h3>
    <h4>Approximate Value: {fullItemDetails.approximateValue}</h4>
    <h4>Starting Bid: {fullItemDetails.startingBid}</h4>
    <h4>Bid Increment: {fullItemDetails.bidIncrement}</h4>
    <MakeBid listing={fullItemDetails} user={user}/>
  </div>
) : (
  <h1>Loading</h1>
)
}

export default FullListingCard