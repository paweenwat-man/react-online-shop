import React, { useContext } from "react";
import { useProduct } from "../Context/ProductContext";
import { Col, Row, Image, Table, Button, Container } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pager from "../Components/Pager";

const Products = () => {
  const { products, cart, setCart } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const page = parseInt(searchParams.get("page")) || 1;
  const perPage = parseInt(searchParams.get("per_page")) || 10;

  let totalPrice = 0;
  console.log(cart);
  cart.forEach((item) => {
    totalPrice += parseFloat(item.price);
  });

  const productRecords = products
    .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
    .map((item) => {
      return (
        <tr
          style={{ cursor: "pointer" }}
          key={item.id}
          onClick={() => navigate(`/product/${item.id}`)}
        >
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
          <td>
            <Image thumbnail fluid src={item.image} alt="" />
          </td>
        </tr>
      );
    });

  const cartRecords = cart.map((item, index) => {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          <Button
            variant="danger"
            onClick={() => {
              setCart(cart.filter((i) => i.id !== item.id));
            }}
          >
            นำออก
          </Button>
        </td>
      </tr>
    );
  });

  const pagerMessage = `สินค้าทั้งหมด ${products.length} รายการ, ${Math.ceil(
    products.length / perPage
  )} หน้า`;

  return (
    <div>
      <Pager
        total={Math.ceil(products.length / perPage)}
        active={page}
        message={pagerMessage}
      />
      <Container fluid>
        <Row>
          <Col md={6} lg={8}>
            <h4 className="text-center">รายการสินค้า</h4>
            <Table border={1} striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>{productRecords}</tbody>
            </Table>
          </Col>
          <Col md={6} lg={4}>
            <h4 className="text-center">ตะกร้าสินค้า</h4>
            <Table border={1} striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ลำดับ</th>
                  <th>ID</th>
                  <th>ชื่อสินค้า</th>
                  <th>ราคา</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{cartRecords}</tbody>
            </Table>
            <h6 className="float-start">ราคาทั้งหมด {totalPrice} บาท</h6>
            <Button
              className="float-end"
              variant="danger"
              onClick={() => {
                setCart([]);
              }}
            >
              ลบสินค้าทั้งหมด
            </Button>
          </Col>
        </Row>
      </Container>

      <Pager
        total={Math.ceil(products.length / perPage)}
        active={page}
        message={pagerMessage}
      />
    </div>
  );
};

export default Products;
