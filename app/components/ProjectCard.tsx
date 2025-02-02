import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, description, imageSrc }) => {
  return (
    <Link href={`/projects/${id}`} passHref>
      <Card className="w-full h-full flex flex-col overflow-hidden rounded-xl group cursor-pointer">
        <div className="relative w-full pt-[56.25%] ">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity flex items-center justify-center">
              <span className="text-white text-lg font-medium">See Details</span>
            </div>
          
        </div>
        <CardHeader className="pl-0">
          <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
          <CardDescription className="text-sm md:text-base text-gray-800 tracking-widest">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default ProductCard;
