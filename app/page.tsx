import ThemeSwitch from '@/app/ui/ThemeSwitch';
import Button from '@/app/ui/Button';

export default function Home() {
  return (
    <div className="m-auto">
      <Button className="primary-btn">button with</Button>
      <ThemeSwitch />
    </div>
  );
}
