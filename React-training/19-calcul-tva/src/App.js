import './App.css';

function App() {

  // create new function calcul TTC 
  // get value HT and TVA
  // calcul TTC
  // display TTC

  function calculTTC() {
    // get value HT and TVA
    const prixHT = document.querySelector('#prixHT').value;
    const TVA = document.querySelector('#TVA').value;
    // calcul TTC
    const calcTTC = prixHT * (1 + TVA / 100);
    const TTC = calcTTC.toFixed(2);
    // display TTC
    document.querySelector('#TTC').value = TTC;
  }

  return (
    // return new version with function calculTTC
    <div className="App">
      <h1>Calcul TVA</h1>
      <div className="form">
        <div className="form-group">
          <label htmlFor="prixHT">Prix HT</label>
          <input type="number" id="prixHT" />
        </div>

        {/* select news values TVA with 4button value of 0% 5.5% 10% 20%  */}
      {/*  if i select one value input ttc mise a jour automatique */}
      
        <div className="form-group">
          <label htmlFor="TVA">TVA</label>
          <select id="TVA">
            <option value="0">0%</option>
            <option value="5.5">5.5%</option>
            <option value="10">10%</option>
            <option value="20">20%</option>
          </select>
        </div>

        {/*  mise a jour de ETAT input TCC with new value */}
        {/*  if i select one value input ttc mise a jour automatique */}

        <div className="form-group">
          <label htmlFor="TTC">TTC</label>
          <input type="number" id="TTC" />
        </div>

        <button onClick={calculTTC}>Calculer</button>
      </div>
    </div>

  );
}

export default App;
