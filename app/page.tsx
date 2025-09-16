import Header from "@/pages/Header"
import Hero from "@/pages/Hero"

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#141B30] via-[#161F3C] to-[#2D365B] relative">
      <Header />
      <Hero />
    </section>
  )
}

export default Home