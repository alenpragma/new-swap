import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://mindchain.info/contact-us",
      },
      {
        label: "About",
        href: "https://mindchain.info/about-mindchain",
      },
      {
        label: "Blog",
        href: "https://mindchain.info/blog",
      },
      {
        label: "Docs",
        href: "https://mindchain.info/docs",
      },
      {
        label: "Join DeFi",
        href: "https://defi.mindchain.info/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Find More",
    items: [
      {
        label: "Explorer",
        href: "https://bscscan.com/token/0x258ea33a949d8562a2683e1c54d4baead2949f9e",
      },
      {
        label: "Coinmooner",
        href: "https://coinmooner.com/coin/mindchain-coin-mind",
      },
      {
        label: "Apespace",
        href: "https://apespace.io/bsc/0x258ea33a949d8562a2683e1c54d4baead2949f9e?",
      },
      {
        label: "DexGuru",
        href: "https://dex.guru/token/0x258ea33a949d8562a2683e1c54d4baead2949f9e-bsc"
      }
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/mindchaincoin",
      },
      {
        label: "Documentation",
        href: "https://mindchain.info/docs",
      },
      {
        label: "Audit",
        href: "https://paladinsec.co/",
      },
      {
        label: "Careers",
        href: "https://mindchain.info/careers",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/MindChain1",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/mindchainMIND",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/PancakeSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/Mindchain_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/MindchainVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/pancakeswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/Mindchain_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/Mindchainturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/MindchainPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/MindchainEs",
      },
      {
        label: "日本語",
        href: "https://t.me/Mindchainjp",
      },
      {
        label: "Français",
        href: "https://t.me/Mindchainfr",
      },
      {
        label: "Deutsch",
        href: "https://t.me/Mindchain_DE",
      },
      {
        label: "Filipino",
        href: "https://t.me/Mindchain_Phn",
      },
      {
        label: "ქართული ენა",
        href: "https://t.me/MindchainGeorgia",
      },
      {
        label: "हिन्दी",
        href: "https://t.me/MindchainINDIA",
      },
      {
        label: "Announcements",
        href: "https://t.me/mindchain1",
      },
    ],
  },
  {
    label: "Reddit",
    icon: RedditIcon,
    href: "https://www.reddit.com/user/mindchaincoin",
  },
  {
    label: "YouTube",
    icon: InstagramIcon,
    href: "https://www.youtube.com/c/MINDCHAIN",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/mindchaincoin/",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.com/channels/910149384858136587/910149385302720513",
  },
  {
    label: "Medium",
    icon: MediumIcon,
    href: "https://medium.com/mindchaincoin",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
