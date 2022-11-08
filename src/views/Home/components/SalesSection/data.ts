import { TranslateFunction } from '@pancakeswap/localization'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('No KYC or sign-ups required. No extra fees.'),
  bodyText: t('Anyone can provide liquidity to MindchainSwap by depositing tokens e.g. Traders, Token Owners.'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://mindchain.info/about-mindchain/',
    text: t('Know More'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',  
      attributes: [
        { src: 'BNB', alt: t('BNB token') },
        { src: 'BTC', alt: t('BTC token') },
        { src: 'CAKE', alt: t('mind token') },
    ],

  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Simply deposit your liquidity and start earning.'),
  bodyText: t('MindchainSwap gives liquidity providers to choose a liquidity protocols to earn passive income.'),
  reverse: true,
  primaryButton: {
    to: '/swap',
    text: t('Swap'),
    external: false,
  },
  secondaryButton: {
    to: 'https://mindchain.info/blog',
    text: t('Know More'),
    external: true,
  },
  images: {
    
    path: '/images/home/trade/',  
    attributes: [
      { src: 'BNB', alt: t('BNB token') },
      { src: 'BTC', alt: t('BTC token') },
      { src: 'CAKE', alt: t('mind token') },
  ],
   
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Mindchain Coin - Next Generation Crypto Asset'),
  bodyText: t(
    'Mindchain consensus protocol delivers unparalleled speed, security, and  reliability. Enjoy almost instant transactions and extremely low fees.',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x258Ea33a949D8562A2683e1C54D4bAeAd2949F9E&chainId=56',
    text: t('Buy MIND'),
    external: false,
  },
  secondaryButton: {
    to: 'https://mindchain.info/about-mindchain/',
    text: t('About us'),
    external: true,
  },

  images: {
    path: '/images/home/trade/',  
    attributes: [
      { src: 'BNB', alt: t('BNB token') },
      { src: 'BTC', alt: t('BTC token') },
      { src: 'CAKE', alt: t('mind token') },
  ],
  },
})
