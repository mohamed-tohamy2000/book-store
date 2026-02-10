
import CheckboxList from "./CheckboxList";
import Dropdown from "./Dropdown";
import { VscSettings } from "react-icons/vsc";

export default function FilterSidebar() {
  const categories = [
    { label: "All categories", count: 1450 },
    { label: "Business", count: 140 },
    { label: "Kids", count: 309 },
    { label: "Art", count: 102 },
    { label: "History", count: 204 },
    { label: "Romance", count: 89 },
    { label: "Fantasy", count: 47 },
    { label: "Self Help", count: 163 },
    { label: "Cooking", count: 211 },
    { label: "Sports", count: 92 },
  ];

    
    const Publisher = [
      { label: "Paulo Coelo", count: 210 },
      { label: "Jane Austen", count: 140 },
      { label: "Charles Dickens", count: 309 },
      { label: "Mark Twain", count: 102 },
      { label: "Virginia Woolf", count: 204 },
      { label: "Leo Tolstoy", count: 89 },
      { label: "Fyodor Dostoevsky", count: 47 },
      { label: "Haruki Murakami", count: 163 },
      { label: "Gabriel Márquez", count: 211 },
      { label: "Chinua Achebe", count: 92 },
    ];
  
  
    const Year =[
      { label: "2024", count: 210 },
      { label: "2023", count: 140 },
      { label: "2022", count: 309 },
      { label: "2021", count: 102 },
      { label: "2020", count: 204 },
      { label: "2019", count: 89 },
      { label: "2018", count: 47 },
      { label: "2017", count: 163 },
      { label: "2016", count: 211 },
      { label: "2015", count: 92 },
    ];

  return (
    <aside className="w-93 p-10 flex flex-col bg-[#F5F5F5] border-r border-black/10">
      <h2 className="flex items-center gap-2 font-bold text-gray-500 text- mb-4">
        <VscSettings/>
         Filter
      </h2>

      {/* Categories – مفتوح افتراضي */}
      <Dropdown title="Categories" defaultOpen>
        <CheckboxList items={categories} />
        <button className="text-pink-500 text-sm mt-3">
          Load More
        </button>
      </Dropdown>

      {/* Publisher */}
      <Dropdown title="Publisher">
        <CheckboxList items={Publisher} />
        <button className="text-pink-500 text-sm mt-3">
          Load More
        </button>
      </Dropdown>

      {/* Year */}
      <Dropdown title="Year">
        <CheckboxList items={Year} />
        <button className="text-pink-500 text-sm mt-3">
          Load More
        </button>
      </Dropdown>
    </aside>
  );
}
