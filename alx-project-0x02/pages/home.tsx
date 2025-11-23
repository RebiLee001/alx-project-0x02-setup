import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>
        <div className="grid grid-cols-2 gap-4">
          <Card title="Card 1" content="This is the content of card 1." />
          <Card title="Card 2" content="This is the content of card 2." />
        </div>
      </main>
    </div>
  );
};

export default Home;
