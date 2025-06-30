import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainPage from "./MainPage";
import DonatePage from "./DonatePage";
import RulesPage from "./RulesPage";

const MinecraftSite = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">CaryCraft</h1>
          <p className="text-xl text-gray-600">Minecraft сервер</p>
        </header>

        <Tabs defaultValue="main" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="main" className="text-lg py-3">
              Главная
            </TabsTrigger>
            <TabsTrigger value="donate" className="text-lg py-3">
              Донат
            </TabsTrigger>
            <TabsTrigger value="rules" className="text-lg py-3">
              Правила
            </TabsTrigger>
          </TabsList>

          <TabsContent value="main">
            <MainPage />
          </TabsContent>

          <TabsContent value="donate">
            <DonatePage />
          </TabsContent>

          <TabsContent value="rules">
            <RulesPage />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MinecraftSite;
