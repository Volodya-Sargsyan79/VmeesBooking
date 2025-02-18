import Image from "next/image"

interface CategoriesItemProps {
    jpg: string;
    nameCategory: string;
    costCategory: number;
}

const PropertyListItem: React.FC<CategoriesItemProps> = ({ jpg, nameCategory, costCategory }) => {
    return (
        <div className="cursor-pointer">
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                    fill 
                    src={jpg} 
                    alt={nameCategory} 
                    sizes="(max-width: 768px) 768px (max-width: 1200px): 768px, 768,px"
                    className="hover:scale-110 object-cover transition h-full w-full"
                />
            </div>

            <div className="mt-2">
                <p className="text-lg font-bold">{nameCategory}</p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-500"><strong>${costCategory}</strong> per night</p>
            </div>
        </div>
    )
}

export default PropertyListItem