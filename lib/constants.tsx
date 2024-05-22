import {
  LayoutDashboard,
  Shapes,
  ShoppingBag,
  Tag,
  UsersRound,
} from "lucide-react";

export const navLinks = [
  {
    url: "/",
    icon: <LayoutDashboard />,
    label: "Статистика",
  },
  {
    url: "/collections",
    icon: <Shapes />,
    label: "Коллекции",
  },
  {
    url: "/products",
    icon: <Tag />,
    label: "Продукты",
  },
  {
    url: "/orders",
    icon: <ShoppingBag />,
    label: "Заказы",
  },
  {
    url: "/customers",
    icon: <UsersRound />,
    label: "Покупатели",
  },
];
