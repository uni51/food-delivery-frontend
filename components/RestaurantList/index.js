import Link from "next/link";
import { CardImg, Card, Col, Row, CardBody, CardTitle } from "reactstrap";

const RestaurantList = () => {
  return (
    <Row>
      <Col xs="6" sm="4">
        <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
          <CardImg
            src="http://localhost:1337/uploads/restaurant1_97218f501c.jpeg"
            top={true}
            style={{ height: 250 }}
          />
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
      <style jsx>
        {`
          a {
            color: white;
          }
          a: link {
            text-decoration: none;
            color: white;
          }
          a: hover {
            color: white;
          }
          .card-columns {
            column-count: 3;
          }
        `}
      </style>
    </Row>
  );
};

export default RestaurantList;
