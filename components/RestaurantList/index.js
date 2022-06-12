import Link from "next/link";
import { CardImg, Card, Col, Row, CardBody, CardTitle } from "reactstrap";

const RestaurantList = () => {
  return (
    <Row>
      <Col>
        <Card>
          <CardImg src="" />
          <CardBody>
            <CardTitle>Italian Restaurant</CardTitle>
            <CardTitle>イタリアンのレストランです。</CardTitle>
          </CardBody>
          <div className="card-footer">
            <Link
              href="/restaurant?id=62a5211d536abd6cc29f1abc"
              as="/restaurant/62a5211d536abd6cc29f1abc"
            >
              <a className="btn btn-primary">もっと見る</a>
            </Link>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default RestaurantList;
