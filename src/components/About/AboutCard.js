import React from "react";
import Card from "react-bootstrap/Card";
import {FaCaretRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           I'm a data scientist fueled by a fascination with language and its potential in the age of AI.  My Ph.D. in Computer Science from <a href="https://www.nu.edu.pk/" target="_blank" rel="noopener noreferrer" className="teal-link">FAST-NUCES</a> equips me with the technical prowess to unlock insights from text.
<br /> Natural Language Processing (NLP) is my playground, where I craft innovative solutions to bridge the gap between humans and machines.
<br/> I'm passionate about leveraging NLP to solve real-world challenges.  From enhancing healthcare diagnostics to exploring the future of gene editing, my work delves into the exciting intersection of language and cutting-edge technology.
<br/>
<br/>

          </p>
             <h2 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
               <strong className="teal">Join Me</strong> on This Journey of Discovery, Where the Possibilities of NLP and AI Continue to Unfold.
            </h2>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
