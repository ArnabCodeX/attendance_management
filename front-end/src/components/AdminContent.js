import { Grid, Card, Container } from "@mui/material";
import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import StudentAddDialog from "./StudentAddDialog";
import FacultyAddDialog from "./FacultyAddDialog";
function AdminContent(props) {
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };

  return (
    <div style={{ marginTop: "30px", height:'100%'}}>
      <Container>
        <StudentAddDialog
          open={props.studentDialogOpen}
          setOpen={props.setStudentDialogOpen}
        />
        <FacultyAddDialog
          open={props.facultyDialogOpen}
          setOpen={props.setfacultyDialogOpen}
        /> 
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card elevation={8} style={{ height: "270px" }}>
              <ReactEcharts option={option} />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card elevation={8} style={{ height: "270px" }}>
              <ReactEcharts option={option} />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card elevation={8} style={{ height: "270px" }}>
              <ReactEcharts option={option} />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card elevation={8} style={{ height: "270px" }}>
              <ReactEcharts option={option} />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AdminContent;
