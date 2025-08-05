import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [distance, setDistance] = useState("");
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    const dist = parseFloat(distance);
    if (dist > 0) {
      const basePrice = 40; // базовая стоимость за км
      const total = dist * basePrice;
      setCalculatedPrice(total);
    }
  };

  const tariffs = [
    {
      title: "Эконом",
      description: "",
      icon: "Car",
      features: ["от 25р/км"],
    },
    {
      title: "Комфорт",
      description: "",
      icon: "Shield",
      features: ["от 30р/км"],
    },
    {
      title: "Бизнес",
      description: "",
      icon: "Crown",
      features: ["от 35р/км"],
    },
    {
      title: "Минивен",
      description: "",
      icon: "Users",
      features: ["от 40р/км"],
    },
  ];

  const services = [
    {
      title: "Междугородние поездки",
      description: "Комфортные поездки между городами с опытными водителями",
      icon: "MapPin",
      features: [
        "Современные автомобили",
        "Опытные водители",
        "Фиксированная цена",
      ],
    },
    {
      title: "Доставка",
      description: "Быстрая и своевременная доставка",
      icon: "Package",
      features: ["Продукты", "Гуманитарная помощь", "Посылки"],
    },
    {
      title: "Трансфер в аэропорт",
      description: "Своевременная подача к терминалу без опозданий",
      icon: "Plane",
      features: [
        "Мониторинг рейсов",
        "Встреча с табличкой",
        "Помощь с багажом",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Car" size={32} className="text-yellow-500" />
              <h1 className="text-2xl font-bold text-gray-900">ТаксиКуряночка</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#tariffs"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Тарифы
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Услуги
              </a>

              <a
                href="#contacts"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button
              className="bg-yellow-500 hover:bg-yellow-600 text-black"
              onClick={() => window.open("tel:+79191342312", "_self")}
            >
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-cover bg-center"
          style={{
            backgroundImage: `url('/img/c7b4a4ae-c457-4fec-a5c4-4ac948f4a7cd.jpg')`,
          }}
        >
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl mb-6 animate-fade-in font-light text-yellow-400">
              Междугородние поездки и доставки
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-[#ffffff]">
              Надежный сервис для комфортных поездок между городами и быстрой
              доставки грузов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-lg"
                onClick={() => window.open("tel:+79191342312", "_self")}
              >
                <Icon name="MapPin" size={20} className="mr-2" />
                Заказать поездку
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section id="tariffs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Тарифы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий класс автомобиля для вашей поездки
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tariffs.map((tariff, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border-2 border-black shadow-md"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={tariff.icon}
                      size={32}
                      className="text-yellow-600"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {tariff.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {tariff.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tariff.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Предоставляем полный спектр транспортных услуг для ваших
              потребностей
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-yellow-600"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-500 mr-2"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-gray-300">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Телефон</h3>
              <p className="text-gray-300">+7 (996) 944-41-88</p>
              <p className="text-gray-300"></p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Режим работы</h3>
              <p className="text-gray-300">Круглосуточно</p>
              <p className="text-gray-300">7 дней в неделю</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Telegram/WhatsApp</h3>
              <p className="text-gray-300">+7 (919) 134-23-12</p>
              <p className="text-gray-300"></p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Car" size={24} className="text-yellow-500" />
              <span className="text-lg font-bold">ТаксиКуряночка</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 TaxiExpress. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;