import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { HeadPage } from '../../ui';
import { Content } from '../../ui/work';

const WorkPage = async ({ params }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <HeadPage
        title={dictionary.work.title}
        subtitle={dictionary.work.subtitle}
      />
      <Content dictionary={dictionary.projects} currentLang={params.lang} />
    </>
  );
};

export default WorkPage;
