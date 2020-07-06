import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
// import Moment from "react-moment";
// import { connect } from "react-redux";
// import { addLike, removeLike, deletePost } from "../../actions/post";
import imhs from "../../../../assets/images/5.jpg";

const useStyles = makeStyles((theme) => ({
    PostContainer:{
        display:"flex",
        flexDirection: 'column',
        maxWidth:'600px',
        maxHeight:'500px',
        margin:'40px'
    },
    postImg:{
        maxWidth:'500px',
        maxHeight:'300px',
        marginBottom:'20px'

    },

    PostBottom:{
        display:'flex'
    },
    PostItem:{
marginRight:'30px'
    },
    PostItemLast:{
        marginRight:'60px'

    },

}));

function Post() {
    const classes = useStyles();
  return (
    <div className={classes.PostContainer}>
<img className={classes.postImg} src={imhs} alt="img post"/>
<div className={classes.PostBottom}>
<div className={classes.PostItem}>
<i class="far fa-heart fa-2x"></i>
{/* {likes} */}
</div>
<div className={classes.PostItem}>
<i class="far fa-comment fa-2x"></i>
{/* {comment number} */}
</div>
<div className={classes.PostItemLast}>
<i class="far fa-plus-square fa-2x"></i>
{/* {add to my galleries} */}

</div>
<div>
<i class="fas fa-ellipsis-h fa-2x"></i>
{/* {message or report} */}
</div>
  </div>
    </div>
  );
}
export default Post