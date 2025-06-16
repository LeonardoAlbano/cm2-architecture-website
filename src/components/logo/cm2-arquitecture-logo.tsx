import Image from "next/image";
import Link from "next/link";

export default function Cm2ArquitectureLogo() {
  return (
    <Link href="/">
      <Image
        src="/cm2-arquitecture-logo.png"
        width={30}
        height={30}
        alt="logo web site"
      />
    </Link>
  );
}
