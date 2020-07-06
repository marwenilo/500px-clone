import React from 'react'
import FeedPost from "./components/Post"
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    feedContainer:{
        display:"flex",
        maxWidth:"100vw",
        flexWrap: "wrap",
        justifyContent: "space-evenly",

    }
}));
 function Home() {
    const classes = useStyles();
    return (
        <div className={classes.feedContainer}>
            {/* <h2><span>Home Feed</span></h2> */}
            <FeedPost/>
            <FeedPost/>
            <FeedPost/>
        </div>
    )
}
export default Home