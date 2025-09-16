import BuySection from "@/pages/BuySection"
import DeFiSuperpowers from "@/pages/DeFiSuperpowers"
import Footer from "@/pages/Footer"
import Header from "@/pages/Header"
import Hero from "@/pages/Hero"
import MadeEasy from "@/pages/MadeEasy"
import SwapSection from "@/pages/SwapSection"

const Home = () => {
  return (
    <section className="min-h-dvh bg-gradient-to-r from-[#141B30] via-[#161F3C] to-[#2D365B]  relative">
      <Header />
      <Hero />
      <MadeEasy />
      <SwapSection />
      <BuySection />
      <DeFiSuperpowers />
      <Footer />
    </section>
  )
}

export default Home