import { Contactme, Hero, Projects, Widgets } from '@/app/[lang]/ui/home';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang)
  
  return (
    <>
      <Hero dictionary={dictionary} />
      <Projects dictionary={dictionary.projects} />
      <Widgets dictionary={dictionary.home.widgets} />
      <Contactme dictionary={dictionary} />
    </>
  );
}
