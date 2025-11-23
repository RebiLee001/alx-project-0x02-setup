import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const About: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-3xl font-bold mb-4">About Page</h1>
        <div className="flex gap-4">
          <Button size="small" shape="rounded-sm" label="Small Button" />
          <Button size="medium" shape="rounded-md" label="Medium Button" />
          <Button size="large" shape="rounded-full" label="Large Button" />
        </div>
      </main>
    </div>
  );
};

export default About;
