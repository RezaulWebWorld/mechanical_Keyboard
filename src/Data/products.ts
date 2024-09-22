export type TProduct = {
  id: number;
  image: string;
  title: string;
  brand: string;
  availableQuantity: number;
  price: number;
  rating: number;
  description: string;
};

const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    title: "Mechanical Gaming Keyboard",
    brand: "HyperX",
    availableQuantity: 20,
    price: 129.99,
    rating: 4.8,
    description:
      "A high-performance mechanical keyboard designed for gamers with customizable RGB lighting and durable switches.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    title: "Wireless Bluetooth Keyboard",
    brand: "Logitech",
    availableQuantity: 50,
    price: 79.99,
    rating: 4.5,
    description:
      "A sleek, wireless keyboard with multi-device connectivity and long-lasting battery life. Perfect for office use.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    title: "Ergonomic Split Keyboard",
    brand: "Kinesis",
    availableQuantity: 10,
    price: 159.99,
    rating: 4.6,
    description:
      "Designed to provide maximum comfort and reduce wrist strain, this split keyboard is ideal for long typing sessions.",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    title: "RGB Backlit Mechanical Keyboard",
    brand: "Razer",
    availableQuantity: 15,
    price: 149.99,
    rating: 4.7,
    description:
      "A highly responsive mechanical keyboard with customizable RGB backlighting and durable key switches for professional gamers.",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/150",
    title: "Compact Mechanical Keyboard",
    brand: "Corsair",
    availableQuantity: 30,
    price: 99.99,
    rating: 4.4,
    description:
      "A compact and portable mechanical keyboard featuring tactile key switches and RGB lighting, perfect for gaming and typing on the go.",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/150",
    title: "Quiet Mechanical Keyboard",
    brand: "SteelSeries",
    availableQuantity: 25,
    price: 119.99,
    rating: 4.3,
    description:
      "Silent yet responsive mechanical keyboard ideal for office use or quiet environments, with subtle RGB lighting.",
  },
];

const getAllProducts = () => {
  return products;
};

export default getAllProducts;
