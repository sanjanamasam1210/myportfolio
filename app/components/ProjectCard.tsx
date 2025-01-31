import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, imageSrc }) => {
  return (
    <Card className="w-full h-full flex flex-col overflow-hidden rounded-xl relative group">
      <div className="relative w-full pt-[56.25%]">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div></div>
      <CardHeader className="pl-0">
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
        <CardDescription className="text-sm md:text-base text-gray-800 tracking-widest">{description}</CardDescription>
      </CardHeader>
      
    </Card>
  );
};

export default ProductCard;
