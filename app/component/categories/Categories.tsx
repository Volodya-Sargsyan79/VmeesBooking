import CategoriesItem from "./CategoriesItem";

const categoriesValue = {
    fantasticBasseng: { jpg: "/fantastic-basseng.jpg", name: "Fantastic Basseng" },
    wow: { jpg: "/wow.jpg", name: "Wow!" },
    inTheCountryside: { jpg: "/in-the-countryside.jpg", name: "In The Countryside" },
    luxe: { jpg: "/luxe.jpg", name: "Luxe" }
};

const Categories: React.FC = () => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            {Object.values(categoriesValue).map((v) => (
                <CategoriesItem jpg={v.jpg} nameCategory={v.name} key={v.name} />
            ))}
        </div>
    );
};

export default Categories;