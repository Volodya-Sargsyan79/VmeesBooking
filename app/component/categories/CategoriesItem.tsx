import Image from "next/image";

interface CategoriesItemProps {
    jpg: string;
    nameCategory: string;
}

const CategoriesItem: React.FC<CategoriesItemProps> = ({ jpg, nameCategory }) => {
    return (
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
            <Image src={jpg} alt={nameCategory} width={20} height={20} />
            <span className="text-xs">{nameCategory}</span>
        </div>
    );
};

export default CategoriesItem;