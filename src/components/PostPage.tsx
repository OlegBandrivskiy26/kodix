// importing styles
import "../styles/post.css"
// reused styles from home.css
import "../styles/home.css"
// importing react, libraries and other...
import { useLocation, useNavigate } from "react-router-dom"
import { isLogedInProps, Post } from "../services/types";
import Header from "./Header";
import React, {useState, useEffect} from "react";
import { PostResponse } from "../services/types";
import { fetchPlaceholderAPI } from "../services/api";
import { Box, CircularProgress, Grid2, Skeleton, Typography } from "@mui/material"

const PostPage: React.FC<isLogedInProps> = ({isLogedIn, setIsLogedIn}) => {
  const [posts, setPosts] = useState<PostResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();
  const post = location.state as Post;

  useEffect(()=>{
    const fetchData = async () =>{
        try{
            const data = await fetchPlaceholderAPI();
            setPosts(data);
        }catch (err){
            setError((err as Error).message);
        }finally{
            setLoading(false);
        }
    }
    fetchData();
  }, [])

  if (loading) return <CircularProgress size={40}/>;
  if (error) return <p>Error: {error}</p>;
  return (
    <section className="postpage">
      <Header isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn}/>
      <div className="postpage__container">
        <div className="post__info">
          <h1 className="mainpost__title">{post.title}</h1>
          <h5 className="mainpost__subtitle">{post.body}</h5>
          <div className="mainpost__info__container postpage__info__author">
            <h4 className="info__date">{post.date}</h4>
            <div className="info__author ">
                <div className="author__img"></div>
                <h4 className="author__name">John Doe</h4>
            </div>
          </div>
          <div className="mainpost__img postpage__img"></div>
          <div className="mainpost__share__container postpage__share__container">
            <h4 className="share__title">Share to</h4>
            <div className="facebook__img share__img"></div>
            <div className="twiter__img share__img"></div>
            <div className="youtube__img share__img"></div>
          </div>
        </div>
        <Grid2 className="others__posts">
    {posts?.map((post) => (
        <Box key={post.id} className="postspage__container" onClick={() => {isLogedIn ? navigate('/post', {state: post}) : navigate('/sign-in')}}>
            <Skeleton key={post.userId} variant="rectangular" className="img__postpage img__post" />
            <Box className="postpage__text">
                <Typography gutterBottom variant="body2" className="text__limit">{post.date}</Typography>
                <Typography variant="caption" className="text__limit__title">{post.title}</Typography>
                <Typography className="text__limit">{post.body}</Typography>
            </Box>
        </Box>
    ))}
</Grid2>

      </div>
    </section>
  )
}

export default PostPage
