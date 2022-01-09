function Main(props) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>

      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {props.items.map((item) => {
            if (item.amount > 0) {
              return (
                <li>
                  <img
                    className="cart--item-icon"
                    src={`./assets/icons/${item.id < 10 ? "00" : "0"}${
                      item.id
                    }-${item.name}.svg`}
                    alt={item.name}
                  />
                  <p>{item.name}</p>
                  <button
                    className="quantity-btn remove-btn center"
                    onClick={function (event) {
                      props.setItems(props.removeFromCart(props.items, item));
                    }}
                  >
                    -
                  </button>
                  <span className="quantity-text center">{item.amount}</span>
                  <button
                    className="quantity-btn add-btn center"
                    onClick={function (event) {
                      props.setItems(props.addToCart(props.items, item));
                    }}
                  >
                    +
                  </button>
                </li>
              );
            }
          })}
        </ul>
      </div>

      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>

        <div>
          <span className="total-number">{`£${props.totalValue()}`}</span>
        </div>
      </div>
    </main>
  );
}
export default Main;
