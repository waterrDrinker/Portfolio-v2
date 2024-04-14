import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { Content, HeadPage } from '../../ui/work';

const WorkPage = async ({ params }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <HeadPage
        title={dictionary.work.title}
        subtitle={dictionary.work.subtitle}
      />
      <Content dictionary={dictionary} />
    </>
  );
};

export default WorkPage;
