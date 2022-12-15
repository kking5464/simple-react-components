import React from "react";
import "./TeamMemberProfileImage.scss";

export interface TeamMemberProfileImageProps {
  teamMemberImage: string;
}

const TeamMemberProfileImage = (props: TeamMemberProfileImageProps) => {
  return (
    <div className="team-member-profile-image">
      <img className="team-member-profile-image__img" src={props.teamMemberImage} /> 
    </div>
  );
};

export default TeamMemberProfileImage;