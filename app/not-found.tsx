import notFound from '../public/404_image.png';
import { Home } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  const t = useTranslations('NotFound');

  return (
    <main
      className="flex items-center justify-center"
      style={{ height: 'calc(100vh - 64px)' }}
    >
      <div className="flex flex-col items-center justify-center">
        <Image src={notFound.src} alt="404 image" width={350} height={350} />
        <p>{t('message')}...</p>
        <Link href="/" aria-label="Go back to the home page" className="mt-4">
          <Home size={24} />
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
