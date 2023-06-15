import {
  Fade,
  Typography,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import eating from "../img/eatin.png";
import takeOut from "../img/takeout.png";

import Logos from "../Components/Logo";
import React from "react";
import { useStyles } from "../Components/styles";
import { useContext } from "react";
import { Store } from "../Store";
import { setOrderType } from "../actions";

export default function ChoseScreen(props) {
  const styles = useStyles;
  const navigate = useNavigate();
  const { dispatch } = useContext(Store);

  const chooseHandler = (orderType) => {
    setOrderType(dispatch, orderType);
    navigate("/order");
  };

  return (
    <Fade in={true}>
      <Box sx={[styles.root, styles.navy]}>
        <Box sx={[styles.main, styles.center]}>
          <Logos large></Logos>
          <Typography
            variant="h3"
            component="h3"
            sx={styles.center}
            gutterBottom>
            Where will you be eating today
          </Typography>
          <Box sx={styles.cards}>
            <Card sx={[styles.card, styles.space]}>
              <CardActionArea onClick={() => chooseHandler("Eat in")}>
                <CardMedia
                  component="img"
                  alt="Eat In"
                  image={eating}
                  sx={styles.media}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    color="textPrimary"
                    component="p">
                    Eat In
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={[styles.card, styles.space]}>
              <CardActionArea onClick={() => chooseHandler("Take Out")}>
                <CardMedia
                  component="img"
                  alt="Eat In"
                  image={takeOut}
                  sx={styles.media}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    color="textPrimary"
                    component="p">
                    Take Out
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
