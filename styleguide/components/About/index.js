import React from "react";


export default () => (
  <div className="flex flex-row justify-between lg:w-2/3 m-auto bg-orange rounded-xl">
    <div className="lg:text-justify p-8 lg:w-3/4 xxl:2/5 lg:mx-auto xl:pt-16">
      <h1 className="uppercase mb-1 tracking-widest font-bold font text-3xl text-center">
        O estúdio
      </h1>
      <span className="lg:pl-4 sm:text-lg max-w-sm">
        TSmodelagem3d é um estudio especializado em desenvolvimento de imagens fotorealísticas 
        para Visualização Arquitetônica. Produzindo imagens de Ilustração, Maquetes eletrônicas 
        e animações para Empreedimentos Imobiliários. <br />
        Oferecemos a melhor experiência de realização em cada imagem ou animação produzida. 
        Proporcionamos a sensação de estar no ambiente mesmo antes de sua construção. Um sonho se transformando em realidade.
        Estudio idealizado por Thais Sacramento  - Formada em Arquitetura e Urbanismo e apaixonada por renders.
      </span>
    </div>
    <div className="hidden xl:flex h-128 ">
      <img className="h-full w-auto rounded-xl" src="/static/portfolio/lavandacoletiva/LAVANDERIA10.jpg" />
    </div>
  </div>
)