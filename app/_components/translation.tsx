import translate, { DeeplLanguages } from 'deepl'

const auth_key: string = (process.env.NEXT_PUBLIC_DEEPL_AUTH_KEY === undefined) ? "" : process.env.NEXT_PUBLIC_DEEPL_AUTH_KEY;

export async function Translator(my_text: string, my_target_lang: DeeplLanguages) {
  const res = await translate({ free_api: true, text: my_text, target_lang: my_target_lang, auth_key: auth_key })
  const result = res.data.translations
  return result[0]
}
