// import images
import Logo from '../src/assets/header/logo.svg';
import GalleryImg1 from '../src/assets/gallery/1.png';
import GalleryImg2 from '../src/assets/gallery/2.png';
import GalleryImg3 from '../src/assets/gallery/3.png';
import GalleryImg4 from '../src/assets/gallery/4.png';
import GalleryImg5 from '../src/assets/gallery/5.png';
import GalleryImg6 from '../src/assets/gallery/6.png';
import GalleryImg7 from '../src/assets/gallery/7.png';
import GalleryImg8 from '../src/assets/gallery/8.png';
import QuoteImg from '../src/assets/testimonial/quote.svg';

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: '/', name: 'Home' },
    { href: '#sobre', name: 'Sobre' },
    { href: '#galeria', name: 'Galeria' },
    { href: '#serviços', name: 'Serviços' },
    { href: '#entrevista', name: 'Entrevista' },
    { href: '#contato', name: 'Contato' },
  ],
};

export const heroData = {
  title: 'CrazyTattos.',
  subtitle:
    'As tatuagens têm seu próprio poder e magia únicos. Eles não apenas embelezam o corpo, mas também representam os seus pensamentos.',
  btnText: 'Mais informações',
  btnIcon: 'IoMdArrowForward',
};

export const aboutData = {
  title: 'Minha História:',
  subtitle1:
    'No coração de uma cidade movimentada, entre vielas pitorescas e luzes de néon, reside Marco, um tatuador exímio que transforma peles em obras-primas.',
  subtitle2:
    'Sua jornada começou modesta, em um estúdio improvisado, onde cada traço era uma promessa de arte. Com habilidades afiadas como agulhas, Marco conquistou fama por seus desenhos intrincados e estilo único.  Seu estúdio agora é um santuário da criatividade, onde cada tatuagem é mais do que uma marca na pele - é uma expressão de identidade e uma conexão com o extraordinário. Marco, o tatuador de sucesso, continua a deixar sua marca no mundo, uma tatuagem de cada vez.',
  btnText: 'Saber Mais',
  btnIcon: 'IoMdArrowForward',
};

export const galleryData = {
  title: 'Confira minha galeria:',
  btnText: 'Ver tudo',
  btnIcon: 'IoMdArrowForward',
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
};

export const interviewData = {
  title:
    '“A tatuagem é a arte de eternizar na pele as histórias e paixões que carregamos na alma.”',
  btnText: 'Veja agora',
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "Toda a equipe é extremamente gentil e amigável. Eles são fantásticos. Eles são ótimos no que fazem! Agradeço muito fazer parte da história de vocês!",
    name: 'Jack Geoffrey',
    occupation: 'Tattoador',
  },
  {
    quoteImg: QuoteImg,
    message:
      'Recentemente, fui ao estúdio CrazyTattoos e tive uma experiência incrível. Desde o momento em que entrei, fui recebido com muita cordialidade e profissionalismo. O ambiente é extremamente limpo e organizado, o que me deixou à vontade. ',
    name: 'Douglas Hane',
    occupation: 'Tattoador',
  },
];

export const contactData = {
  title: 'Entre em contato comigo:',
  info: [
    {
      title: 'Estúdio Salvador',
      subtitle:
        'Venha conhecer nosso estúdio de tattuagem em Salvador cada vez mais profissional e organizado.',
      address: {
        name: 'Rua das ruas 123, Salvador',
      },
      phone: {
        number: '+55 71 30493943',
      },
      email: {
        address: 'crazyTattoos@gmail.com',
      },
      link: 'Salvador - BA',
    },
    {
      title: 'Estúdio São Paulo',
      subtitle:
        'Venha conhecer nosso estúdio de tattuagem em São Paulo cada vez mais profissional e organizado.',
      address: {
        name: '25 de março, São Paulo',
      },
      phone: {
        number: '+55 71 36573355',
      },
      email: {
        address: 'crazyTattoos@gmail.com',
      },
      link: 'São Paulo - SP',
    },
  ],
  form: {
    name: 'Digite seu nome aqui',
    email: 'Digite seu email aqui',
    message: 'Deixe sua mensagem aqui',
    btnText: 'Enviar',
  },
};

export const footerData = {
  about: {
    title: 'Crazy Tattoos',
    subtitle:
      'Tattooagem não é só uma arte, mas sim uma forma de se expressar, eternizar suas crenças em seu próprio corpo.',
    address: {
      icon: 'FaMapMarkerAlt',
      name: '4444 Rua 123, Salvador-BA',
    },
    phone: {
      icon: 'FaPhoneAlt',
      number: '+55 71 36573355',
    },
    email: {
      icon: 'FaEnvelope' ,
      address: 'crazyTattoos@gmail.com',
    },
  },
  links: {
    title: 'Links Úteis',
    items: [
      { href: '/', name: 'Sobre nós' },
      { href: '/', name: 'Minha Galeria' },
      { href: '/', name: 'Meus Serviços' },
      { href: '/', name: 'Contate-me' },
    ],
  },
  program: {
    title: 'Expediente',
    items: [
      { name: 'Seg - Terça / Consulta' },
      { name: 'Quarta - Sexta / 10h00 - 21h00'},
      { name: 'Sábado / 10h00 - 18h00' },
      { name: 'Dom/sem trabalho neste dia' },
    ],
  },
  newsletter: {
    title: 'Deixe seu contato aqui',
    subtitle:
      'Inspire-se: Arte na Pele, Histórias para Contar.',
    form: {
      placeholder: 'Digite o seu email',
      icon: 'FiSend ',
    },
  },
};
