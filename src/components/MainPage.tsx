import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const MainPage = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">
          Добро пожаловать на CaryCraft
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Полу-RP сервер с уникальной механикой потери сердец после смерти.
          Погрузитесь в атмосферу выживания, где каждое решение имеет значение.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center">
            <Icon
              name="Heart"
              size={48}
              className="mx-auto mb-4 text-red-500"
            />
            <CardTitle className="text-2xl">Система сердец</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600">
              Каждая смерть стоит вам сердца. Будьте осторожны — ваша жизнь в
              ваших руках!
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center">
            <Icon
              name="Users"
              size={48}
              className="mx-auto mb-4 text-blue-500"
            />
            <CardTitle className="text-2xl">Полу-RP</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600">
              Погрузитесь в ролевую игру с другими игроками. Создавайте истории
              и развивайте своего персонажа.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">Начать играть</h3>
        <p className="text-gray-600">
          Для входа на сервер необходимо приобрести проходку в разделе "Донат"
        </p>
      </div>
    </div>
  );
};

export default MainPage;
