import React from "react";
import { useNavigate } from "react-router-dom";

import {
  CardActionArea,
  Card,
  Box,
  Typography,
  Container,
} from "@mui/material/";
import TouchAppIcon from "@mui/icons-material/TouchApp";

import Logo from "./Components/Logo";
import { useStyles } from "./Components/styles";

import "./Components/Order.css";

function OrderOnline() {
  const styles = useStyles;
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/Choose");
  };

  return (
    <div className="orderContainer">
      <Container maxWidth="sm" sx={[styles.containerMenu]}>
        <Card>
          <CardActionArea onClick={handleButtonClick}>
            <Box sx={[styles.root, styles.red]}>
              <Box sx={[styles.main, styles.center]}>
                <Typography component="h6" variant="h6">
                  Fast & Easy
                </Typography>
                <Typography component="h1" variant="h1">
                  Order <br /> & Pay <br /> here
                </Typography>
                <TouchAppIcon fontSize="large"></TouchAppIcon>
              </Box>
              <Box sx={[styles.center, styles.green]}>
                <Logo large></Logo>
                <Typography component="h5" variant="h5">
                  Touch To Start
                </Typography>
              </Box>
            </Box>
          </CardActionArea>
        </Card>
      </Container>
    </div>
  );
}

export default OrderOnline;
