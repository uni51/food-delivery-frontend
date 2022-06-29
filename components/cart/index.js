import Link from "next/link";
import { Badge, Button, Card, CardBody, CardTitle } from "reactstrap";

const Cart = () => {
  return (
    <div>
      <Card>
        <CardTitle>注文一覧</CardTitle>
        <hr />
        <CardBody>
          <div>
            <small>料理：</small>
          </div>
          <div>
            <div className="items-one">
              <div>
                <span id="item-price">&nbsp; 200円</span>
                <span id="item-name">&nbsp; サラダ</span>
              </div>
            </div>
            <div>
              <Button>+</Button>
              <Button>-</Button>
              <span id="item-quantity">1つ</span>
            </div>
            <div>
              <Badge>
                <h5>合計：</h5>
                <h3>1200円</h3>
              </Badge>
              <div>
                <Link href="/checkout">
                  <Button>
                    <a>注文する</a>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cart;
