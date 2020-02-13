import React from 'react';
import moment from 'moment'
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, Box, CardMedia, CardContent, Button  } from '@material-ui/core';
import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import Chips from './Chips'

const family = '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif';
const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: 'auto',
    borderRadius: spacing(1), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 600,
    marginLeft: 'auto',
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: spacing(4),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(1),
    },
  },
  overline: {
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontFamily: family,
    fontSize: 12,
    marginBottom: '0.875em',
    display: 'inline-block'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '0.35em',
    fontFamily: family
  },
  body: {
    marginBottom: spacing(2),
    fontSize: '0.8rem',
    fontWeight: '400',
    letterSpacing: '0.00938em',
    fontFamily: family
  },
  button: {
    backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
    boxShadow: '0px 4px 32px rgba(252, 56, 56, 0.4)',
    borderRadius: 100,
    paddingLeft: 24,
    paddingRight: 24,
    color: '#ffffff'
  },
  media: {
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '100%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);',
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
    fontSize: '20px',
    fontFamily: family
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

const NewsCardModal = (props) => {
  const styles = useStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <Box>
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.media}
        image={`http://static01.nyt.com/${props.article.multimedia[0].url}`}
      />
      <CardContent>
        <TextInfoCardContent
          classes={styles}
          overline={moment(props.article.pub_date).format('lll')}
        />
        {/* <br /> */}
        <Typography className={styles.overline} variant={'overline'}>
          <strong>{props.article.byline.orginal}</strong>
        </Typography>
        <br></br>
        <Typography className={styles.title}>
          <strong>{props.article.headline.main}</strong>
        </Typography>
        <br />
        <Typography className={styles.body}>
          <strong>{props.article.abstract}</strong>
        </Typography>
        <br />
        <Typography className={styles.overline} variant={'overline'}>
          <strong>Tags:</strong>
        </Typography>
        <br></br>
        <Chips article={props.article}/>
        <hr />
        <Button href={props.article.url} variant={'contained'} color={'primary'}>
          View Aritcle
        </Button>
      </CardContent>
    </Card>
    </Box>
  );
};

export default NewsCardModal;