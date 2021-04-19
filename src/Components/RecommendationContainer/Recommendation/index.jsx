import React from "react";
import Button from "../../Button";
import {
  Container,
  ProfileData,
  Avatar,
  Data,

} from "./styles";
const Recommendation = () => {
  return (
    <Container>
      <ProfileData>
        <Avatar />
        <Data>
          <strong>Marcos Proença</strong>
          <span>@mz_pc</span>

        </Data>
      </ProfileData>
      <Button outlined>Seguir</Button>
    </Container>
  );
};

export default Recommendation;
