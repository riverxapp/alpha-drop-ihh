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

const pageTitle = "Our Menu";

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
    <main className="mx-auto max-w-5xl space-y-12 px-6 py-8 sm:px-8">
      <h1 className="mb-10 text-center text-4xl font-extrabold tracking-tight text-[#26170e]">{pageTitle}</h1>

      {menuData.map((category) => (
        <div key={category.id} className="space-y-8">
          <h2 className="border-b border-[#f1ddc9] pb-3 text-3xl font-semibold text-[#26170e]">
            {category.title}
          </h2>
          <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3">
            {category.items.map((item) => (
              <Card
                key={item.id}
                className="flex flex-col rounded-xl border border-[#f1ddc9] bg-[#fffaf2] shadow-sm transition-shadow duration-200 hover:shadow-md"
                tabIndex={0}
                aria-label={`${item.name} - ${item.description}, priced at ${item.price}`}
              >
                {item.imageUrl && (
                  <div className="h-44 w-full overflow-hidden rounded-t-xl">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                )}
                <CardContent className="flex flex-1 flex-col p-5">
                  <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-xl leading-tight text-[#26170e]">{item.name}</CardTitle>
                    <CardDescription className="text-base text-[#6f5b4a]">{item.description}</CardDescription>
                  </CardHeader>
                  <div className="mt-auto text-right font-semibold text-[#d94828] text-lg">{item.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
