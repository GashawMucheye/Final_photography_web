const ListMenu = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <a
        href="#"
        className="hover:text-blue-700 transition-shadow  mt-2 md:mt-1 
tracking-widest"
      >
        Home
      </a>
      <a
        href="#"
        className="hover:text-blue-700 transition-shadow mt-1 tracking-widest"
      >
        Contact
      </a>
      <a
        href="#"
        className="hover:text-blue-700 transition-shadow mt-1 tracking-widest"
      >
        About Us
      </a>
      <a
        href="#"
        className="hover:text-blue-700 transition-shadow mt-1 tracking-widest"
      >
        Gallery
      </a>
    </div>
  );
};

export default ListMenu;
