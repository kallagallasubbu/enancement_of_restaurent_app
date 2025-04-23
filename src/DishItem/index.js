import './index.css'

const DishItem = ({
  dishDetails,
  cartItems,
  addItemToCart,
  removeItemFromCart,
}) => {
  const {
    dishId,
    dishName,
    dishType,
    dishPrice,
    dishCurrency,
    dishDescription,
    dishImage,
    dishCalories,
    addonCat,
    dishAvailability,
  } = dishDetails

  const onIncreaseQuantity = () => addItemToCart(dishDetails)
  const onDecreaseQuantity = () => removeItemFromCart(dishDetails)

  const getQuantity = () => {
    const cartItem = cartItems.find(item => item.dishId === dishId)
    return cartItem ? cartItem.quantity : 0
  }

  const renderControllerButton = () => (
    <div className="controller-container">
      <button
        className="controller-button"
        type="button"
        onClick={onDecreaseQuantity}
      >
        -
      </button>
      <p className="quantity">{getQuantity()}</p>
      <button
        className="controller-button"
        type="button"
        onClick={onIncreaseQuantity}
      >
        +
      </button>
    </div>
  )

  return (
    <li className="dish-item-container">
      <div className="dish-indicator">
        <div
          className={`indicator-border ${
            dishType === 1 ? 'non-veg-border' : 'veg-border'
          }`}
        >
          <div
            className={`indicator-round ${
              dishType === 1 ? 'non-veg-round' : 'veg-round'
            }`}
          />
        </div>
      </div>
      <div className="dish-details-container">
        <h1 className="dish-name">{dishName}</h1>
        <p className="dish-currency-price">
          {dishCurrency} {dishPrice}
        </p>
        <p className="dish-description">{dishDescription}</p>
        {dishAvailability ? (
          renderControllerButton()
        ) : (
          <p className="not-availability-text">Not available</p>
        )}
        {addonCat.length !== 0 && (
          <p className="addon-availability-text">Customizations available</p>
        )}
      </div>
      <div className="dish-meta-container">
        <p className="dish-calories">{dishCalories} calories</p>
        <img className="dish-image" alt={dishName} src={dishImage} />
      </div>
    </li>
  )
}

export default DishItem
