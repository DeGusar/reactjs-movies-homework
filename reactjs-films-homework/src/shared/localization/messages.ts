import enMessages from './en.json';
import ruMessages from './ru.json';

type Messages = {
  [key: string]: { [key: string]: string };
};

const messages: Messages = {
  en: enMessages as { [key: string]: string } ,
  ru: ruMessages as { [key: string]: string },
};

export default messages;
