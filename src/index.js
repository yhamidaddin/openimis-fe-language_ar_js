import messages_ar from "./translations/ar.json";
import flatten from "flat";

const DEFAULT_CONFIG = {
  "translations": [{ key: 'ar', messages: flatten(messages_ar) }],
}

export const LanguageArModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}
