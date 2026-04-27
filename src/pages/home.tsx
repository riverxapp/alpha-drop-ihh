import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { env } from "../lib/env";

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

      {/* Social Connection */}
      <section aria-label="Social media links" className="max-w-4xl mx-auto flex justify-center gap-8 text-[#6f5b4a]">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#d94828]"
          aria-label="Facebook"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#d94828]"
          aria-label="Instagram"
        >
          Instagram
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#d94828]"
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
            <Link to="/reservation">Make a Reservation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}