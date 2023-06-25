import './styles.css';

function Stacking() {
  return (
    <div className="stacking-container">
      <div className="phone">
        <div className="layer layer-1">
          <input type="checkbox" />
        </div>
        <div className="layer layer-2"></div>
        <div className="layer layer-3"></div>
        <div className="layer layer-4"></div>
        <div className="layer layer-5"></div>
        <div className="layer layer-6"></div>
        <div className="layer layer-7"></div>
        <div className="layer layer-8"></div>
        <div className="layer layer-9"></div>
        <div className="layer layer-10"></div>
        <h3 className='score'>Score: </h3>
      </div>
    </div>
  );
}

export { Stacking };
