import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getNewsDataFetch } from "../slices/newsDataState";
import getData from "../utils/getData";

export default function CardComponent({ activeTree }) {
  const sx = styles(useTheme());
  const newsApi = useSelector((state) => state.reducer.newsData.newsData);
  const dispatch = useDispatch();
  const news = getData(newsApi, activeTree);
  useEffect(() => {
    dispatch(getNewsDataFetch());
  }, [dispatch]);
  return (
    <Box sx={sx.box_wrapper}>
      <h1>{activeTree}</h1>
      <Box sx={sx.card_wrapper}>
        {!news &&
        activeTree !== "Entertainment" &&
        activeTree !== "Sports" &&
        activeTree !== undefined ? (
          <Box>
            <h2>No recent news for this category</h2>
          </Box>
        ) : (
          news?.map((news, index) => (
            <Card key={index} sx={sx.card}>
              <CardContent sx={sx.content}>
                <Typography variant="h5" component="div" sx={sx.title}>
                  {news?.title}
                </Typography>
                <Typography variant="body2">{news?.body}</Typography>
              </CardContent>
              <CardActions sx={sx.button}>
                <Button variant="contained">Read Later</Button>
              </CardActions>
            </Card>
          ))
        )}
      </Box>
    </Box>
  );
}

const styles = (theme) => {
  return {
    box_wrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    card_wrapper: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignContent: "center",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "300px",
      marginBottom: "10px",
    },
    content: { height: "15vh" },
    title: { fontWeight: "700", marginBottom: "10px" },
    button: {
      display: "flex",
      alignItems: "center",
      marginTop: "130px",
      marginBottom: "20px",
    },
  };
};
