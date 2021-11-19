import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://i.imgur.com/W3wtc8D.jpg" },
  { url: "C:\Users\Asus\Desktop\clg\AlgorithmVisualizer-master\src\homeComponents\images\sorting.jpg" },
  { url: "images/3.jpg" },
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
  { url: "images/6.jpg" },
  { url: "images/7.jpg" },
];

const App = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1510}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}
export default App;