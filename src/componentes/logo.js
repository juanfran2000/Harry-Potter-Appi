const Logo = ({ brand }) => {
  //Hacemos un componente de nav para mayor orden y damos estilos con BOOTSTAP
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/">
          {brand}
        </a>
      </div>
    </div>
  );
};

export default Logo;
