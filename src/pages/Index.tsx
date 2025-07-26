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

  const militaryData = [
    { category: 'Истребители', count: 60, icon: 'Plane' },
    { category: 'Танки', count: 300, icon: 'Truck' },
    { category: 'БТР', count: 800, icon: 'Shield' },
    { category: 'БПЛА', count: 300, icon: 'Zap' },
    { category: 'Фрегаты', count: 10, icon: 'Anchor' },
    { category: 'Подводные лодки', count: 3, icon: 'Ship' }
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {activeSection === 'regions' && (
          <div className="space-y-8 animate-fade-in">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Icon name="Map" size={20} className="text-green-600" />
                Административное деление (7 регионов)
              </h3>
              
              <div className="grid gap-4">
                {provinces.map((province, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border hover:shadow-md transition-shadow">
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
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              </div>

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
            </Card>
          </div>
        )}

        {/* Placeholder контент для остальных разделов */}
        {['geography', 'history', 'government', 'health-education', 'culture'].includes(activeSection) && (
          <Card className="p-8 text-center animate-fade-in">
            <Icon name="Construction" size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {sections.find(s => s.id === activeSection)?.title}
            </h3>
            <p className="text-gray-600">
              Раздел находится в разработке. Подробная информация будет добавлена в следующих обновлениях.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setActiveSection('overview')}
            >
              Вернуться к обзору
            </Button>
          </Card>
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
                <div className="text-gray-400">Международные отношения</div>
                <div className="text-gray-400">Торговые партнёры</div>
                <div className="text-gray-400">Климатические данные</div>
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