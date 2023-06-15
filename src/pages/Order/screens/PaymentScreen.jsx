import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, CircularProgress, Button } from "@mui/material";
import Logo from "../Components/Logo";
import { useStyles } from "../Components/styles";

export default function PaymentScreen() {
  const styles = useStyles;
  const navigate = useNavigate();
  return (
    <div>
      <Box sx={[styles.root, styles.navy]}>
        <Box sx={[styles.main, styles.center]}>
          <Box>
            <Logo large></Logo>
            <Typography
              gutterBottom
              sx={styles.title}
              variant="h3"
              component="h3">
              {" "}
              Please follow the instruction on the PIN pad
            </Typography>
            <CircularProgress />
          </Box>
        </Box>
        <Box>
          <Button
            onClick={() => navigate("/complete")}
            variant="contained"
            color="primary"
            sx={styles.largeButton}>
            Complete Order
          </Button>
        </Box>
      </Box>
    </div>
  );
}
