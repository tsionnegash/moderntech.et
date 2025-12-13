import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Star, Truck } from "lucide-react";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

export function ProductsSection() {
  const [product, setProduct] = useState<Product>({
    id: "1",
    title: "The Daily Momentum Planner",
    description:
      "A tool designed to help you start — and keep going. The Day One Journal and Planner helps you turn awareness into action, one page at a time. Built for ambitious people ready to take ownership of their time, mindset, and growth. Every section is intentional: from planning your year to reflecting on your week — so you can live every day with clarity and focus.",
    price: "$34.99",
    image: "https://img.sanishtech.com/u/95043e69d72fa46e1aa2ade34519904e.jpg",
    features: [
      "Yearly & Monthly Planning",
      "Weekly Reflection Sections",
      "Daily Habit Tracking",
      "Goal Setting Pages",
      "Premium Hardcover",
    ],
  });

  useEffect(() => {
    const savedProducts = localStorage.getItem("yididya-products");
    if (savedProducts) {
      const products = JSON.parse(savedProducts);
      if (products.length > 0) {
        setProduct(products[0]);
      }
    }
  }, []);

  // Function to scroll to contact section
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="shop" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="pink-text">Shop</span>
          </h1>
        </div>

        {/* Featured Product - Side by Side Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Product Image - Left Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
              />
              <Badge className="absolute top-6 left-6 bg-pink text-white text-sm font-bold px-4 py-2">
                Day One Journal
              </Badge>
            </div>
          </div>

          {/* Product Details - Right Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {product.title}
              </h2>

              <div className="mb-6">
                <span className="text-4xl font-bold pink-text">
                  {product.price}
                </span>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <a
                href="https://ye-buna.com/Yididya?ref=product_detail&product=6749b9554a4cd_1732884821_77356641_Yididya"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button className="w-full bg-golden hover:bg-golden/90 text-black font-bold py-6 text-lg rounded-xl">
                  <ShoppingBag className="h-5 w-5 mr-3" />
                  Shop The Day One Planner
                </Button>
              </a>
            </div>

            {/* Guarantee */}
            <div className="pt-6 border-t">
              <p className="text-sm text-gray-500">
                ✦ Eco-friendly materials
                <br />✦ Delivery is on Friday, please note, that we do not cover
                the delivery fee Delivery day
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
