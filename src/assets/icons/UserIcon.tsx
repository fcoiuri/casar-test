const UserSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="20"
      height="25"
      viewBox="0 0 20 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9692 20.3594C19.9692 21.4948 19.6447 22.4688 18.9957 23.2812C18.3466 24.0938 17.5652 24.5 16.6513 24.5H3.34865C2.43481 24.5 1.65337 24.0938 1.00433 23.2812C0.355289 22.4688 0.0307693 21.4948 0.0307693 20.3594C0.0307693 19.474 0.074904 18.638 0.163173 17.8516C0.251442 17.0651 0.415 16.2734 0.653846 15.4766C0.892692 14.6797 1.19644 13.9974 1.5651 13.4297C1.93375 12.862 2.42183 12.3984 3.02933 12.0391C3.63683 11.6797 4.33519 11.5 5.12442 11.5C6.48481 12.8333 8.11 13.5 10 13.5C11.89 13.5 13.5152 12.8333 14.8756 11.5C15.6648 11.5 16.3632 11.6797 16.9707 12.0391C17.5782 12.3984 18.0662 12.862 18.4349 13.4297C18.8036 13.9974 19.1073 14.6797 19.3462 15.4766C19.585 16.2734 19.7486 17.0651 19.8368 17.8516C19.9251 18.638 19.9692 19.474 19.9692 20.3594ZM15.9815 6.5C15.9815 8.15625 15.3974 9.57031 14.2291 10.7422C13.0609 11.9141 11.6512 12.5 10 12.5C8.34885 12.5 6.93913 11.9141 5.77087 10.7422C4.6026 9.57031 4.01846 8.15625 4.01846 6.5C4.01846 4.84375 4.6026 3.42969 5.77087 2.25781C6.93913 1.08594 8.34885 0.5 10 0.5C11.6512 0.5 13.0609 1.08594 14.2291 2.25781C15.3974 3.42969 15.9815 4.84375 15.9815 6.5Z"
        fill="white"
      />
    </svg>
  );
};

export default UserSVG;
