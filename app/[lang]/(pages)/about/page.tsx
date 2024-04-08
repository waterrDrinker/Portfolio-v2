import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { Content } from '../../ui/about';
import { HeadPage } from '../../ui';

const AboutPage = async ({ params }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <HeadPage
        title={dictionary.about.title}
        subtitle={dictionary.about.subtitle}
      />
      <Content dictionary={dictionary.about} currentLang={params.lang} />
    </>
  );
};

export default AboutPage;
