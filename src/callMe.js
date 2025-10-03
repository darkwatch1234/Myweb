import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinktree, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const CallMe = () => {
  return ( 
    <div className="callMeParent">
      <h1 className="contact">Contact Me</h1>

      {/* WhatsApp */}
      <a
        className="whatsapp"
        href="https://wa.me/2349068328956?text=Hello! You’re reaching out to DesignersView. I’m a Front-End Developer and QA Automation Engineer. May I know your name, and how I can assist you today?"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          size="10x"
          style={{ color: "green", alignSelf: "center" }}
        />
      </a>

      <br />

      {/* LinkedIn */}
      <a
        className="linkedin"
        href="https://www.linkedin.com/in/yahaya-abdulrazaq-99b9b6272/" // replace with your LinkedIn URL
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          size="10x"
          style={{ color: "#0A66C2", marginTop: "20px" }}
        />
      </a>
    </div>
  );
}
 
export default CallMe;
