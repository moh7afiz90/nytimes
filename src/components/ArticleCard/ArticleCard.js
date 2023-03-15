import React from "react";
import moment from "moment";
import NewsCardModal from "./NewsCardModal";
import { makeStyles } from "@material-ui/styles";
import ChevronRightRounded from "@material-ui/icons/ChevronRightRounded";
import TextInfoCardContent from "@mui-treasury/components/cardContent/textInfo";
import { useWideCardMediaStyles } from "@mui-treasury/styles/cardMedia/wide";
import { useText01CardContentStyles } from "@mui-treasury/styles/cardContent/text01";
import { useBouncyShadowStyles } from "@mui-treasury/styles/shadow/bouncy";
import {
  CardMedia,
  Card,
  CardContent,
  Button,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";


const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "200",
    boxShadow: "none",
    borderRadius: 0,
    height: '50vh',
    margin: "0 5px"
  },
  newsCard: {
    height: "100vh",
    overline: {
      textTransform: "uppercase",
      letterSpacing: "1px",
      fontSize: "5px",
      marginBottom: "0.875em",
      display: "inline-block"
    },
    heading: {
      fontSize: 5,
      fontWeight: "bold",
      marginBottom: "0.4em"
    },
    body: {
      fontSize: 16,
      color: "rgba(0,0,0,0.72)"
    }
  },
  CardContent: {
    heading: {
      fontSize: 1
    },
    body: {
      fontSize: 4
    }
  },
  content: {
    padding: 24,
    fontSize: 10
  },
  cta: {
    marginTop: 24,
    margin: "auto",
    textTransform: "initial"
  }
}));



const ArticleCard = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cardStyle = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useText01CardContentStyles();
  const shadowStyles = useBouncyShadowStyles();

  return (
    <Card item className={(cardStyle.newsCard, shadowStyles.root)}>
//       <CardMedia classes={mediaStyles} image={props.story.multimedia[3].url} />
      <CardContent className={cardStyle.content}>
        <TextInfoCardContent
          classes={textCardContentStyles}
          overline={moment(props.story.created_date).format("lll")}
          heading={props.story.title}
        />
        <Button
          color={"primary"}
          fullWidth
          className={cardStyle.cta}
          onClick={handleOpen}
        >
          Find Out More <ChevronRightRounded />
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
        }}
      >
        <Fade in={open}>
           <NewsCardModal singleStory={props.story}></NewsCardModal>
          </Fade>
        </Modal>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
