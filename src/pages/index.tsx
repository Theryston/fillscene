import { Col, Container, Row } from "react-bootstrap";
import Button from "../components/common/Button";
import IconButton from "../components/common/IconButton/IconButton";
import MovieCategory from "../components/Movie/MovieCategory";
import Paragraph from "../components/common/Paragraph";
import Title from "../components/common/Title";
import { Layout } from "../components/layout";
import MovieCard from "../components/Movie/MovieCard";

export default function Home() {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col
            lg={11}
            style={{
              marginLeft: "auto",
            }}
          >
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
            <MovieCard
              movie={{
                _id: "1",
                title: "Spider-Man No Way Home",
                posters: [
                  {
                    aspect_ratio: 0.667,
                    height: 3000,
                    iso_639_1: "en",
                    file_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
                    vote_average: 6.318,
                    vote_count: 102,
                    width: 2000,
                    base_url: "https://image.tmdb.org/t/p/original",
                    sizes: [
                      {
                        height: 3000,
                        width: 2000,
                        label: "original",
                        url: "https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
                      },
                      {
                        height: 750,
                        width: 500,
                        label: "w500",
                        url: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
                      },
                    ],
                  },
                ],
                genres: [
                  {
                    _id: "1",
                    tmdb_id: 28,
                    name: "Action",
                  },
                  {
                    _id: "2",
                    tmdb_id: 12,
                    name: "Adventure",
                  },
                ],
              }}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
