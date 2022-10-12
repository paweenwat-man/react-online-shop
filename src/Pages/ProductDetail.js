import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../Context/ProductContext";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Ratio,
  Row,
} from "react-bootstrap";

const ProductDetail = () => {
  const { products, cart, setCart } = useProduct();
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === id);

  return (
    <div>
      <Container fluid className="py-3">
        <Button
          className="float-start"
          onClick={() => {
            navigate(-1);
          }}
        >
          ย้อนกลับ
        </Button>
        <h4 className="text-center">{product.name}</h4>
      </Container>
      <Container fluid>
        <Row g={2}>
          <Col md={6} lg={4}>
            <Ratio aspectRatio={"1x1"}>
              <Image
                style={{ objectFit: "contain" }}
                fluid
                thumbnail
                src={product.image}
                alt=""
              />
            </Ratio>
          </Col>
          <Col md={6} lg={8}>
            <Card>
              <Card.Body>
                <h5 className="bg-light bg-gradient p-2">รายละเอียดสินค้า</h5>
                <hr />
                <p>{product.description}</p>
                <h4 style={{ color: "green" }}>฿{product.price}</h4>
                <Button
                  variant="success float-end"
                  onClick={() => {
                    setCart([...cart, product]);
                    console.log(cart);
                    navigate(-1);
                  }}
                >
                  เพิ่มลงในตะกร้า
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
