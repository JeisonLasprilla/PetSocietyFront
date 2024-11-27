import Link from "next/link";
import InstagramIcon from "@/media/instagram.png";
import YoutubeIcon from "@/media/youtube.png";
import TwitterAltIcon from "@/media/twitter-alt.png";
import LinkedinIcon from "@/media/linkedin.png";
import Image from "next/image";

const footerItems = [
    {name:'Nuestras Practicas', path: '/practices'},
    {name:'Nuestros Servicios', path: '/'},
    {name:'Acerca de Nosotros', path: '/about'},
    {name:'Contactanos', path: '/contact'},
    {name:'Politica de Privacidad', path: '/privacy'}
]

const locations = [
    {name: 'Bogota', path: 'https://maps.app.goo.gl/QDcVPmWzE31HsdGT7'},
    {name: 'Medellin', path: 'https://maps.app.goo.gl/REKEmmND8REKNght5'},
    {name: 'Cali', path: 'https://maps.app.goo.gl/3QkKshoP8UCwY1Y36'}
]

export const Footer = () => {
    return (
      <footer className="flex bg-white bg-opacity-80 border-t-2 border-gray-300">
        <div className="flex flex-col">
            <p className="p-2 m-2 text-black text-sm">Siguenos en nuestras redes sociales</p>
            <div className="flex flex-row">
                <Link href="https://www.instagram.com" className="p-2 m-2 text-black">
                    <Image src={InstagramIcon} alt="Instagram" width={24} height={24} />
                </Link>
                <Link href="https://www.youtube.com" className="p-2 m-2 text-black">
                    <Image src={YoutubeIcon} alt="Youtube" width={24} height={24} />
                </Link>
                <Link href="https://www.twitter.com" className="p-2 m-2 text-black">
                    <Image src={TwitterAltIcon} alt="Twitter" width={24} height={24} />
                </Link>
                <Link href="https://www.linkedin.com" className="p-2 m-2 text-black">
                    <Image src={LinkedinIcon} alt="Linkedin" width={24} height={24} />
                </Link>
            </div>
        </div>

        <div className="border-r-2 border-gray-300 rounded mt-6 mb-6 mx-4"></div>

        <div className="flex flex-col">
            {
                footerItems.map(item=>(
                    <Link href={item.path} key={item.path} className="p-1 m-1 text-black text-sm">
                        {item.name}
                    </Link>
                ))
            }
        </div>

        <div className="border-r-2 border-gray-300 rounded mt-6 mb-6 mx-4"></div>

        <div className="flex flex-col">
            <p className="p-2 m-2 text-black text-sm">Nuestras Ubicaciones</p>
            {
                locations.map(item=>(
                    <Link href={item.path} key={item.path} className="p-1 m-1 text-black text-sm">
                        {item.name}
                    </Link>
                ))
            }
        </div>

        <div className="flex flex-col flex-1 items-end">
            <p className="p-2 m-2 text-black text-sm">Copyright © 2024 - Todos los derechos reservados</p>
        </div>
      </footer>
    );
}