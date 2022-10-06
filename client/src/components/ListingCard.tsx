type ListingCardProps = {
  id: number,
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
  <div className='all-listings-card'>
    <img src={props.imageUrl} alt='item' className="all-listings-photo"/>
    <h1>{props.title}</h1>
  </div>
)
}

export default ListingCard