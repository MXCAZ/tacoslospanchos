import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CircularProgress,
  Dialog,
  DialogTitle,
  Grid,
  List,
  ListItem,
  Typography,
  TextField,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useStyles } from "../Components/styles";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  listCategories,
  listProducts,
  addToOrder,
  removeFromOrder,
  clearOrder,
} from "../actions";
import { Store } from "../Store";
import Logo from "../Components/Logo";
import "../Components/Order.css";

export default function OrderScreen() {
  const styles = useStyles;
  const [categoryName, setCategoryName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

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

  const { state, dispatch } = useContext(Store);
  const { categories, loading, error } = state.categoryList;
  const {
    products,
    loading: loadingProducts,
    error: errorProducts,
  } = state.productList;

  const { orderItems, itemsCount, totalPrice, taxPrice, orderType } =
    state.order;

  useEffect(() => {
    if (!categories) {
      listCategories(dispatch);
    } else {
      listProducts(dispatch, categoryName);
    }
  }, [dispatch, categories, categoryName]);

  const categoryClickHandler = (name) => {
    setCategoryName(name);
    listProducts(dispatch, categoryName);
  };

  const previewOrderHandler = () => {
    navigate("/review");
  };

  return (
    <div className="orderScreenContainer">
      <Box sx={styles.root}>
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

        <Box sx={styles.main} className="1">
          <Grid container>
            <Grid item md={2} sx={styles.flex}>
              <List className="foodList">
                {loading ? (
                  <CircularProgress />
                ) : error ? (
                  <Alert severity="error">{error}</Alert>
                ) : (
                  <>
                    <ListItem onClick={() => categoryClickHandler("")} button>
                      <Logo sx={{ width: 70, height: 70 }}></Logo>
                    </ListItem>
                    {categories.map((category) => (
                      <ListItem
                        key={category.name}
                        button
                        onClick={() => categoryClickHandler(category.name)}>
                        <Avatar
                          alt={category.name}
                          src={category.image}
                          sx={{ width: 70, height: 70 }}
                        />
                      </ListItem>
                    ))}
                  </>
                )}
              </List>
            </Grid>
            <Grid item md={10}>
              <Typography
                sx={styles.title}
                gutterBottom
                variant="h3"
                component="h3">
                {categoryName || "Main Menu"}
              </Typography>
              <Grid container spacing={1}>
                {loadingProducts ? (
                  <CircularProgress />
                ) : errorProducts ? (
                  <Alert severity="error">{errorProducts}</Alert>
                ) : (
                  products.map((product) => (
                    <Grid item md={6} key={product.name}>
                      <Card
                        sx={styles.card}
                        onClick={() => productClickHandler(product)}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt={product.name}
                            image={product.image}
                            sx={styles.media}
                          />
                        </CardActionArea>
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="body2"
                            color="textPrimary"
                            component="p">
                            {product.name}
                          </Typography>
                          <Box sx={styles.cardFooter}>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p">
                              {product.calories} Cal
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p">
                              ${product.price}
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))
                )}
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Box>
            <Box sx={[styles.bordered, styles.space]}>
              My Order - {orderType} | Tax: ${taxPrice} | Total: ${totalPrice} |
              Items: {itemsCount}
            </Box>
            <Box sx={[styles.row, styles.around]}>
              <Button
                onClick={() => {
                  clearOrder(dispatch);
                  navigate(`/OrderOnline`);
                }}
                variant="contained"
                color="primary"
                sx={styles.largeButton}>
                Cancel Order
              </Button>
              <Button
                onClick={previewOrderHandler}
                variant="contained"
                color="primary"
                disabled={orderItems.length === 0}
                sx={styles.largeButton}>
                Done
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
