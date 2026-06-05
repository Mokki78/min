import Image from "next/image";

export default function PanoImgBaby() {
  return (
    <>
      <div className="relative w-screen h-[50vh]">
        <Image
          src="/baby-session-19.jpg"
          alt="familie på tre fotografert i fotostudio med hvit bakgrunn"
          fill
          sizes="100vw"
          className="object-cover"
        ></Image>
      </div>
    </>
  );
}
