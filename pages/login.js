import { useContext, useState } from "react";
import {
  Form,
  Col,
  Container,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import AppContext from "../context/AppContext";
import { registerUser } from "../lib/auth";

const login = () => {
  const appContext = useContext(AppContext);
  const [data, setData] = useState({ identifier: "", password: "" });

  const handleLogin = () => {};

  return (
    <Container>
      <Row>
        <Col>
          <div className="paper">
            <div className="header">
              <h2>ログイン</h2>
            </div>
          </div>
          <section className="wrapper">
            <Form>
              <fieldset>
                <FormGroup>
                  <Label>メールアドレス：</Label>
                  <Input
                    type="email"
                    name="identifier"
                    style={{ height: 50, fontSize: "1.2rem" }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>パスワード：</Label>
                  <Input
                    type="password"
                    name="password"
                    style={{ height: 50, fontSize: "1.2rem" }}
                  />
                </FormGroup>
                <span>
                  <a href="">
                    <small>パスワードをお忘れですか？</small>
                  </a>
                </span>
                <Button
                  style={{ float: "right", width: 120 }}
                  color="primary"
                  onClick={() => {
                    handleLogin();
                  }}
                >
                  ログイン
                </Button>
              </fieldset>
            </Form>
          </section>
        </Col>
      </Row>
      <style jsx>
        {`
          .paper {
            text-align: center;
            margin-top: 50px;
          }
          .header {
            width: 100%;
            margin-bottom: 30px;
          }
          .wrapper {
            padding: 10px 30px 20px 30px;
          }
        `}
      </style>
    </Container>
  );
};

export default login;
