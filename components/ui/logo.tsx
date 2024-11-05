import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <Image
        src="/images/logoimobi.svg"
        alt="Logo"
        width={120} // Defina a largura desejada
        height={120} // Defina a altura desejada
        className="object-contain"
      />
    </Link>
  );
}
