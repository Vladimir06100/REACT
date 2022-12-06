import { useMemo } from "react";
function CompteEnBanque({ solde, monthlySpend, titulaire, soldeHistory }) {
	const totalDepenses = useMemo(
		() => solde - monthlySpend,
		[solde, monthlySpend]
  );
 
function ArrayAvg(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
}
    return summ / ArrayLen;
}
  
  function
const moyenneSoldePrecedents = ArrayAvg(totalDepenses);

	return (
		<div id="compte_en_banque">
			<h2>Le compte en banque</h2>
			<p>Solde : {solde}</p>
			<p>Dépenses mensuelles :{monthlySpend}</p>
			<p>Le titulaire : {titulaire}</p>
			<p>solde prévisionnelle: {totalDepenses}</p>
		</div>
	);
}
export default CompteEnBanque;
