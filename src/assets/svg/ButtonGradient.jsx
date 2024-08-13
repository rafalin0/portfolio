const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#5A56FD" />
          <stop offset="50%" stopColor="#927DF1" />
          <stop offset="100%" stopColor="#AF91EB" />
        </linearGradient>
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#E8D583" />
          <stop offset="25%" stopColor="#FEC8EC" />
          <stop offset="50%" stopColor="#B0E2EC" />
          <stop offset="75%" stopColor="#AFA4ED" />
          <stop offset="100%" stopColor="#AF91EB" />
        </linearGradient>
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#C4AEFE" />
          <stop offset="15%" stopColor="#FDDCFE" />
          <stop offset="30%" stopColor="#FFFBFF" />
          <stop offset="50%" stopColor="#87EFFE" />
          <stop offset="100%" stopColor="#5A56FD" />
        </linearGradient>
        <linearGradient
          id="btn-right"
          x1="14.635%"
          x2="14.635%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#CDB6FD" />
          <stop offset="50%" stopColor="#F3BEF4" />
          <stop offset="100%" stopColor="#E8D583" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;
