import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Общие сведения', icon: 'Flag' },
    { id: 'geography', title: 'География и климат', icon: 'MapPin' },
    { id: 'history', title: 'История государства', icon: 'BookOpen' },
    { id: 'economy', title: 'Экономика и торговля', icon: 'TrendingUp' },
    { id: 'military', title: 'Вооруженные силы', icon: 'Shield' },
    { id: 'government', title: 'Государственное устройство', icon: 'Building' },
    { id: 'health-education', title: 'Здравоохранение и образование', icon: 'GraduationCap' },
    { id: 'regions', title: 'Административное деление', icon: 'Map' },
    { id: 'culture', title: 'Культура и традиции', icon: 'Heart' },
    { id: 'space', title: 'Космическая программа', icon: 'Rocket' }
  ];

  const budgetData = [
    { sector: 'Здравоохранение', amount: 72, percentage: 20.0, color: '#2563EB' },
    { sector: 'Образование', amount: 65, percentage: 18.0, color: '#1E40AF' },
    { sector: 'Оборона', amount: 55, percentage: 15.3, color: '#991B1B' },
    { sector: 'Наука и технологии', amount: 54, percentage: 15.0, color: '#F59E0B' },
    { sector: 'Инфраструктура', amount: 40, percentage: 11.1, color: '#059669' },
    { sector: 'Соц. обеспечение', amount: 29, percentage: 8.1, color: '#7C3AED' }
  ];

  const tradeData = [
    { category: 'Экспорт', amount: 300, change: 8.2, color: 'green' },
    { category: 'Импорт', amount: 280, change: 5.1, color: 'blue' },
    { category: 'Торговый баланс', amount: 20, change: 15.3, color: 'purple' }
  ];

  const gdpGrowthData = [
    { year: 2021, growth: 3.2 },
    { year: 2022, growth: 4.1 },
    { year: 2023, growth: 4.5 },
    { year: 2024, growth: 4.8 },
    { year: 2025, growth: 5.2 }
  ];

  const militaryData = [
    { category: 'Истребители', count: 60, icon: 'Plane' },
    { category: 'Танки', count: 300, icon: 'Truck' },
    { category: 'БТР', count: 800, icon: 'Shield' },
    { category: 'БПЛА', count: 300, icon: 'Zap' },
    { category: 'Фрегаты', count: 10, icon: 'Anchor' },
    { category: 'Подводные лодки', count: 3, icon: 'Ship' }
  ];

  const militaryStructure = [
    { 
      branch: 'Сухопутные войска',
      icon: 'Users',
      equipment: [
        'Танки: ~300 единиц',
        'БТР: 800 единиц', 
        'Артиллерия: 400 орудий',
        'РСЗО: 150 единиц'
      ]
    },
    {
      branch: 'Военно-воздушные силы',
      icon: 'Plane',
      equipment: [
        'Истребители: 60 единиц',
        'БПЛА: 300 единиц',
        'Бомбардировщики: 18 единиц',
        'Транспортные самолёты: 12 единиц'
      ]
    },
    {
      branch: 'Военно-морской флот',
      icon: 'Anchor',
      equipment: [
        'Фрегаты: 10 единиц',
        'Противолодочные корабли: 7 единиц',
        'Подводные лодки: 3 единицы',
        'Ракетные катера: 16 единиц'
      ]
    }
  ];

  const provinces = [
    { name: 'Столичный округ Асхиния', center: 'Асхиния', population: 5.6, features: 'IT, финансы, промышленность', position: 'Запад' },
    { name: 'Столичный округ Хвиней', center: 'Хвиней', population: 4.9, features: 'Порт, судостроение, ВПК', position: 'Север' },
    { name: 'Центральная провинция', center: 'Сармонт', population: 3.9, features: 'Тяжёлая промышленность', position: 'Центр' },
    { name: 'Восточная провинция', center: 'Савея', population: 3.5, features: 'Технопарки, НИОКР', position: 'Восток' },
    { name: 'Западная провинция', center: 'Катрианпи', population: 2.6, features: 'Автомобили, робототехника', position: 'Запад' },
    { name: 'Южная провинция', center: 'Вега', population: 1.9, features: 'Сельское хозяйство', position: 'Юг' },
    { name: 'Северная провинция', center: 'Касалья', population: 1.4, features: 'Курорты, виноделие', position: 'Север' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Шапка с флагом */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-6">
            <img 
              src="https://cdn.poehali.dev/files/04e3d761-943c-44ad-8ba2-3391cbc5f06b.png" 
              alt="Флаг Сашианийской Республики" 
              className="w-20 h-14 object-cover rounded shadow-md"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Сашианийская Республика</h1>
              <p className="text-lg text-gray-600 mt-1">Энциклопедический портал</p>
              <div className="flex items-center gap-4 mt-2">
                <Badge variant="outline" className="bg-blue-50 text-blue-700">
                  <Icon name="Users" size={14} className="mr-1" />
                  23,8 млн жителей
                </Badge>
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  <Icon name="TrendingUp" size={14} className="mr-1" />
                  ВВП 1,2 трлн сашинов
                </Badge>
                <Badge variant="outline" className="bg-purple-50 text-purple-700">
                  <Icon name="MapPin" size={14} className="mr-1" />
                  92,400 км²
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Навигация */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-2">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveSection(section.id)}
                className={`whitespace-nowrap transition-all duration-200 ${
                  activeSection === section.id 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Icon name={section.icon} size={16} className="mr-2" />
                {section.title}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Контент */}
      <main className="container mx-auto px-4 py-8">
        {activeSection === 'overview' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Building" size={24} className="text-blue-600" />
                  <h3 className="text-lg font-semibold text-blue-900">Государство</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Форма правления:</span> Президентская республика</p>
                  <p><span className="font-medium">Президент:</span> Карл Маркес</p>
                  <p><span className="font-medium">Премьер-министр:</span> Лилия Вест</p>
                  <p><span className="font-medium">Столица:</span> Асхиния</p>
                  <p><span className="font-medium">Независимость:</span> 15 августа 1948 года</p>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="DollarSign" size={24} className="text-green-600" />
                  <h3 className="text-lg font-semibold text-green-900">Экономика</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">ВВП:</span> 1,2 трлн сашинов</p>
                  <p><span className="font-medium">ВВП на душу:</span> 50,400 сашинов</p>
                  <p><span className="font-medium">Рост ВВП:</span> 4,8%</p>
                  <p><span className="font-medium">Безработица:</span> 3,1%</p>
                  <p><span className="font-medium">Инфляция:</span> 2,8%</p>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Globe" size={24} className="text-purple-600" />
                  <h3 className="text-lg font-semibold text-purple-900">География</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Площадь:</span> 92,400 км²</p>
                  <p><span className="font-medium">Население:</span> 23,8 млн</p>
                  <p><span className="font-medium">Валюта:</span> Сашин (SHN)</p>
                  <p><span className="font-medium">Часовой пояс:</span> AST (UTC+3)</p>
                  <p><span className="font-medium">Домен:</span> .sh</p>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-100 border-orange-200">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Users" size={24} className="text-orange-600" />
                  <h3 className="text-lg font-semibold text-orange-900">Международные связи</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Союзники:</span> Кальвария, Вестмарк</p>
                  <p><span className="font-medium">Противники:</span> Кусария, Ортания</p>
                  <p><span className="font-medium">Автомобильное движение:</span> правостороннее</p>
                  <p><span className="font-medium">Телефонный код:</span> +47</p>
                  <p><span className="font-medium">Код ISO:</span> SH / SAH</p>
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="Target" size={20} className="text-blue-600" />
                Герб и символика
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Государственные символы</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Флаг:</strong> Вертикальные полосы белого, бордового и синего цветов. 
                    По центру — золотой герб: пшеничный колос с корнями, в нижней части колоса 
                    находится щит с изображением трёх стрел.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Герб:</strong> Щит с изображением пшеничного колоса, символизирующего 
                    плодородие, и щит с изображением трёх стрел, означающий стойкость, единство и прогресс.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg border">
                  <h4 className="font-medium mb-2 text-amber-800">Девиз и гимн</h4>
                  <p className="text-sm text-amber-700 mb-3 italic">
                    "Слава Республике, Слава Сашиании!"
                  </p>
                  <div className="flex items-center gap-2 text-sm text-amber-600">
                    <Icon name="Music" size={16} />
                    <span>Национальный гимн</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeSection === 'geography' && (
          <div className="space-y-8 animate-fade-in">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Icon name="MapPin" size={20} className="text-green-600" />
                География и климат
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-green-700">Расположение и границы</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="ArrowUp" size={16} className="text-blue-500" />
                      <span><strong>Север:</strong> Сашианийский океан</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="ArrowRight" size={16} className="text-red-500" />
                      <span><strong>Восток:</strong> Кусарийская Демократическая Республика</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="ArrowDown" size={16} className="text-green-500" />
                      <span><strong>Юг:</strong> Государство Кальвария</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="ArrowLeft" size={16} className="text-purple-500" />
                      <span><strong>Запад:</strong> Королевство Вестмарк</span>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold mb-4 mt-6 text-green-700">Рельеф местности</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Север:</strong> холмистые плато, леса, океан и горы с развитой промышленностью</p>
                    <p><strong>Центр:</strong> равнины с развитой промышленностью</p>
                    <p><strong>Юг:</strong> долины и степи, сельское хозяйство</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4 text-blue-700">Климатические зоны</h4>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border">
                      <h5 className="font-medium text-blue-800">Север</h5>
                      <p className="text-sm text-blue-700">Умеренно-океанический климат<br/>Влажные лета, мягкие зимы</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border">
                      <h5 className="font-medium text-green-800">Центр</h5>
                      <p className="text-sm text-green-700">Умеренно-континентальный климат<br/>Тёплое лето, холодные зимы</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg border">
                      <h5 className="font-medium text-orange-800">Юг</h5>
                      <p className="text-sm text-orange-700">Субтропический климат<br/>Тёплые зимы, жаркое лето</p>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold mb-3 mt-6 text-blue-700">Водные ресурсы</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Waves" size={16} className="text-blue-500" />
                      <span>Река Асхиния</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Circle" size={16} className="text-blue-500" />
                      <span>Озеро Велара</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Droplets" size={16} className="text-blue-500" />
                      <span>Крупные водохранилища</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeSection === 'history' && (
          <div className="space-y-8 animate-fade-in">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Icon name="BookOpen" size={20} className="text-amber-600" />
                История Сашианийской Республики
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-6">
                  <h4 className="font-semibold text-amber-700 mb-2">III тыс. до н.э. — Ранние поселения</h4>
                  <p className="text-sm text-gray-600">Первые поселения на территории современной Сашиании. Формирование земледельческих общин.</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-blue-700 mb-2">VI век до н.э. — Торговые города</h4>
                  <p className="text-sm text-gray-600">Складывание торговых городов-государств. Развитие морской торговли и ремёсел.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold text-purple-700 mb-2">X–XIII века — Феодальные войны</h4>
                  <p className="text-sm text-gray-600">Период феодальной раздробленности и междоусобных войн. Борьба за торговые пути и территории.</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-semibold text-green-700 mb-2">XIV век — Образование двух государств</h4>
                  <p className="text-sm text-gray-600">Формирование государств Сашия и Ания. Установление границ и торговых отношений.</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="font-semibold text-red-700 mb-2">XIX век — Колонизация Ортанией</h4>
                  <p className="text-sm text-gray-600">Период колониального господства. Эксплуатация природных ресурсов и принудительная модернизация.</p>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h4 className="font-semibold text-indigo-700 mb-2">1947–1948 — Война за независимость</h4>
                  <p className="text-sm text-gray-600">Объединённая борьба Сашии и Ании против колониального режима. Победа и подписание договора об объединении.</p>
                </div>
                
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h4 className="font-semibold text-emerald-700 mb-2">15 августа 1948 года — Провозглашение независимости</h4>
                  <p className="text-sm text-gray-600">Образование единой Сашианийской Республики. Принятие первой конституции и создание федеративного устройства.</p>
                </div>
                
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h4 className="font-semibold text-cyan-700 mb-2">1960–1980 — Экономический бум</h4>
                  <p className="text-sm text-gray-600">Массивные инвестиции в IT-сектор, энергетику и сельское хозяйство. Становление регионального лидера.</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeSection === 'economy' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Icon name="PieChart" size={20} className="text-blue-600" />
                  Структура госбюджета (360 млрд сашинов)
                </h3>
                <div className="space-y-4">
                  {budgetData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{item.sector}</span>
                        <span className="text-sm text-gray-600">{item.amount} млрд ({item.percentage}%)</span>
                      </div>
                      <Progress value={item.percentage * 5} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} className="text-green-600" />
                  Ключевые экономические показатели
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">1,2 трлн</div>
                    <div className="text-sm text-blue-700">ВВП (номинальный)</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">4,8%</div>
                    <div className="text-sm text-green-700">Рост ВВП</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">300 млрд</div>
                    <div className="text-sm text-purple-700">Экспорт</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">3,1%</div>
                    <div className="text-sm text-orange-700">Безработица</div>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h4 className="font-medium mb-3">Основные отрасли экономики</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Cpu" size={16} className="text-blue-500" />
                      IT и электроника
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Wheat" size={16} className="text-green-500" />
                      Сельское хозяйство
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Cog" size={16} className="text-gray-500" />
                      Машиностроение
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Zap" size={16} className="text-yellow-500" />
                      Энергетика
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Новые графики и диаграммы */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Icon name="BarChart" size={20} className="text-purple-600" />
                  Динамика роста ВВП
                </h3>
                <div className="space-y-4">
                  {gdpGrowthData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{data.year}</span>
                      <div className="flex items-center gap-3 flex-1 ml-4">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(data.growth / 6) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm text-green-600 font-semibold">{data.growth}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Icon name="Globe" size={20} className="text-indigo-600" />
                  Внешняя торговля
                </h3>
                <div className="space-y-4">
                  {tradeData.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{item.category}</span>
                        <span className={`text-sm px-2 py-1 rounded ${
                          item.change > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {item.change > 0 ? '+' : ''}{item.change}%
                        </span>
                      </div>
                      <div className="text-xl font-bold text-gray-800">{item.amount} млрд сашинов</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border">
                  <h4 className="font-medium text-blue-800 mb-2">Торговые партнёры</h4>
                  <div className="text-sm text-blue-700 space-y-1">
                    <p><strong>Экспорт:</strong> электроника, ПО, продовольствие, автомобили</p>
                    <p><strong>Импорт:</strong> сырьё, интеллектуальные услуги, ресурсы</p>
                    <p><strong>Партнёры:</strong> Ортания, Кальвария, Вестмарк</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'military' && (
          <div className="space-y-8 animate-fade-in">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Icon name="Shield" size={20} className="text-red-600" />
                Вооружённые силы Сашианийской Республики
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <div className="text-2xl font-bold text-red-600">55 млрд</div>
                  <div className="text-sm text-red-700">Военный бюджет (сашинов)</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">120 тыс</div>
                  <div className="text-sm text-blue-700">Численность армии</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600">250 тыс</div>
                  <div className="text-sm text-purple-700">Военный резерв</div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                {militaryStructure.map((branch, index) => (
                  <Card key={index} className="p-4 bg-gray-50">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon name={branch.icon} size={24} className="text-blue-600" />
                      <h4 className="font-semibold text-gray-900">{branch.branch}</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {branch.equipment.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Icon name="Circle" size={8} className="text-blue-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {militaryData.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name={item.icon} size={20} className="text-gray-600" />
                      <span className="font-medium text-gray-900">{item.category}</span>
                    </div>
                    <div className="text-xl font-bold text-gray-800">{item.count} ед.</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-start gap-3">
                  <Icon name="AlertTriangle" size={20} className="text-amber-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-amber-800 mb-1">Стратегическая обстановка</h4>
                    <p className="text-sm text-amber-700">
                      Высокие расходы на оборону оправданы тем, что Кусария, хоть и бедная страна 
                      по сравнению с Сашианией, имеет очень развитый ВПК, что представляет угрозу для Республики.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeSection === 'government' && (
          <div className="space-y-8 animate-fade-in">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Icon name="Building" size={20} className="text-blue-600" />
                Государственное устройство
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-blue-700">Исполнительная власть</h4>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon name="Crown" size={20} className="text-blue-600" />
                      <span className="font-medium">Президент Карл Маркес</span>
                    </div>
                    <p className="text-sm text-blue-700 mb-2">Избран в 2020 году, срок полномочий 5 лет</p>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Возглавляет вооружённые силы</li>
                      <li>• Управляет внешней политикой</li>
                      <li>• Подписывает законы</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon name="UserCheck" size={20} className="text-green-600" />
                      <span className="font-medium">Премьер-министр Лилия Вест</span>
                    </div>
                    <p className="text-sm text-green-700 mb-2">Формирует кабинет министров</p>
                    <ul className="text-sm text-green-600 space-y-1">
                      <li>• Руководит правительством</li>
                      <li>• Реализует внутреннюю политику</li>
                      <li>• Отвечает за экономику</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4 text-purple-700">Законодательная власть — Парламент</h4>
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="Users" size={20} className="text-purple-600" />
                        <span className="font-medium">Сенат (верхняя палата)</span>
                      </div>
                      <p className="text-sm text-purple-700">Представители регионов и провинций</p>
                    </div>
                    
                    <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="Vote" size={20} className="text-indigo-600" />
                        <span className="font-medium">Палата народных депутатов</span>
                      </div>
                      <p className="text-sm text-indigo-700">Выборы каждые 4 года, представители народа</p>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold mb-4 mt-6 text-orange-700">Федеративное устройство</h4>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <p className="text-sm text-orange-700">Республика состоит из 5 провинций и 2 столичных округов с широкой автономией в вопросах местного самоуправления.</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeSection === 'health-education' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Icon name="Heart" size={20} className="text-red-600" />
                  Здравоохранение
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <div className="text-2xl font-bold text-red-600">72 млрд сашинов</div>
                    <div className="text-sm text-red-700">Бюджет здравоохранения (20% от общего)</div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Система здравоохранения</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Icon name="Building2" size={16} className="text-blue-500" />
                        <span>Государственные поликлиники</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Stethoscope" size={16} className="text-green-500" />
                        <span>Частные медицинские клиники</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Cpu" size={16} className="text-purple-500" />
                        <span>Высокотехнологичное оборудование</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Ambulance" size={16} className="text-red-500" />
                        <span>Скорая медицинская помощь</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border">
                    <h5 className="font-medium text-blue-800 mb-2">Особенности системы</h5>
                    <p className="text-sm text-blue-700">Смешанная система: бесплатная государственная медицина и платные частные услуги высокого класса.</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Icon name="GraduationCap" size={20} className="text-blue-600" />
                  Образование
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600">65 млрд сашинов</div>
                    <div className="text-sm text-blue-700">Бюджет образования (18% от общего)</div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Образовательная система</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Icon name="School" size={16} className="text-green-500" />
                        <span>Сеть государственных школ</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="University" size={16} className="text-purple-500" />
                        <span>Университеты и институты</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Laptop" size={16} className="text-blue-500" />
                        <span>IT-образование и технологии</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Microscope" size={16} className="text-orange-500" />
                        <span>Научные исследования</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border">
                    <h5 className="font-medium text-purple-800 mb-2">Ведущие учебные заведения</h5>
                    <div className="space-y-1 text-sm text-purple-700">
                      <p>• Асхинийский технический университет</p>
                      <p>• Институт космических технологий</p>
                      <p>• Сашианийская академия наук</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'culture' && (
          <div className="space-y-8 animate-fade-in">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Icon name="Heart" size={20} className="text-pink-600" />
                Культура и традиции
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="bg-pink-50 p-4 rounded-lg border border-pink-200 mb-6">
                    <div className="text-2xl font-bold text-pink-600">11 млрд сашинов</div>
                    <div className="text-sm text-pink-700">Бюджет на культуру (3.1% от общего)</div>
                  </div>
                  
                  <h4 className="font-semibold mb-4 text-purple-700">Культурные учреждения</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon name="Theater" size={20} className="text-red-500" />
                      <span>Национальные театры</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Museum" size={20} className="text-blue-500" />
                      <span>Музеи и галереи</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Film" size={20} className="text-purple-500" />
                      <span>Киноиндустрия</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Music" size={20} className="text-green-500" />
                      <span>Концертные залы</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4 text-amber-700">Национальные праздники</h4>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="Flag" size={20} className="text-blue-600" />
                        <span className="font-medium">День Независимости</span>
                      </div>
                      <p className="text-sm text-blue-700">15 августа — главный государственный праздник</p>
                    </div>
                    
                    <div className="bg-amber-50 p-4 rounded-lg border">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="Wheat" size={20} className="text-amber-600" />
                        <span className="font-medium">Праздник Колоса</span>
                      </div>
                      <p className="text-sm text-amber-700">Традиционное сашианийское рождество, празднование урожая</p>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold mb-3 mt-6 text-green-700">Культурные особенности</h4>
                  <div className="bg-green-50 p-4 rounded-lg border">
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Богатые традиции виноделия</li>
                      <li>• Народные ремёсла и искусства</li>
                      <li>• Многонациональная кухня</li>
                      <li>• Фестивали и культурные мероприятия</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeSection === 'regions' && (
          <div className="space-y-8 animate-fade-in">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Icon name="Map" size={20} className="text-green-600" />
                Административное деление (7 регионов)
              </h3>
              
              <div className="grid gap-4">
                {provinces.map((province, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{province.name}</h4>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">
                        {province.position}
                      </Badge>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Админ. центр:</span>
                        <div className="font-medium">{province.center}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Население:</span>
                        <div className="font-medium">{province.population} млн</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Специализация:</span>
                        <div className="font-medium">{province.features}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeSection === 'space' && (
          <div className="space-y-8 animate-fade-in">
            <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Icon name="Rocket" size={20} className="text-indigo-600" />
                Космическая программа Сашиании
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Satellite" size={24} className="text-indigo-600" />
                    <span className="font-medium">Спутники</span>
                  </div>
                  <div className="text-2xl font-bold text-indigo-700">20 единиц</div>
                  <div className="text-sm text-indigo-600">Наблюдение и связь</div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="MapPin" size={24} className="text-purple-600" />
                    <span className="font-medium">Космодром</span>
                  </div>
                  <div className="text-lg font-bold text-purple-700">Астория-1</div>
                  <div className="text-sm text-purple-600">Главная стартовая площадка</div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="DollarSign" size={24} className="text-blue-600" />
                    <span className="font-medium">Бюджет</span>
                  </div>
                  <div className="text-xl font-bold text-blue-700">21,6 млрд</div>
                  <div className="text-sm text-blue-600">сашинов (40% от науки)</div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Target" size={24} className="text-emerald-600" />
                    <span className="font-medium">Миссии</span>
                  </div>
                  <div className="text-xl font-bold text-emerald-700">15+</div>
                  <div className="text-sm text-emerald-600">Успешных запусков</div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="mt-6 p-4 bg-white/80 rounded-lg border border-indigo-100">
                  <h4 className="font-medium text-indigo-800 mb-2">Космические достижения</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="CheckCircle" size={16} className="text-green-500" />
                      <span>Система спутников связи</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="CheckCircle" size={16} className="text-green-500" />
                      <span>Метеорологические спутники</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="CheckCircle" size={16} className="text-green-500" />
                      <span>Спутники наблюдения Земли</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="CheckCircle" size={16} className="text-green-500" />
                      <span>Научные исследования в космосе</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </main>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Сашианийская Республика</h4>
              <p className="text-sm text-gray-400">
                Энциклопедический портал с подробной информацией о государстве, 
                расположенном на северо-западе материка Альвания.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => setActiveSection('government')} className="block text-gray-400 hover:text-white transition-colors">
                  Международные отношения
                </button>
                <button onClick={() => setActiveSection('economy')} className="block text-gray-400 hover:text-white transition-colors">
                  Торговые партнёры
                </button>
                <button onClick={() => setActiveSection('geography')} className="block text-gray-400 hover:text-white transition-colors">
                  Климатические данные
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Icon name="Globe" size={16} />
                  Домен: .sh
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  Код: +47
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  UTC+3 (AST)
                </div>
                <a 
                  href="https://t.me/TheSashianianRepublic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Icon name="MessageCircle" size={16} />
                  Официальный Telegram
                </a>
              </div>
            </div>
          </div>
          <Separator className="my-6 bg-gray-700" />
          <div className="text-center text-sm text-gray-400">
            © 2025 Сашианийская Республика. Энциклопедический портал.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;