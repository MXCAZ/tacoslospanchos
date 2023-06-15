import React, { useContext } from "react";
import { useEffect } from "react";
import { createOrder } from "../actions";
import { Store } from "../Store";

import {
  Box,
  Typography,
  CircularProgress,
  Button,
  Alert,
} from "@mui/material";
import { useStyles } from "../Components/styles";
import Logo from "../Components/Logo";
import { useNavigate } from "react-router-dom";

export default function CompleteOrderScreen() {
  const { state, dispatch } = useContext(Store);
  const { order } = state;
  const { loading, error, newOrder } = state.orderCreate;
  const styles = useStyles;
  const navigate = useNavigate();

  useEffect(() => {
    if (order.orderItems.length > 0) {
      createOrder(dispatch, order);
    }
  }, [order]);

  return (
    <div>
      <Box sx={[styles.root, styles.navy]}>
        <Box sx={[styles.main, styles.center]}>
          <Box>
            <Logo large></Logo>
            {loading ? (
              <CircularProgress></CircularProgress>
            ) : error ? (
              <Alert>{error}</Alert>
            ) : (
              <>
                <Typography
                  gutterBottom
                  sx={styles.title}
                  variant="h3"
                  component="h3">
                  Your order has been placed
                </Typography>
                <Typography
                  gutterBottom
                  sx={styles.title}
                  variant="h3"
                  component="h3">
                  Thank you!
                </Typography>
                <Typography
                  gutterBottom
                  sx={styles.title}
                  variant="h3"
                  component="h3">
                  Your order number is {newOrder.number}
                </Typography>
              </>
            )}
          </Box>
        </Box>
        <Box sx={[styles.center, styles.space]}>
          <Button
            onClick={() => navigate("/order")}
            variant="contained"
            color="primary"
            sx={styles.largeButton}>
            {" "}
            Order Again
          </Button>
        </Box>
      </Box>
    </div>
  );
}
