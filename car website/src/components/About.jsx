import { Header ,Footer } from "../components";
import "../CSS/About.css";



export const About = () => {




  return (
    <div className="about">
      
      <div className="about-container">
        <div className="about-image-coantainer">
          <img
            className="about-image"
            // src={imgLink}
            src="../src/images/aboutus1-pic.jpg"
          ></img>
          </div>
        
        <div className="about-text-cotainer">
          <h1 className="about-title">ABOUT US</h1>
          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias earum
            culpa, iure doloribus veniam ad modi omnis, sed, ullam quas fugiat
            est consectetur hic totam officiis similique qui quasi facere eius
            voluptate magnam illo consequatur. Aspernatur quod nam modi quia
            aliquid dicta repellat in. Possimus officia consequatur non dolores
            quis.
          </p>
        </div>
      </div>
     
    </div>
  );
};
