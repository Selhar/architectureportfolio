import { AboutPage, Margin } from "../utils/constants";
import { Title } from "../Title";
import { Image } from "../utils/types";

type AboutImages = {
  1: Image,
  2: Image,
}

type About = {
  images: AboutImages
}

const About = ({ images }: About) => (
  <div
    id="sobre"
    className={`flex flex-col h-full w-full 
      justify-center ${Margin.section}`}
  >
    <div className={`flex my-0 mx-auto lg:justify-center`}>
      <div className={"hidden lg:block w-1/3 h-auto"}>
        <img src={images[1]["1080p"]} className={"w-full h-full"} />
      </div>

      <div className={"text-white min-w-md max-w-md rounded-lg p-4 pt-0 upper "}>
        <Title text={AboutPage.title} />
        <p className="tracking-widest">TSmodelagem3d é um estúdio especializado em desenvolvimento de imagens
        fotorealísticas para Visualização Arquitetônica. Produzindo imagens de Ilustração,
         Maquetes eletrônicas e animações para o encantar seus clientes e valorizar ainda mais o seu trabalho.</p>
        <p className="pt-4 tracking-widest">Nosso estúdio prima para a maior experiência de realização em cada
        imagem ou animação produzida.  Proporcionando ao cliente uma experiência tão real quanto à experiência
         em que terão no futuro. Um sonho se transformando em Realidade.</p>
        <p className="pt-4 tracking-widest">Um Sonho. Uma Idéia. Sua prévia em nossas mãos.</p>
      </div>
    </div>
    <div className={"mt-2 flex my-0 mx-auto justify-center"}>
      <div className={`text-white min-w-md max-w-md rounded-lg p-4 lg:pl-0`}>
        <p className="tracking-widest">Estúdio idealizado por Thais Sacramento - Formada em Arquitetura e Urbanismo
        pela UniJorge deste 2017 e Artista 3D. Estudiosa nesta área de renderização de imagens e conhecedora de
        softwares para a produção das mesma. </p>
        <p className="tracking-widest pt-4">
          O estúdio nasceu de uma vontade em explorar esse lado artístico da apresentação de
          Projetos de Arquitetura . É a apresentação do projeto que conquista o cliente, é 
          imagem concretizando seu sonho e o encanto que será possível e bonito realizá-lo.  
        </p>
      </div>
      <div className={"hidden lg:block w-1/3 h-auto"}>
        <img src={images[2]["1080p"]} className={"w-full h-full"} />
      </div>
    </div>
  </div>
);

export default About;
