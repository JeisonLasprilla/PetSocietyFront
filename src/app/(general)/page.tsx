import { Metadata } from "next";
import Image from "next/image";
import Logo from "@/media/Logo.png";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import PawIcon from "@/media/pata.png";

export const metadata: Metadata = {
  title: "PetSociety",
  description: "PetSociety Pagina Principal",
}; 

export default function Home() { 

  const cards = dataCarousel.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-20">
      <div className="flex items-center justify-center p-1 m-1">
        <Image src={Logo} alt="Home" width={126} height={126} />
      </div>
      <div>
        <div className="w-full h-full py-20">
          <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            Todo lo que tu mascota necesita.
          </h2>
          <Carousel items={cards} />
        </div>
        <div className="w-full h-full py-5">
          <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </div>
  );

}

const dataCarousel = [
  {
    category: "Atención Medica General",
    title: "Revisiones periodicas de salud.",
    src: "https://images.unsplash.com/photo-1654895716780-b4664497420d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: 
    <div
      className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Lo mas importante es que tu mascota este sana.
        </span>{" "}
          Las revisiones médicas regulares son esenciales para mantener a tu mascota saludable.
          Con chequeos periódicos podemos detectar problemas de salud temprano y
          prevenir enfermedades graves. Tu mascota merece la mejor atención
          veterinaria para una vida larga y feliz.
      </p>
      <Image
        src="https://images.unsplash.com/photo-1548858806-e064cf9872c0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Mascota Saludable"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      <Link className="bg-blue-500 text-white text-lg px-4 py-2 rounded-md flex justify-center items-center mt-4" href="/contact">
        Agendar Cita
      </Link>
    </div>
    ,
  },
  {
    category: "Atencion Medica Especializada",
    title: "Cuidado de tu mascota en caso de emergencia.",
    src: "https://images.unsplash.com/photo-1654919638951-87361390c91a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
    <div
      className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          El cuidado de tu mascota en caso de emergencia es fundamental.
        </span>{" "}
          En PetSociety, nos esforzamos por brindar una atención médica de vanguardia,
          asegurando que tu mascota reciba el mejor cuidado en momentos de crisis.
      </p>
      <Image
        src="https://images.unsplash.com/photo-1518914781460-a3ada465edec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Mascota en caso de emergencia"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      <Link className="bg-blue-500 text-white text-lg px-4 py-2 rounded-md flex justify-center items-center mt-4" href="/contact">
        Agendar Cita
      </Link>
    </div>
    ,
  },
  {
    category: "Servicios de Higiene",
    title: "Higiene y cuidados para tu mascota.",
    src: "https://images.unsplash.com/photo-1656232501419-fa32ccdd911e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: 
    <div
      className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          La higiene es fundamental para el bienestar de tu mascota.
        </span>{" "}
          Mantener a tu mascota impecable no solo es estéticamente agradable,
          sino que también es esencial para su bienestar.
          La higiene adecuada previene infecciones y promueve una vida más saludable.
      </p>
      <Image
        src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Mascota en cuidados de higiene"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      <Link className="bg-blue-500 text-white text-lg px-4 py-2 rounded-md flex justify-center items-center mt-4" href="/contact">
        Agendar Cita
      </Link>
    </div>
    ,
  },
 
  {
    category: "Alimentacion",
    title: "Alimentacion adecuada para tu mascota.",
    src: "https://images.unsplash.com/photo-1571151596869-2663a84c1e41?q=80&w=1544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: 
    <div
      className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Una alimentación adecuada es esencial para el bienestar de tu mascota.
        </span>{" "}
          La alimentación adecuada no solo es esencial para mantener a tu mascota saludable,
          sino que también es fundamental para su desarrollo y crecimiento.
          Además, una alimentación adecuada puede prevenir enfermedades y prolongar la vida de tu mascota.
          En PetSociety, nos esforzamos por ofrecer los mejores productos y servicios de alimentación para tu mascota.
      </p>
      <Image
        src="https://images.unsplash.com/photo-1549297161-14f79605a74c?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Macbook mockup from Aceternity UI"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      <Link className="bg-blue-500 text-white text-lg px-4 py-2 rounded-md flex justify-center items-center mt-4" href="/contact">
        Consultar Servicios
      </Link>
    </div>
    ,
  },
  {
    category: "Juguetes y Accesorios",
    title: "Juguetes y accesorios para tu mascota.",
    src: "https://images.unsplash.com/photo-1619508111539-a0c4d7afa3d5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: 
    <div
      className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Los juguetes son esenciales para el desarrollo fisico y mental de tu mascota.
        </span>{" "}
          Los juguetes no solo son divertidos, sino que también son esenciales para el desarrollo de tu mascota.
          Además, los juguetes adecuados pueden prevenir problemas de conducta y promover un desarrollo físico y mental saludable.
      </p>
      <Image
        src="https://images.unsplash.com/photo-1643489313397-8f950f2f46c6?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Mascota con juguetes"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      <Link className="bg-blue-500 text-white text-lg px-4 py-2 rounded-md flex justify-center items-center mt-4" href="/contact">
        Consultar Servicios
      </Link>
    </div>
    ,
  },
  {
    category: "Medicamentos",
    title: "Medicamentos para tu mascota.",
    src: "https://images.unsplash.com/photo-1630960758496-05f3b99c2032?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: 
    <div
      className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Los medicamentos son esenciales para el cuidado de tu mascota.
        </span>{" "}
          Los medicamentos son esenciales para el cuidado de tu mascota.
          Además, los medicamentos adecuados pueden prevenir enfermedades y prolongar la vida de tu mascota.
          En PetSociety, nos esforzamos por ofrecer los mejores productos y servicios de medicamentos para tu mascota.
      </p>
      <Image
        src="https://images.unsplash.com/photo-1612195665612-30c359370759?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Medicamentos para mascota"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
    </div>
    ,
  },
];

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <Image
        src="https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Medicamentos para mascota"
        height="500"
        width="500"
        className="h-full w-full object-cover"
        />
  </div>
);

const SkeletonTwo = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <Image
        src="https://images.unsplash.com/photo-1535294435445-d7249524ef2e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Medicamentos para mascota"
        height="500"
        width="500"
        className="h-full w-full object-cover"
        />
  </div>
);

const SkeletonThree = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <Image
        src="https://images.unsplash.com/photo-1714068691225-9cebcd7bc9aa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Medicamentos para mascota"
        height="500"
        width="500"
        className="h-full w-full object-cover"
        />
  </div>
);

const SkeletonFour = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <Image
        src="https://images.unsplash.com/photo-1525983360072-2ebda055ba40?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Medicamentos para mascota"
        height="500"
        width="500"
        className="h-full w-full object-cover"
        />
  </div>
);

const items = [
  {
    title: "Consulte por los mejores alimentos para tu mascota.",
    description: "Conozca los mejores alimentos que puede darle a su mascota segun la edad y la raza.",
    header: <Skeleton />, 
    className: "md:col-span-2",
    icon: <Image src={PawIcon} alt="Paw" width={24} height={24} className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "¿Sabes que tipo de juguetes son los mas adecuados para tu mascota?",
    description: "Conozca los mejores juguetes que puede darle a su mascota y como estos pueden ayudar a desarrollar habilidades y relaciones sociales.",
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <Image src={PawIcon} alt="Paw" width={24} height={24} className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "¿Medicamentos naturales o convencionales?",
    description: "Conozca los mejores medicamentos que puede darle a su mascota y como estos pueden ayudar a mejorar su calidad de vida.",
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <Image src={PawIcon} alt="Paw" width={24} height={24} className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Conozca los mejores cuidados para tu mascota.",
    description: "Conozca los mejores cuidados que puede darle a su mascota desde su hogar para mantener una vida saludable y feliz.",
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <Image src={PawIcon} alt="Paw" width={24} height={24} className="h-4 w-4 text-neutral-500" />,
  },
];