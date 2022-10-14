import { useEffect, useState } from "react"

interface Bids {
  userId: number,
  listingId: number,
  bidAmount: number, 
  maxBid: number, 
  bidIncrement: number
}


type ListingCardProps = {
  id: number,
  title: string,
  imageUrl: string,
  description: string,
  itemSummary: string,
  startingBid: number,
  bidIncrement: number,
  approximateValue: number,
  Bids: Bids[],
}

const ListingCard = (props: ListingCardProps) => {
  const [maxBid, setMaxBid] = useState<number>(0)

  const displayMaxBid = () => {
    if (props.Bids.length > 0) {
      let maxBid = props.Bids.sort((a , b) => {
        return b.bidAmount-a.bidAmount
      })
      console.log(maxBid[0].bidAmount)
      setMaxBid(maxBid[0].bidAmount)
    } else{
      return 0
    }
  }

useEffect(() => {
  displayMaxBid()
}, [])

  return (
  <div className='all-listings-card'>
    <img src={props.imageUrl} alt='item' className="all-listings-photo"/>
    <h1>{props.title}</h1>
    <h3>Current Bid: ${maxBid}</h3>
  </div>
)
}

export default ListingCard