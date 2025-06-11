"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  Settings,
  Truck,
  Construction,
  MessageCircle,
  ChevronRight,
  ArrowLeft,
  Facebook,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"

export default function NeumaticoApp() {
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedMachinery, setSelectedMachinery] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = [
    {
      id: "agricola",
      name: "Agrícola",
      description: "Neumáticos especializados para maquinaria agrícola",
      image: "/images/agricultural-machinery-new.png",
    },
    {
      id: "industrial",
      name: "Industrial",
      description: "Neumáticos para maquinaria industrial y construcción",
      image: "/images/industrial-machinery.png",
    },
  ]

  const machineryByCategory = {
    agricola: [
      {
        id: "tractor",
        name: "Tractor agrícola",
        icon: Construction,
        description: "Neumáticos para tractores agrícolas",
      },
      { id: "implemento", name: "Implemento (Empacadora)", icon: Truck, description: "Neumáticos para empacadoras" },
      { id: "trilladora", name: "Trilladora", icon: Construction, description: "Neumáticos para trilladoras" },
      {
        id: "minicargador-agricola",
        name: "Minicargador",
        icon: Truck,
        description: "Neumáticos para minicargadores agrícolas",
      },
    ],
    industrial: [
      { id: "grua", name: "Grúa", icon: Construction, description: "Neumáticos para grúas" },
      { id: "montacargas", name: "Montacargas", icon: Truck, description: "Neumáticos para montacargas" },
      { id: "cargador", name: "Cargador", icon: Construction, description: "Neumáticos para cargadores" },
      { id: "retroexcavadora", name: "Retroexcavadora", icon: Truck, description: "Neumáticos para retroexcavadoras" },
      {
        id: "vibrocompactador",
        name: "Vibro compactador",
        icon: Construction,
        description: "Neumáticos para vibro compactadores",
      },
      {
        id: "motoconformadora",
        name: "Motoconformadora",
        icon: Truck,
        description: "Neumáticos para motoconformadoras",
      },
      { id: "camion", name: "Camión", icon: Construction, description: "Neumáticos para camiones" },
      {
        id: "camion-muevetierra",
        name: "Camión muevetierra",
        icon: Truck,
        description: "Neumáticos para camiones muevetierra",
      },
      {
        id: "minicargador-industrial",
        name: "Minicargador",
        icon: Construction,
        description: "Neumáticos para minicargadores industriales",
      },
    ],
  }

  const tiresByMachinery = {
    tractor: [
      {
        id: 1,
        name: "Neumático agrícola 15.5-38 RTW",
        brand: "Seba Ultra",
        size: "15.5-38",
        pattern: "RTW",
        price: "$1,250",
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: 2,
        name: "Neumático agrícola 18.4-34",
        brand: "Firestone",
        size: "18.4-34",
        pattern: "R-1",
        price: "$1,450",
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: 3,
        name: "Neumático agrícola 16.9-30",
        brand: "Michelin",
        size: "16.9-30",
        pattern: "AGRIBIB",
        price: "$1,350",
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    cosechadora: [
      {
        id: 4,
        name: "Neumático agrícola 1000-16",
        brand: "Prielli",
        size: "1000-16",
        pattern: "F-2",
        price: "$850",
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: 5,
        name: "Neumático flotación 73x44.00-32",
        brand: "Alliance",
        size: "73x44.00-32",
        pattern: "550",
        price: "$2,850",
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    retroexcavadora: [
      {
        id: 6,
        name: "Neumático industrial 12.5/80-18",
        brand: "Camso",
        size: "12.5/80-18",
        pattern: "SKS 532",
        price: "$650",
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: 7,
        name: "Neumático industrial 17.5L-24",
        brand: "Titan",
        size: "17.5L-24",
        pattern: "LD 250",
        price: "$950",
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    // Add more tires for other machinery types...
  }

  const services = [
    {
      id: 1,
      title: "Asesoría personalizada",
      description: "Te ayudamos a elegir el neumático ideal para tu maquinaria.",
      icon: MessageCircle,
    },
    {
      id: 2,
      title: "Montajes",
      description: "Contamos con personal capacitado para montaje de llantas en sitio o taller.",
      icon: Settings,
    },
  ]

  const Header = () => {
    return (
      <header className="bg-white p-4 flex items-center justify-between w-full">
        <div className="flex items-center gap-3 px-4 md:px-8 lg:px-16 xl:px-24">
          <button
            onClick={() => {
              setCurrentPage("home")
              setSelectedCategory(null)
              setSelectedMachinery(null)
            }}
            className="focus:outline-none"
          >
            <Image
              src="/images/logo-horizontal.png"
              alt="Neumáticos Agroindustriales Logo"
              width={280}
              height={80}
              className="h-14 w-auto cursor-pointer hover:opacity-90 transition-opacity"
            />
          </button>
        </div>
        <div className="px-4 md:px-8 lg:px-16 xl:px-24">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <nav className="hidden lg:flex items-center gap-6">
            <Button
              onClick={() => {
                setCurrentPage("home")
                setSelectedCategory(null)
                setSelectedMachinery(null)
              }}
              className={`rounded-lg px-6 py-2 font-medium ${
                currentPage === "home" ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              Inicio
            </Button>
            <Button
              onClick={() => {
                setCurrentPage("categories")
                setSelectedCategory(null)
                setSelectedMachinery(null)
              }}
              className={`rounded-lg px-6 py-2 font-medium ${
                currentPage === "categories" ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              Categorías
            </Button>
            <Button
              onClick={() => {
                setCurrentPage("services")
                setSelectedCategory(null)
                setSelectedMachinery(null)
              }}
              className={`rounded-lg px-6 py-2 font-medium ${
                currentPage === "services" ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              Servicios
            </Button>
            <Button
              onClick={() => {
                setCurrentPage("contact")
                setSelectedCategory(null)
                setSelectedMachinery(null)
              }}
              className={`rounded-lg px-6 py-2 font-medium ${
                currentPage === "contact" ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              Contacto
            </Button>
          </nav>
        </div>
      </header>
    )
  }

  const MobileMenu = () =>
    isMenuOpen && (
      <div className="lg:hidden bg-white p-4 shadow-lg mb-4">
        <nav className="flex flex-col gap-2">
          <Button
            onClick={() => {
              setCurrentPage("home")
              setSelectedCategory(null)
              setSelectedMachinery(null)
              setIsMenuOpen(false)
            }}
            className={`rounded-lg px-6 py-2 font-medium justify-start ${
              currentPage === "home" ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            Inicio
          </Button>
          <Button
            onClick={() => {
              setCurrentPage("categories")
              setSelectedCategory(null)
              setSelectedMachinery(null)
              setIsMenuOpen(false)
            }}
            className={`rounded-lg px-6 py-2 font-medium justify-start ${
              currentPage === "categories" ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            Categorías
          </Button>
          <Button
            onClick={() => {
              setCurrentPage("services")
              setSelectedCategory(null)
              setSelectedMachinery(null)
              setIsMenuOpen(false)
            }}
            className={`rounded-lg px-6 py-2 font-medium justify-start ${
              currentPage === "services" ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            Servicios
          </Button>
          <Button
            onClick={() => {
              setCurrentPage("contact")
              setSelectedCategory(null)
              setSelectedMachinery(null)
              setIsMenuOpen(false)
            }}
            className={`rounded-lg px-6 py-2 font-medium justify-start ${
              currentPage === "contact" ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            Contacto
          </Button>
        </nav>
      </div>
    )

  const Breadcrumb = () => {
    if (currentPage === "home") return null

    return (
      <div className={`flex items-center gap-2 mb-6 ${currentPage === "home" ? "text-white" : "text-black"}`}>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            if (selectedMachinery) {
              setSelectedMachinery(null)
            } else if (selectedCategory) {
              setSelectedCategory(null)
            } else {
              setCurrentPage("home")
            }
          }}
          className={`${currentPage === "home" ? "text-white hover:text-gray-300" : "text-black hover:text-gray-600"} p-0 h-auto`}
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Volver
        </Button>
        <span className={currentPage === "home" ? "text-gray-400" : "text-gray-500"}>|</span>
        <span className={`text-sm ${currentPage === "home" ? "text-white" : "text-gray-700"}`}>
          {selectedMachinery
            ? `${selectedCategory?.charAt(0).toUpperCase() + selectedCategory?.slice(1)} > ${machineryByCategory[selectedCategory]?.find((m) => m.id === selectedMachinery)?.name} > Neumáticos`
            : selectedCategory
              ? `${selectedCategory?.charAt(0).toUpperCase() + selectedCategory?.slice(1)} > Maquinarias`
              : currentPage === "categories"
                ? "Categorías"
                : currentPage === "services"
                  ? "Servicios"
                  : currentPage === "contact"
                    ? "Contacto"
                    : ""}
        </span>
      </div>
    )
  }

  const HomePage = () => (
    <div className="space-y-8">
      {/* Hero Section */}
      <Card className="overflow-hidden">
        <div className="relative">
          <Image
            src="/images/hero-main.png"
            alt="Neumáticos Agroindustriales - Llantas para maquinaria"
            width={1200}
            height={600}
            className="w-full h-48 md:h-64 lg:h-80 object-cover"
          />
        </div>
      </Card>

      {/* Main Content */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Neumáticos para maquinaria industrial y agrícola
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de neumáticos de alta calidad para todo tipo de maquinaria. Más de 15 años de
            experiencia respaldando tu trabajo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg rounded-full"
              onClick={() => setCurrentPage("categories")}
            >
              Explorar productos
            </Button>
            <Button
              className="bg-white border-white text-gray-800 hover:bg-gray-100 hover:text-gray-900 px-8 py-3 text-lg rounded-full"
              onClick={() =>
                window.open("https://wa.me/1234567890?text=Hola, me gustaría solicitar una cotización", "_blank")
              }
            >
              Solicitar cotización
            </Button>
          </div>
        </div>

        {/* Featured Products */}
        <Card className="bg-white">
          <CardContent className="p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Productos destacados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <Construction className="w-12 h-12 text-red-600" />
                  <div>
                    <h4 className="text-xl font-semibold">Neumáticos Agrícolas</h4>
                    <p className="text-gray-600">Para tractores, cosechadoras y más</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Diseñados para maximizar la tracción y minimizar la compactación del suelo en aplicaciones agrícolas.
                </p>
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50"
                  onClick={() => {
                    setSelectedCategory("agricola")
                    setCurrentPage("categories")
                  }}
                >
                  Ver catálogo agrícola
                </Button>
              </div>
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <Truck className="w-12 h-12 text-red-600" />
                  <div>
                    <h4 className="text-xl font-semibold">Neumáticos Industriales</h4>
                    <p className="text-gray-600">Para construcción y minería</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Resistentes y duraderos, ideales para las condiciones más exigentes en construcción e industria.
                </p>
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50"
                  onClick={() => {
                    setSelectedCategory("industrial")
                    setCurrentPage("categories")
                  }}
                >
                  Ver catálogo industrial
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <Card className="bg-gray-50">
          <CardContent className="p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Lo que dicen nuestros clientes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold">JM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Juan Martínez</h4>
                    <p className="text-gray-600 text-sm">Agricultor - Finca El Progreso</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Excelente calidad y servicio. Los neumáticos han durado mucho más de lo esperado y el equipo siempre
                  está disponible para asesorarme."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold">CR</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Carlos Rodríguez</h4>
                    <p className="text-gray-600 text-sm">Constructora Rodríguez S.A.</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Proveedor confiable para nuestra flota de maquinaria pesada. Siempre cumplen con los tiempos de
                  entrega y la calidad es excepcional."
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Blog Section */}
        <Card className="bg-white">
          <CardContent className="p-8">
            <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">Blog y noticias</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="text-xl font-semibold mb-2">Mantenimiento de Neumáticos Agrícolas</h4>
                <p className="text-gray-600 mb-3">
                  Descubre las mejores prácticas para mantener tus neumáticos agrícolas en óptimas condiciones y
                  extender su vida útil.
                </p>
                <span className="text-sm text-gray-500">15 de Noviembre, 2024</span>
              </div>
              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="text-xl font-semibold mb-2">Neumáticos para Construcción: Guía Completa</h4>
                <p className="text-gray-600 mb-3">
                  Todo lo que necesitas saber sobre la selección de neumáticos para maquinaria de construcción y
                  minería.
                </p>
                <span className="text-sm text-gray-500">10 de Noviembre, 2024</span>
              </div>
              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="text-xl font-semibold mb-2">Nuevas Tecnologías en Neumáticos</h4>
                <p className="text-gray-600 mb-3">
                  Conoce las últimas innovaciones en tecnología de neumáticos que están revolucionando la industria.
                </p>
                <span className="text-sm text-gray-500">5 de Noviembre, 2024</span>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                Ver más artículos
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-gray-900 to-black text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">¿Necesitas asesoría personalizada?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Nuestro equipo de expertos está listo para ayudarte a encontrar la solución perfecta para tu maquinaria.
              Contáctanos hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
                onClick={() => setCurrentPage("contact")}
              >
                Contactar ahora
              </Button>
              <Button
                className="bg-white border-white text-gray-800 hover:bg-gray-100 hover:text-gray-900 px-8 py-3"
                onClick={() =>
                  window.open("https://wa.me/1234567890?text=Hola, necesito asesoría personalizada", "_blank")
                }
              >
                WhatsApp
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const CategoriesPage = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-black text-center mb-8">Categorías</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => {
              setSelectedCategory(category.id)
              setCurrentPage("categories")
            }}
          >
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold">{category.name}</CardTitle>
              <p className="text-gray-600">{category.description}</p>
            </CardHeader>
            <CardContent className="p-0">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={`Maquinaria ${category.name.toLowerCase()}`}
                width={600}
                height={300}
                className="w-full h-48 md:h-64 object-cover"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const MachineryPage = () => {
    const machinery = machineryByCategory[selectedCategory] || []
    const categoryName = selectedCategory?.charAt(0).toUpperCase() + selectedCategory?.slice(1)

    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black text-center mb-8">Catálogo</h2>

        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          {machinery.map((machine) => {
            return (
              <Card
                key={machine.id}
                className="bg-white hover:shadow-lg transition-shadow cursor-pointer rounded-2xl border-0 shadow-md"
                onClick={() => setSelectedMachinery(machine.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="h-24 flex items-center justify-center mb-4">
                    <Image
                      src={`/images/${machine.id}.png`}
                      alt={machine.name}
                      width={100}
                      height={80}
                      className="h-auto max-h-24 w-auto"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-black">{machine.name}</h3>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    )
  }

  const TiresPage = () => {
    const tires = tiresByMachinery[selectedMachinery] || []
    const machineName = machineryByCategory[selectedCategory]?.find((m) => m.id === selectedMachinery)?.name

    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black text-center mb-8">Neumáticos para {machineName}</h2>

        <div className="space-y-4">
          {tires.map((tire) => (
            <Card key={tire.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4 flex items-center gap-4">
                <Image
                  src={tire.image || "/placeholder.svg"}
                  alt={tire.name}
                  width={80}
                  height={80}
                  className="rounded-lg bg-gray-100"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">{tire.name}</h4>
                  <p className="text-gray-600 mb-1">{tire.brand}</p>
                  <div className="flex gap-2 mb-2">
                    <Badge variant="secondary">{tire.size}</Badge>
                    <Badge variant="outline">{tire.pattern}</Badge>
                  </div>
                  <div className="flex items-center justify-end">
                    <Button variant="link" className="text-red-600 p-0 h-auto font-semibold">
                      Ver detalles <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {tires.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-600">No hay neumáticos disponibles para esta maquinaria en este momento.</p>
              <Button
                className="mt-4 bg-red-600 hover:bg-red-700 text-white"
                onClick={() => setCurrentPage("services")}
              >
                Solicitar asesoría
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    )
  }

  const ServicesPage = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-black text-center mb-8">Servicios</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((service) => {
          const IconComponent = service.icon
          return (
            <Card key={service.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <IconComponent className="w-8 h-8 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button className="bg-red-600 hover:bg-red-700 text-white">Solicitar servicio</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )

  const ContactPage = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-black text-center mb-8">Contacto</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-600" />
                <span>Av. Industrial 123, Ciudad</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-600" />
                <span>info@neumaticosagroindustriales.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Facebook className="w-5 h-5 text-red-600" />
                <span>@neumaticosagroindustriales</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Envíanos un Mensaje</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nombre</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Enviar Mensaje</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const Footer = () => (
    <footer className="bg-gray-900 text-white p-6 mt-8 w-full">
      <div className="px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logo-horizontal-new.png"
              alt="Neumáticos Agroindustriales"
              width={350}
              height={75}
              className="h-14 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm">
              Especialistas en neumáticos para maquinaria agrícola e industrial. Calidad y servicio garantizado.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <span className="text-gray-400">Av. Industrial 123, Ciudad</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500" />
                <span className="text-gray-400">info@neumaticosagroindustriales.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-red-600">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2024 Neumáticos Agroindustriales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )

  const renderCurrentPage = () => {
    if (currentPage === "home") {
      return <HomePage />
    } else if (currentPage === "categories") {
      if (selectedMachinery) {
        return <TiresPage />
      } else if (selectedCategory) {
        return <MachineryPage />
      } else {
        return <CategoriesPage />
      }
    } else if (currentPage === "services") {
      return <ServicesPage />
    } else if (currentPage === "contact") {
      return <ContactPage />
    }
    return <HomePage />
  }

  return (
    <div className={`min-h-screen ${currentPage === "home" ? "bg-black" : "bg-white"}`}>
      <div className="w-full">
        <div className={`${currentPage === "home" ? "bg-black" : "bg-white"} overflow-hidden`}>
          <Header />
          <MobileMenu />
          <div className="px-4 py-6 md:px-8 lg:px-16 xl:px-24">
            <Breadcrumb />
            {renderCurrentPage()}
          </div>
          <Footer />
        </div>
      </div>
      {/* WhatsApp Fixed Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg"
          onClick={() => window.open("https://wa.me/1234567890", "_blank")}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}
