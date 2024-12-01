// importing react, libraries and other...
import React, { useEffect, useState } from "react";
import { fetchPlaceholderAPI } from "../services/api";
import { isLogedInProps, PostResponse } from "../services/types";
import {
  Box,
  CircularProgress,
  Grid2,
  Skeleton,
  Typography,
} from "@mui/material";
// importing css
import "../styles/home.css";
// importing components
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Home: React.FC<isLogedInProps> = ({ isLogedIn, setIsLogedIn }) => {
  const [posts, setPosts] = useState<PostResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPlaceholderAPI();
        setPosts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <CircularProgress size={40} />;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="home">
      <Header isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn} />
      <div className="mainpost__container">
        <div className="star__container">
          <div className="star__img"></div>
          <h4>Featured</h4>
        </div>
        <h1 className="mainpost__title">
          Global Climate Summit <br /> Urges Immediate Action
        </h1>
        <h5 className="mainpost__subtitle">
          Leaders from around the world gathered for a global climate summit,
          emphasizing the urgent need for coordinated action to address climate
          change.
        </h5>
        <div className="mainpost__info__container">
          <h4 className="info__date">WEDNESDAY 12, MARCH 2024</h4>
          <div className="info__author">
            <div className="author__img"></div>
            <h4 className="author__name">John Doe</h4>
          </div>
        </div>
        <div className="mainpost__img"></div>
        <div className="mainpost__share__container">
          <h4 className="share__title">Share to</h4>
          <div className="facebook__img share__img"></div>
          <div className="twiter__img share__img"></div>
          <div className="youtube__img share__img"></div>
        </div>
      </div>
      <Grid2 container wrap="nowrap" className="posts__container">
        {posts?.map((post) => (
          <Box
            key={post.id}
            className="post"
            onClick={() => {
              isLogedIn
                ? navigate("/post", { state: post })
                : navigate("/sign-in");
            }}
          >
            <Skeleton
              key={post.userId}
              variant="rectangular"
              className="img__post"
            />
            <Typography gutterBottom variant="body2" className="text__limit">
              {post.date}
            </Typography>
            <Typography variant="caption" className="text__limit__title">
              {post.title}
            </Typography>
            <Typography className="text__limit">{post.body}</Typography>
          </Box>
        ))}
      </Grid2>
    </section>
  );
};

export default Home;
