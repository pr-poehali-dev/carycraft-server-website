import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const RulesPage = () => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const rules = [
    {
      category: "Общие правила",
      icon: "Shield",
      color: "bg-blue-500",
      subcategories: [
        {
          title: "Уважение к игрокам",
          rules: [
            "Запрещены оскорбления и грубость",
            "Не используйте мат и ненормативную лексику",
            "Относитесь к другим так, как хотели бы, чтобы относились к вам",
          ],
        },
        {
          title: "Честная игра",
          rules: [
            "Запрещено использование читов и модов",
            "Запрещены дюпы и баги",
            "Играйте честно и по правилам",
          ],
        },
      ],
    },
    {
      category: "PvP и сражения",
      icon: "Sword",
      color: "bg-red-500",
      subcategories: [
        {
          title: "Правила PvP",
          rules: [
            "PvP разрешен везде, кроме спавна",
            "Запрещено убийство новичков в первые 24 часа",
            "После смерти вы теряете одно сердце навсегда",
          ],
        },
        {
          title: "Система сердец",
          rules: [
            "У каждого игрока максимум 10 сердец",
            "При достижении 0 сердец - бан на 24 часа",
            "Сердца можно восстановить только через донат",
          ],
        },
      ],
    },
    {
      category: "Строительство",
      icon: "Hammer",
      color: "bg-green-500",
      subcategories: [
        {
          title: "Правила строительства",
          rules: [
            "Стройте красиво и аккуратно",
            "Не загрязняйте территорию",
            "Не стройте слишком близко к чужим постройкам",
          ],
        },
        {
          title: "Гриферство",
          rules: [
            "Запрещено ломать чужие постройки",
            "Запрещено воровать из чужих сундуков",
            "За гриферство - бан без предупреждения",
          ],
        },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Правила сервера</h2>
        <p className="text-xl text-gray-600">
          Ознакомьтесь с правилами для комфортной игры на CaryCraft
        </p>
      </div>

      <div className="space-y-6">
        {rules.map((category) => (
          <Card key={category.category} className="border-0 shadow-lg">
            <Collapsible
              open={openCategories.includes(category.category)}
              onOpenChange={() => toggleCategory(category.category)}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full ${category.color}`}>
                        <Icon
                          name={category.icon as any}
                          size={24}
                          className="text-white"
                        />
                      </div>
                      <CardTitle className="text-2xl">
                        {category.category}
                      </CardTitle>
                    </div>
                    <Icon
                      name={
                        openCategories.includes(category.category)
                          ? "ChevronUp"
                          : "ChevronDown"
                      }
                      size={24}
                      className="text-gray-400"
                    />
                  </div>
                </CardHeader>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <CardContent className="pt-0">
                  <div className="space-y-6">
                    {category.subcategories.map((subcategory, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-sm">
                            {subcategory.title}
                          </Badge>
                        </div>
                        <ul className="space-y-2 ml-4">
                          {subcategory.rules.map((rule, ruleIndex) => (
                            <li
                              key={ruleIndex}
                              className="flex items-start space-x-2"
                            >
                              <Icon
                                name="Check"
                                size={16}
                                className="text-green-500 mt-0.5 flex-shrink-0"
                              />
                              <span className="text-gray-700">{rule}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-4 bg-gray-50 p-6 rounded-lg">
        <Icon
          name="AlertTriangle"
          size={32}
          className="mx-auto text-yellow-500"
        />
        <h3 className="text-xl font-bold text-gray-900">Важно!</h3>
        <p className="text-gray-600">
          Незнание правил не освобождает от ответственности. За нарушение правил
          предусмотрены варны, муты и баны.
        </p>
      </div>
    </div>
  );
};

export default RulesPage;
