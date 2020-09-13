const About = () => (
  <div className={"flex flex-col h-full w-full "}>
    <div className={"flex my-0 mx-auto justify-center"}>
      <div className={"hidden lg:block w-1/3 h-auto"}>
        <img src="/portfolio/1.png" className={"w-full h-full"} />
      </div>

      <div className={"text-white min-w-md max-w-md rounded-lg p-4"}>
        <h1 className={"text-2 xl"}>O ESTÚDIO</h1>
        <p>
          TSmodelagem3d é um estudio especializado em desenvolvimento de imagens
          fotorealísticas para Visualização Arquitetônica. Produzindo imagens de
          Ilustração, Maquetes eletrônicas e animações para Empreedimentos
          Imobiliários.
        </p>
      </div>
    </div>
    <div className={"mt-2 flex my-0 mx-auto justify-center"}>
      <div className={"text-white min-w-md max-w-md rounded-lg p-4"}>
        <p>
          Oferecemos a melhor experiência de realização em cada imagem ou
          animação produzida. Proporcionamos a sensação de estar no ambiente
          mesmo antes de sua construção. Um sonho se transformando em realidade.
          Estudio idealizado por Thais Sacramento - Formada em Arquitetura e
          Urbanismo e apaixonada por renders.
        </p>
      </div>
      <div className={"hidden lg:block w-1/3 h-auto"}>
        <img src="/portfolio/1.png" className={"w-full h-full"} />
      </div>
    </div>
  </div>
);

export default About;
