import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl?: string;
};

type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      {
        id: "bruschetta",
        name: "Bruschetta",
        description: "Grilled bread with tomatoes, garlic, basil, and olive oil.",
        price: "$8",
        imageUrl: "/images/menu/bruschetta.jpg",
      },
      {
        id: "calamari",
        name: "Fried Calamari",
        description: "Lightly breaded and fried squid rings with lemon aioli.",
        price: "$12",
        imageUrl: "/images/menu/calamari.jpg",
      },
    ],
  },
  {
    id: "mains",
    title: "Main Courses",
    items: [
      {
        id: "grilled-salmon",
        name: "Grilled Salmon",
        description: "Fresh salmon fillet with lemon butter sauce, served with vegetables.",
        price: "$24",
        imageUrl: "/images/menu/grilled-salmon.jpg",
      },
      {
        id: "ribeye-steak",
        name: "Ribeye Steak",
        description: "Juicy ribeye steak grilled to your liking, with garlic mashed potatoes.",
        price: "$32",
        imageUrl: "/images/menu/ribeye-steak.jpg",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      {
        id: "cheesecake",
        name: "Classic Cheesecake",
        description: "Creamy cheesecake with a graham cracker crust and strawberry sauce.",
        price: "$9",
        imageUrl: "/images/menu/cheesecake.jpg",
      },
      {
        id: "chocolate-mousse",
        name: "Chocolate Mousse",
        description: "Light and fluffy chocolate mousse topped with whipped cream.",
        price: "$8",
        imageUrl: "/images/menu/chocolate-mousse.jpg",
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      {
        id: "house-red-wine",
        name: "House Red Wine",
        description: "Smooth and rich red wine, perfect with any meal.",
        price: "$7/glass",
      },
      {
        id: "iced-tea",
        name: "Fresh Brewed Iced Tea",
        description: "Refreshing black iced tea served with lemon.",
        price: "$3",
      },
    ],
  },
];

export function Menu() {
  return (
    <section className="space-y-10 max-w-5xl mx-auto p-6 sm:p-8">
      <h1 className="text-4xl font-bold text-center text-[#26170e] mb-8">Our Menu</h1>

      {menuData.map(category => (
        <div key={category.id} className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#26170e] border-b border-[#f1ddc9] pb-2">{category.title}</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {category.items.map(item => (
              <Card key={item.id} className="border-[#f1ddc9] bg-[#fffaf2] flex flex-col">
                {item.imageUrl && (
                  <div className="h-40 w-full overflow-hidden rounded-t-xl">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                )}
                <CardContent className="flex flex-col flex-1 p-4">
                  <CardHeader className="p-0 mb-2">
                    <CardTitle className="text-lg text-[#26170e]">{item.name}</CardTitle>
                    <CardDescription className="text-[#6f5b4a]">{item.description}</CardDescription>
                  </CardHeader>
                  <div className="mt-auto text-right font-semibold text-[#d94828]">{item.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
