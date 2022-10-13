import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useShop } from "../Context/ShopContext";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Ratio,
  Row,
} from "react-bootstrap";
import Popup from "../Components/Popup";

const ProductDetail = () => {
  const [showPopup, setShowPopup] = useState(false)
  const { products, cart, setCart } = useShop();
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === id);

  const handleClose = () => {
    setShowPopup(false)
    setTimeout(()=>navigate(-1), 200)
  }

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
                    setShowPopup(true)
                  }}
                >
                  เพิ่มสินค้า
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Popup
        title="เพิ่มสินค้าเรียบร้อยแล้ว"
        body="สินค้าถูกเพิ่มลงในตะกร้าสินค้าเรียบร้อยแล้ว"
        footer={
          <Button variant="success" onClick={handleClose}>เข้าใจแล้ว</Button>
        }
        show={showPopup}
        onCancel={handleClose}
      />
    </div>
  );
};

export default ProductDetail;
