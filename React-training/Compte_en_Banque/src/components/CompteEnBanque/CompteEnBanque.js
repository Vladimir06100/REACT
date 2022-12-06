import { useMemo } from "react";

function ArrayAvg(myArray) {
    let summ = 0;
    myArray.forEach(element => summ += element)
    return summ / myArray.length;
}

// Réexpliquer la décomposition des props
function CompteEnBanque({ solde, monthlySpend, titulaire, soldeHistory }) {
  const soldePreview = useMemo(
    () => solde - monthlySpend,
    [solde, monthlySpend]
  );

  const moyenneSoldPrecedents = useMemo(() => ArrayAvg(soldeHistory), [soldeHistory]);

  return (
    <div id="compte_en_banque">
      <h2>Le compte en banque</h2>
      <p>Solde: {solde}</p>
      <p>Dépenses mensuelles: {monthlySpend}</p>
      <p>Solde prévisionnel : {soldePreview}</p>
      <p>Moyenne de mes soldes précédents: {moyenneSoldPrecedents}</p>
      <p>Le titulaire: {titulaire}</p>
    </div>
  );
}

export default CompteEnBanque;
