import belfair from '../assets/Belfair.jpeg'

type ListingCardProps = {
  title: string,
  imageUrl: string,
  description: string,
  itemSummary: string,
  startingBid: number,
  bidIncrement: number,
  approximateValue: number
}

const ListingCard = (props: ListingCardProps) => {

  return (
  <div>
    <img src={props.imageUrl} alt='item' />
    <h1>{props.title}</h1>
  </div>
)
}

export default ListingCard