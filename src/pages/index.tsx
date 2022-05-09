import { Col, Container, Row } from "react-bootstrap";
import Button from "../components/common/Button";
import Paragraph from "../components/common/Paragraph";
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
            <Paragraph size="medium" color="red">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Paragraph>
            <Button variant="primary">label</Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
