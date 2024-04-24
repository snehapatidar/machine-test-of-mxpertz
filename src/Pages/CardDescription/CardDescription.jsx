import { useEffect, useState } from "react";
import "./CardDescription.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CardDescription() {
  const params = useParams();
  console.log("params", params);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://child.onrender.com/api/sciencefiction/${params.id}`
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
    <div className="card_description_container">
      <h2 className="gradient-text">{data.Title}</h2>
      <div className="card_description_btn">
        <Link
          className="links1"
          onClick={() => {
            data.Wordexplore;
          }}
        >
          Word Explore
        </Link>
        <Link
          className="links2"
          onClick={() => {
            data.Storyadvenure;
          }}
        >
          Story Adventure
        </Link>
        <Link
          className="links3"
          onClick={() => {
            data.Brainquest;
          }}
        >
          Brain Quest
        </Link>
      </div>
      <div className="card_image_container">
        <div className="img_div">
          <img
            src={`https://ik.imagekit.io/dev24/${data.Image}`}
            className="image"
          ></img>
        </div>
        <div className="description_container">
          <p>
            In the year 2500, Alex, a bright and curious young inventor, lives
            in the bustling Neo-City. This city is amazing, with tall buildings
            that touch the sky and cars that fly. Alex spends most of his time
            inventing new gadgets and dreaming about ancient mysteries. His best
            friend is his robot dog, Sparky, who is always by his side. One
            night, Alex has a strange dream, a premonition, where he sees
            himself finding something really important. He has heard stories
            about the Lost City, a secret place deep within the Earth that no
            one has ever seen. People say this city is full of incredible
            ubiquitous technologies and secrets. Alex can't stop thinking about
            it and is determined to find this hidden city.","One ordinary
            afternoon, Alex decides to explore the dusty corners of his
            grandfather's attic. It's a space filled with forgotten things and
            old memories. As he sifts through the boxes, he uncovers an old map,
            rolled up and covered with dust. With a gentle touch, the map
            responds, glowing brightly and making a strange gurgling sound that
            fills the quiet attic.","Alex jumps back, a mix of shock and thrill
            in his eyes. Sparky, ever curious, tilts his head, listening
            intently. The sound seems to be coming from beneath the wooden
            floorboards, almost like a call to adventure from the depths of the
            earth. Together, they follow the sound, Sparky's sensors helping to
            track it to its source.","In the least expected corner of the attic,
            under a loose floorboard, they discover a glowing portal. It's well
            hidden, the kind of secret only a child and his robot dog could
            find. Alex can feel his heart racing. He knows that this is just the
            start of something truly big, something that could lead to the
            unknown corners of the universe.","With a nod to each other, Alex
            and Sparky step through the portal. They emerge into a breathtaking
            world, a place where the sky shimmers with colors they've never seen
            and the air hums with the promise of discovery. This new world is
            vast, stretching out with numerous wonders. There are plants that
            sparkle under the alien sun and strange structures that defy all
            known laws of physics.","Alex and Sparky share a look of excitement.
            They're about to embark on the greatest adventure of their lives, a
            journey full of challenges and marvels beyond their wildest dreams.
            This is the moment they've been waiting for, and together, as best
            friends and comrades, they step forward into the unknown."
          </p>
        </div>{" "}
      </div>
    </div>
  );
}

export default CardDescription;
