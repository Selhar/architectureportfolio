
export const format = {
  thumbnail: "t_thumbnail/",
  1080: "t_1080p/",
  1440: "t_1440p/",
  0: ""
}

export const buildCloudinaryUrl = ( format: String, name: String, mobile: Boolean  ) => {
  const cloudinaryBaseURL = "https://res.cloudinary.com/selhar/image/upload/";
  const directory = "architecture_portfolio/portfolio/";
  const imageType = mobile ? "mobile.jpg" : "2160p.jpg";
  return cloudinaryBaseURL + format + directory + name + imageType;
}

export const imageoffset = 5;
export const PortfolioImages = [
  {
    name: "lavabo/",
    description: "descrição",
  },
  {
    name: "quartomeninas/studies/",
    description: "descrição",
  },
  {
    name: "quartomeninas/cama/",
    description: "descrição",
  },
  {
    name: "quartomeninas/reto/",
    description: "descrição",
  },
  {
    name: "quartomeninas/wide/",
    description: "descrição",
  },
  {
    name: "suncoffee/wide/",
    description: "descrição",
  },
  {
    name: "suncoffee/neon/",
    description: "descrição",
  },
  {
    name: "suncoffee/mesa/",
    description: "descrição",
  },
  {
    name: "suncoffee/lampadas/",
    description: "descrição",
  },
  {
    name: "suncoffee/cadeiras/",
    description: "descrição",
  },
  {
    name: "suncoffee/bar/",
    description: "descrição",
  },
    {
    name: "quartoverde/",
    description: "descrição",
  },
  {
    name: "hotel/",
    description: "descrição",
  },
  {
    name: "banheiroplantas/",
    description: "descrição",
  },
  {
    name: "banheiro/",
    description: "descrição",
  },
  {
    name: "casabranca/anguloalternativo/",
    description: "descrição",
  },
  {
    name: "casabranca/dia_wide/",
    description: "descrição",
  },
  {
    name: "casabranca/noite_wide/",
    description: "descrição",
  },
  {
    name: "cozinha/",
    description: "descrição",
  },
  {
    name: "piscina/anguloreto/",
    description: "descrição",
  },
  {
    name: "piscina/beirapiscina/",
    description: "descrição",
  },
  {
    name: "piscina/deck/",
    description: "descrição",
  },
  {
    name: "plantas/",
    description: "descrição",
  },
  {
    name: "quartodark/angulocadeira/",
    description: "descrição",
  },
  {
    name: "quartodark/anguloquadro/",
    description: "descrição",
  },
  {
    name: "saladeestar/dia/",
    description: "descrição",
  },
  {
    name: "saladeestar/noite/",
    description: "descrição",
  },
  {
    name: "saladeestarjardim/planta/",
    description: "descrição",
  },
  {
    name: "saladeestarjardim/semplanta/",
    description: "descrição",
  },
  {
    name: "sobradojardim/cima/",
    description: "descrição",
  },
  {
    name: "sobradojardim/frente/",
    description: "descrição",
  },
]

export const AboutPage = {
  title: "o estúdio",
  paragraphs: {
    1: `TSmodelagem3d é um estúdio especializado em desenvolvimento de imagens fotorealísticas para Visualização Arquitetônica. Produzindo imagens de Ilustração, Maquetes eletrônicas e animações para o encantar seus clientes e valorizando ainda mais o seu trabalho.
Nosso estúdio prima para a maior experiência de realização em cada imagem ou animação produzida.  Proporcionando ao cliente uma experiência tão real quanto à experiência em que terão no futuro. Um sonho se transformando em Realidade.
Um Sonho, Uma Idéia, sua Prévia em nossas mãos.`,
    2: `Jujubes dessert biscuit danish chupa chups icing pastry chupa chups. Topping marzipan pudding carrot cake. Dessert macaroon dragée pastry halvah candy canes chocolate cake. Biscuit marzipan cake tootsie roll. Cheesecake fruitcake cupcake halvah pie. Pie sesame snaps jelly powder gummi bears jujubes chocolate cake`,
  },
};

export const Telefone = "+55 (71) 9 9901-9845";

export const Email = "tsmodelagem3d@gmail.com";

export const PortfolioPage = {
  title: "portfólio",
};

export const Margin = {
  section: "mb-16",
};

export const perfis = [
  {
    id: "architect",
    label: "Arquiteto(a)/Engenheiro(a)",
  },
  {
    id: "entrepeneur",
    label: "Construtora/Incoorporadora",
  },
  {
    id: "designer",
    label: "Designer de Interiores",
  },
];

export const projectType = [
  {
    id: "illustrative",
    label: "Imagem ilustrativa",
  },
  {
    id: "animationmodel",
    label: "Modelagem em 3d",
  },
  {
    id: "videomodel",
    label: "Animação/vídeo",
  },
  {
    id: "image",
    label: "Imagens 360º",
  },
];

