export interface CityEvent {
  slug: string;
  city: string;
  state: string;
  date: string;
  dateFormatted: string;
  dayOfWeek: string;
  time: string;
  venue: string;
  address: string;
  localName: string;
  mapUrl: string;
  ticketUrl: string;
}

export interface SponsorTier {
  name: string;
  price: string;
  color: string;
  benefits: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const siteConfig = {
  title: "A Paixão de Cristo",
  subtitle: "O Maior Espetáculo da Fé",
  description: "O Circuito das Águas Paulista será a capital estadual da Paixão de Cristo.",
  region: "Circuito das Águas Paulista",
};

export const cities: CityEvent[] = [
  {
    slug: "lindoia",
    city: "Lindóia",
    state: "SP",
    date: "2026-03-28",
    dateFormatted: "28 de Março de 2026",
    dayOfWeek: "Sábado",
    time: "20h00",
    venue: "Praça das Águas",
    address: "Av. 31 de Março, 39",
    localName: "Praça das Águas",
    mapUrl: "https://maps.google.com/?q=Lindoia+SP",
    ticketUrl: "#",
  },
  {
    slug: "socorro",
    city: "Socorro",
    state: "SP",
    date: "2026-04-03",
    dateFormatted: "03 de Abril de 2026",
    dayOfWeek: "Sexta-feira Santa",
    time: "20h00",
    venue: "Parque da Cidade",
    address: "Parque da Cidade",
    localName: "João Orlandi Pagliusi",
    mapUrl: "https://maps.google.com/?q=Socorro+SP",
    ticketUrl: "#",
  },
];

/* ═══════════════════════════════════════════
   SINOPSE
   ═══════════════════════════════════════════ */
export const sinopse = {
  title: "A História que Transformou o Mundo",
  text: "A Paixão de Cristo é o enredo que conta a história do maior líder religioso da humanidade: a trajetória do menino que nasce em uma manjedoura e, quando adulto, é cruelmente crucificado devido ao seu posicionamento diante das injustiças e dores do mundo.",
};

/* ═══════════════════════════════════════════
   MISSÃO / OBJETIVO
   ═══════════════════════════════════════════ */
export const missao = {
  title: "Nossa Missão",
  paragraphs: [
    'Realizar duas grandes apresentações do espetáculo "A Paixão de Cristo", protagonizado pelo ator Henri Castelli e um elenco de excelência, com o objetivo de consolidar o Circuito das Águas Paulista como um dos principais polos de turismo religioso do Brasil, posicionando a região como a Capital Nacional da Paixão de Cristo no Circuito das Águas.',
    "O projeto visa integrar e promover as cidades que compõem o Circuito das Águas Paulista, fortalecendo a identidade regional por meio da fé, da arte e da cultura, ampliando o fluxo turístico, gerando visibilidade nacional, movimentando a economia local e criando oportunidades de parceria com o poder público e a iniciativa privada.",
  ],
};

/* ═══════════════════════════════════════════
   PROTAGONISTA
   ═══════════════════════════════════════════ */
export const henriCastelli = {
  name: "Henri Castelli",
  fullName: "Henri Lincoln Fernandes",
  role: "Jesus Cristo",
  image: "/images/henri-castelli.jpg",
  bio: "Nascido em 10 de fevereiro de 1978, em São Bernardo do Campo (SP), Henri Castelli é um dos atores mais reconhecidos da televisão brasileira. Com 47 anos e mais de 26 anos de carreira, consolidou-se como galã da teledramaturgia nacional.",
  bio2: 'Com sólida carreira na TV, na publicidade e no teatro, o ator também assume a co-produção do espetáculo "A Paixão de Cristo".',
  works: "Hilda Furacão (1998), Pecado Capital (1998), Um anjo caiu do Céu (2001), Malhação (2002), Celebridade (2003), Como uma Onda (2004), Cobras & Lagartos (2006), Caras & Bocas (2009), Gabriela (2012), Flor do Caribe (2013), I Love Paraisópolis (2015), Sol Nascente (2016).",
  quote: '"Interpretar Jesus é estar em paz, em silêncio e escutar o que está no seu coração. Eu simplesmente, novamente com toda humildade, entro no palco e tento deixar o Espírito Santo tomar conta de mim."',
};

/* ═══════════════════════════════════════════
   TIMELINE
   ═══════════════════════════════════════════ */
export const timeline = [
  { year: "2016-2017", city: "Cuiabá - MT", desc: "Duas edições consecutivas com foco em inclusão social. Público total: 70.000+ pessoas." },
  { year: "2022", city: "Mucajaí - RR", desc: "38ª edição tradicional pós-pandemia. Público: 20.000+ pessoas." },
  { year: "2023", city: "João Pessoa - PB", desc: "Musical de Vida no Centro Cultural São Francisco. Público: 30.000+ pessoas." },
  { year: "2025", city: "Pacatuba - CE", desc: "Maior Paixão de Cristo do Nordeste com 240 atores. Público: 40.000+ pessoas." },
  { year: "2026", city: "Lindóia e Socorro - SP", desc: "Circuito das Águas Paulista. Público estimado: 100.000 pessoas.", current: true as const },
];

/* ═══════════════════════════════════════════
   MOMENTOS DA PAIXÃO
   ═══════════════════════════════════════════ */
export const momentosDaPaixao = [
  "Abertura – Entrada do Elenco", "Tentações no Deserto", "Entrada de João Batista",
  "Predição de Jerusalém", "Jesus e as Crianças", "Ira de Jesus no Templo",
  "Milagres de Jesus", "As Bem Aventuranças", "Multiplicação dos Pães",
  "Santa Ceia", "Traição de Judas", "Prisão de Jesus",
  "Jesus a Herodes", "Jesus Diante de Caifás", "Negação de Pedro",
  "Julgamento de Pilatos", "Via Crucis", "Crucificação", "Ressurreição",
];

/* ═══════════════════════════════════════════
   EQUIPE / FICHA TÉCNICA
   ═══════════════════════════════════════════ */
export const equipe: TeamMember[] = [
  {
    name: "Henri Castelli",
    role: "Jesus Cristo",
    image: "/images/henri-castelli.jpg",
    bio: "Ator e co-produtor do espetáculo, com mais de 26 anos de carreira na TV brasileira.",
  },
  {
    name: "Clayson Viana",
    role: "Produção e Direção",
    image: "/images/equipe/clayson-viana.jpg",
    bio: "Diretor Geral da Paixão de Cristo de Pacatuba, Diretor da Via Cia Produção e Eventos, Integrante do Grupo de Tradições Cearenses, Coreógrafo e Brincante da Quadrilha Junina Explode Coração, Mestre sala da Escola Corte no Samba e Porta Estandarte do Maracatu Vozes da África. Espetáculos montados e apresentados em vários estados e países do mundo, dentre eles, Estados Unidos, Itália, Luxemburgo e China.",
  },
  {
    name: "Breno Floriz",
    role: "Produção e Direção Teatral",
    image: "/images/equipe/breno-floriz.jpg",
    bio: 'Dentre suas criações mais recentes estão "Encanto das Luzes" | Parada de Natal com a prefeitura de Serra Negra-SP. Em 2025, adaptou, dirigiu e atuou em HAMLET de Shakespeare.',
  },
  {
    name: "Alexandre Cruz",
    role: "Figurinos e Adereços",
    image: "/images/equipe/alexandre-cruz.jpg",
    bio: "",
  },
  {
    name: "Heleonora Lucas",
    role: "Direção e Coreografias",
    image: "/images/equipe/heleonora-lucas.jpg",
    bio: "",
  },
  {
    name: "Dani Bassit",
    role: "Assessoria de Imprensa",
    image: "/images/equipe/dani-bassit.jpg",
    bio: "",
  },
];

/* ═══════════════════════════════════════════
   CIRCUITO DAS ÁGUAS PAULISTA (Justificativa)
   ═══════════════════════════════════════════ */
export const circuitoAguas = {
  title: "O Circuito das Águas Paulista",
  localizacao: {
    title: "Localização e composição",
    text: "Situada na Serra da Mantiqueira, a cerca de 130-180 km da capital paulista, a região engloba diversas cidades, sendo as principais: Águas de Lindóia, Lindóia, Serra Negra, Socorro, Amparo, Monte Alegre do Sul e Pedra Bela.",
  },
  populacao: {
    title: "Perfil da população",
    paragraphs: [
      "A região tem forte tradição religiosa, com população predominantemente católica e cristã. As cidades mantêm igrejas históricas, celebram festas religiosas tradicionais ao longo do ano e possuem comunidades de fé ativas. Essa religiosidade se reflete na cultura local, nas festividades e no acolhimento característico do interior paulista — um terreno fértil para eventos como encenações da Paixão de Cristo.",
      "O Circuito das Águas Paulista, muito conhecido por seus atrativos turísticos e até mesmo culturais. A população, em sua grande maioria é cristã, ou seja, segue os exemplos de Jesus de Nazaré através de diferentes práticas religiosas.",
    ],
  },
  atracoes: [
    { title: "Águas minerais e termais", text: "A região é conhecida pelas fontes de águas com propriedades medicinais e terapêuticas, usadas em balneários e SPAs." },
    { title: "Ecoturismo e aventura", text: "Trilhas, cachoeiras, rapel, tirolesa, rafting e passeios de balão — especialmente em Socorro, que é polo de turismo de aventura." },
    { title: "Gastronomia e cultura", text: "Forte tradição gastronômica, com destaque para queijos, vinhos, cachaças artesanais e festivais regionais." },
    { title: "Turismo religioso", text: "Igrejas históricas, romarias e celebrações religiosas que atraem milhares de visitantes anualmente." },
  ],
  demographics: [
    { value: "57%", label: "Católicos" },
    { value: "30%", label: "Evangélicos" },
    { value: "87%", label: "População Cristã" },
    { value: "2", label: "Apresentações" },
  ],
};

/* ═══════════════════════════════════════════
   PÚBLICO ESTIMADO (Alcance)
   ═══════════════════════════════════════════ */
export const publicoEstimado = [
  { label: "Público Direto", value: "100.000", sub: "pessoas" },
  { label: "Público Indireto", value: "5.000.000", sub: "pessoas" },
  { label: "Ocupação Hoteleira", value: "80-90%", sub: "na região" },
  { label: "Movimentação Econômica", value: "R$ 500MIL+", sub: "estimado" },
  { label: "Empregos Temporários", value: "100+", sub: "postos de trabalho" },
  { label: "Mídia Espontânea", value: "Regional", sub: "e nacional" },
];

/* ═══════════════════════════════════════════
   DIVULGAÇÃO (Democratização do Acesso)
   ═══════════════════════════════════════════ */
export const divulgacao = [
  { title: "Televisão", text: "Programas de televisão de alcance nacional." },
  { title: "Redes Sociais", text: "Elenco, prefeitura e patrocinadores. Henri Castelli: 3,3 milhões de seguidores." },
  { title: "Imprensa", text: "Outdoors, jornais, folhetos e cartazes." },
];

export const acessibilidade = "O projeto prevê área de uso exclusivo por pessoas com necessidades especiais (idosos, cadeirantes, pessoas de baixa visão, etc) devidamente acomodadas em assentos próximos ao palco.";

export const classificacao = "Conteúdo livre para todos os públicos";

/* ═══════════════════════════════════════════
   COBERTURA DE MÍDIA
   ═══════════════════════════════════════════ */
export const coberturaMidia = {
  regional: {
    title: "Veículos de Comunicação da Região (Mailing)",
    list: "EPTV, Portal G1, CBN Campinas, Correio Popular, Band Mais TV, Jornal A Tribuna, Rádio Cultura FM, Mantiqueira FM, Rádio Socorro FM, Circuito de Notícias, Tribuna das Águas, TV Alesp, Rádio Estância e outros.",
  },
  saoPaulo: {
    title: "Principais Veículos de São Paulo",
    list: "TV Globo, Record, SBT, Band, Rede TV e TV Gazeta, Rádio CBN, BandNews, Jovem Pan, G1, Folha de São Paulo, O Estado de São Paulo, Leo Dias, Uol, Terra, IG, globo.com e outros.",
  },
};

/* ═══════════════════════════════════════════
   COTAS DE PATROCÍNIO (com preços reais)
   ═══════════════════════════════════════════ */
export const sponsorTiers: SponsorTier[] = [
  {
    name: "Bronze",
    price: "R$ 15.000,00",
    color: "#CD7F32",
    benefits: [
      "Exposição da marca no cartaz (outdoor, mídias físicas e digitais)",
    ],
  },
  {
    name: "Prata",
    price: "R$ 30.000,00",
    color: "#C0C0C0",
    benefits: [
      "Exposição da marca no cartaz (outdoor, mídias físicas e digitais)",
      "Espaço nos telões antes do espetáculo",
      "Acesso especial ao camarim do Henri Castelli e elenco principal para 02 pessoas após a apresentação",
    ],
  },
  {
    name: "Suprema",
    price: "R$ 50.000,00",
    color: "#C8A961",
    benefits: [
      "Exposição da marca no cartaz (outdoor, mídias físicas e digitais)",
      "Divulgações em rádios com a voz do Henri Castelli",
      "Espaço nos telões antes do espetáculo",
      "Publicação da marca nas redes sociais do Henri Castelli (3,3 milhões de seguidores)",
      "Acesso especial ao camarim do Henri Castelli e elenco principal para 5 pessoas após a apresentação",
    ],
  },
];

/* ═══════════════════════════════════════════
   CONTATO (pessoas reais)
   ═══════════════════════════════════════════ */
export const contatos = [
  { name: "Breno Floriz", role: "Produção", phone: "(19) 99888-6610" },
  { name: "Marco Rovatti", role: "Comercial", phone: "(11) 91105-2669" },
];

export const contactInfo = {
  email: "contato@paixaodecristo.com.br",
  phone: "(19) 99888-6610",
  instagram: "@paixaodecristocircuito",
};

/* ═══════════════════════════════════════════
   GALERIA
   ═══════════════════════════════════════════ */
export const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Cena do espetáculo" },
  { src: "/images/gallery-2.jpg", alt: "Santa Ceia" },
  { src: "/images/gallery-3.jpg", alt: "Henri Castelli como Jesus" },
  { src: "/images/gallery-4.jpg", alt: "Cenografia" },
  { src: "/images/gallery-5.jpg", alt: "Elenco em cena" },
  { src: "/images/gallery-6.jpg", alt: "Entrada triunfal" },
  { src: "/images/gallery-7.jpg", alt: "Soldados romanos" },
  { src: "/images/gallery-8.jpg", alt: "Cena noturna" },
  { src: "/images/gallery-9.jpg", alt: "Jesus pregando" },
  { src: "/images/gallery-10.jpg", alt: "Via Crucis" },
  { src: "/images/gallery-11.jpg", alt: "Público" },
  { src: "/images/gallery-12.jpg", alt: "Crucificação" },
  { src: "/images/gallery-13.jpg", alt: "Ressurreição" },
  { src: "/images/gallery-14.jpg", alt: "Multiplicação dos pães" },
  { src: "/images/gallery-15.jpg", alt: "Cenário completo" },
  { src: "/images/gallery-16.jpg", alt: "Final do espetáculo" },
];