import ItemList from "./ItemList";
const RestaurantCategory = (props) => {
  const { data , showItems , setShowIndex} = props;
  const handleClick = () => {
    setShowIndex();

  }
  // console.log(data);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 p-4 shadow-lg ">
        <div className="flex justify-between hover:cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        { showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
