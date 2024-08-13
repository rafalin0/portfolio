import codeDecor from "../assets/svg/CodeDecor";

const Section = ({
  className,
  id,
  customPaddings,
  children,
  decorPosition,
  grid,
}) => {
  return (
    <div
      id={id}
      className={`
        relative
        min-h-screen
        snap-mandatory
        snap-start
        ${customPaddings || `py-10 lg:py-16 xl:py-20 `}
        ${className || ""}`}
    >
      {grid && (
        <div className="absolute h-full w-full z-0">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#141123_1px,transparent_1px),linear-gradient(to_bottom,#141123_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_700%_70%_at_50%_0%,#000_60%,transparent_100%)]"></div>
        </div>
      )}

      {children}

      {decorPosition && codeDecor(decorPosition)}
    </div>
  );
};

export default Section;
