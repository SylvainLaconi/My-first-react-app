import everest from '../images/everest.png';
import kilimandjaro from '../images/kilimandjaro.png';
import montblanc from '../images/montblanc.png';
import aconcagua from '../images/aconcagua.png';
import kosciuszko from '../images/kosciuszko.png';
import denali from '../images/denali.png';


export const mountainsList = [
  {
    name: 'Everest',
    height: 8648,
    photo: everest,
    country: 'Népal',
    continent: 'Asie',
    isMythic: true
  },
  {
    name: 'Kilimandjaro',
    height: 5892,
    photo: kilimandjaro,
    country: 'Tanzanie',
    continent: 'Afrique',
    isMythic: true
  },
  {
    name: 'Mont-Blanc',
    height: 4808,
    photo: montblanc,
    country: 'France',
    continent: 'Europe',
    isMythic: true
  },
  {
    name: 'Aconcagua',
    height: 6962,
    photo: aconcagua,
    country: 'Argentine',
    continent: 'Amérique du sud',
    isMythic: true
  },
  {
    name: 'Kosciuszko',
    height: 2228,
    photo: kosciuszko,
    country: 'Australie',
    continent: 'Océanie',
    isMythic: false
  },
  {
    name: 'Denali',
    height: 6190,
    photo: denali,
    country: 'Etats-Unis',
    continent: 'Amérique du nord',
    isMythic: false
  }
]