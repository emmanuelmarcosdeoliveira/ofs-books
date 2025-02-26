import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Check, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import wonam from "../assets/business.svg";
import logo from "../assets/logo.png";

export default function Home() {
  return (
    <main className="container mx-auto px-4 md:px-0">
      <section className=" mx-auto text-center pb-20 ">
        <nav className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              width={74}
              className=" bg-transparent "
              alt="Logo OFS | Book'S"
            />
            <span className="font-bold text-xl md:text-2xl">
              OFS | Book&apos;S
            </span>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <MenuIcon size={24} className="md:hidden cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-8 rounded-xl text-left p-4 border">
              <DropdownMenuSeparator />
              <div className=" flex flex-col gap-2">
                <DropdownMenuItem>Funcionamento</DropdownMenuItem>
                <DropdownMenuItem>Preço</DropdownMenuItem>
                <DropdownMenuItem>
                  <Button className=" rounded-xl" variant={"secondary"}>
                    Login
                  </Button>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="items-center gap-1 hidden md:flex">
            <Button variant={"link"}>Funcionamento</Button>
            <Button variant={"link"}>Preço</Button>
            <Button className=" rounded-xl" variant={"outline"}>
              Login
            </Button>
          </div>
        </nav>
        <h1 className="md:text-6xl text-2xl font-bold mt-8 md:mt-16">
          Simplifique seus Estudos
        </h1>
        <p className="text-gray-500 mt-4 md:text-xl max-w-3xl mx-auto">
          Deixe que nos fazemos a curadoria para você. Assine a nossa plataforma
          e Receba todos os meses um ebook novo de programação
        </p>
        <form className="md:mt-16 mt-10  " action="">
          <div className="block md:flex  md:gap-2 justify-center ">
            <Input
              className="max-w-sm border-gray-300 mb-6 md:mb-0  "
              type="text"
              placeholder="Insira seu e-mail aqui"
            />
            <Button size={"lg"} variant={"default"}>
              Assine Agora
            </Button>
          </div>
          <small className="text-gray-400 block mt-2">
            Comece a sua assinatura agora mesmo. Cancele quando quiser.
          </small>
        </form>
      </section>
      <section className="bg-white py-8 md:py-16 rounded-lg shadow-sm">
        <h2 className="md:text-4xl text-2xl text-center font-bold">
          Como funciona?
        </h2>
        <div className="flex justify-center items-center">
          <div>
            <Image src={wonam} alt="Branding" />
          </div>
          <ul className="md:text-2xl text-xs  text-muted-foreground space-y-6 flex-shrink-0">
            <li className="flex items-center gap-2">
              <span className=" text-green-500">
                {" "}
                <Check />
              </span>
              Acesse a um ebook por mês{" "}
            </li>
            <li className="flex items-center gap-2">
              <span className=" text-green-500">
                {" "}
                <Check />
              </span>
              Curadoria Especial{" "}
            </li>
            <li className="flex items-center gap-2">
              <span className=" text-green-500">
                {" "}
                <Check />
              </span>
              Cancele quando quiser{" "}
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="md:text-6xl text-2xl py-8 md:py-16 font-bold text-center py-16">
          Preço Simples e Transparente
        </h2>
        <p className="text-gray-500 mt-4 md:text-xl max-w-3xl mx-auto">
          Para que inúmeros planos?. Quando nos sabemos o que é melhor para
          você? Assine o nosso plano mensal{" "}
          <span className="">PRO Premium VIP</span> e garanta mensalmente um
          ebook novo de programação. E por menos de um café por dia{" "}
        </p>
        <Card className="w-[340px] mx-auto text-left mt-20 mb-16">
          <CardHeader>
            <CardTitle>Plano Pro Premium VIP</CardTitle>
            <CardDescription>
              Tudo que você precisa para seus estudos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="">
              <p className="text-4xl font-bold mb-8 mt-4">
                R$29,00
                <span className="font-normal text-muted-foreground text-sm">
                  {""} /mês
                </span>
              </p>
            </div>
            <ul>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" size={16} /> Acesse um ebook
                por mês
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" size={16} /> Curadoria
                Especial
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" size={16} /> Acesso ilimitado
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Check className="text-green-500" size={16} />
                Cancele quando quiser
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Assine Agora</Button>
          </CardFooter>
        </Card>
      </section>
      <section className="bg-white  rounded-md  shadow-sm">
        <h2 className="md:text-6xl text-2xl py-8 md:py-16 font-bold text-center py-16">
          {" "}
          Pronto Para Mudar a sua Vida
        </h2>
        <p className="text-gray-500 mt-4 text-xl text-center max-w-3xl mx-auto">
          Faça como milhares de outras pessoas. Assine nosso produto e tenha
          garantido seus estudos
        </p>
        <div className="flex justify-center">
          <Button className="mt-14  w-80">Assine Agora</Button>
        </div>
        <p className="text-xs mt-2 text-center text-muted-foreground pb-16">
          Comece a sua Assinatura agora mesmo, ou quando quiser
        </p>
      </section>

      <footer className="md:py-16 py-8 text-center flex justify-center items-center mb:mb-16 mb-8">
        <Image width={96} src={logo} alt="" />
        <p className=" text-sm md:text-md  hover:underline hover:text-gray-400">
          OFS | Book&apos;S 2025 &copy;{" "}
          <span className="block"> Alguns direitos reservados</span>
        </p>
      </footer>
    </main>
  );
}
