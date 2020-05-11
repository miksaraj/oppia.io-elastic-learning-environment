export const state = () => ({
	list: [
		{
			id: 1,
			chapterId: 1,
			header: 'Opiskeluohjeet',
			description: 'Miten saan kurssilta eniten irti?',
			assignments: 1,
			lead: 'Näin saat kurssilta eniten irti'
		},
		{
			id: 2,
			chapterId: 1,
			header: 'Arkitieto ja psykologinen tieto',
			description:
				'Psykologinen tieto perustuu tieteelliseen tutkimukseen',
			assignments: 1
		},
		{
			id: 3,
			chapterId: 2,
			header: 'Aivot ja hermostuminen',
			description: 'Mitä tapahtuu, jos osa aivoista tuhoutuu?',
			assignments: 1
		},
		{
			id: 4,
			chapterId: 2,
			header: 'Luontainen temperamentti',
			description: 'Kylmäpäinen kotka ja tunteellinen elefantti',
			assignments: 1
		},
		{
			id: 5,
			chapterId: 2,
			header: 'Ympäristö muokkaa aivoja',
			description: 'Aivot ovat supermuovautuva elin',
			assignments: 1
		},
		{
			id: 6,
			chapterId: 3,
			header: 'Ehdollistuminen',
			description:
				'Kuolaavat koirat ja tanssivat kyyhkyset. Miten Pikku Albert saatiin pelkäämään pupua?',
			assignments: 1
		},
		{
			id: 7,
			chapterId: 3,
			header: 'Behaviorismi',
			description:
				'Antakaa minulle tusina lapsia ja minä teen yhdestä lääkärin, yhdestä juristin ja yhdestä taidemaalarin',
			assignments: 1
		},
		{
			id: 8,
			chapterId: 3,
			header: 'Mallioppiminen',
			description: 'Mitä aikuinen edellä, sitä lapsi perässä.',
			assignments: 8
		},
		{
			id: 9,
			chapterId: 4,
			header: 'Sisäiset mallit',
			description:
				'Py35yT eh82 lu36m22n t2t2 t7k31ä v21kk2 t2m2 on k13j095355u s3k2v23ti',
			assignments: 1
		},
		{
			id: 10,
			chapterId: 4,
			header: 'Muisti',
			description: 'Maaginen numero 7 +- 2',
			assignments: 1
		},
		{
			id: 11,
			chapterId: 4,
			header: 'Syväoppiminen',
			description: 'Virtahepo vie tietoa kampukselle',
			assignments: 1
		},
		{
			id: 12,
			chapterId: 5,
			header: 'Psykodynaaminen ja Freud',
			description: 'Ihmisen tiedostamaton mieli',
			assignments: 1
		},
		{
			id: 13,
			chapterId: 5,
			header: 'Positiivinen psykologia',
			description: 'Usko ihmisen voimavaroihin',
			assignments: 1
		},
		{
			id: 14,
			chapterId: 5,
			header: 'Attribuutiot',
			description: 'Tulkintoja itsestä ja muista',
			assignments: 1
		},

		{
			id: 15,
			chapterId: 6,
			header: 'Ryhmä ja roolit',
			description: 'Millaiseksi ihminen muuttuu vankilassa?',
			assignments: 1
		},
		{
			id: 16,
			chapterId: 6,
			header: 'Ryhmäpaine ja tottelevaisuus',
			description: 'Joukossa tyhmyys tiivistyy',
			assignments: 1
		},
		{
			id: 17,
			chapterId: 6,
			header: 'Stereotypiat ja asenteet',
			description: 'Sinisilmäiset ja ruskeasilmäiset',
			assignments: 1
		},
		{
			id: 18,
			chapterId: 7,
			header: 'Psykologinen tutkimus',
			description: 'Miten tehdään psykologista tutkimusta?',
			assignments: 1,
			lead: 'Takaisin kotisivulle',
			btnLink: '/'
		}
	]
})

export const getters = {
	sectionsByChapter: state => id => {
		return state.list.filter(item => item.chapterId === id)
	},
	sectionById: state => id => {
		return state.list.find(item => item.id === id)
	}
}
