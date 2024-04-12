import { getDictionary } from '@/get-dictionary';
import { Form, HeadPage } from '../../ui/contact';
import { Locale } from '@/i18n-config';

const ContactPage = async ({ params }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(params.lang);
  
  return (
    <>
      <HeadPage title={dictionary.contact.title} subtitle={dictionary.contact.subtitle} />
      <Form dictionary={dictionary.contact.form} />
    </>
  );
};

export default ContactPage;
