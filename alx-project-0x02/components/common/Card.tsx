import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="max-w-sm p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
