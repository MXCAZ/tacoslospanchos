import React from "react";
import { useEffect, useContext, useState } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  Button,
  TextField,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { useStyles } from "../Components/styles";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import Logo from "../Components/Logo";

import { Store } from "../Store";
import {
  listCategories,
  listProducts,
  addToOrder,
  removeFromOrder,
  clearOrder,
} from "../actions";

export default function () {
  const { state, dispatch } = useContext(Store);

  const styles = useStyles;
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const { orderItems, itemsCount, totalPrice, taxPrice, orderType } =
    state.order;

  const closeHandler = () => {
    setIsOpen(false);
  };

  const productClickHandler = (p) => {
    setProduct(p);
    setIsOpen(true);
  };

  const addToOrderHandler = () => {
    addToOrder(dispatch, { ...product, quantity });
    setIsOpen(false);
  };
  const cancelOrRemoveFromOrder = () => {
    removeFromOrder(dispatch, product);
    setIsOpen(false);
  };
  const proceedToCheckoutHandler = () => {
    navigate("/select-payment");
  };

  return (
    <div className="reviewScreenContainer">
      <Box sx={styles.root}>
        <Box sx={[styles.main, styles.navy, styles.center]}>
          <Dialog
            maxWidth="sm"
            fullWidth={true}
            open={isOpen}
            onClose={closeHandler}>
            <DialogTitle sx={styles.center}>Add {product.name}</DialogTitle>
            <Box sx={[styles.row, styles.center]}>
              <Button
                variant="contained"
                color="primary"
                disabled={quantity === 1}
                onClick={(e) => quantity > 1 && setQuantity(quantity - 1)}>
                <RemoveIcon />
              </Button>
              <TextField
                inputProps={{ sx: styles.largeInput }}
                InputProps={{
                  // bar: true,
                  inputProps: {
                    sx: styles.largeInput,
                  },
                }}
                sx={styles.largeNumber}
                type="number"
                variant="filled"
                min={1}
                value={quantity}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => setQuantity(quantity + 1)}>
                <AddIcon />
              </Button>
            </Box>
            <Box sx={[styles.row, styles.around]}>
              <Button
                onClick={cancelOrRemoveFromOrder}
                variant="contained"
                color="primary"
                size="large"
                sx={styles.largeButton}>
                {orderItems.find((x) => x.name === product.name)
                  ? "Remove From Order"
                  : "Cancel"}
              </Button>
              <Button
                onClick={addToOrderHandler}
                variant="contained"
                color="primary"
                size="large"
                sx={styles.largeButton}>
                ADD to Order
              </Button>
            </Box>
          </Dialog>

          <Box sx={[styles.center, styles.column]}>
            <Logo large></Logo>
            <Typography
              gutterBottom
              sx={styles.title}
              variant="h3"
              component="h3">
              Review my {orderType} order
            </Typography>
          </Box>
          <Grid container>
            {orderItems.map((orderItem) => (
              <Grid item md={12} key={orderItem.name}>
                <Card
                  sx={styles.card}
                  onClick={() => productClickHandler(orderItem)}>
                  <CardActionArea>
                    <CardContent>
                      <Box sx={[styles.row, styles.between]}>
                        <Typography
                          gutterBottom
                          variant="body2"
                          color="textPrimary"
                          component="p">
                          {orderItem.name}
                        </Typography>

                        <span className="buttonEdit">Edit</span>
                      </Box>

                      <Box sx={[styles.row, styles.between]}>
                        <Typography
                          variant="body2"
                          color="InfoText"
                          component="p">
                          {orderItem.calories} Cal
                        </Typography>
                        <Typography
                          variant="body2"
                          color="InfoText"
                          component="p">
                          {orderItem.quantity} x ${orderItem.price}
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box>
          <Box>
            <Box sx={[styles.bordered, styles.space]}>
              My Order - {orderType === "takeout" ? "Take out" : "Eat in"} |
              Tax: ${taxPrice} | Total: ${totalPrice} | Items {itemsCount}
            </Box>
            <Box sx={[styles.row, styles.around]}>
              <Button
                onClick={() => {
                  navigate("/Order");
                }}
                variant="contained"
                color="primary"
                sx={styles.largeButton}>
                Back
              </Button>
              <Button
                onClick={proceedToCheckoutHandler}
                variant="contained"
                color="secondary"
                disabled={orderItems.length === 0}
                sx={styles.largeButton}>
                Proceed To Checkout
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
