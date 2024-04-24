import { useEffect, useState } from "react";
import Card from "../Component/Card/Card";

const Home = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://child.onrender.com/api/sciencefiction"
      );
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="section_container">
        <div className="section_heading">
          <h2>Science Fiction Stories</h2>
        </div>
        <div className="section_button">
          <div className="button">
            <a style={{ background: "#006eff" }}>New</a>
            <a style={{ background: "#ff9900" }}>In Progress</a>
            <a style={{ background: "#00ff55" }}>Completed</a>
            <a
              style={{
                backgroundImage:
                  "linear-gradient(to right top, #5e43c0, #0078e9, #00a2f7, #00c6f1, #26e6e6)",
              }}
            >
              <div className="button_logo"></div>Clear All
            </a>
          </div>
        </div>
      </div>
      {data &&
        data.map((item, index) => (
          <Card
            key={index}
            data={item}
            image={item.Image[0]}
            title={item.Title}
            status={item.Status}
            id={item._id}
          />
        ))}
    </>
  );
};

export default Home;
