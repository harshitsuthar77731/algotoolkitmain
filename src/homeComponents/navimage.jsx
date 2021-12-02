import SimpleImageSlider from "react-simple-image-slider";
//https://media.vlpt.us/images/wisepine/post/9820b86d-571d-45d0-8490-fead692170b2/%F0%9F%8C%99Algorithm.png
//https://www.mybluelinux.com/img/post/featured-images/0072.sorting_algorithms.jpg
//
const images = [
  {
    url: "https://media.vlpt.us/images/wisepine/post/9820b86d-571d-45d0-8490-fead692170b2/%F0%9F%8C%99Algorithm.png",
  },
  {
    url: "https://www.mybluelinux.com/img/post/featured-images/0072.sorting_algorithms.jpg",
  },
  { url: "https://helloacm.com/wp-content/uploads/2018/07/learn-to-code.jpg" },
  {
    url: "https://repository-images.githubusercontent.com/342023111/b21c5880-7dca-11eb-9e9c-a4152aa4e3cb",
  },
  {
    url: "https://adrianmejia.com/images/graph-data-structures-time-complexity-large.jpg",
  },
];

const App = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1350}
        height={670}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};
export default App;
