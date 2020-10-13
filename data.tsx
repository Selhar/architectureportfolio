import { Icons } from "./components/utils/enums";

export const contato = {
  email: "tsmodelagem3d@gmail.com",
  telefone: "+55 (71) 9 9901-9845",
  socialNetworks: [
    {
      name: "instagram",
      url: "https://www.instagram.com/tsmodelagem3d/",
      src: "/icons/instagram.svg",
      iconName: Icons.instagram,
    },
    {
      name: "whatsapp",
      url: "https://wa.me/5571999019845",
      src: "/icons/whatsapp.svg",
      iconName: Icons.whatsapp,
    },
  ],
};

export const legendaLogo = "Logo TSModelagem3D";

export const headerMenu = [
  { name: "home", url: "#" },
  { name: "sobre", url: "#sobre" },
  { name: "portfolio", url: "#portfolio" },
  { name: "orçamento", url: "#orcamento" },
  { name: "contato", url: "#contato" },
];

export const mensagemSplash =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has be";

export const mensagemEstudio =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It";

export const perfis = [
  {
    id: "architect",
    label: "Arquiteto(a)",
  },
  {
    id: "entrepeneur",
    label: "Construtora/Empreendedor(a)",
  },
  {
    id: "designer",
    label: "Decorador(a)",
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
