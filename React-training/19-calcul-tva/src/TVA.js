import { useState, useEffect } from 'react';

function useCalculTTC() {
  const [prixHT, setPrixHT] = useState('');
  const [TVA, setTVA] = useState('');
  const [TTC, setTTC] = useState('');

  useEffect(() => {
    const calcTTC = prixHT * (1 + TVA / 100);
    setTTC(calcTTC.toFixed(2));
  }, [TVA, prixHT]);

  return { prixHT, setPrixHT, TVA, setTVA, TTC };
}
export { useCalculTTC };


const { prixHT, setPrixHT, TVA, setTVA, TTC } = useCalculTTC();

<input
                type="text"
                value={prixHT}
                onChange={event => setPrixHT(event.target.value)}
                placeholder="Prix du produit"
                required
              />
              <div className="tvaPosition">
                <label htmlFor="TVA">TVA</label>
                <select
                  id="TVA"
                  value={TVA}
                  onChange={event => setTVA(event.target.value)}
                  required
                >
                  <option disabled>Choisir une TVA</option>
                  <option value="0">0%</option>
                  <option value="5.5">5.5%</option>
                  <option value="10">10%</option>
                  <option value="20">20%</option>
                </select>
              </div>
              <label htmlFor="TTC">TTC</label>
              <input
                type="text"
                id="TTC"
                value={TTC}
                placeholder="Clique sur Calculer pour savoir le prix avec TTC"
              />