import "./Card.css";
import data from "../data.json";
import Item from "./Item";

const Card = () => {
  return (
    <article className="card">
      <div className="result">
        <h3 className="subtitle">Your Result</h3>
        <div className="circle">
          <p className="number">76</p>
          <p className="text">of 100</p>
        </div>
        <h1 className="title">Great</h1>
        <p className="description">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="content">
        <h3 className="subtitle-summary">Summary</h3>
        <div className="summary">
          {data.map((data, index) => (
           <Item key={index} data={data} />
          ))}
        </div>
        <button className="button">Continue</button>
      </div>
    </article>
  );
};

export default Card;
