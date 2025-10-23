import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import AnimatedCounter from '@/components/AnimatedCounter';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: 'Library',
      title: 'Огромная библиотека игр',
      description: 'Получите доступ к тысячам игр всех жанров в одном месте'
    },
    {
      icon: 'Zap',
      title: 'Быстрая установка',
      description: 'Скачивайте и устанавливайте игры за считанные минуты'
    },
    {
      icon: 'Users',
      title: 'Игровое сообщество',
      description: 'Общайтесь с друзьями, делитесь достижениями'
    },
    {
      icon: 'Trophy',
      title: 'Система достижений',
      description: 'Отслеживайте прогресс и получайте награды'
    },
    {
      icon: 'Download',
      title: 'Автообновления',
      description: 'Все игры всегда актуальны и обновлены'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Защищённая платформа и проверенные игры'
    }
  ];

  const stats = [
    { value: 10000, suffix: '+', label: 'Игр в библиотеке' },
    { value: 5000000, suffix: '+', label: 'Активных игроков', format: 'short' },
    { value: 50, suffix: '+', label: 'Жанров игр' },
    { value: 4.9, suffix: '★', label: 'Рейтинг пользователей', decimals: 1 }
  ];

  const systemRequirements = {
    minimum: [
      'Windows 10 64-bit',
      'Intel Core i3 / AMD Ryzen 3',
      '8 GB RAM',
      '2 GB свободного места',
      'Интернет-соединение'
    ],
    recommended: [
      'Windows 11 64-bit',
      'Intel Core i5 / AMD Ryzen 5',
      '16 GB RAM',
      '5 GB свободного места',
      'Широкополосный интернет'
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Gamepad2" className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-orbitron font-bold text-primary neon-text">ZUROZIX</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Возможности
            </a>
            <a href="#download" className="text-muted-foreground hover:text-primary transition-colors">
              Скачать
            </a>
            <a href="#requirements" className="text-muted-foreground hover:text-primary transition-colors">
              Требования
            </a>
          </div>

          <Button onClick={() => navigate('/auth')} variant="outline">
            <Icon name="LogIn" size={16} className="mr-2" />
            Войти
          </Button>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <Badge className="bg-primary/20 text-primary border-primary neon-glow">
                Новое поколение игровых лаунчеров
              </Badge>
              <h1 className="text-5xl md:text-6xl font-orbitron font-bold leading-tight neon-text">
                Все твои игры<br />
                <span className="text-primary">в одном месте</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Zurozix — современная платформа для управления играми. 
                Скачивай, устанавливай и играй в любимые игры без ограничений.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 neon-glow text-lg">
                  <Icon name="Download" size={24} className="mr-2" />
                  Скачать для Windows
                </Button>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                  <Icon name="Play" size={24} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="Check" size={16} className="text-primary" />
                  Бесплатно
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Check" size={16} className="text-primary" />
                  Без рекламы
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Check" size={16} className="text-primary" />
                  Открытый исходный код
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
              <img 
                src="https://cdn.poehali.dev/projects/92ff0717-d0d7-4050-b7f8-d0e47073312c/files/d9a2b001-9615-4b15-a4aa-1a9f733ca65d.jpg"
                alt="Zurozix Interface"
                className="relative rounded-2xl shadow-2xl border border-border/50"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-orbitron font-bold text-primary neon-text">
                  {stat.format === 'short' ? (
                    <>
                      <AnimatedCounter end={5} duration={2000} />
                      <span>M{stat.suffix}</span>
                    </>
                  ) : (
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.suffix} 
                      decimals={stat.decimals || 0}
                      duration={2000}
                    />
                  )}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-orbitron font-bold">Почему Zurozix?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы создали идеальную платформу для геймеров со всеми необходимыми функциями
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-effect border-border/50 hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-orbitron">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img 
              src="https://cdn.poehali.dev/projects/92ff0717-d0d7-4050-b7f8-d0e47073312c/files/b4dd40b0-0e65-4090-8352-d109d0128e14.jpg"
              alt="Gaming Community"
              className="rounded-2xl shadow-2xl"
            />
            <div className="space-y-6">
              <h2 className="text-4xl font-orbitron font-bold">
                Присоединяйся к <span className="text-primary">сообществу</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Миллионы игроков по всему миру уже используют Zurozix для управления 
                своей игровой библиотекой. Общайся, соревнуйся и делись достижениями!
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" className="text-primary" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Играй с друзьями</h4>
                    <p className="text-sm text-muted-foreground">
                      Добавляй друзей, отслеживай их активность и приглашай в совместные игры
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" className="text-primary" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Открывай достижения</h4>
                    <p className="text-sm text-muted-foreground">
                      Выполняй задания, получай награды и показывай свои успехи
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" className="text-primary" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Синхронизация облака</h4>
                    <p className="text-sm text-muted-foreground">
                      Твой прогресс автоматически сохраняется и доступен на любом устройстве
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl font-orbitron font-bold">Скачать Zurozix</h2>
              <p className="text-lg text-muted-foreground">
                Выбери свою платформу и начни играть прямо сейчас
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="glass-effect hover:scale-105 transition-all cursor-pointer border-2 border-primary">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Monitor" className="text-primary" size={32} />
                  </div>
                  <CardTitle className="font-orbitron">Windows</CardTitle>
                  <CardDescription>Windows 10/11</CardDescription>
                  <Badge className="mx-auto mt-2 bg-primary/20 text-primary">Рекомендуем</Badge>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-primary hover:bg-primary/90 neon-glow">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    Версия 2.5.0 • 156 МБ
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect hover:scale-105 transition-all cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Icon name="Apple" className="text-foreground" size={32} />
                  </div>
                  <CardTitle className="font-orbitron">macOS</CardTitle>
                  <CardDescription>macOS 11+</CardDescription>
                  <div className="h-6" />
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    Версия 2.5.0 • 168 МБ
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect hover:scale-105 transition-all cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Icon name="Terminal" className="text-foreground" size={32} />
                  </div>
                  <CardTitle className="font-orbitron">Linux</CardTitle>
                  <CardDescription>Ubuntu, Debian, Fedora</CardDescription>
                  <div className="h-6" />
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    Версия 2.5.0 • 142 МБ
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="requirements" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-orbitron font-bold mb-4">Системные требования</h2>
              <p className="text-lg text-muted-foreground">
                Убедитесь, что ваш компьютер соответствует минимальным требованиям
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="font-orbitron flex items-center gap-2">
                    <Icon name="HardDrive" className="text-muted-foreground" size={20} />
                    Минимальные
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {systemRequirements.minimum.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-effect border-2 border-primary/50">
                <CardHeader>
                  <CardTitle className="font-orbitron flex items-center gap-2">
                    <Icon name="Zap" className="text-primary" size={20} />
                    Рекомендуемые
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {systemRequirements.recommended.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Gamepad2" className="text-white" size={20} />
                </div>
                <h3 className="font-orbitron font-bold text-lg">ZUROZIX</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Современная платформа для управления играми
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#download" className="hover:text-primary transition-colors">Скачать</a></li>
                <li><a href="#requirements" className="hover:text-primary transition-colors">Требования</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Reddit</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Связаться с нами</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Zurozix. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;