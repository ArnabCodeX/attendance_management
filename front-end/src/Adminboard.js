import { Button, Drawer, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminContent from "./components/AdminContent";
function Adminboard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [studentDialogOpen, setStudentDialogOpen] = useState(false);
  return (
    <div>
      <header
        style={{ backgroundColor: "#6565bb", height: "40px", display: "flex" }}
      >
        <div style={{ width: "20%", marginTop: "5px" }}>
          <MenuIcon
            style={{ color: "white", margin: "-5px 5px" }}
            onClick={() => setIsOpen(true)}
          />
          <Typography
            variant="h6"
            style={{ color: "white", display: "inline", marginLeft: "5px" }}
          >
            Admin
          </Typography>
        </div>

        <div style={{ width: "80%" }}>
          <Button
            style={{ marginLeft: "627px", color: "white" }}
            onClick={() => setStudentDialogOpen(true)}
          >
            Student Register
          </Button>
          <Button style={{ marginLeft: "20px", color: "white" }}>
            Faculty Register
          </Button>
          <LogoutIcon
            style={{
              position: "relative",
              top: "7px",
              left: "80px",
              color: "white",
            }}
            onClick={() => props.setIsValid(false)}
          />
        </div>
      </header>
      <Drawer anchor="left" open={isOpen}>
        <div
          style={{
            backgroundColor: "#e5eded",
            height: "100vh",
            width: "200px",
          }}
        >
          <MenuIcon
            onClick={() => setIsOpen(false)}
            style={{
              position: "relative",
              color: "#6565bb",
              top: "7px",
              left: "9px",
            }}
          />
        </div>
      </Drawer>
      <AdminContent
        studentDialogOpen={studentDialogOpen}
        setStudentDialogOpen={setStudentDialogOpen}
      />
    </div>
  );
}

export default Adminboard;
