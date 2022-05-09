import { Col, Container, Row } from "react-bootstrap";
import Title from "../components/common/Title";
import { Layout } from "../components/layout";

export default function Home({ ...rest }) {
  console.log(rest);

  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <Title hierarchy="h3">Home</Title>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
