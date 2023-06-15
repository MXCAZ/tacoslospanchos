import React, { useContext } from "react";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../Components/styles";
import Logo from "../Components/Logo";

import { setPaymentType } from "../actions";
import { Store } from "../Store";
import payHere from "../img/payhere.png";
import atCounter from "../img/atcounter.png";

export default function SelectPaymentScreen() {
  const { dispatch } = useContext(Store);
  const styles = useStyles;
  const navigate = useNavigate();

  const selectHandler = (paymentType) => {
    setPaymentType(dispatch, paymentType);
    if (paymentType === "Pay here") {
      navigate("/payment");
    } else {
      navigate("/complete");
    }
  };
  return (
    <div>
      <Box sx={[styles.root, styles.navy]}>
        <Box sx={[styles.main, styles.center]}>
          <Logo large></Logo>
          <Typography
            sx={styles.center}
            gutterBottom
            variant="h3"
            component="h3">
            Select payment type
          </Typography>
        </Box>
        <Box sx={styles.cards}>
          <Card sx={[styles.card, styles.space]}>
            <CardActionArea onClick={() => selectHandler("Pay here")}>
              <CardMedia
                component="img"
                alt="Pay here"
                image={payHere}
                sx={styles.media}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  color="textPrimary"
                  component="p">
                  PAY HERE
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={[styles.card, styles.space]}>
            <CardActionArea onClick={() => selectHandler("At counter")}>
              <CardMedia
                component="img"
                alt="At Counter"
                image={atCounter}
                sx={styles.media}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  color="textPrimary"
                  component="p">
                  At Counter
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </div>
  );
}
