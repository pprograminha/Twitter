import React from "react";
import SideNavigation from "./SideNavigation";
import UserInformation from "./UserInformation";
import SideBar from "../../components/SideBar";

import {
  Container,
  Wrapper,
} from "./styles";

const Profile = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <SideNavigation />
          <UserInformation />
          <SideBar />
        </Wrapper>
      </Container>
    </>
  );
};
export default Profile