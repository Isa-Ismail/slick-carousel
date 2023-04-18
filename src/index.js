import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./index.css";

const ReactSlickDemo = () => {
  var settings = {
    dots: true
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
      </Slider>
    </div>
  );
};

ReactDOM.render(<ReactSlickDemo />, document.getElementById("container"));
