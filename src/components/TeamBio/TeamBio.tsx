import React from "react";
import "./TeamBio.scss";
import TeamMemberProfileImage from "../TeamMemberProfileImage";
import TextLink from "../TextLink";

export interface TeamBioProps {
  teamMemberImage: string;
  teamMemberName: string;
  teamMemberTitle?: string;
  linkUrl: string;
}

const TeamBio = (props: TeamBioProps) => {
  return (
    <div className="team-bio">
      <TeamMemberProfileImage teamMemberImage={props.teamMemberImage} />
      <p className="team-bio__team-member-name">{props.teamMemberName}</p>
      <p className="team-bio__team-member-title">{props.teamMemberTitle}</p>
      <TextLink linkUrl={props.linkUrl} linkText={"View bio"} />      
    </div>
  );
};

export default TeamBio;