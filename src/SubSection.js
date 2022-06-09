import { Star } from "./Star";
export function SubSection(props) {
  const Styles = {
    top: "0.5rem",
    right: "0.5rem"
  };

  let cartName = !props.value.addedToCart ? props.value.button_name : "Remove";
  const handleCart = () => {
    console.log(cartName);
    //passing data child to parent using call back ();

    if (cartName === props.value.button_name) props.parent(1, props.value.id);
    else props.parent(-1, props.value.id);
  };
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <div
          className="badge bg-dark text-white position-absolute"
          style={Styles}
        >
          {props.value.sale_badge}
        </div>
        <img className="card-img-top" src={props.value.image} alt="..." />
        <div className="card body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{props.value.product_name}</h5>
            <Star />
            <span className="text-muted text-decoration-line-through">
              {props.value.price_strike}
            </span>{" "}
            {props.value.product_price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div id="button-name" className="text-center">
            <button
              style={{ marginTop: "auto" }}
              className="btn btn-outline-dark mt-auto"
              href="#1"
              onClick={handleCart}
            >
              {cartName}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
