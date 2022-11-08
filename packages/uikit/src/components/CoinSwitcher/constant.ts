const PATH = `https://cdn.pancakeswap.com/sequnce-assets/`;

export const BNB2MIND_PATH = `${PATH}bnb2cake/bnb2cake-`;
export const BNB2MIND_COUNTS = 31;

export const MIND2BNB_PATH = `${PATH}cakebnb/cake2bnb-`;
export const MIND2BNB_COUNTS = 31;

export const FILE_TYPE = `.png`;

const pathGenerator = (path: string) => (d: string, index: number) => {
  if (index < 10) return `${path}0${index}${FILE_TYPE}`;
  return `${path}${index}${FILE_TYPE}`;
};

export const bnb2CakeImages = () => {
  let result: string[] = new Array(BNB2MIND_COUNTS);
  result.fill("");
  result = result.map(pathGenerator(BNB2MIND_PATH));
  return result;
};

export const cake2BnbImages = () => {
  let result: string[] = new Array(MIND2BNB_COUNTS);
  result.fill("");
  result = result.map(pathGenerator(MIND2BNB_PATH));
  return result;
};
