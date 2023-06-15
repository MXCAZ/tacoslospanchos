import React, { useEffect, useContext } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Button,
  Alert,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { useStyles } from "../Components/styles";

import { Store } from "../Store";
import { listOrders } from "../actions";
import Axios from "axios";

export default function AdminScreen() {
  const { state, dispatch } = useContext(Store);
  const styles = useStyles;
  const { orders, loading, error } = state.orderList;

  useEffect(() => {
    listOrders(dispatch);
  }, [dispatch]);

  const setOrderStateHandler = async (order, action) => {
    try {
      await Axios.put("/api/orders/" + order._id, {
        action: action,
      });
      listOrders(dispatch);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="adminContainer">
      <Box sx={styles.root}>
        <Box sx={styles.main}>
          {loading ? (
            <CircularProgress />
          ) : error ? (
            <Alert severity="error">{error}</Alert>
          ) : (
            <TableContainer component={Paper}>
              <Table aria-label="orders">
                <TableHead>
                  <TableRow>
                    <TableCell>Order Number</TableCell>
                    <TableCell align="right">Price&nbsp;($)</TableCell>
                    <TableCell align="right">Count</TableCell>
                    <TableCell align="right">Items</TableCell>
                    <TableCell align="right">Type</TableCell>
                    <TableCell align="right">Payment</TableCell>
                    <TableCell align="right">State</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.name}>
                      <TableCell component="th" scope="row">
                        {order.number}
                      </TableCell>
                      <TableCell align="right">{order.totalPrice}</TableCell>
                      <TableCell align="right">
                        {order.orderItems.length}
                      </TableCell>
                      <TableCell align="right">
                        {order.orderItems.map((item) => (
                          <Box>
                            {item.name} x {item.quantity}
                          </Box>
                        ))}
                      </TableCell>
                      <TableCell align="right">{order.orderType}</TableCell>
                      <TableCell align="right">{order.paymentType}</TableCell>
                      <TableCell align="right">
                        {order.inProgress
                          ? "In Progress"
                          : order.isReady
                          ? "Ready"
                          : order.isDelivered
                          ? "Delivered"
                          : "Unknown"}
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          onClick={() => setOrderStateHandler(order, "ready")}
                          color="secondary">
                          Ready
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => setOrderStateHandler(order, "cancel")}
                          color="secondary">
                          Cancel
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => setOrderStateHandler(order, "deliver")}
                          color="secondary">
                          Deliver
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </Box>
    </div>
  );
}
