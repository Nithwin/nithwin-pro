import Header from "@/pages/Header"
import Hero from "@/pages/Hero"
import MadeEasy from "@/pages/MadeEasy"

const Home = () => {
  return (
    <section className="min-h-dvh bg-gradient-to-r from-[#141B30] via-[#161F3C] to-[#2D365B] pt-[6rem] lg:pt-[8rem] relative">
      <Header />
      <Hero />
      <MadeEasy />
    </section>
  )
}

export default Home