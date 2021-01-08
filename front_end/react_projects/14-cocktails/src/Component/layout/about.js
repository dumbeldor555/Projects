const About = (props) => {

  const {about, heading} = props;
  console.log(about);
  return(
    <div className="about">
      <h1 className="aboutHeading">{heading}</h1>
    <p className="aboutText">
      {about}
    </p>
    </div>
  );
}

export default About;