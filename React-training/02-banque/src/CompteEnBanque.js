import { useMemo } from "react";

function CompteEnBanque({ solde, monthlySpend, titulaire, soldeHistory }) {
	// useMemo will only re-calculate totalDepenses when solde or monthlySpend changes
	const totalDepenses = useMemo(
		() => solde - monthlySpend,
		[solde, monthlySpend]
	);

	// ArrayAvg is a function that takes an array as a parameter and returns the average of the array
	function ArrayAvg(myArray) {
		let i = 0, summ = 0, ArrayLen = myArray.length;
		while (i < ArrayLen) {
			summ = summ + myArray[i++];
		}
		return summ / ArrayLen;
	}

	// moyenneSoldePrecedents is the average of the totalDepenses
	const moyenneSoldePrecedents = ArrayAvg(soldeHistory);

	return (
		<div id="compte_en_banque">
			<h2>Le compte en banque</h2>
			<p>Solde : {solde}</p>
			<p>Dépenses mensuelles :{monthlySpend}</p>
			<p>Le titulaire : {titulaire}</p>
			<p>solde prévisionnelle: {totalDepenses}</p>
			<p>moyenne solde précédents: {moyenneSoldePrecedents}</p>
		</div>
	);
}

export default CompteEnBanque;
