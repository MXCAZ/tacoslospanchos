import React from "react";
import {
  Box,
  Typography,
  Grid,
  CircularProgress,
  Alert,
  Paper,
  List,
  ListItem,
} from "@mui/material";
import { useStyles } from "../Components/styles";
import { useContext, useEffect } from "react";
import { Store } from "../Store";
import { listQueue } from "../actions";

export default function QueueScreen() {
  const styles = useStyles;
  const { state, dispatch } = useContext(Store);
  const { queue, loading, error } = state.queueList;

  useEffect(() => {
    listQueue(dispatch);
  }, [dispatch]);
  return (
    <div>
      <Box sx={styles.root}>
        <Box sx={styles.main}>
          {loading ? (
            <CircularProgress />
          ) : error ? (
            <Alert severity="error">{error}</Alert>
          ) : (
            <Grid container spacing={2}>
              <Grid item md={6}>
                <Paper>
                  <Typography variant="h2">In Progress</Typography>
                  <List>
                    {queue.inProgressOrders.map((order) => (
                      <ListItem key={order.number}>
                        <Typography variant="h2">{order.number}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
              <Grid item md={6}>
                <Paper>
                  <Typography variant="h2">Now Serving</Typography>
                  <List>
                    {queue.servingOrders.map((order) => (
                      <ListItem key={order.number}>
                        <Typography variant="h2">{order.number}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
            </Grid>
          )}
        </Box>
      </Box>
    </div>
  );
}
