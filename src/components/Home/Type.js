import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
           "Explore the Possibilities with Dr. Nadia Saeed",
           "Bridging the Gap Between Humans and Machines",
           "Unlocking the Secrets of Text",
           "Where Language Meets Technology",
           "Transforming Text into Actionable Insights",
           "Let's Revolutionize Communication with NLP",
           "Craft Intelligent Language Solutions with NLP",
           "Guide to the Fascinating World of NLP",
           "Supercharge Communication and Information Access",
           "Shaping Tomorrow with Innovative NLP Solutions"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
