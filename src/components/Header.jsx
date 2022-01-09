function Header(props) {
  return (
    <header id="store">
      <h1>Grocero</h1>
      <ul className="item-list store--item-list">
        {props.items.map((item) => (
          <li>
            <div className="store--item-icon ">
              <img
                src={`assets/icons/${item.id < 10 ? "00" : "0"}${item.id}-${
                  item.name
                }.svg`}
                alt={item.name}
              />
            </div>
            <button
              onClick={function (event) {
                props.setItems(props.addToCart(props.items, item));
              }}
            >
              {" "}
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
