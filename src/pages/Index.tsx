import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Car {
  id: number;
  model: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  image: string;
  specs: {
    engine: string;
    power: string;
    transmission: string;
    drive: string;
  };
}

const cars: Car[] = [
  {
    id: 1,
    model: 'Tenet T7',
    originalPrice: 3500000,
    discountedPrice: 2100000,
    discount: 40,
    image: 'https://cdn.poehali.dev/projects/9937d48e-e570-449f-9762-9ea3421272c7/files/f4d32304-4053-4149-81ff-730772e48322.jpg',
    specs: { engine: '2.0 л', power: '238 л.с.', transmission: 'Автомат', drive: 'Полный' }
  },
  {
    id: 2,
    model: 'Haval Jolion',
    originalPrice: 2800000,
    discountedPrice: 1960000,
    discount: 30,
    image: 'https://cdn.poehali.dev/projects/9937d48e-e570-449f-9762-9ea3421272c7/files/d59e9513-97ed-4871-a9be-c2427a1a7f55.jpg',
    specs: { engine: '1.5 л', power: '150 л.с.', transmission: 'Робот', drive: 'Передний' }
  },
  {
    id: 3,
    model: 'Haval F7x',
    originalPrice: 3200000,
    discountedPrice: 2240000,
    discount: 30,
    image: 'https://cdn.poehali.dev/projects/9937d48e-e570-449f-9762-9ea3421272c7/files/bccb0cb8-1635-4e49-ac76-a254fb7ce6b7.jpg',
    specs: { engine: '2.0 л', power: '190 л.с.', transmission: 'Робот', drive: 'Полный' }
  },
  {
    id: 4,
    model: 'Exeed TXL',
    originalPrice: 3600000,
    discountedPrice: 2520000,
    discount: 30,
    image: 'https://cdn.poehali.dev/projects/9937d48e-e570-449f-9762-9ea3421272c7/files/f4d32304-4053-4149-81ff-730772e48322.jpg',
    specs: { engine: '1.6 л', power: '197 л.с.', transmission: 'Робот', drive: 'Полный' }
  },
  {
    id: 5,
    model: 'Tenet T8',
    originalPrice: 4200000,
    discountedPrice: 2520000,
    discount: 40,
    image: 'https://cdn.poehali.dev/projects/9937d48e-e570-449f-9762-9ea3421272c7/files/d59e9513-97ed-4871-a9be-c2427a1a7f55.jpg',
    specs: { engine: '2.0 л', power: '252 л.с.', transmission: 'Автомат', drive: 'Полный' }
  },
  {
    id: 6,
    model: 'Haval H5',
    originalPrice: 3100000,
    discountedPrice: 2170000,
    discount: 30,
    image: 'https://cdn.poehali.dev/projects/9937d48e-e570-449f-9762-9ea3421272c7/files/bccb0cb8-1635-4e49-ac76-a254fb7ce6b7.jpg',
    specs: { engine: '2.0 л', power: '224 л.с.', transmission: 'Автомат', drive: 'Полный' }
  },
  {
    id: 7,
    model: 'Jaecoo J8',
    originalPrice: 3800000,
    discountedPrice: 2660000,
    discount: 30,
    image: 'https://cdn.poehali.dev/projects/9937d48e-e570-449f-9762-9ea3421272c7/files/f4d32304-4053-4149-81ff-730772e48322.jpg',
    specs: { engine: '2.0 л', power: '261 л.с.', transmission: 'Автомат', drive: 'Полный' }
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-primary text-primary-foreground shadow-lg z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">CHINA AUTO</h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('hero')} className="hover:text-accent transition-colors">Главная</button>
              <button onClick={() => scrollToSection('catalog')} className="hover:text-accent transition-colors">Каталог</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-accent transition-colors">О компании</button>
              <button onClick={() => scrollToSection('offers')} className="hover:text-accent transition-colors">Спецпредложения</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-accent transition-colors">Контакты</button>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="default" className="bg-accent hover:bg-accent/90 hidden sm:flex">
                <Icon name="Phone" size={18} className="mr-2" />
                Позвонить
              </Button>
              <button 
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="block w-full text-left py-2 hover:text-accent transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('catalog')} 
                className="block w-full text-left py-2 hover:text-accent transition-colors"
              >
                Каталог
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block w-full text-left py-2 hover:text-accent transition-colors"
              >
                О компании
              </button>
              <button 
                onClick={() => scrollToSection('offers')} 
                className="block w-full text-left py-2 hover:text-accent transition-colors"
              >
                Спецпредложения
              </button>
              <button 
                onClick={() => scrollToSection('contacts')} 
                className="block w-full text-left py-2 hover:text-accent transition-colors"
              >
                Контакты
              </button>
              <Button variant="default" className="w-full bg-accent hover:bg-accent/90 mt-4">
                <Icon name="Phone" size={18} className="mr-2" />
                Позвонить
              </Button>
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="pt-24 pb-16 bg-gradient-to-br from-black via-secondary to-black text-primary-foreground relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 transition-transform duration-300"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-foreground to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              className="animate-fade-in"
              style={{ transform: `translateY(${scrollY * -0.1}px)`, transition: 'transform 0.3s ease-out' }}
            >
              <Badge className="mb-4 bg-accent text-accent-foreground shadow-lg shadow-accent/50">Прямые поставки</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Китайские автомобили со скидкой до 40%
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Официальная гарантия производителя. Доставка из Китая. Полное сервисное обслуживание.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 shadow-lg shadow-accent/30" onClick={() => scrollToSection('catalog')}>
                  Выбрать автомобиль
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  Узнать подробнее
                </Button>
              </div>
            </div>
            <div 
              className="relative animate-fade-in"
              style={{ transform: `translateY(${scrollY * 0.15}px)`, transition: 'transform 0.3s ease-out' }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary-foreground/20 rounded-lg blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/9937d48e-e570-449f-9762-9ea3421272c7/files/f4d32304-4053-4149-81ff-730772e48322.jpg" 
                alt="Китайские автомобили" 
                className="rounded-lg shadow-2xl relative z-10 border border-primary-foreground/10"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">500+</div>
              <p className="text-muted-foreground">Довольных клиентов</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">7</div>
              <p className="text-muted-foreground">Моделей в наличии</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">40%</div>
              <p className="text-muted-foreground">Максимальная скидка</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">5+</div>
              <p className="text-muted-foreground">Лет опыта</p>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <Icon name="Shield" size={48} className="mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">Официальная гарантия</h3>
              <p className="text-muted-foreground">3 года или 100 000 км</p>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
              <Icon name="Truck" size={48} className="mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-muted-foreground">30-45 дней из Китая</p>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <Icon name="Wrench" size={48} className="mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">Сервис и ТО</h3>
              <p className="text-muted-foreground">Полное обслуживание</p>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <Icon name="BadgePercent" size={48} className="mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">Скидки до 40%</h3>
              <p className="text-muted-foreground">От производителя</p>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Каталог автомобилей</h2>
          <p className="text-center text-muted-foreground mb-12">7 премиальных моделей со скидками</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <Card key={car.id} className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative">
                  <img src={car.image} alt={car.model} className="w-full h-64 object-cover" />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground text-lg">
                    -{car.discount}%
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{car.model}</CardTitle>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-accent">
                      {car.discountedPrice.toLocaleString('ru-RU')} ₽
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      {car.originalPrice.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Двигатель:</span>
                      <span className="font-medium">{car.specs.engine}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Мощность:</span>
                      <span className="font-medium">{car.specs.power}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">КПП:</span>
                      <span className="font-medium">{car.specs.transmission}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Привод:</span>
                      <span className="font-medium">{car.specs.drive}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90" onClick={() => setSelectedCar(car)}>
                    Оставить заявку
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">О компании</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Icon name="Building2" size={40} className="text-accent mb-2" />
                  <CardTitle>Прямые поставки</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Работаем напрямую с китайскими производителями. Это позволяет нам предлагать самые выгодные цены на рынке.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="Award" size={40} className="text-accent mb-2" />
                  <CardTitle>Опыт работы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Более 5 лет на рынке китайских автомобилей. Поставили уже более 500 автомобилей довольным клиентам.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="offers" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Специальные предложения</h2>
          <p className="text-center text-muted-foreground mb-12">Акции и выгодные условия</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-accent">
              <CardHeader>
                <Icon name="Gift" size={40} className="text-accent mb-2" />
                <CardTitle>Трейд-ин</CardTitle>
                <CardDescription>Обмен старого авто на новое</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Оцениваем ваш автомобиль по рыночной стоимости и засчитываем в оплату нового.
                </p>
                <Button variant="outline" className="w-full">Узнать стоимость</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardHeader>
                <Icon name="CreditCard" size={40} className="text-accent mb-2" />
                <CardTitle>Кредит 0%</CardTitle>
                <CardDescription>Первый год без процентов</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Специальная программа кредитования с нулевой ставкой на первые 12 месяцев.
                </p>
                <Button variant="outline" className="w-full">Рассчитать</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardHeader>
                <Icon name="Users" size={40} className="text-accent mb-2" />
                <CardTitle>Программа лояльности</CardTitle>
                <CardDescription>Скидки для постоянных клиентов</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Дополнительная скидка 5% при повторной покупке или покупке для друга.
                </p>
                <Button variant="outline" className="w-full">Подробнее</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Отзывы наших клиентов</h2>
          <p className="text-center text-muted-foreground mb-12">Более 500 довольных владельцев китайских автомобилей</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-accent">АМ</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Александр Михайлов</CardTitle>
                    <CardDescription>Haval Jolion, 2024</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Icon name="Star" size={18} className="text-accent fill-accent" />
                  <Icon name="Star" size={18} className="text-accent fill-accent" />
                  <Icon name="Star" size={18} className="text-accent fill-accent" />
                  <Icon name="Star" size={18} className="text-accent fill-accent" />
                  <Icon name="Star" size={18} className="text-accent fill-accent" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Отличное соотношение цены и качества! Машина приехала точно в срок, все документы оформили за меня. Гарантия работает, сервис на высоте.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-accent">ЕС</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Елена Соколова</CardTitle>
                    <CardDescription>Exeed TXL, 2025</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Icon name="Star" size={18} className="text-accent fill-accent" />
                  <Icon name="Star" size={18} className="text-accent fill-accent" />
                  <Icon name="Star" size={18} className="text-accent fill-accent" />
                  <Icon name="Star" size={18} className="text-accent fill-accent" />
                  <Icon name="Star" size={18} className="text-accent fill-accent" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Скидка в 30% от производителя — это реально! Взяли по трейд-ин, старую машину оценили честно. Очень довольны покупкой.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-accent">ДК</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Дмитрий Козлов</CardTitle>
                    <CardDescription>Tenet T7, 2024</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Icon name="Star" size={18} className="text-accent fill-accent" />
                  <Icon name="Star" size={18} className="text-accent fill-accent" />
                  <Icon name="Star" size={18} className="text-accent fill-accent" />
                  <Icon name="Star" size={18} className="text-accent fill-accent" />
                  <Icon name="Star" size={18} className="text-accent fill-accent" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Профессиональный подход на всех этапах. Помогли с выбором модели, доставили быстрее обещанного срока. Рекомендую всем!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Доставка и гарантии</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Icon name="Ship" size={32} className="text-accent" />
                Доставка из Китая
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Icon name="Check" size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Морская доставка</p>
                    <p className="text-sm text-muted-foreground">30-45 дней от завода до вашего города</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Check" size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Полное таможенное оформление</p>
                    <p className="text-sm text-muted-foreground">Берём все вопросы на себя</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Check" size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Доставка до дилерского центра</p>
                    <p className="text-sm text-muted-foreground">В любой регион России</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Check" size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Страхование груза</p>
                    <p className="text-sm text-muted-foreground">Полная защита от всех рисков</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Icon name="ShieldCheck" size={32} className="text-accent" />
                Гарантия и сервис
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Icon name="Check" size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Гарантия производителя 3 года</p>
                    <p className="text-sm text-muted-foreground">Или 100 000 км пробега</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Check" size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Сертифицированный сервис</p>
                    <p className="text-sm text-muted-foreground">Партнёрская сеть по всей России</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Check" size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Оригинальные запчасти</p>
                    <p className="text-sm text-muted-foreground">Прямые поставки с завода</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Check" size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Техподдержка 24/7</p>
                    <p className="text-sm text-muted-foreground">Всегда на связи для решения вопросов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Свяжитесь с нами</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Icon name="MapPin" size={24} className="text-accent flex-shrink-0" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="Phone" size={24} className="text-accent flex-shrink-0" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="Mail" size={24} className="text-accent flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@chinaauto.ru</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="Clock" size={24} className="text-accent flex-shrink-0" />
                  <div>
                    <p className="font-medium">Время работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</p>
                    <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input placeholder="Телефон" type="tel" />
                  </div>
                  <div>
                    <Input placeholder="Email" type="email" />
                  </div>
                  <div>
                    <Textarea placeholder="Комментарий" rows={4} />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CHINA AUTO</h3>
              <p className="text-primary-foreground/80">
                Официальный поставщик китайских автомобилей со скидками до 40%
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('catalog')} className="block hover:text-accent transition-colors">Каталог</button>
                <button onClick={() => scrollToSection('about')} className="block hover:text-accent transition-colors">О компании</button>
                <button onClick={() => scrollToSection('offers')} className="block hover:text-accent transition-colors">Спецпредложения</button>
                <button onClick={() => scrollToSection('contacts')} className="block hover:text-accent transition-colors">Контакты</button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>+7 (495) 123-45-67</p>
                <p>info@chinaauto.ru</p>
                <p>г. Москва, ул. Примерная, 123</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-primary-foreground/20" />
          <div className="text-center text-primary-foreground/60">
            <p>© 2026 CHINA AUTO. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;