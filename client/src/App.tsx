import React from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/providers/theme-provider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Chatbot from "@/components/Chatbot";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <QueryClientProvider client={queryClient}>
        <ScrollProgress />
        <Navbar />
        <Router />
        <Chatbot />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;