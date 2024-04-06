import { Contactme, Hero, Projects, Widgets } from '@/app/[lang]/components/home';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang)
  
  return (
    <>
      <Hero dictionary={dictionary.home.hero} />
      <Projects dictionary={dictionary.home.projects} />
      <Widgets dictionary={dictionary.home.widgets} />
      <Contactme dictionary={dictionary.home.contactme} />
    </>
  );
}
