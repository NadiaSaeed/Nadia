import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import medtcs from "../../Assets/Projects/medtcs.jpeg";
import MedTSS from "../../Assets/Projects/MedTSS.png";
import Mediqa1 from "../../Assets/Projects/corr1stepp.png";
import Mediqa11 from "../../Assets/Projects/corr2stepp.jpg";
import Mediqa2 from "../../Assets/Projects/modelm3g.png";
import crispr from "../../Assets/Projects/aihero.jpeg";
import rag from "../../Assets/Projects/th.jpeg";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Published <strong className="teal">Research Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects (2023-2024).
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medtcs}
              isBlog={false}
              title="MedTCS"
              description="This project aims to provide an Medical Terminology based Computing System (MedTCS): a lightweight post-processing solution for out-of-vocabulary(OOV) multi-word terms. MedTCS is a natural language processing system helps the distributed representation models (like: Word2Vec, GloVe) to handle the OOV problem effectively."
              ghLink="https://github.com/NadiaSaeed/MedTCS"            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MedTSS}
              isBlog={false}
              title="MedTSS"
              description="MedTSS employs a sequence of components to process a journal article, with each component gradually contributing to information extraction for the summarizer to use. The MedTSS accepts a plain scientific journal article with its keywords and MeSH terms in either TXT or XML document. The current open-source release consists of the following steps that process the source text for effective information extraction."
              ghLink="https://github.com/NadiaSaeed/MedTSS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mediqa1,Mediqa11}
              isBlog={false}
              title="MediFact-MEDIQA-CORR-2024"
              description="Weak Supervision Fine-tunned Models"
              ghLink="https://github.com/NadiaSaeed/MediFact-MEDIQA-CORR-2024"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mediqa2}
              isBlog={false}
              title="MediFact-M3G-MEDIQA-2024"
              description="VGG16 Fine-tunned Models
"
              ghLink="https://github.com/NadiaSaeed/MediFact-M3G-MEDIQA-2024"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crispr}
              isBlog={false}
              title="CRISPR-NLP-and-Deep-Generative-AI"
              description="(Upcoming)"
              ghLink="https://github.com/NadiaSaeed/CRISPR-NLP-and-Deep-Generative-AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rag}
              isBlog={false}
              title="AI-RAG-Agents"
              description="(Upcoming)"
              ghLink="https://github.com/NadiaSaeed/AI-RAG-Agents"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
