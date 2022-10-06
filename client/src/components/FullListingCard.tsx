import { useParams } from "react-router-dom"
import axios from 'axios'
import BASE_URL from "../services/api"
import { useEffect, useState } from "react"


interface ListingCard {
  title: string,
  imageUrl: string,
  description: string,
  itemSummary: string,
  startingBid: number,
  bidIncrement: number,
  approximateValue: number
}

const FullListingCard = () => {

  let initialItemDetails: ListingCard = {
    title: '',
    imageUrl: '',
    description: '',
    itemSummary: '',
    startingBid: 0,
    bidIncrement: 0,
    approximateValue: 0
  }

  let {itemId} = useParams()
  const [fullItemDetails, setFullItemDetails] = useState<ListingCard>(initialItemDetails)

  const getListingDetails = async () => {
    let itemDetails = await axios.get(`${BASE_URL}/listings/${itemId}`)
    setFullItemDetails(itemDetails.data)
  }

  useEffect(() => {
    getListingDetails()
  }, [])

  return (
  <div>
    <h1>{fullItemDetails.title}</h1>
    <img src={fullItemDetails.imageUrl} />
    <p>{fullItemDetails.description}</p>
    <h3>{fullItemDetails.itemSummary}</h3>
    <h4>Approximate Value: {fullItemDetails.approximateValue}</h4>
    <h4>Starting Bid: {fullItemDetails.startingBid}</h4>
    <h4>Bid Increment: {fullItemDetails.bidIncrement}</h4>
  </div>
)
}

export default FullListingCard