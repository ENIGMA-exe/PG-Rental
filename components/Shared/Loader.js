const Loader = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className="preloader">
          <img src="../images/Zestos_logo.svg" alt="Zestos logo"/>

          {/* <div id="cupcake" className="box">
            <span className="letter box">Z</span>
            <span className="letter box">e</span>
            <span className="letter box">s</span>
            <span className="letter box">t</span>

            <div className="cupcakeCircle box">
              <div className="cupcakeInner box">
                <div className="cupcakeCore box"></div>
              </div>
            </div>
            <span className="letter box">s</span>
          </div> */}
        </div>
      )}
    </>
  );
};

export default Loader;
