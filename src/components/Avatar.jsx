import { accent, rafa1 } from "../assets";

const Avatar = () => {
  return (
    <div className=" w-full flex items-center justify-end">
      <div className="relative h-[300px] w-[300px] lg:h-[400px] lg:w-[400px]">
        <img
          src={accent}
          className="object-contain z-0"
          width={400}
          height={400}
          alt="background"
        />
        <div className="absolute z-10 scale-75 lg:scale-100 top-[30px] right-[22px] lg:top-[88px] lg:right-[76px] max-w-[17rem] rounded-full overflow-hidden">
          <img
            src={rafa1}
            className="lg:w-full block"
            width={360}
            height={360}
            alt="rafa"
          />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
