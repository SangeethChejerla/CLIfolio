"use client"
import React from "react";
import { HelpCommands,newInfoItems,socialLinks,interestItems } from "@/constants/data";
import CommandItem from "./sub-components/help-command-list";
import InfoItem from "./sub-components/about-info";
import SocialItem from "./sub-components/social-info";
import Skills from "./sub-components/skill";
import Projects from "./sub-components/project";
import InterestItem from "./sub-components/goal-item";



interface CommandItem {
  command: string;
  output: JSX.Element | string;
}

export const getOutput = (
  command: string,
  setCommand: React.Dispatch<React.SetStateAction<CommandItem[]>>
): JSX.Element | string => {
  switch (command.toLowerCase()) {
    case "help":
      return (
        <div>
        {HelpCommands.map((command, index) => (
          <CommandItem key={index} command={command} />
        ))}
      </div>
      );
    case "about":
      return (
        <div>
        {newInfoItems.map((item, index) => (
          <InfoItem key={index} item={item} />
        ))}
      </div>
      );
     // Declare the socialLinks variable
    case "socials":
      return (
        <div>
          {socialLinks.map((item, index) => (
            <SocialItem key={index} item={item} />
          ))}
        </div>
      );
    case "skills":
      return (
 <Skills />
      );


    case "projects":
      return (
<Projects/>
      );

    case "clear":
      setCommand([]);
      return "";


    case "resume":
      window.open(
        "https://drive.google.com/file/d/1IKx6bvwpaMueK7BAwQp-a5GkBJoZNj9u/view?usp=sharing",
        "_blank"
      );
      return "Heading to resume...";



    case "experience":
      return (
      <div>
        still not experienced enough to write this section :/
      </div>
      );

// Import the ItemType type

    case "goals":
      return (
        <div>
          {interestItems.map((item, index) => (
            <InterestItem key={index} item={item} />
          ))}
        </div>
      );



    default:
      return (
        <div>
          <span className="text-red-500"> Command not found. </span> <br />
          Type <span className="text-teal-400">help</span> to get a list of
          available commands.
        </div>
      );
  }
};
