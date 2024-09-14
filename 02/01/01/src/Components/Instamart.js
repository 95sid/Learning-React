/**
 *  1st change occured when page is rendered 
 *  changes occured when user click after that state changes 
 * 1-> since setVisibleSection is empty so isVisible would be false and it will depict show button
 * 2-> when user clicked on show button onclick handler is triggered 
 * 3-> it will toggle the setVisible(true) 
 * 4-> after that it will change the setVisibleSection("about") and visibleSection = "about"
 * 5-> now about is true it again calls the Section with changed props 
 * 6-> so it will show according to that
 */
import { useState } from "react";
const Section = ({ title, description,isVisible, setVisible }) => {
  return (
    <div className="border border-black m-2 p-2">
      <h3 className="text-xl font-bold">{title}</h3>
      {!isVisible ? (
        <button
          onClick={() => setVisible(true)}
          className="font-semibold underline underline-offset-2"
        >
          Show
        </button>
      ) : (
        <button
          onClick={() => setVisible(false)}
          className="font-semibold underline underline-offset-2"
        >
          Hide
        </button>
      )}

      {isVisible && <p className="text-xl">{description}</p>}
    </div>
  );
};
const Instamart = () => {
  const [visibleSection,setvisibleSection] = useState("");
  return (
    <div>
      <h1 className="text-xl font-bold m-2">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis illo impedit vitae molestias quia pariatur voluptates animi, assumenda deserunt reprehenderit eius maiores error hic, mollitia iste officiis dolores molestiae quibusdam sit! Deleniti repellat necessitatibus ea laudantium architecto quos! Ut rem atque cum, itaque vel laudantium praesentium at consequuntur adipisci delectus."
        }
        isVisible={visibleSection === "about"}
        setVisible = {(show) => setvisibleSection(show?"about":"")}
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis illo impedit vitae molestias quia pariatur voluptates animi, assumenda deserunt reprehenderit eius maiores error hic, mollitia iste officiis dolores molestiae quibusdam sit! Deleniti repellat necessitatibus ea laudantium architecto quos! Ut rem atque cum, itaque vel laudantium praesentium at consequuntur adipisci delectus."
        }
        isVisible={visibleSection === "team"}
        setVisible = {(show)=>setvisibleSection(show?"team":"")}
      />
      <Section
        title={"Carrer Instamart"}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis illo impedit vitae molestias quia pariatur voluptates animi, assumenda deserunt reprehenderit eius maiores error hic, mollitia iste officiis dolores molestiae quibusdam sit! Deleniti repellat necessitatibus ea laudantium architecto quos! Ut rem atque cum, itaque vel laudantium praesentium at consequuntur adipisci delectus."
        }
        isVisible={visibleSection === "carrer"}
        setVisible={(show)=>setvisibleSection(show?"carrer":"")}
      />
    </div>
  );
};

export default Instamart;
