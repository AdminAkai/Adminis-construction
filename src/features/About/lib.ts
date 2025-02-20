import { Variants } from 'framer-motion'
import CustomLink from 'src/shared/components/CustomLink'
import { GridItemsType, languageText } from 'src/shared/types'

export const GridItems: GridItemsType = [
  {
    name: 'LinkedIn',
    description: {
      en: 'Connect, follow, or message me on LinkedIn',
      jp: 'LinkedInでつながる、フォローする、メッセージする',
    },
    props: {
      to: 'https://www.linkedin.com/in/josh-adrian-trinidad/',
      ariaLabel: 'LinkedIn-Josh-Adrian-Trinidad',
    },
    Link: CustomLink,
  },
  {
    name: 'Github',
    description: {
      en: 'Contains the source code for this website and many of my other projects',
      jp: 'このウェブサイトと他の多くのプロジェクトのソースコードが含まれています。',
    },
    props: {
      to: 'https://github.com/AdminAkai',
      ariaLabel: 'Github-Josh-Adrian-Trinidad',
    },
    Link: CustomLink,
  },
]

export const aboutSummaries = [
  {
    header: {
      en: 'Mission',
      jp: '任務',
    },
    summary: {
      en: `With Adminis my goal is to demonstrate where innovation and passion meet
      technology. My journey in the world of programming started
      in highschool, and I've been doing it professionally for a little
      over 9 years now. Over time, I've honed my skills, staying
      forefront of industry trends and best practices. I love to learn, and
      programming never stops teaching.`,
      jp: `私は、革新と情熱がテクノロジーと出会う場所を示すためにアドミニスを作った。
      技術です。プログラミングの世界での私の旅は プログラミングの世界での私の旅は、
      高校時代に始まり、プロフェッショナルとして もう9年以上になる。長い間、私は自分のスキルを磨き、
      業界のトレンドやベストプラクティスの最前線に立ち続けてきました。業界のトレンドやベストプラクティスの最前線に立ち続けながら。
      私は学ぶことが大好きです。プログラミングは学ぶことを止めません。`,
    },
  },
  {
    header: {
      en: `Let's Work Together`,
      jp: '力を合わせよう',
    },
    summary: {
      en: `Reach out and contact me, and let's
      work together. Whether it's the next big thing you want to build
      from the ground up, or just a job position that needs filling,
      I'm available for all. Click on any of the panels to get to know
      more about me and to get started.`,
      jp: `アドミニスとしてもジョシュとしても、私に連絡してください。
      一緒に働きましょう。あなたが一から築き上げたいものが、次の大きなものであれ
      一から作り上げたいものであれ、補充が必要な職種であれ、
      どんなことでもご相談ください。パネルをクリックして、私についてもっと知り
      をクリックしてください。`,
    },
  },
  {
    header: {
      en: `Under Construction`,
      jp: '建設中',
    },
    summary: {
      en: `I am currently rebuilding Adminis to use ThreeJS for WebGL and 3D
      rendering using React Three Fiber, while also not sacrificing any of
      its current accessibility, as well as working on a ton of personal
      projects. I'll set them so you can view them here, but
      they'll also be available on my Github (the source code for this
      site is also there). Stay tuned!`,
      jp: `私は現在、WebGLとReact Three Fiberを使った3DレンダリングにThreeJSを使うようにAdminisを再構築している。
      現在のアクセシビリティを犠牲にすることなく、React Three Fiberを使ったWebGLと3Dレンダリングのために
      現在のアクセシビリティを犠牲にすることなく、また、個人的なプロジェクトに取り組んでいます。
      プロジェクトに取り組んでいます。このページで見ることができるように設定しておく。
      このサイトのソースコードもそこにあります）。
      このサイトのソースコードもそこにあります）。ご期待ください！`,
    },
  },
]

export const resumeDesc: languageText = {
  en: 'My resume',
  jp: '個人的に私のデー',
}

export const PageHeader: languageText = {
  en: 'About',
  jp: '概要',
}
