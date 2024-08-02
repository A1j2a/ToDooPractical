import English from "./eng";
import Hindi from "./hin";
import Spanish from "./spa";
import French from "./fre";
import Italian from "./ita";

import I18n from "react-native-i18n";
// import APISessionManger from '../../api/APISessionManger';
import { I18nManager } from "react-native";
import { asyncStorageKey, setData } from "../../global/GConstant";

export const localize = (name, params = {}) => {
  I18n.fallbacks = true;
  I18n.translations = {
    eng: English,
    hin: Hindi,
    spa: Spanish,
    fre: French,
    ita: Italian,
  };
  var currentLocal = I18n.currentLocale();
  return I18n.t(name, params);
};

export const changeLanguage = (params) => {
  console.log("params....", params);
  I18n.fallbacks = true;
  I18n.translations = {
    eng: English,
    hin: Hindi,
    spa: Spanish,
    fre: French,
    ita: Italian,
  };
  if (params == "hin") {
    I18n.locale = "hin";
  } else if (params == "spa") {
    I18n.locale = "spa";
  } else if (params == "fre") {
    I18n.locale = "fre";
  } else if (params == "ita") {
    I18n.locale = "ita";
  } else {
    I18n.locale = "eng";
  }
  _callLangStore(params);
};

export const _callLangStore = async (params) => {
  await setData(asyncStorageKey.language, params);
};
