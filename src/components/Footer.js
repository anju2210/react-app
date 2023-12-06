const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer inset-x-0 bottom-0 fixed text-center text-sm font-medium font-poppins h-10 flex justify-center items-center bg-slate-900 text-white">
      <h1>© {year} Created by Anju </h1>
    </div>
  );
};

export default Footer;
