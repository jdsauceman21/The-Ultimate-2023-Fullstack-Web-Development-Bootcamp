import Hero from "./Hero";

const AboutView = () => {
    return (
        <>
            <Hero text="About Us"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                    <p>this is my React app for reference</p>
                    </div>
                </div>
            </div>
        </>
    )
  }
  
  export default AboutView;