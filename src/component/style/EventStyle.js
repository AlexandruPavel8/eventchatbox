const marginLeft = "2%";
const marginRight = "2%";

export const eventStyles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  avatar: {
    height: "4%",
    width: "4%",
    verticalAlign: "middle",
    marginLeft: marginLeft,
    marginRight: marginRight,
    marginTop: "3%",
    marginBottom: "2%",
    display: "inline-block"
  },
  eventStyle: {
    boxShadow: "8px 8px #841439",
    backgroundImage: "url('pics/eventbackground.PNG')",
    marginTop: "2%",
    marginLeft: marginLeft,
    marginRight: marginRight,
    transform: "scaleY(-1)",
    overflow: "hidden",
    color: "white"
  },
  imgLike: {
    height: "2%",
    width: "2%",
    marginLeft: "2%",
    marginBottom: "2%",
    marginTottom: "2%",
    verticalAlign: "right"
  },
  left: {
    width: "95%",
    float: "left"
  },
  right: {
    width: "5%",
    float: "right"
  }
});
