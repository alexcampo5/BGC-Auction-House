import { useParams } from "react-router-dom"
import axios from 'axios'
import BASE_URL from "../services/api"
import { useEffect, useState } from "react"
import MakeBid from "./MakeBid"


interface User {
  id: number,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  passwordDigest: string,
  phoneNumber: string,
}

interface Bids {
  userId: number,
  listingId: number,
  bidAmount: number, 
  maxBid: number, 
  bidIncrement: number,
  User: User
}

interface ListingCard {
  id: number,
  title: string,
  imageUrl: string,
  description: string,
  itemSummary: string,
  startingBid: number,
  bidIncrement: number ,
  approximateValue: number ,
  Bids: Bids[]
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
    approximateValue: 0,
    Bids: []
  }

  let {itemId} = useParams()
  const [fullItemDetails, setFullItemDetails] = useState<ListingCard | null>(null)
  const [allBids, setAllBids] = useState<Bids[] | null>()

  const getListingAndBidDetails = async () => {
    let itemDetails = await axios.get(`${BASE_URL}/listings/${itemId}`)
    setFullItemDetails(itemDetails.data)

    let bids = await axios.get(`${BASE_URL}/bids/${itemId}`)
    if (bids.data.length > 0){
      console.log(bids.data)
      sortBids(bids.data)
    } else{
      setAllBids(null)
    }
  }

  const sortBids = (array: Bids[]) => {
    console.log(array)
    let sortedBidArray = array.sort((a , b) => {
      return b.bidAmount-a.bidAmount
    })
    console.log(sortedBidArray)
    setAllBids(sortedBidArray)
  }

  useEffect(() => {
    getListingAndBidDetails()
  }, [])

//if else returns


  if (fullItemDetails && allBids){
    return (
      <div>
        <h1>{fullItemDetails.title}</h1>
        <img src={fullItemDetails.imageUrl} />
        <p>{fullItemDetails.description}</p>
        <h3>{fullItemDetails.itemSummary}</h3>
        <h4>Approximate Value: {fullItemDetails.approximateValue}</h4>
        <h4>Starting Bid: {fullItemDetails.startingBid}</h4>
        <h4>Bid Increment: {fullItemDetails.bidIncrement}</h4>
        <h1>Current bids:</h1>
        {allBids!.map((bid: Bids, index: number) => (
          <h3>{index + 1}: {bid.User.firstName} {bid.User.lastName}: ${bid.bidAmount}</h3>
        ))}
        <MakeBid listing={fullItemDetails} user={user}/>
      </div>
    )
  } else if (fullItemDetails && !allBids){
    return (
    <div>
    <h1>{fullItemDetails.title}</h1>
    <img src={fullItemDetails.imageUrl} />
    <p>{fullItemDetails.description}</p>
    <h3>{fullItemDetails.itemSummary}</h3>
    <h4>Approximate Value: {fullItemDetails.approximateValue}</h4>
    <h4>Starting Bid: {fullItemDetails.startingBid}</h4>
    <h4>Bid Increment: {fullItemDetails.bidIncrement}</h4>
    <h1>Current bids: None</h1>
    <MakeBid listing={fullItemDetails} user={user}/>
    </div>
    )
  }else{
    return <h1>Loading...</h1>
  }



//   return fullItemDetails && allBids ? (
//   <div>
//     <h1>{fullItemDetails.title}</h1>
//     <img src={fullItemDetails.imageUrl} />
//     <p>{fullItemDetails.description}</p>
//     <h3>{fullItemDetails.itemSummary}</h3>
//     <h4>Approximate Value: {fullItemDetails.approximateValue}</h4>
//     <h4>Starting Bid: {fullItemDetails.startingBid}</h4>
//     <h4>Bid Increment: {fullItemDetails.bidIncrement}</h4>
//     <h1>Current bids:</h1>
//     {allBids!.map((bid: Bids, index: number) => (
//       <h3>{index + 1}: {bid.User.firstName} {bid.User.lastName}: ${bid.bidAmount}</h3>
//     ))}
//     <MakeBid listing={fullItemDetails} user={user}/>
//   </div>
// ) : (
//   <h1>Loading</h1>
// )
}

export default FullListingCard