import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

const DonatePage = () => {
  const [heartsCount, setHeartsCount] = useState([1]);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Донат</h2>
        <p className="text-xl text-gray-600">
          Поддержите сервер и получите дополнительные возможности
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Проходка на сервер */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center">
            <Icon
              name="Key"
              size={48}
              className="mx-auto mb-4 text-yellow-500"
            />
            <CardTitle className="text-2xl">Проходка на сервер</CardTitle>
            <div className="flex justify-center">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                50 ₽
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <p className="text-gray-600">
                Получите доступ к серверу CaryCraft. Необходимо для входа в
                игру.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Доступ к серверу</li>
                <li>• Стартовые 10 сердец</li>
                <li>• Базовые привилегии</li>
              </ul>
            </div>
            <Button className="w-full" size="lg">
              <Icon name="CreditCard" size={20} className="mr-2" />
              Купить проходку
            </Button>
          </CardContent>
        </Card>

        {/* Покупка сердец */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center">
            <Icon
              name="Heart"
              size={48}
              className="mx-auto mb-4 text-red-500"
            />
            <CardTitle className="text-2xl">Дополнительные сердца</CardTitle>
            <div className="flex justify-center">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                10 ₽ за сердце
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <p className="text-gray-600 text-center">
                Восстановите потерянные сердца или получите дополнительные
              </p>

              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">
                    Количество сердец: {heartsCount[0]}
                  </p>
                  <div className="flex justify-center items-center space-x-2 mb-4">
                    {Array.from({ length: heartsCount[0] }).map((_, i) => (
                      <Icon
                        key={i}
                        name="Heart"
                        size={24}
                        className="text-red-500"
                      />
                    ))}
                  </div>
                </div>

                <Slider
                  value={heartsCount}
                  onValueChange={setHeartsCount}
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />

                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">
                    {heartsCount[0] * 10} ₽
                  </p>
                </div>
              </div>
            </div>

            <Button className="w-full" size="lg">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Купить {heartsCount[0]}{" "}
              {heartsCount[0] === 1 ? "сердце" : "сердца"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DonatePage;
