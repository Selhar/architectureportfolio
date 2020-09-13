import Menu from "../components/Menu";
import Gallery from "../components/Gallery";

export default function IndexPage() {
  return (
    <>
      <Menu />
      <Gallery
        images={[
          "portfolio/1.png",
          "portfolio/2.png",
          "portfolio/3.png",
          "portfolio/4.png",
          "portfolio/5.png",
        ]}
      />
    </>
  );
}
