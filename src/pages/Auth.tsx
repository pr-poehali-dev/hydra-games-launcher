import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendCode = async () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      alert('Введите корректный номер телефона');
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setCodeSent(true);
      setIsLoading(false);
    }, 1000);
  };

  const handleVerifyCode = async () => {
    if (!code || code.length !== 6) {
      alert('Введите 6-значный код');
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/launcher');
    }, 1000);
  };

  const handleYandexAuth = () => {
    alert('Интеграция с Яндекс ID. В продакшене здесь будет OAuth редирект');
    setTimeout(() => navigate('/launcher'), 500);
  };

  const handleVKAuth = () => {
    alert('Интеграция с VK ID. В продакшене здесь будет OAuth редирект');
    setTimeout(() => navigate('/launcher'), 500);
  };

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
    
    if (match) {
      let formatted = '';
      if (match[1]) formatted += '+' + match[1];
      if (match[2]) formatted += ' (' + match[2];
      if (match[3]) formatted += ') ' + match[3];
      if (match[4]) formatted += '-' + match[4];
      if (match[5]) formatted += '-' + match[5];
      return formatted;
    }
    return value;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <Card className="w-full max-w-md glass-effect border-border/50 relative z-10">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Gamepad2" className="text-white" size={32} />
            </div>
          </div>
          <CardTitle className="text-3xl font-orbitron">ZUROZIX</CardTitle>
          <CardDescription>Войдите, чтобы продолжить</CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="social" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="social">Соцсети</TabsTrigger>
              <TabsTrigger value="phone">Телефон</TabsTrigger>
            </TabsList>

            <TabsContent value="social" className="space-y-4">
              <Button
                variant="outline"
                className="w-full h-12 text-base hover:bg-red-500/10 hover:border-red-500 transition-all"
                onClick={handleYandexAuth}
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm3.9 16.5h-2.6v-6.8c0-.9-.3-1.4-1-1.4-.5 0-.8.3-1 .6-.1.1-.1.3-.1.5v7.1H8.6s0-11.5 0-12.7h2.6v1.8c.3-.5 1-1.3 2.4-1.3 1.8 0 3.1 1.2 3.1 3.7v8.5h.2z"/>
                </svg>
                Войти через Яндекс ID
              </Button>

              <Button
                variant="outline"
                className="w-full h-12 text-base hover:bg-blue-500/10 hover:border-blue-500 transition-all"
                onClick={handleVKAuth}
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.785 16.241s.288-.032.436-.194c.136-.149.132-.428.132-.428s-.02-1.304.574-1.496c.586-.19 1.338 1.26 2.134 1.817.605.423 1.064.33 1.064.33l2.137-.03s1.117-.071.587-.968c-.044-.073-.31-.664-1.594-1.88-1.344-1.275-1.164-1.068.455-3.271.987-1.343 1.382-2.163 1.259-2.514-.117-.334-.84-.246-.84-.246l-2.406.015s-.178-.025-.31.056c-.13.079-.213.263-.213.263s-.382 1.037-.891 1.92c-1.072 1.86-1.502 1.958-1.677 1.842-.409-.269-.307-1.081-.307-1.657 0-1.8.268-2.552-.522-2.748-.263-.065-.456-.108-1.128-.115-.863-.009-1.593.003-2.006.21-.275.138-.487.445-.358.463.16.022.522.1.714.365.248.342.239 1.11.239 1.11s.143 2.118-.333 2.38c-.327.18-.775-.187-1.738-1.87-.493-.863-.865-1.816-.865-1.816s-.072-.18-.2-.276c-.155-.117-.371-.154-.371-.154l-2.286.015s-.343.01-.469.162c-.112.135-.009.413-.009.413s1.796 4.28 3.829 6.438c1.863 1.977 3.976 1.848 3.976 1.848h.959z"/>
                </svg>
                Войти через VK ID
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-card text-muted-foreground">или</span>
                </div>
              </div>

              <Button
                variant="ghost"
                className="w-full"
                onClick={() => navigate('/')}
              >
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Вернуться на главную
              </Button>
            </TabsContent>

            <TabsContent value="phone" className="space-y-4">
              {!codeSent ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Номер телефона</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                      maxLength={18}
                      className="h-12 text-base"
                    />
                    <p className="text-xs text-muted-foreground">
                      Мы отправим SMS с кодом подтверждения
                    </p>
                  </div>

                  <Button
                    className="w-full h-12 bg-primary hover:bg-primary/90 neon-glow"
                    onClick={handleSendCode}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        <Icon name="MessageSquare" size={20} className="mr-2" />
                        Получить код
                      </>
                    )}
                  </Button>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="code">Код подтверждения</Label>
                    <Input
                      id="code"
                      type="text"
                      placeholder="000000"
                      value={code}
                      onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      maxLength={6}
                      className="h-12 text-base text-center text-2xl tracking-widest font-mono"
                    />
                    <p className="text-xs text-muted-foreground">
                      Код отправлен на {phoneNumber}
                    </p>
                  </div>

                  <Button
                    className="w-full h-12 bg-primary hover:bg-primary/90 neon-glow"
                    onClick={handleVerifyCode}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                        Проверка...
                      </>
                    ) : (
                      <>
                        <Icon name="Check" size={20} className="mr-2" />
                        Подтвердить
                      </>
                    )}
                  </Button>

                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => {
                      setCodeSent(false);
                      setCode('');
                    }}
                  >
                    <Icon name="ArrowLeft" size={16} className="mr-2" />
                    Изменить номер
                  </Button>

                  <Button
                    variant="ghost"
                    className="w-full text-primary"
                    onClick={handleSendCode}
                  >
                    <Icon name="RefreshCw" size={16} className="mr-2" />
                    Отправить код повторно
                  </Button>
                </>
              )}

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-card text-muted-foreground">или</span>
                </div>
              </div>

              <Button
                variant="ghost"
                className="w-full"
                onClick={() => navigate('/')}
              >
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Вернуться на главную
              </Button>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center text-xs text-muted-foreground">
            Входя в систему, вы соглашаетесь с{' '}
            <a href="#" className="text-primary hover:underline">
              условиями использования
            </a>{' '}
            и{' '}
            <a href="#" className="text-primary hover:underline">
              политикой конфиденциальности
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
