import Image from "next/image"
import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-orange-100">
      <Header />
      
      <main className="flex-grow">
        {/* Top Section with Three Columns */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="bg-gray-400 aspect-square w-full"></div>
                <p className="text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                  gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            ))}
            <div className="space-y-4">
              <Image
                src=""
                alt="Ilustração de pessoas interagindo"
                width={400}
                height={400}
                className="w-full aspect-square object-contain bg-gray-400"
              />
            </div>
          </div>
        </section>

        {/* Green Section */}
        <section className="bg-[#2F5233] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Gami é...</h2>
            <p className="max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-800">
            {[
              { title: "Ilustração", icon: "circle" },
              { title: "Design", icon: "circle" },
              { title: "Direção de arte", icon: "circle" }
            ].map((service, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <div className="w-32 h-32 bg-gray-400 rounded-full"></div>
                <h3 className="text-xl font-medium">{service.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-12 text-center">
          <Link 
            href="/contato"
            className="inline-block bg-[#ff8a80] hover:bg-[#ff5252] text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
          >
            VAMOS CONVERSAR?
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
