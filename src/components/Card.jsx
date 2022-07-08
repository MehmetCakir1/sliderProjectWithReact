import { FaQuoteRight } from "react-icons/fa";

const Card = ({ data,index }) => {
  return (
    <div className="section-center m-auto mt-4 text-center">
      {data.map((item, itemIndex) => {
        const { image, name, title, quote, id } = item;
        let position = "nextSlide";
        if (itemIndex == index) {
          position = "activeSlide";
        }
        if (itemIndex == index - 1 || index == 0 && itemIndex==data.length-1) {
          position = "lastSlide";
        }
        return (
          <section className={position}>
            <div className="imgDiv rounded-circle m-auto">
              <img className="rounded-circle" src={image} alt={name} />
            </div>
            <h5 className="mt-3 fw-bold text-danger">{name.toUpperCase()}</h5>
            <h5 className="fs-5">
              {title
                .split(" ")
                .map((item) => item[0].toUpperCase() + item.slice(1))
                .join(" ")}
            </h5>
            <div className="quoteDiv">
              <p>{quote}</p>
            </div>
            <span className="display-4 text-primary mt-3">
              <FaQuoteRight />
            </span>
          </section>
        );
      })}
    </div>
  );
  // return (
  //   <div className="text-center p-2 mt-4">
  //       <div className="imgDiv rounded-circle m-auto">
  //           <img className="rounded-circle" src={image} alt={name} />
  //       </div>
  //       <h5 className="mt-3 fw-bold text-danger">{name.toUpperCase()}</h5>
  //       <h5 className="fs-5">{title.split(" ").map((item)=>item[0].toUpperCase()+item.slice(1)).join(" ")}</h5>
  //       <div className="quoteDiv">
  //           <p>{quote}</p>
  //       </div>
  //        <span  className="display-4 text-primary mt-3"><FaQuoteRight/></span>
  //   </div>
  // )
};

export default Card;
