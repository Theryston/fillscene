import { Col, Container, Row } from "react-bootstrap";
import Title from "../../components/common/Title";
import { Layout } from "../../components/layout";

export default function Movie() {
  return (
    <Layout title="Movie title">
      <Container fluid>
        <Row>
          <Col lg={12}>
            <Title hierarchy="h3">Movie</Title>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
