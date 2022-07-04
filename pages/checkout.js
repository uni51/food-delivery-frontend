import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Row, Col } from "reactstrap";
import Cart from "../components/Cart/index";
import CheckOutForm from "../components/Checkout/CheckOutForm";

const checkout = () => {
  const stripePromise = loadStripe(
    "pk_test_51IqSfbE0laIT5LMFVotGorZriRrjEvDa1keEmw6w5REcLaciFkD5IbZDj27niAMrEF1KZWiAUq4czZLR56EoIJxy00zFNgt5qD"
  );
  return (
    <Row>
      <Col style={{ paddingRight: 0 }} sm={{ size: 3, order: 1, offset: 2 }}>
        <h1 style={{ margin: 20, fontSize: 20, textAlign: "center" }}>
          チェックアウト
        </h1>
        <Cart />
      </Col>
      <Col style={{ paddingLeft: 5 }} sm={{ size: 6, order: 2 }}>
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </Col>
    </Row>
  );
};

export default checkout;
