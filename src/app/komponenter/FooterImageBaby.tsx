import Image from "next/image";

export default function FooterImageBaby() {
  return (
    <>
      <div className="relative w-screen h-[50vh]">
        <Image
          src="/close-up_babybilder_familiebilder_vestfold_telemark.jpg"
          fill
          sizes="50vw"
          className="object-cover px-20 mt-20 pb-10"
          alt="a close up of a mother holding her babies feet."
        ></Image>
      </div>
    </>
  );
}
