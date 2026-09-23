import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { BarChart, MoreHorizontal } from "lucide-react";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { Bar } from "recharts";

const data = [
  { name: "João Silva", email: "joao.silva@example.com", phone: "(11) 99999-9999" },
  { name: "Maria Oliveira", email: "maria.oliveira@example.com", phone: "(21) 99999-9999" },
  { name: "Carlos Santos", email: "carlos.santos@example.com", phone: "(31) 99999-9999" }
];

export default function Dashboard() {
     return(
        <>
            <div>
                <h1 className="text-2xl font-bold text-white">Bem-vindo ao Painel</h1>
            </div>
            <Table className="mt-4">
                <TableHeader>
                    <TableRow>
                        <TableCell className="text-left">Nome</TableCell>
                        <TableCell className="text-left">Email</TableCell>
                        <TableCell className="text-left">Telefone</TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow key={index} className="border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted ">
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.phone}</TableCell>
                            <TableCell className="right">z
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                        <span className="sr-only">Abrir menu</span>
                                        <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>
                                        Editar
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                        Mais informações
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="text-destructive">
                                        Excluir
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div>

            </div>
        </>
     )
}
