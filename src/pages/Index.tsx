import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const games = [
    {
      id: 1,
      title: 'Cyber Warriors',
      image: 'https://cdn.poehali.dev/projects/92ff0717-d0d7-4050-b7f8-d0e47073312c/files/4d964f63-26d3-4075-b99f-6afe13663af4.jpg',
      progress: 75,
      hours: 48,
      status: 'Установлена'
    },
    {
      id: 2,
      title: 'Space Odyssey',
      image: 'https://cdn.poehali.dev/projects/92ff0717-d0d7-4050-b7f8-d0e47073312c/files/1207a491-ecb7-41e1-966a-9c276fdb1cdf.jpg',
      progress: 100,
      hours: 124,
      status: 'Установлена'
    },
    {
      id: 3,
      title: 'Fantasy Realm',
      image: 'https://cdn.poehali.dev/projects/92ff0717-d0d7-4050-b7f8-d0e47073312c/files/081d0beb-1212-4f0c-9513-9f937593d001.jpg',
      progress: 45,
      hours: 32,
      status: 'Загрузка'
    }
  ];

  const achievements = [
    { id: 1, title: 'Первая победа', description: 'Завершите первую миссию', icon: 'Trophy', unlocked: true },
    { id: 2, title: 'Коллекционер', description: 'Соберите 50 предметов', icon: 'Star', unlocked: true },
    { id: 3, title: 'Мастер', description: 'Достигните 10 уровня', icon: 'Award', unlocked: false }
  ];

  const friends = [
    { id: 1, name: 'Alex Gaming', status: 'online', game: 'Cyber Warriors' },
    { id: 2, name: 'Pro Player', status: 'online', game: 'Space Odyssey' },
    { id: 3, name: 'Night Warrior', status: 'offline', game: null }
  ];

  const news = [
    {
      id: 1,
      title: 'Новое обновление Cyber Warriors',
      date: '23 октября 2025',
      preview: 'Добавлены новые персонажи и режим мультиплеера'
    },
    {
      id: 2,
      title: 'Space Odyssey: Сезон 2',
      date: '20 октября 2025',
      preview: 'Исследуйте новые галактики в эпическом продолжении'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Gamepad2" className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-orbitron font-bold text-primary neon-text">HYDRA</h1>
          </div>
          
          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              className={`${activeTab === 'home' ? 'text-primary' : 'text-muted-foreground'}`}
              onClick={() => setActiveTab('home')}
            >
              <Icon name="Home" size={20} className="mr-2" />
              Главная
            </Button>
            <Button
              variant="ghost"
              className={`${activeTab === 'library' ? 'text-primary' : 'text-muted-foreground'}`}
              onClick={() => setActiveTab('library')}
            >
              <Icon name="Library" size={20} className="mr-2" />
              Библиотека
            </Button>
            <Button
              variant="ghost"
              className={`${activeTab === 'community' ? 'text-primary' : 'text-muted-foreground'}`}
              onClick={() => setActiveTab('community')}
            >
              <Icon name="Users" size={20} className="mr-2" />
              Сообщество
            </Button>
            <Button
              variant="ghost"
              className={`${activeTab === 'news' ? 'text-primary' : 'text-muted-foreground'}`}
              onClick={() => setActiveTab('news')}
            >
              <Icon name="Newspaper" size={20} className="mr-2" />
              Новости
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="Bell" size={20} />
            </Button>
            <Avatar className="cursor-pointer border-2 border-primary">
              <AvatarFallback className="bg-primary text-primary-foreground font-orbitron">GP</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-8 animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden h-[400px] glass-effect">
              <img 
                src="https://cdn.poehali.dev/projects/92ff0717-d0d7-4050-b7f8-d0e47073312c/files/4d964f63-26d3-4075-b99f-6afe13663af4.jpg"
                alt="Hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 space-y-4">
                <Badge className="bg-primary/20 text-primary border-primary neon-glow">Популярное</Badge>
                <h2 className="text-5xl font-orbitron font-bold text-white neon-text">Cyber Warriors</h2>
                <p className="text-foreground/80 max-w-xl">Погрузитесь в мир киберпанка и сражайтесь за будущее человечества</p>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 neon-glow">
                    <Icon name="Play" size={20} className="mr-2" />
                    Играть сейчас
                  </Button>
                  <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                    <Icon name="Info" size={20} className="mr-2" />
                    Подробнее
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-orbitron font-bold mb-6">Недавние игры</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {games.map(game => (
                  <Card key={game.id} className="group hover:scale-105 transition-all duration-300 glass-effect border-border/50">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardHeader>
                      <CardTitle className="font-orbitron">{game.title}</CardTitle>
                      <CardDescription>{game.hours} часов сыграно</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{game.status}</span>
                          <span className="text-primary font-bold">{game.progress}%</span>
                        </div>
                        <Progress value={game.progress} className="h-2" />
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                        <Icon name="Play" size={16} className="mr-2" />
                        Запустить
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'library' && (
          <div className="space-y-8 animate-slide-up">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-orbitron font-bold">Моя библиотека</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Icon name="Filter" size={16} className="mr-2" />
                  Фильтры
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Search" size={16} className="mr-2" />
                  Поиск
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="glass-effect">
                <TabsTrigger value="all">Все игры</TabsTrigger>
                <TabsTrigger value="installed">Установлены</TabsTrigger>
                <TabsTrigger value="downloading">Загрузка</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {games.map(game => (
                    <Card key={game.id} className="group cursor-pointer hover:scale-105 transition-all glass-effect">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img src={game.image} alt={game.title} className="w-full h-56 object-cover" />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-primary/80 neon-glow">{game.status}</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="font-orbitron text-lg">{game.title}</CardTitle>
                        <CardDescription className="text-xs">{game.hours} часов</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeTab === 'community' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-slide-up">
            <div className="lg:col-span-2 space-y-6">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="font-orbitron flex items-center gap-2">
                    <Icon name="Trophy" className="text-primary" size={24} />
                    Достижения
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {achievements.map(achievement => (
                    <div key={achievement.id} className="flex items-center gap-4 p-4 rounded-lg glass-effect">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${achievement.unlocked ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                        <Icon name={achievement.icon as any} size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                      {achievement.unlocked && (
                        <Badge className="bg-primary/20 text-primary neon-glow">Получено</Badge>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="font-orbitron flex items-center gap-2">
                    <Icon name="Users" className="text-secondary" size={24} />
                    Друзья
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {friends.map(friend => (
                    <div key={friend.id} className="flex items-center gap-3 p-3 rounded-lg glass-effect hover:bg-muted/30 transition-colors">
                      <div className="relative">
                        <Avatar>
                          <AvatarFallback className="bg-primary/20 text-primary">
                            {friend.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-card ${friend.status === 'online' ? 'bg-green-500' : 'bg-muted'}`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{friend.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {friend.game || 'Не в сети'}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="font-orbitron">Профиль</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-16 h-16 border-2 border-primary">
                      <AvatarFallback className="bg-primary text-primary-foreground font-orbitron text-xl">GP</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">GamerPro</h4>
                      <p className="text-sm text-muted-foreground">Уровень 15</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>До следующего уровня</span>
                      <span className="text-primary font-bold">350/500 XP</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">24</p>
                      <p className="text-xs text-muted-foreground">Игр</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-secondary">342</p>
                      <p className="text-xs text-muted-foreground">Часов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'news' && (
          <div className="space-y-8 animate-slide-up">
            <h2 className="text-3xl font-orbitron font-bold">Игровые новости</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {news.map(item => (
                <Card key={item.id} className="group cursor-pointer hover:scale-105 transition-all glass-effect overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={games[item.id - 1].image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Icon name="Calendar" size={14} />
                      {item.date}
                    </div>
                    <CardTitle className="font-orbitron">{item.title}</CardTitle>
                    <CardDescription>{item.preview}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
