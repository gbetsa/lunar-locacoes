import {
  MdChair,
  MdLightbulb,
  MdBrush,
  MdDevicesOther,
  MdBuild,
  MdConstruction,
  MdKitchen,
  MdDirectionsCar,
  MdWarehouse,
  MdCategory,
} from "react-icons/md";

export interface EventItem {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  priceType: string;
  images: string[];
  whatsapp: string;
  availability: string;
  minQuantity: number;
  specifications?: {
    label: string;
    value: string;
  }[];
  tags: string[];
}

export const eventItems: EventItem[] = [
  {
    id: "1",
    title: "Cadeira Dobrável Reforçada",
    description:
      "Cadeira dobrável com estrutura reforçada em aço carbono e assento anatômico. Ideal para locações residenciais, comerciais ou corporativas. Fácil de transportar, leve e resistente.",
    category: "Mobiliário",
    price: "R$ 8,00",
    priceType: "/unidade",
    images: ["cadeira", "cadeira-2"],
    whatsapp: "5511963119191",
    availability: "Disponível",
    minQuantity: 20,
    specifications: [
      { label: "Material", value: "Aço carbono pintado" },
      { label: "Peso suportado", value: "110kg" },
      { label: "Peso da cadeira", value: "3kg" },
      { label: "Dobrável", value: "Sim" },
    ],
    tags: ["Mobiliário", "Prático", "Reforçado"],
  },
  {
    id: "2",
    title: "Luminária LED Industrial 100W",
    description:
      "Luminária LED industrial de alta potência, ideal para iluminar galpões, áreas de trabalho, filmagens, obras e espaços amplos. Economia de energia e excelente desempenho.",
    category: "Iluminação",
    price: "R$ 65,00",
    priceType: "/dia",
    images: ["luminaria", "luminaria-2"],
    whatsapp: "5511963119191",
    availability: "Disponível",
    minQuantity: 1,
    specifications: [
      { label: "Potência", value: "100W" },
      { label: "Fluxo luminoso", value: "10.000 lumens" },
      { label: "Temperatura de cor", value: "6000K" },
      { label: "Tensão", value: "Bivolt" },
    ],
    tags: ["Iluminação", "LED", "Industrial"],
  },
  {
    id: "3",
    title: "Mesa Dobrável Plástica 1,80m",
    description:
      "Mesa dobrável retangular com tampo resistente e estrutura reforçada. Ideal para trabalhos, reuniões, pequenos eventos, churrascos, exposições e uso geral.",
    category: "Mobiliário",
    price: "R$ 35,00",
    priceType: "/unidade",
    images: ["mesa", "mesa-2"],
    whatsapp: "5511963119191",
    availability: "Disponível",
    minQuantity: 5,
    specifications: [
      { label: "Comprimento", value: "1,80m" },
      { label: "Altura", value: "74cm" },
      { label: "Material", value: "Polietileno + aço" },
      { label: "Dobrável", value: "Sim" },
    ],
    tags: ["Mesa", "Dobrável", "Multiuso"],
  },
  {
    id: "4",
    title: "Kit de Ferramentas Completo 110 Peças",
    description:
      "Kit completo de ferramentas com maleta rígida. Ideal para reparos, manutenções, instalações, oficinas ou projetos DIY. Alta durabilidade e variedade completa.",
    category: "Ferramentas",
    price: "R$ 45,00",
    priceType: "/dia",
    images: ["ferramentas", "ferramentas-2"],
    whatsapp: "5511963119191",
    availability: "Disponível",
    minQuantity: 1,
    specifications: [
      { label: "Peças incluídas", value: "110 ferramentas" },
      { label: "Maleta", value: "Rígida com compartimentos" },
      { label: "Material", value: "Aço carbono" },
      { label: "Peso", value: "6kg" },
    ],
    tags: ["Ferramentas", "Kit Completo", "Manutenção"],
  },
  {
    id: "5",
    title: "Caixa de Som Bluetooth Profissional",
    description:
      "Caixa de som amplificada com Bluetooth, entrada USB, bateria interna e alta potência. Ideal para festas pequenas, reuniões, publicidade em ambientes externos, aulas e eventos corporativos.",
    category: "Tecnologia",
    price: "R$ 70,00",
    priceType: "/dia",
    images: ["som", "som-2"],
    whatsapp: "5511963119191",
    availability: "Disponível",
    minQuantity: 1,
    specifications: [
      { label: "Potência", value: "350W RMS" },
      { label: "Autonomia", value: "6 horas" },
      { label: "Conectividade", value: "Bluetooth, USB, P2" },
      { label: "Microfone", value: "1 incluso" },
    ],
    tags: ["Tecnologia", "Som", "Bluetooth"],
  },
  {
    id: "6",
    title: "Freezer Vertical 300L",
    description:
      "Freezer vertical de 300 litros, ideal para restaurantes temporários, feiras, eventos gastronômicos, apoio de cozinha ou armazenamento extra em residências.",
    category: "Eletrodomésticos",
    price: "R$ 120,00",
    priceType: "/dia",
    images: ["freezer", "freezer-2"],
    whatsapp: "5511963119191",
    availability: "Disponível",
    minQuantity: 1,
    specifications: [
      { label: "Capacidade", value: "300 litros" },
      { label: "Tensão", value: "Bivolt" },
      { label: "Temperatura", value: "-18°C" },
      { label: "Prateleiras", value: "6 ajustáveis" },
    ],
    tags: ["Eletrodomésticos", "Freezer", "Cozinha"],
  },
  {
    id: "7",
    title: "Lavadora de Alta Pressão 1800W",
    description:
      "Lavadora de alta pressão ideal para limpezas externas, automóveis, áreas industriais e pavimentos. Equipamento potente, econômico e fácil de usar.",
    category: "Equipamentos",
    price: "R$ 85,00",
    priceType: "/dia",
    images: ["lavadora", "lavadora-2"],
    whatsapp: "5511963119191",
    availability: "Disponível",
    minQuantity: 1,
    specifications: [
      { label: "Potência", value: "1800W" },
      { label: "Pressão", value: "1800 PSI" },
      { label: "Mangueira", value: "5 metros" },
      { label: "Tensão", value: "Bivolt" },
    ],
    tags: ["Limpeza", "Alta Pressão", "Residencial"],
  },
  {
    id: "8",
    title: "Micro-ondas 30 Litros",
    description:
      "Micro-ondas moderno de 30 litros, ideal para cozinhas temporárias, feiras gastronômicas, suporte de cozinha ou uso residencial emergencial.",
    category: "Eletrodomésticos",
    price: "R$ 40,00",
    priceType: "/dia",
    images: ["microondas", "microondas-2"],
    whatsapp: "5511963119191",
    availability: "Disponível",
    minQuantity: 1,
    specifications: [
      { label: "Capacidade", value: "30 litros" },
      { label: "Funções", value: "Descongelar, aquecer, grill" },
      { label: "Tensão", value: "Bivolt" },
    ],
    tags: ["Cozinha", "Praticidade"],
  },
  {
    id: "9",
    title: "Tenda 3x3 Reforçada",
    description:
      "Tenda reforçada de 3x3m, ideal para áreas externas, proteção contra sol e chuva, feiras, vendas e ambientes temporários.",
    category: "Estruturas",
    price: "R$ 95,00",
    priceType: "/dia",
    images: ["tenda", "tenda-2"],
    whatsapp: "5511963119191",
    availability: "Disponível",
    minQuantity: 1,
    specifications: [
      { label: "Dimensões", value: "3m x 3m" },
      { label: "Material", value: "Aço galvanizado" },
      { label: "Cobertura", value: "Lona impermeável" },
    ],
    tags: ["Estruturas", "Outdoor"],
  },
  {
    id: "11",
    title: "Cafeteira Elétrica 1,5L",
    description:
      "Cafeteira elétrica ideal para escritórios temporários, recepções ou uso doméstico. Prepara até 30 xícaras.",
    category: "Eletrodomésticos",
    price: "R$ 25,00",
    priceType: "/dia",
    images: ["cafeteira", "cafeteira-2"],
    whatsapp: "5511963119191",
    availability: "Disponível",
    minQuantity: 1,
    specifications: [
      { label: "Capacidade", value: "1,5L" },
      { label: "Função", value: "Aquecimento automático" },
      { label: "Filtro", value: "Permanente" },
    ],
    tags: ["Cozinha", "Café"],
  },
  {
    id: "12",
    title: "Ventilador Industrial 70cm",
    description:
      "Ventilador industrial de alto desempenho indicado para galpões, lojas, estúdios e ambientes amplos.",
    category: "Equipamentos",
    price: "R$ 50,00",
    priceType: "/dia",
    images: ["ventilador", "ventilador-2"],
    whatsapp: "5511963119191",
    availability: "Disponível",
    minQuantity: 1,
    specifications: [
      { label: "Diâmetro", value: "70cm" },
      { label: "Velocidades", value: "3 níveis" },
      { label: "Tensão", value: "Bivolt" },
    ],
    tags: ["Ventilação", "Industrial"],
  },
  {
    id: "23",
    title: "Forno Elétrico 45L",
    description:
      "Forno elétrico ideal para cozinhas temporárias, food trucks ou uso doméstico emergencial.",
    category: "Eletrodomésticos",
    price: "R$ 35,00",
    priceType: "/dia",
    images: ["forno", "forno-2"],
    whatsapp: "5511963119191",
    availability: "Disponível",
    minQuantity: 1,
    specifications: [
      { label: "Capacidade", value: "45L" },
      { label: "Temperatura Máxima", value: "250°C" },
    ],
    tags: ["Cozinha", "Forno"],
  },
];

export const categories = [
  { name: "Todos", icon: MdCategory },
  { name: "Mobiliário", icon: MdChair },
  { name: "Iluminação", icon: MdLightbulb },
  { name: "Decoração", icon: MdBrush },
  { name: "Tecnologia", icon: MdDevicesOther },
  { name: "Ferramentas", icon: MdBuild },
  { name: "Equipamentos", icon: MdConstruction },
  { name: "Eletrodomésticos", icon: MdKitchen },
  { name: "Veículos", icon: MdDirectionsCar },
  { name: "Estruturas", icon: MdWarehouse },
];
