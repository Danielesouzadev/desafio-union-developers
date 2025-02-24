import { GridContainer } from "../GridContainer";
import Link from "next/link";
import Image from "next/image";

export function SectionHero() {
  return (
    <section className="text-left py-10">
      <GridContainer className="bg-[#1F1D2B] p-10 rounded-lg">
        {/* Criando um layout flexível */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Texto à esquerda */}
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold text-white mb-4">
              Ganhe{" "}
              <span className="bg-gradient-to-r from-[#0048FE] to-[#851D86] bg-clip-text text-transparent font-bold inline-block">
                experiência
              </span>{" "}
              como <br /> desenvolvedor júnior
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Descubra como o Union oferece um ambiente prático e imersivo para
              desenvolvedores juniors ganharem experiência de mercado, mesmo sem
              estar em uma empresa. Participe dessa experiência única e
              impulsione sua carreira como desenvolvedor!
            </p>

            {/* Botão de inscrição */}
            <Link href="/inscricao">
              <button className="bg-gradient-to-r from-[#0048FE] to-[#851D86] text-white font-bold py-3 px-6 rounded-lg transition-all hover:opacity-90">
                Quero participar
              </button>
            </Link>
          </div>
          {/* Imagem à direita */}
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <Image
              src="/logo2.svg"
              width={502}
              height={529}
              alt="Logo Union Developers"
              className="max-w-[300px] md:max-w-[500px] w-full"
            />
          </div>
        </div>
        <section className="text-left py-10 text-3xl text-white border-2 px-4 inline-block rounded-lg mb-10">
          <h2 className="text-3xl font-bold border-2 border-transparent bg-gradient-to-r from-[#0048FE] to-[#851D86] bg-clip-text text-transparent px-4 py-2 inline-block">
            Quem somos?
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            O Union é uma oportunidade única para desenvolvedores juniors, nossa
            missão é proporcionar a você um ambiente prático e imersivo,
            semelhante ao que você encontrará no mercado. Aqui, você vai
            vivenciar como é o dia a dia de um desenvolvedor de software,
            trabalhando lado a lado com líderes experientes e outros talentosos
            desenvolvedores que estão no mesmo caminho que você.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            No Union, você não apenas ganhará experiência, mas também estará
            pronto para enfrentar as demandas do mercado de tecnologia. Nossa
            abordagem holística enfatiza não apenas o conhecimento técnico, mas
            também habilidades interpessoais e práticas ágeis.
          </p>
        </section>
        <section className="text-left py-10 text-3xl text-white border-2 w-full inline-block rounded-lg">
          <h2 className="text-center font-bold border-2 border-transparent bg-gradient-to-r from-[#0048FE] to-[#851D86] bg-clip-text text-transparent px-4 py-2 block mx-auto">
            Pilares
          </h2>
          <p className=" text-lg text-center text-gray-300 text mb-6">
            Os pilares que sustentam o formato inovador de aprendizagem do Union
            é a junção de incríveis metodologias!
          </p>
        </section>
      </GridContainer>
    </section>
  );
}
