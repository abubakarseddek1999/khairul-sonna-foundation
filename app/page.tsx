import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { DonationCTA } from "@/components/donation-cta"
import { DonationFundsCarousel } from "@/components/donation-funds-carousel"
import { ProgramsPreview } from "@/components/programs-preview"
import { GallerySection } from "@/components/gallery-section"
import { BlogSection } from "@/components/blog-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DonationCTA />
      <DonationFundsCarousel />
      <ProgramsPreview />
      <GallerySection />
      <BlogSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
