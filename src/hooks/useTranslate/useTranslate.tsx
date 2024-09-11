import { Formats, RichTranslationValues, useTranslations } from "next-intl";
import { LanguageText } from "../../../messages/interface/interface";

const TRANSLATE_RICH_OPTIONS = {
  br: () => <br></br>,
};

const useTranslate = <T extends keyof LanguageText>(componentName: T) => {
  const translate = useTranslations(componentName);
  const rich = (
    name: keyof LanguageText[T],
    options?: RichTranslationValues,
    formats?: Formats
  ) =>
    translate.rich(
      name as any, // TYPE TODO
      { ...TRANSLATE_RICH_OPTIONS, ...options },
      formats
    );

  const raw = translate.raw;

  return { translate, rich, raw };
};

export default useTranslate;
