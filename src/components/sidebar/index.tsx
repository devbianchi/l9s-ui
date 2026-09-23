import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Bolt, Home, LogOut, NotepadText, Package, Settings } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
export default function Sidebar() {
    return (
        <>
        <Card className="my-4 py-0 absolute left-0 right-0 bottom-0 z-30 md:hidden w-90 h-20 rounded-full flex items-center justify-center mx-auto bg-background/90 backdrop-blur-md border border-muted-foreground/60">
            <div className="grid grid-cols-3 gap-2">
                <Button
                    className="flex-col text-muted-foreground transition-all hover:bg-sidebar-primary hover:scale-110 hover:text-sidebar-primary-foreground py-10 hover:px-10 px-6 rounded-full hover:shadow-lg hover:shadow-sidebar-primary/50"
                    variant={"ghost"}
                    >
                        <NotepadText />
                        <span className="text-shadow-2xs">Entrevista</span>
                </Button>

                <Button
                    className="flex-col text-muted-foreground transition-all hover:bg-sidebar-primary hover:scale-110 hover:text-sidebar-primary-foreground py-10 hover:px-10 px-6 rounded-full hover:shadow-lg hover:shadow-sidebar-primary/50"
                    variant={"ghost"}
                    >
                        <Home className="" />
                        <span className="text-shadow-2xs">Home</span>
                </Button>

                <Button
                    className="flex-col text-muted-foreground transition-all hover:bg-sidebar-primary hover:scale-110 hover:text-sidebar-primary-foreground py-10 hover:px-10 px-6 rounded-full hover:shadow-lg hover:shadow-sidebar-primary/50"
                    variant={"ghost"}
                    >
                        <Bolt />
                        <span className="text-shadow-2xs">Ajustes</span>
                </Button>

            </div>
        </Card>

        <nav className="fixed left-0 w-15 py-2 hidden md:flex border-r border-sidebar-primary/20 min-h-full flex-col items-center justify-start gap-4 top-1/2 -translate-y-1/2 z-30">
            <Card className="flex flex-col items-center justify-center gap-1 w-12 h-12 rounded-full bg-sidebar-primary text-sidebar-primary-foreground shadow-lg shadow-sidebar-primary/50">
                <Package/>
            </Card>

            <div>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button
                                variant="ghost"
                                className="rounded-full hover:shadow-lg hover:shadow-sidebar-primary/50 transition-all hover:scale-110 hover:bg-sidebar-primary hover:text-sidebar-primary-foreground active:scale-90 active:shadow-none active:bg-sidebar-primary/80 active:text-sidebar-primary-foreground">
                                    <Home />
                                    <span className="sr-only">Botão de Menu inicial</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="scale-110 mx-1">
                            <p>Home</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

            </div>

            <div>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button
                                variant="ghost"
                                className="rounded-full hover:shadow-lg hover:shadow-sidebar-primary/50 transition-all hover:scale-110 hover:bg-sidebar-primary hover:text-sidebar-primary-foreground active:scale-90 active:shadow-none active:bg-sidebar-primary/80 active:text-sidebar-primary-foreground">
                                    <NotepadText />
                                    <span className="sr-only">Botão de Entrevista</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="scale-110 mx-1">
                            <p>Entrevista</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

            </div>

            <div>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button
                                variant="ghost"
                                className="rounded-full hover:shadow-lg hover:shadow-sidebar-primary/50 transition-all hover:scale-110 hover:bg-sidebar-primary hover:text-sidebar-primary-foreground active:scale-90 active:shadow-none active:bg-sidebar-primary/80 active:text-sidebar-primary-foreground">
                                    <Bolt />
                                    <span className="sr-only">Botão de Ajustes</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="scale-110 mx-1">
                            <p>Ajustes</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

            </div>

            <nav>
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center mb-4">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Button
                                    variant="destructive">
                                        <LogOut />
                                        <span className="sr-only">Botão de Sair</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right" className="scale-110 mx-1 text-destructive">
                                <p>Sair</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </nav>
        </nav>
        </>
    )
};
