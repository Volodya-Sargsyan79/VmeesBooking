import Categories from "./component/categories/Categories";
import PropertyList from "./component/properties/PropertyList";

export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <Categories />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <PropertyList />
      </div>
    </main>
  );
}
