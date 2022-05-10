import { Col, Container, Row } from "react-bootstrap";
import Button from "../components/common/Button";
import IconButton from "../components/common/IconButton/IconButton";
import MovieCategory from "../components/common/Movie/MovieCategory";
import Paragraph from "../components/common/Paragraph";
import Title from "../components/common/Title";
import { Layout } from "../components/layout";

export default function Home() {
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
            <IconButton iconName="home" />
            <div
              style={{
                backgroundColor: "#ffba3a",
                padding: "20px",
              }}
            >
              <MovieCategory label="label" />
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
