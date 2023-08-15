import { Col, Container, Image, Row } from "react-bootstrap";
import banner from "../assets/cover.jpg";
export default function Home() {
  const images = [
    "https://i.postimg.cc/PxLHLbD0/1K6A0203.jpg",
    "https://i.postimg.cc/Jn9Ljyc0/1K6A0205.jpg",
    "https://i.postimg.cc/5yLMgxn3/1K6A0206.jpg",
    "https://i.postimg.cc/9FPhqQ4X/1K6A0208.jpg",
    "https://i.postimg.cc/tCGbTx4m/1K6A0209.jpg",
    "https://i.postimg.cc/Z5VzVsF1/1K6A0212.jpg",
    // "https://i.postimg.cc/wxLKSjQ5/1K6A0286.jpg",
    "https://i.postimg.cc/HLNDCJNz/1K6A0315.jpg",
    "https://i.postimg.cc/CK5TtCcd/1K6A0316.jpg",
    "https://i.postimg.cc/zBRmDzZr/1K6A0317.jpg",
    // "https://i.postimg.cc/j2zGNMS3/1K6A0215.jpg",
    "https://i.postimg.cc/VkYc9PMq/1K6A0283.jpg",
    // "https://i.postimg.cc/CLs3xrtz/1K6A0331.jpg",
    "https://i.postimg.cc/8c82j2Nr/1K6A0336.jpg",
  ];

  function generateImageRows(imageSources) {
    const rows = [];
    for (let i = 0; i < imageSources.length; i += 3) {
      const rowImages = imageSources.slice(i, i + 3);
      const rowCols = rowImages.map((imageSrc, index) => (
        // <Col className="row-col" key={index}>
        <Image
          key={index}
          className="col-img"
          src={imageSrc}
          alt={`Image ${index}`}
        />
        // {/* </Col> */}
      ));
      rows.push(
        <Row className="flex-center" key={i}>
          {rowCols}
        </Row>
      );
    }
    return rows;
  }

  return (
    <div className="home">
      <Image className="banner" src={banner} />

      <div className="images-container">
        <h1>
          "...התכשיט היקר ביותר שאי פעם יהיה לך סביב הצוואר הוא הזרועות של
          ילדיך"
        </h1>
        <div className="flexed flex-center mt-4">
          <div>{generateImageRows(images)}</div>
        </div>
      </div>
    </div>
  );
}
