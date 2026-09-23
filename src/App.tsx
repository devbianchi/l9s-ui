import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './components/DefaultLayout'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/layout'
import { ThemeProvider } from './components/theme-provider'
import { ThemeToggle } from './components/theme-toggle'

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full p-4">
          <header className="flex items-center justify-between border-b pb-4 mb-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <h1 className="text-xl font-bold">Meu Painel</h1>
            </div>
            {/* O botão de modo escuro posicionado no topo direito */}
            <ThemeToggle />
          </header>
          <div>
            {/* Rotas do aplicativo */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/clients" element={<Clients />} />
            </Routes>
          </div>
        </main>
      </SidebarProvider>
    </ThemeProvider>
  )
}

