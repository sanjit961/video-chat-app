import { useState } from "react";
import "./App.css";
import styled from "@emotion/styled";
import { AppBar, Typography } from "@mui/material";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";

// Styled components using Emotion
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: "30px 100px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "600px",
  border: "2px solid black",
  [theme.breakpoints.down("xs")]: {
    width: "90%",
  },
}));

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

function App() {
  return (
    <Wrapper>
      <StyledAppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Video chat
        </Typography>
      </StyledAppBar>
      {/* VideoPlayer */}
      <VideoPlayer />

      <Options>
        <Notifications />
      </Options>
      {/* Options -> Notifications */}
    </Wrapper>
  );
}

export default App;
