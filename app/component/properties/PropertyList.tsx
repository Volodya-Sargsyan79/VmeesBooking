import PropertyListItem from "./PropertyListItem"

const categoriesValue = {
    bichHous: { jpg: "/01/f7f79d47-7d08-4b2d-acaa-8117736b6c7b.avif", title: "Property name", cost: 200 },
    bichCotej: { jpg: "/01/f7f79d47-7d08-4b2d-acaa-8117736b6c7b.avif", title: "Property name", cost: 150 },
    bichTay: { jpg: "/01/f7f79d47-7d08-4b2d-acaa-8117736b6c7b.avif", title: "Property name", cost: 210 },
};

const PropertyList: React.FC = () => {
    return (
        <>
            {Object.values(categoriesValue).map((v, i) => (
                <PropertyListItem jpg={v.jpg} nameCategory={v.title} costCategory={v.cost} key={i}/>
            ))}
        </>
    )
}

export default PropertyList;