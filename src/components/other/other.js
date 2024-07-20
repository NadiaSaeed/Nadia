import React from "react";
import { Container, Row } from "react-bootstrap";
import PhotoAlbum from "react-photo-album";

const photos = [
  { src: require("../../Assets/art/im1.png"), width: 800, height: 900 },
  { src: require("../../Assets/art/im2.png"), width: 800, height: 1000 },
  { src: require("../../Assets/art/im3.png"), width: 1000, height: 900 },
];

export default function Other() {
  return (
  <Container fluid className="about-section">
         <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <h1 style={{ fontSize: "2.4em", paddingBottom: "20px" }}>
            Life-Changing <strong className="teal">Moments</strong>
          </h1>
          <p style={{ fontSize: "1.2em", textAlign: "justify" }}>
            I am excited to share some pivotal moments in my journey that have             profoundly impacted my career and personal growth. These experiences             have shaped my approach to research and innovation, and I hope they             inspire others as well.
          </p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ fontSize: "1.2em" }}>
              <strong>
                <a
                  href="https://www.linkedin.com/posts/nadia-saeed-phd-408980245_grateful-academicjourney-milestone-activity-7128079647749124096-IXBM?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="teal-link"
                >
                  My Career Milestone

                </a>
              </strong>
              : Reflecting on a significant career achievement and its impact on my professional trajectory.

            </li>
            <li style={{ fontSize: "1.2em" }}>
              CCS, FAST Islamabad, PhD(CS) (Dec-2023)
            </li>
          </ul>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Inspirational <strong className="teal">Growth</strong>
            </h1>
            <p style={{fontSize: "1.2em"}}>
             : Sharing an inspiring moment of personal and professional growth that has been a turning point in my journey.
  
                <strong>
                <a
                  href="hhttps://www.linkedin.com/posts/nadia-saeed-phd-408980245_icteducation-techinnovation-fineartstech-activity-7153085542392356864-iQDw?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="teal-link"
                > @FJWU(2023)
                </a>
              </strong>
            </p>
  <PhotoAlbum layout="rows" photos={photos} />
  </Row>
  </Container>
  </Container> );
}
