import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shoppingcart from "../../Assets/Projects/shoppingcart.jpeg";
import netflix_ from "../../Assets/Projects/netflix_.jpeg";
import music from "../../Assets/Projects/Muzi.ko__Music.jpeg";
import google from "../../Assets/Projects/google.jpeg";
import student from "../../Assets/Projects/student.jpeg";
import socialmedia_ from "../../Assets/Projects/socialmedia_.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Muzi.ko__Music"
              description="The app is a music player which allows users to play
              music from their internal storage. User can List all Songs
              from Local Storage .Play/Pause, Next/Previous
              ,Background play/ Pause & Next/previous, Search, Add
              Songs into Playlist and Favorites, Edit Playlists. Notification
              On/Off. Recently Played ,Mostly Played."
              ghLink="https://github.com/Atheesh99/Muzi.ko__Music_App"
              demoLink="https://play.google.com/store/apps/details?id=in.atheesh.music_app&hl=en-IN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialmedia_}
              isBlog={false}
              title="Chatter"
              description="The project is a real-time chat application built using
              Flutter, utilizing Firebase for backend services such as
              authentication, database, and storage, while integrating
              the ZegoCloud SDK to enable high-quality audio and video
              communication."
              ghLink="https://github.com/Atheesh99/chatter"
              demoLink="https://play.google.com/store/apps/details?id=com.brototype.Chatter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix_}
              isBlog={false}
              title="NetFlix"
              description="A Netflix clone application built on flutter ,
              with DDD architecture and Bloc state
              management category-wise classification and
              video previews sourced from public API.
              It fetches data using the TMDB API."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={google}
              isBlog={false}
              title="Google Map Integration"
              description="This project is a Flutter-based Google Maps
              application utilizing REST APIs and GetX for state
              management, enabling features such as realtime location tracking, search functionality, and
              dynamic route navigation."
              ghLink="https://github.com/Atheesh99/google_map"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={student}
              isBlog={false}
              title="Student Management"
              description="An application made useing flutter for managing
              the basic information of a student. It uses HiveDB
              for CRUD operation and GetX for managing state
              of the app."
              ghLink="https://github.com/Atheesh99/Student_Database"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoppingcart}
              isBlog={false}
              title="shoppingcart_API_Integration"
              description="This project is a shopping cart application
              developed using Flutter, integrating REST API for
              data retrieval and utilizing the GetX state
              management ."
              ghLink="https://github.com/Atheesh99/shopping_card_API"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
