"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="mediumLargeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Menu",
          id: "signature-cocktails",
        },
        {
          name: "Collections",
          id: "whisky-collection",
        },
        {
          name: "The Team",
          id: "bartenders",
        },
        {
          name: "Reserve",
          id: "contact",
        },
      ]}
      brandName="Oscar One"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "radial-gradient",
      }}
      title="Oscar One"
      description="Basel’s destination for refined cocktails and unforgettable nights."
      buttons={[
        {
          text: "Reserve Your Night",
          href: "#contact",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/old-fashioned-cocktail-with-orange-peel_123827-37534.jpg",
          imageAlt: "luxury cocktail bar moody lighting dark",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/tray-with-champagne-glasses-close-up_23-2148667932.jpg",
          imageAlt: "expert bartender preparing drink gold accent",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-holding-cocktail_23-2150124853.jpg",
          imageAlt: "luxury bar atmosphere dark elegant night",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-black-dress-sits-before-wall-books-christmas-decor_8353-8828.jpg",
          imageAlt: "bar detail luxury interior black gold",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-christmas-background-with-wooden-table-against-bokeh-lights-design_1048-11147.jpg",
          imageAlt: "elegant bar counter bokeh lighting dark",
        },
      ]}
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="inline-image"
      useInvertedBackground={false}
      title="A Legacy of Craftsmanship"
      description="Oscar One embodies the intersection of timeless hospitality and modern mixology. We believe in the art of the pour, the sanctity of the atmosphere, and the pursuit of the perfect cocktail experience."
      bulletPoints={[
        {
          title: "Precision",
          description: "Every element of our cocktails is calibrated for the perfect balance.",
        },
        {
          title: "Curation",
          description: "Hand-selected spirits from the world's most reputable distilleries.",
        },
        {
          title: "Atmosphere",
          description: "An intimate environment designed for genuine connection.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-bartender-cocktail-shaker_23-2149132190.jpg"
      imageAlt="bartender craftsmanship luxury bar detail"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="signature-cocktails" data-section="signature-cocktails">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={true}
      products={[
        {
          id: "c1",
          name: "Midnight in Basel",
          price: "24 CHF",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-wine-carafe-table_23-2149631757.jpg",
        },
        {
          id: "c2",
          name: "Golden Hour Old Fashioned",
          price: "26 CHF",
          imageSrc: "http://img.b2bpic.net/free-photo/sustainably-produced-alcoholic-beverage_23-2150162945.jpg",
        },
        {
          id: "c3",
          name: "Botanical Smoke",
          price: "22 CHF",
          imageSrc: "http://img.b2bpic.net/free-photo/vintage-cups-thrift-shop-arrangement_23-2150269061.jpg",
        },
        {
          id: "c4",
          name: "Velvet Rum Sour",
          price: "23 CHF",
          imageSrc: "http://img.b2bpic.net/free-photo/sotol-drink-still-life_23-2151057972.jpg",
        },
        {
          id: "c5",
          name: "Oscar's Truffle Olive Martini",
          price: "28 CHF",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-dark-square-plates-with-golden-fork-knife-cup-dark-background_179666-19331.jpg",
        },
        {
          id: "c6",
          name: "Ethereal Fizz",
          price: "21 CHF",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-clear-glass-straw-transparent-liquid_23-2149331923.jpg",
        },
      ]}
      title="Signature Cocktails"
      description="A rotating selection of seasonal masterpieces, crafted with house-made bitters and rare botanicals."
    />
  </div>

  <div id="whisky-collection" data-section="whisky-collection">
      <FeatureCardTwentyEight
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "w1",
          title: "Highland Single Malts",
          subtitle: "Rare Bottles",
          category: "Whisky",
          value: "Limited",
        },
        {
          id: "w2",
          title: "Japanese Artisanal",
          subtitle: "Exclusivity",
          category: "Whisky",
          value: "Unique",
        },
        {
          id: "w3",
          title: "Small-Batch Gins",
          subtitle: "Botanical",
          category: "Gin",
          value: "Fresh",
        },
        {
          id: "w4",
          title: "Caribbean Rums",
          subtitle: "Aged",
          category: "Rum",
          value: "Rare",
        },
        {
          id: "w5",
          title: "Cognac Reserves",
          subtitle: "Vintage",
          category: "Cognac",
          value: "Premium",
        },
      ]}
      title="Rare Spirit Collections"
      description="Our cellar houses a world-class collection of vintage whisky, small-batch gin, and rare Caribbean rums."
    />
  </div>

  <div id="bartenders" data-section="bartenders">
      <TeamCardSix
      animationType="depth-3d"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      members={[
        {
          id: "m1",
          name: "Julian Thorne",
          role: "Head Mixologist",
          imageSrc: "http://img.b2bpic.net/free-photo/festive-plump-male-suit-bow-tie-drinks-craft-beer_613910-13642.jpg",
        },
        {
          id: "m2",
          name: "Elena Varga",
          role: "Senior Bartender",
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-man-toasting-new-years_23-2148349061.jpg",
        },
        {
          id: "m3",
          name: "Marcus Chen",
          role: "Bar Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-bearded-hipster-hat-glasses-wearing_613910-12235.jpg",
        },
        {
          id: "m4",
          name: "Sophie Dubois",
          role: "Sommelier",
          imageSrc: "http://img.b2bpic.net/free-photo/bearded-man-bar_639032-2770.jpg",
        },
        {
          id: "m5",
          name: "Luca Rossi",
          role: "Mixology Apprentice",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-bartender-preparing-drink_23-2150346964.jpg",
        },
      ]}
      title="Meet the Artists"
      description="Guided by years of global hospitality expertise, our team treats every glass as a canvas."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="opacity"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Marcus V.",
          role: "Director",
          testimonial: "The atmosphere is unmatched. Truly the gold standard for Basel nightlife.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-elegant-groom-stylish-outfit-which-standing-opposite-window-keeping-hand-pocket-drinking-alcohol-looking-away-wedding-morning-concept-wedding-copy-space_8353-12275.jpg",
        },
        {
          id: "t2",
          name: "Isabella S.",
          role: "Architect",
          testimonial: "An exquisite experience from the first sip to the last. Simply divine.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-man-pub-with-cocktail_1157-45797.jpg",
        },
        {
          id: "t3",
          name: "Julian B.",
          role: "Founder",
          testimonial: "The attention to detail in their cocktail menu is quite simply revolutionary.",
          imageSrc: "http://img.b2bpic.net/free-photo/people-drinking-cocktails_23-2150168834.jpg",
        },
        {
          id: "t4",
          name: "Chloe R.",
          role: "Travel Editor",
          testimonial: "A sanctuary for those who value refined spirit collections and quiet intimacy.",
          imageSrc: "http://img.b2bpic.net/free-photo/gorgeous-smiling-blonde-fashion-model-sits-white-suit-soft-armchair_8353-5476.jpg",
        },
        {
          id: "t5",
          name: "Adrian K.",
          role: "Investor",
          testimonial: "This isn't just a bar, it's an institution. The service is beyond reproach.",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-young-woman-partying-home_23-2148741471.jpg",
        },
      ]}
      title="Voices of the Lounge"
      description="Exclusivity defined. Experience why Oscar One remains the city's most whispered-about secret."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <MetricCardEleven
      animationType="scale-rotate"
      textboxLayout="split"
      useInvertedBackground={true}
      metrics={[
        {
          id: "g1",
          value: "Intimacy",
          title: "Atmospheric",
          description: "Cinematic spaces",
          imageSrc: "http://img.b2bpic.net/free-photo/tray-with-champagne-glasses_23-2148667931.jpg",
        },
        {
          id: "g2",
          value: "Design",
          title: "Sophisticated",
          description: "Minimalist luxury",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-glasses-abstract-table_23-2149974208.jpg",
        },
        {
          id: "g3",
          value: "Spirit",
          title: "Curated",
          description: "Rare collections",
          imageSrc: "http://img.b2bpic.net/free-photo/view-luxurious-hotel-interior-space_23-2150683467.jpg",
        },
      ]}
      title="Atmosphere Gallery"
      description="Immerse yourself in the dark elegance and refined aesthetics of Oscar One."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Secure your table at Basel's most exclusive cocktail lounge."
      buttons={[
        {
          text: "Reserve Now",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Oscar One",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Reserve",
              href: "#contact",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "LinkedIn",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Impressum",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Oscar One. All rights reserved."
      bottomRightText="Crafted in Basel"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
