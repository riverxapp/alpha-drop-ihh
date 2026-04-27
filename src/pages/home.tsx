import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { env } from "../lib/env";

const featuredMenuItems = [
  {
    id: "1",
    name: "Signature Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella, basil, and tomato sauce.",
    imageUrl: "/gallery/gallery2.jpg",
  },
  {
    id: "2",
    name: "Handmade Pasta Carbonara",
    description: "Rich and creamy pasta with pancetta, egg, and Parmesan cheese.",
    imageUrl: "/gallery/gallery3.jpg",
  },
  {
    id: "3",
    name: "Seasonal Garden Salad",
    description: "Fresh vegetables, house-made vinaigrette, and toasted nuts.",
    imageUrl: "/gallery/gallery1.jpg",
  },
];

const testimonials = [
  {
    id: "t1",
    name: "Emily R.",
    quote: "The ambiance is warm and inviting, and the food is beyond delicious! A must-visit.",
  },
  {
    id: "t2",
    name: "James K.",
    quote: "Exceptional service and mouthwatering dishes. We come here every month!",
  },
  {
    id: "t3",
    name: "Sophia L.",
    quote: "A perfect spot for family dinners and special occasions. Highly recommend the pasta.",
  },
];

export function Home() {
  return (
    <main className="space-y-16 px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-[#26170e] sm:text-5xl">
          Welcome to {env.appName}
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-[#6f5b4a] sm:text-xl">
          Experience the finest flavors and cozy atmosphere. Enjoy handcrafted dishes prepared with passion and freshest ingredients.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-[#ff6b4a] text-white hover:bg-[#d94828]">
            <Link to="#reservation">Reserve a Table</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-[#e7cdb4] bg-[#fffaf2] text-[#26170e] hover:bg-[#ffe7cf]">
            <Link to="/menu">View Menu</Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section aria-labelledby="about-heading" className="max-w-4xl mx-auto text-center space-y-6">
        <h2 id="about-heading" className="text-3xl font-semibold text-[#26170e]">
          About Us
        </h2>
        <p className="text-[#6f5b4a]">
          Situated in the heart of the city, {env.appName} offers a modern take on classic dishes, blending tradition and innovation.
          Our mission is to provide memorable dining experiences through exceptional food and service.
        </p>
      </section>

      {/* Featured Menu Section */}
      <section aria-labelledby="featured-menu-heading" className="max-w-6xl mx-auto space-y-10">
        <h2 id="featured-menu-heading" className="text-3xl font-semibold text-[#26170e] text-center">
          Featured Menu Items
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredMenuItems.map(({ id, name, description, imageUrl }) => (
            <Card key={id} className="shadow-lg border border-transparent hover:border-[#d94828] transition-colors">
              <img
                src={imageUrl}
                alt={name}
                className="rounded-t-lg aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <CardContent className="space-y-1 p-4">
                <CardHeader className="p-0">
                  <CardTitle className="text-lg text-[#26170e]">{name}</CardTitle>
                </CardHeader>
                <CardDescription className="text-sm text-[#6f5b4a]">{description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section aria-labelledby="testimonials-heading" className="max-w-4xl mx-auto space-y-8 text-center">
        <h2 id="testimonials-heading" className="text-3xl font-semibold text-[#26170e]">
          What Our Customers Say
        </h2>
        <div className="space-y-6">
          {testimonials.map(({ id, name, quote }) => (
            <blockquote key={id} className="border-l-4 border-[#ff6b4a] pl-6 italic text-[#6f5b4a]">
              <p>"{quote}"</p>
              <footer className="mt-2 font-semibold text-[#26170e]">— {name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Location and Hours Section */}
      <section aria-labelledby="location-heading" className="max-w-4xl mx-auto space-y-6 text-center">
        <h2 id="location-heading" className="text-3xl font-semibold text-[#26170e]">
          Location & Hours
        </h2>
        <address className="not-italic text-[#6f5b4a] space-y-2">
          <p>123 Flavor Street, Foodie City, FC 45678</p>
          <p>Open Daily: 11:00 AM – 10:00 PM</p>
          <p>Phone: (123) 456-7890</p>
        </address>
      </section>

      {/* Social Connection */}
      <section aria-label="Social media links" className="max-w-4xl mx-auto flex justify-center gap-8 text-[#6f5b4a]">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#d94828] font-semibold transition-colors duration-200"
          aria-label="Facebook"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#d94828] font-semibold transition-colors duration-200"
          aria-label="Instagram"
        >
          Instagram
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#d94828] font-semibold transition-colors duration-200"
          aria-label="Twitter"
        >
          Twitter
        </a>
      </section>

      {/* Gallery Preview */}
      <section aria-labelledby="gallery-heading" className="max-w-6xl mx-auto space-y-6">
        <h2 id="gallery-heading" className="text-3xl font-semibold text-[#26170e] text-center">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="/gallery/gallery1.jpg"
            alt="Restaurant interior"
            className="aspect-[4/3] w-full rounded-lg object-cover shadow-sm"
            loading="lazy"
          />
          <img
            src="/gallery/gallery2.jpg"
            alt="Delicious plated dish"
            className="aspect-[4/3] w-full rounded-lg object-cover shadow-sm"
            loading="lazy"
          />
          <img
            src="/gallery/gallery3.jpg"
            alt="Chefs preparing food"
            className="aspect-[4/3] w-full rounded-lg object-cover shadow-sm"
            loading="lazy"
          />
        </div>
      </section>

      {/* Reservation Callout */}
      <section
        id="reservation"
        aria-labelledby="reservation-heading"
        className="mx-auto max-w-3xl rounded-2xl border border-[#f1ddc9] bg-[#fff7ec] p-8 text-center"
      >
        <h2 id="reservation-heading" className="text-3xl font-bold tracking-tight text-[#26170e]">
          Reserve Your Table
        </h2>
        <p className="mt-4 text-[#6f5b4a]">
          Planning your visit? Secure your spot easily by making a reservation online or giving us a call.
        </p>
        <div className="mt-6">
          <Button asChild size="lg" className="bg-[#ff6b4a] text-white hover:bg-[#d94828]">
            <Link to="/">Make a Reservation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}