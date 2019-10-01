var locations = [
        { d: 0.00, geo: { lat: 41.834972, lng: 12.4696 }, name: 'Via della Previdenza Sociale 20' },
        { d: 0.01, geo: { lat: 41.8348, lng: 12.469856 }, name: 'Via della Previdenza Sociale' },
        { d: 0.21, geo: { lat: 41.8329444444444, lng: 12.46975 }, name: 'Via Colombo 570' },
        { d: 0.27, geo: { lat: 41.83625, lng: 12.4670277777778 }, name: 'VL. CIVILTA\' DEL LAVORO, 4' },
        { d: 0.32, geo: { lat: 41.836297, lng: 12.466288 }, name: 'Viale Civiltà  del Lavoro, 10' },
        { d: 0.46, geo: { lat: 41.8333055555556, lng: 12.4645277777778 }, name: 'V. ELETTRONICA, 3' },
        { d: 0.52, geo: { lat: 41.839003, lng: 12.466716 }, name: 'Viale del Turismo, 30/32' },
        { d: 0.78, geo: { lat: 41.831415, lng: 12.477887 }, name: 'Piazza Giovanni Agnelli, 10' },
        { d: 1.19, geo: { lat: 41.8246666666667, lng: 12.4739166666667 }, name: 'VL. AFRICA, 109' },
        { d: 1.32, geo: { lat: 41.8413333333333, lng: 12.4563888888889 }, name: 'V. GREVE, 105' },
        { d: 1.32, geo: { lat: 41.8412777777778, lng: 12.4830555555556 }, name: 'V. BENEDETTO CROCE, 48/D' },
        { d: 1.39, geo: { lat: 41.841466, lng: 12.483915 }, name: 'Via Benedetto Croce, 50' },
        { d: 1.56, geo: { lat: 41.84775, lng: 12.4623888888889 }, name: 'V. PIEVE FOSCIANA, 6' },
        { d: 1.68, geo: { lat: 41.8486111111111, lng: 12.4614444444444 }, name: 'V. CUTIGLIANO, 82' },
        { d: 1.72, geo: { lat: 41.8448333333333, lng: 12.4855555555556 }, name: 'V. SALVATORE DI GIACOMO, 13' },
        { d: 1.73, geo: { lat: 41.8244444444444, lng: 12.48525 }, name: 'V. CORAZZIERI, 110' },
        { d: 1.76, geo: { lat: 41.8285833333333, lng: 12.48925 }, name: 'V. DI BONAIUTO ANDREA, 16' },
        { d: 2.00, geo: { lat: 41.8173333333333, lng: 12.4748888888889 }, name: 'L. BUZZATI DINO, 15' },
        { d: 2.01, geo: { lat: 41.8529444444444, lng: 12.4694444444444 }, name: 'V. PINCHERLE SALVATORE, 140' },
        { d: 2.03, geo: { lat: 41.8339444444444, lng: 12.4941944444444 }, name: 'V. TINTORETTO, 371' },
        { d: 2.11, geo: { lat: 41.8210833333333, lng: 12.4871388888889 }, name: 'V. DIVISIONE TORINO, 119' },
        { d: 2.12, geo: { lat: 41.8539166666667, lng: 12.46975 }, name: 'V. NISTRI UMBERTO, 11' },
        { d: 2.13, geo: { lat: 41.8172777777778, lng: 12.4595 }, name: 'Viale dell\'Oceano Pacifico, 83 - CC ROMA EUR2' },
        { d: 2.16, geo: { lat: 41.84775, lng: 12.4892222222222 }, name: 'V. POGGIO AMENO, 23' },
        { d: 2.19, geo: { lat: 41.849924, lng: 12.452761 }, name: 'Via Montalcini, 1' },
        { d: 2.22, geo: { lat: 41.850965, lng: 12.453771 }, name: 'Via Lupatelli, 7' },
        { d: 2.24, geo: { lat: 41.8242777777778, lng: 12.44675 }, name: 'V. OCEANO INDIANO, 64' },
        { d: 2.28, geo: { lat: 41.8163333333333, lng: 12.4814166666667 }, name: 'V. LAURENTINA, 710' },
        { d: 2.38, geo: { lat: 41.81493, lng: 12.48011 }, name: 'Via Ignazio Silone Ponte' },
        { d: 2.43, geo: { lat: 41.8181111111111, lng: 12.4885555555556 }, name: 'P. CERVA LUDOVICO, 45' },
        { d: 2.43, geo: { lat: 41.8516111111111, lng: 12.4509444444444 }, name: 'via f.s.benucci, 32' },
        { d: 2.44, geo: { lat: 41.8563333333333, lng: 12.4759444444444 }, name: 'Largo Beato Placido Riccardi 13' },
        { d: 2.50, geo: { lat: 41.8124166666667, lng: 12.4691666666667 }, name: 'PL. MORANTE ELSA, 9' },
        { d: 2.53, geo: { lat: 41.854, lng: 12.4861666666667 }, name: 'V. SEVERO ALESSANDRO, 212' },
        { d: 2.54, geo: { lat: 41.818335, lng: 12.448463 }, name: 'Via di Decima, 96/102' },
        { d: 2.57, geo: { lat: 41.8524444444444, lng: 12.4495 }, name: 'V. RIBOTTI IGNAZIO, 71' },
        { d: 2.65, geo: { lat: 41.8110833333333, lng: 12.4714722222222 }, name: 'V. GADDA CARLO EMILIO, 80' },
        { d: 2.85, geo: { lat: 41.8203055555556, lng: 12.4414166666667 }, name: 'VL. SABATINI CAMILLO, 111' },
        { d: 2.93, geo: { lat: 41.8149444444444, lng: 12.4465555555556 }, name: 'V. COSTELLAZIONI, 369' },
        { d: 2.96, geo: { lat: 41.854, lng: 12.494509 }, name: 'Via dei Lincei, 93' },
        { d: 3.08, geo: { lat: 41.855314, lng: 12.444641 }, name: 'Via Portuense ,579' },
        { d: 3.14, geo: { lat: 41.8621111111111, lng: 12.4599444444444 }, name: 'V. VIGNA PIA, 120' },
        { d: 3.15, geo: { lat: 41.8226666666667, lng: 12.5039722222222 }, name: 'V. INCHIOSTRI UGO, 108' },
        { d: 3.16, geo: { lat: 41.8632222222222, lng: 12.4725277777778 }, name: 'V. GHERARDI SILVESTRO, 85' },
        { d: 3.16, geo: { lat: 41.8631944444444, lng: 12.4726388888889 }, name: 'V. GHERARDI SILVESTRO, 87' },
        { d: 3.19, geo: { lat: 41.8634444444444, lng: 12.4661666666667 }, name: 'V. BAGNERA GIUSEPPE, 64' },
        { d: 3.21, geo: { lat: 41.86075, lng: 12.486797 }, name: 'Largo delle Sette Chiese, 25' },
        { d: 3.21, geo: { lat: 41.8608333333333, lng: 12.4865833333333 }, name: 'V. MACINGHI STROZZI ALESSANDRA, 51' },
        { d: 3.25, geo: { lat: 41.8539444444444, lng: 12.4993888888889 }, name: 'VIALE CARLO TOMMASO ODESCALCHI 75' },
        { d: 3.34, geo: { lat: 41.8165555555556, lng: 12.4377222222222 }, name: 'V. CINA, 4' },
        { d: 3.35, geo: { lat: 41.8589722222222, lng: 12.4455277777778 }, name: 'V. VALAGUSSA FRANCESCO, 28' },
        { d: 3.35, geo: { lat: 41.8571666666667, lng: 12.4425 }, name: 'Via Giuseppe D\'Avarna 11' },
        { d: 3.37, geo: { lat: 41.8644166666667, lng: 12.4605277777778 }, name: 'V. PALADINI ETTORE, 12' },
        { d: 3.39, geo: { lat: 41.8255555555556, lng: 12.5086944444444 }, name: 'V. FONTE MERAVIGLIOSA, 79' },
        { d: 3.45, geo: { lat: 41.851858, lng: 12.434811 }, name: 'Via del Trullo' },
        { d: 3.45, geo: { lat: 41.84525, lng: 12.4304166666667 }, name: 'V. MONTE DELLE CAPRE, 37' },
        { d: 3.48, geo: { lat: 41.8102777777778, lng: 12.4437222222222 }, name: 'VL.DON PASQUINO BORGHI, 165' },
        { d: 3.49, geo: { lat: 41.86625, lng: 12.47125 }, name: 'Via Pietro Blaserna 47' },
        { d: 3.69, geo: { lat: 41.8080833333333, lng: 12.4433611111111 }, name: 'VL. BEATA VER. DEL CARMELO, 35' },
        { d: 3.81, geo: { lat: 41.867105, lng: 12.485347 }, name: 'Via Ostiense, 106' },
        { d: 3.81, geo: { lat: 41.867105, lng: 12.485347 }, name: 'Via Ostiense, 131L' },
        { d: 3.90, geo: { lat: 41.867342, lng: 12.487472 }, name: 'C.ne Ostiense, 191 - Comunicazione' },
        { d: 3.90, geo: { lat: 41.867342, lng: 12.487472 }, name: 'C.ne Ostiense, 191 - Ambiente' },
        { d: 3.95, geo: { lat: 41.8668888888889, lng: 12.4490555555556 }, name: 'Piazza Carlo Forlanini 8' },
        { d: 3.95, geo: { lat: 41.8703888888889, lng: 12.4695277777778 }, name: 'V. PAPARESCHI, 30/A' },
        { d: 3.96, geo: { lat: 41.8596666666667, lng: 12.5039166666667 }, name: 'V. SETTE CHIESE, 259' },
        { d: 3.97, geo: { lat: 41.8508888888889, lng: 12.4268333333333 }, name: 'V. PORTUENSE, 745' },
        { d: 4.01, geo: { lat: 41.8664444444444, lng: 12.4931111111111 }, name: 'V. PADRE REGINALDO GIULIANI, 15' },
        { d: 4.09, geo: { lat: 41.868975, lng: 12.488271 }, name: 'Sala Sistemi' },
        { d: 4.09, geo: { lat: 41.868975, lng: 12.488271 }, name: 'Largo G. Da Verrazzano, 7' },
        { d: 4.10, geo: { lat: 41.8655, lng: 12.4421944444444 }, name: 'L. GIROLAMI VICTOR HUGO, 12' },
        { d: 4.20, geo: { lat: 41.8688611111111, lng: 12.4918888888889 }, name: 'Via Capitan Bavastro 92' },
        { d: 4.30, geo: { lat: 41.8468333333333, lng: 12.4202777777778 }, name: 'via delle vigne, 190' },
        { d: 4.40, geo: { lat: 41.8718888888889, lng: 12.4511111111111 }, name: 'L. ALESSANDRINA RAVIZZA, 2' },
        { d: 4.59, geo: { lat: 41.876048, lng: 12.473739 }, name: 'Piazza Orazio Giustiniani' },
        { d: 4.75, geo: { lat: 41.8170555555556, lng: 12.5218611111111 }, name: 'via millevoi 800' },
        { d: 4.81, geo: { lat: 41.875798, lng: 12.450843 }, name: 'Via Fabiola, 14' },
        { d: 4.86, geo: { lat: 41.876479, lng: 12.451925 }, name: 'Via Falconieri, 38' },
        { d: 4.86, geo: { lat: 41.8781666666667, lng: 12.4776666666667 }, name: 'Via Galvani 6' },
        { d: 4.89, geo: { lat: 41.8764444444444, lng: 12.4506388888889 }, name: 'V. FABIOLA, 15' },
        { d: 4.90, geo: { lat: 41.877156, lng: 12.453099 }, name: 'Via di Donna Olimpia, 275' },
        { d: 4.94, geo: { lat: 41.8787777777778, lng: 12.4788888888889 }, name: 'V. GALVANI, 8' },
        { d: 4.98, geo: { lat: 41.85088, lng: 12.41357 }, name: 'Via Mazzacurati, 73/75' },
        { d: 5.07, geo: { lat: 41.8613055555556, lng: 12.4198333333333 }, name: 'V. CASETTA MATTEI, 279' },
        { d: 5.10, geo: { lat: 41.8792222222222, lng: 12.4541388888889 }, name: 'V. FONTEIANA, 111' },
        { d: 5.13, geo: { lat: 41.7889166666667, lng: 12.4749166666667 }, name: 'V. CHIARINI LUIGI, 400' },
        { d: 5.23, geo: { lat: 41.7905, lng: 12.4486388888889 }, name: 'V. FRIGNANI GIOVANNI, 97' },
        { d: 5.40, geo: { lat: 41.879117, lng: 12.49665 }, name: 'Via di Porta S. Sebastiano, 2 - Ufficio Personale' },
        { d: 5.51, geo: { lat: 41.8771666666667, lng: 12.5044166666667 }, name: 'Via Lusitania 16' },
        { d: 5.53, geo: { lat: 41.884571, lng: 12.472304 }, name: 'Largo Ascianghi' },
        { d: 5.63, geo: { lat: 41.8722222222222, lng: 12.4238055555556 }, name: 'V. BRAVETTA, 545' },
        { d: 5.84, geo: { lat: 41.8767222222222, lng: 12.4271111111111 }, name: 'V. BRAVETTA, 383' },
        { d: 5.92, geo: { lat: 41.87027, lng: 12.523015 }, name: 'Via T. Fortifiocca, 71' },
        { d: 5.92, geo: { lat: 41.887291, lng: 12.48205 }, name: 'Via della Greca, 5' },
        { d: 5.93, geo: { lat: 41.7853888888889, lng: 12.4429444444444 }, name: 'V. RENZI PAOLO, 47' },
        { d: 6.04, geo: { lat: 41.888355, lng: 12.482589 }, name: 'Via dei Cerchi, 6' },
        { d: 6.13, geo: { lat: 41.8696944444444, lng: 12.4123611111111 }, name: 'V. PISANA, 357' },
        { d: 6.16, geo: { lat: 41.8896388888889, lng: 12.4806111111111 }, name: 'Via di Ponte Rotto' },
        { d: 6.17, geo: { lat: 41.890375, lng: 12.468711 }, name: 'Piazza S. Egidio, 1/B' },
        { d: 6.21, geo: { lat: 41.89012, lng: 12.480815 }, name: 'Via Petroselli, 50' },
        { d: 6.25, geo: { lat: 41.8903888888889, lng: 12.4810555555556 }, name: 'Via Petroselli 45 ' },
        { d: 6.29, geo: { lat: 41.890852, lng: 12.480525 }, name: 'Via Petroselli, 45' },
        { d: 6.32, geo: { lat: 41.891113, lng: 12.480419 }, name: 'Via del Teatro Marcello' },
        { d: 6.40, geo: { lat: 41.891534, lng: 12.482999 }, name: 'Via della Consolazione' },
        { d: 6.45, geo: { lat: 41.892117, lng: 12.482093 }, name: 'Via del Tempio di Giove, 3' },
        { d: 6.45, geo: { lat: 41.892117, lng: 12.482093 }, name: 'Via del Tempio di Giove, 21' },
        { d: 6.45, geo: { lat: 41.892117, lng: 12.482093 }, name: 'Via del Tempio di Giove, 21 - Ragioneria Generale' },
        { d: 6.46, geo: { lat: 41.8752777777778, lng: 12.4136111111111 }, name: 'V. PISANA, 306' },
        { d: 6.52, geo: { lat: 41.89306, lng: 12.479701 }, name: 'Piazza Campitelli, 7' },
        { d: 6.56, geo: { lat: 41.893443, lng: 12.478648 }, name: 'Piazza Lovatelli' },
        { d: 6.56, geo: { lat: 41.8930555555556, lng: 12.4825277777778 }, name: 'Piazza del Campidoglio - Palazzo dei Conservatori' },
        { d: 6.57, geo: { lat: 41.8930555555556, lng: 12.4836388888889 }, name: 'Piazza del Campidoglio - Palazzo Senatorio' },
        { d: 6.62, geo: { lat: 41.8929722222222, lng: 12.4873055555556 }, name: 'Via dei Fori Imperiali, 1 - Ponte Radio + Antenna 4' },
        { d: 6.63, geo: { lat: 41.8944166666667, lng: 12.4727777777778 }, name: 'V. ARCO DEL MONTE, 99' },
        { d: 6.63, geo: { lat: 41.8936111111111, lng: 12.4832222222222 }, name: 'Piazza del Campidoglio - Palazzo Nuovo' },
        { d: 6.67, geo: { lat: 41.8938888888889, lng: 12.4836944444444 }, name: 'Piazza del Campidoglio - Palazzo Senatorio' },
        { d: 6.68, geo: { lat: 41.889454, lng: 12.50334 }, name: 'Via Merulana, 123' },
        { d: 6.73, geo: { lat: 41.8811944444444, lng: 12.4174444444444 }, name: 'V. PISANA, 168' },
        { d: 6.75, geo: { lat: 41.879165, lng: 12.525374 }, name: 'Via Assisi, 39' },
        { d: 6.75, geo: { lat: 41.8942777777778, lng: 12.48625 }, name: 'Via Alessandrina - Ponte Radio + Antenna 2' },
        { d: 6.78, geo: { lat: 41.875726, lng: 12.530444 }, name: 'Villa Lais - Centro famiglie' },
        { d: 6.78, geo: { lat: 41.8945833333333, lng: 12.4859722222222 }, name: 'Via Alessandrina - Ponte Radio + Antenna 1' },
        { d: 6.82, geo: { lat: 41.8951111111111, lng: 12.4853611111111 }, name: 'Via Alessandrina - Ponte Radio + Antenna 3' },
        { d: 6.87, geo: { lat: 41.8966111111111, lng: 12.468 }, name: 'Via Giulia 25' },
        { d: 6.91, geo: { lat: 41.89694, lng: 12.472531 }, name: 'Piazza S. Pantaleo, 10' },
        { d: 6.94, geo: { lat: 41.7784444444444, lng: 12.434 }, name: 'V. GIGLIOZZI ROMOLO, 35' },
        { d: 6.98, geo: { lat: 41.896508, lng: 12.485407 }, name: 'Via IV Novembre' },
        { d: 7.05, geo: { lat: 41.8978333333333, lng: 12.4798888888889 }, name: 'P. COLLEGIO ROMANO, 4' },
        { d: 7.12, geo: { lat: 41.8980277777778, lng: 12.4556111111111 }, name: 'Via di S. Maria alle Fornaci 3' },
        { d: 7.13, geo: { lat: 41.7755, lng: 12.437256 }, name: 'Viale dei Caduti nella Guerra di Liberazione - Ex centro commerciale' },
        { d: 7.20, geo: { lat: 41.8393333333333, lng: 12.5563333333333 }, name: 'V. AMANTEA, 1' },
        { d: 7.21, geo: { lat: 41.7747777777778, lng: 12.4369722222222 }, name: 'V. SANTI SAVARINO, 16' },
        { d: 7.47, geo: { lat: 41.901988, lng: 12.471857 }, name: 'Piazza di Ponte Umberto I, 1' },
        { d: 7.61, geo: { lat: 41.8877777777778, lng: 12.5280277777778 }, name: 'V. DE MAGISTRIS LUIGI FILIPPO, 15' },
        { d: 7.66, geo: { lat: 41.8737777777778, lng: 12.5459722222222 }, name: 'Via Camillo Manfroni 9' },
        { d: 7.66, geo: { lat: 41.8808333333333, lng: 12.5385833333333 }, name: 'V. FILARETE, 21' },
        { d: 7.71, geo: { lat: 41.90075, lng: 12.4408333333333 }, name: 'V. MANETTI GIANNOZZO, 6' },
        { d: 7.73, geo: { lat: 41.8508055555556, lng: 12.5605277777778 }, name: 'Via Lemonia 226' },
        { d: 7.78, geo: { lat: 41.8632777777778, lng: 12.5555277777778 }, name: 'Viale dei Consoli 16' },
        { d: 7.80, geo: { lat: 41.8326666666667, lng: 12.5638333333333 }, name: 'V. CALICE, 34/I' },
        { d: 7.82, geo: { lat: 41.8978333333333, lng: 12.5117222222222 }, name: 'Via Tiburtina Antica 25' },
        { d: 7.84, geo: { lat: 41.8903888888889, lng: 12.4113055555556 }, name: 'V. MARVASI DIOMEDE, 11' },
        { d: 7.99, geo: { lat: 41.898444, lng: 12.42482 }, name: 'Via Aurelia, 470' },
        { d: 8.00, geo: { lat: 41.88675, lng: 12.5365277777778 }, name: 'V. PIGNETO, 301/A' },
        { d: 8.03, geo: { lat: 41.906532, lng: 12.481231 }, name: 'Piazza di Spagna' },
        { d: 8.03, geo: { lat: 41.906968, lng: 12.475032 }, name: 'Lungotevere Augusta' },
        { d: 8.07, geo: { lat: 41.8763055555556, lng: 12.5497222222222 }, name: 'P. ZAMBECCARI F., 19' },
        { d: 8.10, geo: { lat: 41.8827222222222, lng: 12.5433611111111 }, name: 'V. POLICASTRO, 24 - via acqua bullicante, 30' },
        { d: 8.16, geo: { lat: 41.8609444444444, lng: 12.5618333333333 }, name: 'VL. GIOVANNI BOSCO SAN, 125' },
        { d: 8.18, geo: { lat: 41.9084166666667, lng: 12.4711666666667 }, name: 'V. VISCONTI ENNIO QUIRINO, 13' },
        { d: 8.30, geo: { lat: 41.905875, lng: 12.500613 }, name: 'Via Goito, 35' },
        { d: 8.32, geo: { lat: 41.9047222222222, lng: 12.4337777777778 }, name: 'V. STAMPINI ETTORE, 38' },
        { d: 8.33, geo: { lat: 41.9052222222222, lng: 12.5040833333333 }, name: 'Via Vittorio Bachelet 3' },
        { d: 8.33, geo: { lat: 41.8987222222222, lng: 12.4171944444444 }, name: 'V. DEL VECCHIO GIORGIO, 24' },
        { d: 8.33, geo: { lat: 41.8893333333333, lng: 12.5388055555556 }, name: 'Via Renzo da Ceri 103' },
        { d: 8.51, geo: { lat: 41.9112222222222, lng: 12.4761388888889 }, name: 'P.za del Popolo' },
        { d: 8.51, geo: { lat: 41.853106, lng: 12.569482 }, name: 'Piazza Cinecittà  - Direzione' },
        { d: 8.55, geo: { lat: 41.9099444444444, lng: 12.4474166666667 }, name: 'V. RIZZO LUIGI, 1' },
        { d: 8.59, geo: { lat: 41.910604, lng: 12.449209 }, name: 'Circovallazione Trionfale, 19' },
        { d: 8.63, geo: { lat: 41.8800555555556, lng: 12.5544444444444 }, name: 'V. BALZANI ROMOLO, 55' },
        { d: 8.69, geo: { lat: 41.9126111111111, lng: 12.4586666666667 }, name: 'V. CAMOZZI GABRIELE, 8' },
        { d: 8.71, geo: { lat: 41.909587, lng: 12.501355 }, name: 'Piazzale di Porta Metronia, 2' },
        { d: 8.71, geo: { lat: 41.9107777777778, lng: 12.4957222222222 }, name: 'V. CAMPANIA, 63 - via puglie' },
        { d: 8.71, geo: { lat: 41.9127777777778, lng: 12.4593611111111 }, name: 'V. CAMOZZI GABRIELE, 4' },
        { d: 8.76, geo: { lat: 41.8762777777778, lng: 12.5596666666667 }, name: 'V. CARPINETO, 11' },
        { d: 8.82, geo: { lat: 41.9140555555556, lng: 12.46375 }, name: 'V. MORDINI ANTONIO, 19' },
        { d: 8.83, geo: { lat: 41.913156, lng: 12.451786 }, name: 'Via Trionfale, 45 - Mercato dei fiori' },
        { d: 8.84, geo: { lat: 41.903603, lng: 12.416131 }, name: 'Via Adriano I, 4' },
        { d: 8.85, geo: { lat: 41.8794722222222, lng: 12.5581944444444 }, name: 'V. FERRAIRONI FRANCESCO, 38' },
        { d: 8.91, geo: { lat: 41.910886, lng: 12.5035 }, name: 'Via Nomentana, 70' },
        { d: 8.95, geo: { lat: 41.8635555555556, lng: 12.5705833333333 }, name: 'V. CARLO FADDA, 93' },
        { d: 9.04, geo: { lat: 41.8816388888889, lng: 12.5589444444444 }, name: 'Via Ugo Guattari 45' },
        { d: 9.04, geo: { lat: 41.9133055555556, lng: 12.4409444444444 }, name: 'V. APPIANO, 15' },
        { d: 9.06, geo: { lat: 41.890933, lng: 12.549128 }, name: 'Via Torre Annunziata, 1' },
        { d: 9.07, geo: { lat: 41.912785, lng: 12.502159 }, name: 'Via Reggio Emilia, 54' },
        { d: 9.15, geo: { lat: 41.9170833333333, lng: 12.4649166666667 }, name: 'V. COL DI LANA, 5' },
        { d: 9.18, geo: { lat: 41.916613, lng: 12.485446 }, name: 'Via dell\'Uccelleria ' },
        { d: 9.21, geo: { lat: 41.8822222222222, lng: 12.5609444444444 }, name: 'VL. PRIMAVERA, 207' },
        { d: 9.34, geo: { lat: 41.8921944444444, lng: 12.5520555555556 }, name: 'VL. PARTENOPE, 55' },
        { d: 9.39, geo: { lat: 41.8678055555556, lng: 12.5740833333333 }, name: 'V. GIAQUINTO ADOLFO, 24' },
        { d: 9.42, geo: { lat: 41.88975, lng: 12.5563611111111 }, name: 'V. ANAGNI, 48' },
        { d: 9.51, geo: { lat: 41.8808888888889, lng: 12.5664722222222 }, name: 'Piazza dei Mirti 31' },
        { d: 9.53, geo: { lat: 41.9123333333333, lng: 12.5189166666667 }, name: 'Via Reggio Calabria 48' },
        { d: 9.54, geo: { lat: 41.919548, lng: 12.488236 }, name: 'Via Aldovrandi, 18' },
        { d: 9.55, geo: { lat: 41.8856388888889, lng: 12.5627222222222 }, name: 'V. TOR DE SCHIAVI, 175' },
        { d: 9.67, geo: { lat: 41.9133333333333, lng: 12.4194722222222 }, name: 'V. FORTE BRASCHI, 93/A' },
        { d: 9.70, geo: { lat: 41.8964722222222, lng: 12.5525555555556 }, name: 'VL. VENEZIA GIULIA, 52' },
        { d: 9.70, geo: { lat: 41.8759722222222, lng: 12.573 }, name: 'V. SALICI, 27' },
        { d: 9.71, geo: { lat: 41.9095833333333, lng: 12.4089722222222 }, name: 'V. PASQUALE II, 237' },
        { d: 9.80, geo: { lat: 41.9185555555556, lng: 12.5065833333333 }, name: 'Via Sebenico 1' },
        { d: 9.81, geo: { lat: 41.906957, lng: 12.537983 }, name: 'Via di San Romano, 14/a' },
        { d: 9.81, geo: { lat: 41.923072, lng: 12.471213 }, name: 'Via Flaminia, 225' },
        { d: 9.94, geo: { lat: 41.9240833333333, lng: 12.4634166666667 }, name: 'Piazza Giuseppe Mazzini 41' },
        { d: 10.11, geo: { lat: 41.8834722222222, lng: 12.5729166666667 }, name: 'Via dei Sesami 2' },
        { d: 10.12, geo: { lat: 41.90275, lng: 12.3883333333333 }, name: 'V. BONDI ENRICO, 83' },
        { d: 10.15, geo: { lat: 41.9078055555556, lng: 12.3959166666667 }, name: 'V. CORNELIA, 73' },
        { d: 10.19, geo: { lat: 41.9169166666667, lng: 12.4149722222222 }, name: 'Via Federico Borromeo 53' },
        { d: 10.20, geo: { lat: 41.9091388888889, lng: 12.3973333333333 }, name: 'V. CORNELIA, 43' },
        { d: 10.21, geo: { lat: 41.7849444444444, lng: 12.3663055555556 }, name: 'V. BESCHI COSTANTINO, 12' },
        { d: 10.30, geo: { lat: 41.919432, lng: 12.418868 }, name: 'Via Mattia Battistini, 464' },
        { d: 10.30, geo: { lat: 41.9045555555556, lng: 12.5516666666667 }, name: 'V. SATTA SEBASTIANO, 84' },
        { d: 10.31, geo: { lat: 41.8768055555556, lng: 12.5806944444444 }, name: 'V. GHINI LUCA, 58' },
        { d: 10.36, geo: { lat: 41.878, lng: 12.5805833333333 }, name: 'V. CAMPO, 57' },
        { d: 10.37, geo: { lat: 41.9079444444444, lng: 12.5474166666667 }, name: 'V. FACCHINETTI CIPRIANO, 42' },
        { d: 10.38, geo: { lat: 41.9055277777778, lng: 12.5516666666667 }, name: 'P. CRIVELLI RICC. BALSAMO, 66' },
        { d: 10.47, geo: { lat: 41.9263611111111, lng: 12.4398333333333 }, name: 'V. G. BITOSSI, 5' },
        { d: 10.49, geo: { lat: 41.9159166666667, lng: 12.4049444444444 }, name: 'V. DECIO AZZOLINO, 33' },
        { d: 10.53, geo: { lat: 41.8833333333333, lng: 12.3605277777778 }, name: 'V. MONTESANO GIUSEPPE, 6' },
        { d: 10.54, geo: { lat: 41.785275, lng: 12.361354 }, name: 'Piazza Capelvenere (Acilia)' },
        { d: 10.54, geo: { lat: 41.8978055555556, lng: 12.5648055555556 }, name: 'V. PENAZZATO DINO, 72' },
        { d: 10.55, geo: { lat: 41.9296666666667, lng: 12.4640555555556 }, name: 'Viale Pinturicchio 71' },
        { d: 10.65, geo: { lat: 41.9195277777778, lng: 12.4095555555556 }, name: 'V. TORREVECCHIA, 793' },
        { d: 10.69, geo: { lat: 41.8935277777778, lng: 12.5718888888889 }, name: 'V. PIROTTA P.R., 95/A' },
        { d: 10.74, geo: { lat: 41.8978055555556, lng: 12.568 }, name: 'VL. VALENTE GIOV.BATTISTA, 100' },
        { d: 10.78, geo: { lat: 41.9048055555556, lng: 12.5598333333333 }, name: 'V. FEDERIGO VERDINOIS, 54' },
        { d: 10.80, geo: { lat: 41.8704444444444, lng: 12.5910555555556 }, name: 'V. BELON PIETRO, 150' },
        { d: 10.81, geo: { lat: 41.900168, lng: 12.566379 }, name: 'Via Perlasca' },
        { d: 10.84, geo: { lat: 41.8869166666667, lng: 12.5803333333333 }, name: 'V. PERGOLATO, 112' },
        { d: 10.89, geo: { lat: 41.9247222222222, lng: 12.4174166666667 }, name: 'V. VAL FAVARA, 31' },
        { d: 10.90, geo: { lat: 41.89462, lng: 12.573951 }, name: 'Via Prenestina, 510' },
        { d: 11.01, geo: { lat: 41.7688055555556, lng: 12.3706944444444 }, name: 'V. EURIPIDE, 15' },
        { d: 11.02, geo: { lat: 41.933865, lng: 12.474301 }, name: 'Piazza Grecia, 23/25' },
        { d: 11.07, geo: { lat: 41.8821666666667, lng: 12.5873333333333 }, name: 'V. OLCESE VITTORIO, 16' },
        { d: 11.23, geo: { lat: 41.8159166666667, lng: 12.6028333333333 }, name: 'V. FONTANILE ANAGNINO, 123' },
        { d: 11.23, geo: { lat: 41.9216944444444, lng: 12.5390277777778 }, name: 'V. DEL TUFO, 27' },
        { d: 11.23, geo: { lat: 41.8159166666667, lng: 12.6028333333333 }, name: 'V. FONTANILE ANAGNINO, 123/D' },
        { d: 11.30, geo: { lat: 41.7833055555556, lng: 12.35225 }, name: 'V. MASCARDI NICOLA, 11' },
        { d: 11.30, geo: { lat: 41.929628, lng: 12.518909 }, name: 'Via Dire Daua, 11' },
        { d: 11.38, geo: { lat: 41.7760555555556, lng: 12.3573611111111 }, name: 'V. SIGNORINI TELEMACO, 78' },
        { d: 11.41, geo: { lat: 41.9165555555556, lng: 12.38625 }, name: 'V. ORBASSANO, 69' },
        { d: 11.54, geo: { lat: 41.8879444444444, lng: 12.5894166666667 }, name: 'L. APPIO CHIEREGATTI, 21' },
        { d: 11.56, geo: { lat: 41.9357222222222, lng: 12.4360277777778 }, name: 'Via Trionfale 7333' },
        { d: 11.60, geo: { lat: 41.7618888888889, lng: 12.3697222222222 }, name: 'V. STESICORO, 115' },
        { d: 11.63, geo: { lat: 41.9088055555556, lng: 12.5689722222222 }, name: 'V. SCALARINI GIUSEPPE, 27' },
        { d: 11.64, geo: { lat: 41.7860555555556, lng: 12.3455 }, name: 'VL. ALESSANDRO RUSPOLI, 80' },
        { d: 11.68, geo: { lat: 41.9346111111111, lng: 12.4255 }, name: 'V. PESTALOZZI ENRICO, 5' },
        { d: 11.68, geo: { lat: 41.8748333333333, lng: 12.6001666666667 }, name: 'V. ALZAVOLE, 21' },
        { d: 11.78, geo: { lat: 41.9165833333333, lng: 12.5601944444444 }, name: 'Piazza Federico Sacco 11' },
        { d: 11.80, geo: { lat: 41.9126111111111, lng: 12.5666388888889 }, name: 'VL. SANTI FERNANDO, 65' },
        { d: 12.01, geo: { lat: 41.7745277777778, lng: 12.3495 }, name: 'V. FUNI A., 81' },
        { d: 12.10, geo: { lat: 41.9016388888889, lng: 12.585 }, name: 'V. DE CHIRICO GIORGIO, 59' },
        { d: 12.15, geo: { lat: 41.9162777777778, lng: 12.3718055555556 }, name: 'V. CASALOTTI, 87/B' },
        { d: 12.15, geo: { lat: 41.91625, lng: 12.3718611111111 }, name: 'V. CASALOTTI, 87' },
        { d: 12.19, geo: { lat: 41.9109444444444, lng: 12.5756388888889 }, name: 'V. SOMMOVIGO AMEDEO, 40' },
        { d: 12.21, geo: { lat: 41.9382222222222, lng: 12.4200555555556 }, name: 'V. VERGA ANDREA, 2' },
        { d: 12.32, geo: { lat: 41.9166111111111, lng: 12.36925 }, name: 'V. ORMEA, 6' },
        { d: 12.36, geo: { lat: 41.7494166666667, lng: 12.3742777777778 }, name: 'V. CILEA FRANCESCO, 269' },
        { d: 12.39, geo: { lat: 41.9140555555556, lng: 12.3644166666667 }, name: 'V. CASALOTTI, 259' },
        { d: 12.49, geo: { lat: 41.93605, lng: 12.53517 }, name: 'Piazza Sempione, 15' },
        { d: 12.50, geo: { lat: 41.94093, lng: 12.419609 }, name: 'Piazza S.M. della Pietà,  5' },
        { d: 12.54, geo: { lat: 41.9174166666667, lng: 12.5728333333333 }, name: 'V. BALABANOFF ANGELICA, 60' },
        { d: 12.59, geo: { lat: 41.9374444444444, lng: 12.5341388888889 }, name: 'VL. CARNARO, 4/P. MONTE BALDO, 2' },
        { d: 12.60, geo: { lat: 41.9043333333333, lng: 12.5898333333333 }, name: 'P. DE CUPIS CESARE, 20' },
        { d: 12.63, geo: { lat: 41.7555833333333, lng: 12.3605555555556 }, name: 'L. HERZL THEODOR, 51' },
        { d: 12.63, geo: { lat: 41.9426944444444, lng: 12.5175555555556 }, name: 'V. VAL MAGGIA, 21' },
        { d: 12.68, geo: { lat: 41.82806, lng: 12.622511 }, name: 'Via Tuscolana, 950' },
        { d: 12.75, geo: { lat: 41.7883333333333, lng: 12.3290555555556 }, name: 'V. DRAGONE, 443' },
        { d: 12.86, geo: { lat: 41.9341111111111, lng: 12.5493888888889 }, name: 'P. GOLA GIUSEPPE, 61' },
        { d: 12.91, geo: { lat: 41.9431666666667, lng: 12.5259722222222 }, name: 'V. VALLE SCRIVIA, 11' },
        { d: 13.01, geo: { lat: 41.9453055555556, lng: 12.5217222222222 }, name: 'V. VAL DI LANZO, 187' },
        { d: 13.05, geo: { lat: 41.928, lng: 12.5655 }, name: 'V. PALOMBINI GIOVANNI, 39' },
        { d: 13.18, geo: { lat: 41.9423055555556, lng: 12.5370277777778 }, name: 'VL. ADRIATICO, 140' },
        { d: 13.36, geo: { lat: 41.9236388888889, lng: 12.5784166666667 }, name: 'V. FOSSACESIA, 63' },
        { d: 13.44, geo: { lat: 41.955235, lng: 12.484777 }, name: 'Via Flaminia, 872' },
        { d: 13.55, geo: { lat: 41.9422777777778, lng: 12.5469722222222 }, name: 'V. ETTORE ROMAGNOLI, 59' },
        { d: 13.57, geo: { lat: 41.9371666666667, lng: 12.5590277777778 }, name: 'PL. HEGEL, 14' },
        { d: 13.60, geo: { lat: 41.9372777777778, lng: 12.5595277777778 }, name: 'PL. HEGEL, 8' },
        { d: 13.61, geo: { lat: 41.9525555555556, lng: 12.5148611111111 }, name: 'V. SEGGIANO, 34' },
        { d: 13.66, geo: { lat: 41.957243, lng: 12.455391 }, name: 'Via Cassia, 472' },
        { d: 13.67, geo: { lat: 41.9488055555556, lng: 12.53175 }, name: 'V. ISOLE CURZOLANE, 71' },
        { d: 13.72, geo: { lat: 41.9537777777778, lng: 12.5140833333333 }, name: 'P. MINUCCIANO, 33' },
        { d: 13.73, geo: { lat: 41.8869444444444, lng: 12.6200555555556 }, name: 'V. CALIMERA, 133' },
        { d: 13.74, geo: { lat: 41.9349722222222, lng: 12.5669166666667 }, name: 'V. PALENCO LIBERATO, 62' },
        { d: 13.96, geo: { lat: 41.8730555555556, lng: 12.6302777777778 }, name: 'Via Amico Aspertini 325' },
        { d: 13.97, geo: { lat: 41.9117222222222, lng: 12.6031666666667 }, name: 'Via della Rustica' },
        { d: 14.04, geo: { lat: 41.869467, lng: 12.632678 }, name: 'Viale D. Cambellotti, 11' },
        { d: 14.08, geo: { lat: 41.8796111111111, lng: 12.6287222222222 }, name: 'Via dell\'Archeologia 139' },
        { d: 14.13, geo: { lat: 41.9493333333333, lng: 12.5436944444444 }, name: 'V. PINTOR JAIME, 6' },
        { d: 14.14, geo: { lat: 41.9568888888889, lng: 12.5176666666667 }, name: 'V. CALCINAIA, 44' },
        { d: 14.21, geo: { lat: 41.9411388888889, lng: 12.5650833333333 }, name: 'V. MARTINETTI EUFRASIA, 21' },
        { d: 14.23, geo: { lat: 41.9108888888889, lng: 12.6078888888889 }, name: 'V. ARETUSA, 5' },
        { d: 14.23, geo: { lat: 41.9474722222222, lng: 12.5513611111111 }, name: 'Via Renato Fucini 265' },
        { d: 14.28, geo: { lat: 41.9558055555556, lng: 12.5276666666667 }, name: 'Piazza Luigi Porro Lambertenghi 12' },
        { d: 14.45, geo: { lat: 41.95775, lng: 12.5263888888889 }, name: 'V. PERAZZI COSTANTINO, 46' },
        { d: 14.47, geo: { lat: 41.9543888888889, lng: 12.4005555555556 }, name: 'V. CASAL DEL MARMO, 212' },
        { d: 14.51, geo: { lat: 41.9575555555556, lng: 12.4101388888889 }, name: 'V. BERTOLOTTI ANTONIO, 37' },
        { d: 14.63, geo: { lat: 41.9650555555556, lng: 12.4442777777778 }, name: 'V. CASSIA, 726' },
        { d: 14.74, geo: { lat: 41.9159722222222, lng: 12.6105555555556 }, name: 'V. DELIA, 46' },
        { d: 14.74, geo: { lat: 41.934839, lng: 12.586674 }, name: 'Via Scorticabove, 77' },
        { d: 14.75, geo: { lat: 41.9628055555556, lng: 12.5168611111111 }, name: 'V. GENNARO PASQUARIELLO, 27' },
        { d: 14.84, geo: { lat: 41.86675, lng: 12.6436111111111 }, name: 'V. ACQUARONI, 53' },
        { d: 14.86, geo: { lat: 41.9625277777778, lng: 12.5227777777778 }, name: 'V. ZIRARDINI GAETANO, 6' },
        { d: 14.86, geo: { lat: 41.939, lng: 12.5821944444444 }, name: 'V. FABRIANO, 59' },
        { d: 14.95, geo: { lat: 41.93825, lng: 12.5852222222222 }, name: 'V. CORINALDO, 41' },
        { d: 14.98, geo: { lat: 41.9435277777778, lng: 12.5766388888889 }, name: 'V. POLLENZA, 54' },
        { d: 15.26, geo: { lat: 41.966596, lng: 12.521453 }, name: 'Via Flavio Andò, 12' },
        { d: 15.28, geo: { lat: 41.932994, lng: 12.59895 }, name: 'Via Tiburtina, 1163' },
        { d: 15.28, geo: { lat: 41.9667777777778, lng: 12.5213611111111 }, name: 'V. ANDO\' FLAVIO, 15' },
        { d: 15.44, geo: { lat: 41.9667222222222, lng: 12.4111388888889 }, name: 'V. ASCREA, 24' },
        { d: 15.61, geo: { lat: 41.9658055555556, lng: 12.5377222222222 }, name: 'via giuseppe de santis 33' },
        { d: 15.67, geo: { lat: 41.9711388888889, lng: 12.5178888888889 }, name: 'V. RUSSOLILLO DON GIUSTINO MARIA, 64' },
        { d: 16.03, geo: { lat: 41.9507222222222, lng: 12.5848888888889 }, name: 'Piazza Paolo Rossi 6' },
        { d: 16.08, geo: { lat: 41.727377, lng: 12.339949 }, name: 'Via Martin Pescatore, 66' },
        { d: 17.08, geo: { lat: 41.938879, lng: 12.621531 }, name: 'Via Canterano, 12' },
        { d: 17.29, geo: { lat: 41.9880277777778, lng: 12.5059722222222 }, name: 'V. CASTEL GIUBILEO, 41' },
        { d: 17.42, geo: { lat: 41.9913611111111, lng: 12.4791666666667 }, name: 'L. CASTELSEPRIO, 9' },
        { d: 17.74, geo: { lat: 41.9875, lng: 12.4071944444444 }, name: 'Via Rocco Santoliquido 28' },
        { d: 17.75, geo: { lat: 41.9416666666667, lng: 12.6290555555556 }, name: 'V. CASAL BIANCO, 140' },
        { d: 17.88, geo: { lat: 41.9950833333333, lng: 12.488 }, name: 'V. BREMBIO, 83' },
        { d: 17.89, geo: { lat: 41.9948888888889, lng: 12.4916666666667 }, name: 'V. BACCANO, 38' },
        { d: 18.18, geo: { lat: 41.7421666666667, lng: 12.289 }, name: 'V. CAPO SPERONE 52' },
        { d: 18.31, geo: { lat: 41.7376388888889, lng: 12.2914722222222 }, name: 'V. OLIVIERI ANGELO 141' },
        { d: 18.32, geo: { lat: 41.7378611111111, lng: 12.2910277777778 }, name: 'V. PAOLINI FEDERICO 196' },
        { d: 18.52, geo: { lat: 41.7382777777778, lng: 12.2877222222222 }, name: 'V. CAPO PALINURO, 74' },
        { d: 18.95, geo: { lat: 41.7428055555556, lng: 12.2772777777778 }, name: 'L. MARIANNE 10' },
        { d: 18.99, geo: { lat: 41.7243611111111, lng: 12.2951111111111 }, name: 'V. RANDE, 22' },
        { d: 19.07, geo: { lat: 41.7242222222222, lng: 12.2940277777778 }, name: 'V. QUINQUEREMI,19' },
        { d: 19.14, geo: { lat: 41.729577, lng: 12.287075 }, name: 'Viale del Lido, 6' },
        { d: 19.56, geo: { lat: 41.73095, lng: 12.279366 }, name: 'Via Claudio, 1' },
        { d: 19.68, geo: { lat: 41.7407777777778, lng: 12.2686111111111 }, name: 'V. AZZORRE 314' },
        { d: 19.83, geo: { lat: 41.7338055555556, lng: 12.2725555555556 }, name: 'C. DUCA DI GENOVA 137' },
        { d: 19.89, geo: { lat: 41.73225, lng: 12.2731666666667 }, name: 'via Giuliano da Sangallo n. 11' },
        { d: 20.17, geo: { lat: 42.0040833333333, lng: 12.3817777777778 }, name: 'Via Cassia 1690' },
        { d: 20.56, geo: { lat: 41.7395555555556, lng: 12.2572222222222 }, name: 'V. IDROSCALO 82' },
        { d: 20.86, geo: { lat: 41.7384166666667, lng: 12.2538888888889 }, name: 'V.MARINO FASAN,58' },
        { d: 47.39, geo: { lat: 42.0081666666667, lng: 12.9930277777778 }, name: 'V. AMATO ORAZIO, 65' },
        { d: 181.65, geo: { lat: 43.2475833333333, lng: 13.5831944444444 }, name: 'L. MONTE SAN GIUSTO, 16' }
];

var mkl = {
        '00:0C:42:71:4D:E0':    { lat: 41.884571,       lng: 12.472304  },
        'metronia':             { lat: 41.909587,       lng: 12.501355  },
        'D4:CA:6D:71:2F:30':    { lat: 41.854,          lng: 12.494509  },
        '00:0C:42:71:4D:90':    { lat: 41.851858,       lng: 12.434811  },
        'D4:CA:6D:71:2F:72':    { lat: 41.906957,       lng: 12.537983  },
        'D4:CA:6D:55:4B:AF':    { lat: 41.923072,       lng: 12.471213  },
        'D4:CA:6D:2C:EF:02':    { lat: 41.912785,       lng: 12.502159  },
        'D4:CA:6D:2C:EE:E4':    { lat: 41.867342,       lng: 12.487472  },
        '00:0C:42:71:4D:EA':    { lat: 41.867342,       lng: 12.487472  },
        '00:0C:42:71:4B:42':    { lat: 41.86075,        lng: 12.486797  },
        'D4:CA:6D:55:4C:49':    { lat: 41.906968,       lng: 12.475032  },
        'salasistemi':          { lat: 41.868975,       lng: 12.488271  },
        'D4:CA:6D:60:DD:45':    { lat: 41.879117,       lng: 12.49665   },
        'D4:CA:6D:55:2E:55':    { lat: 41.89306,        lng: 12.479701  },
        'D4:CA:6D:71:2F:88':    { lat: 41.901988,       lng: 12.471857  },
        '00:0C:42:71:4D:CC':    { lat: 41.831415,       lng: 12.477887  },
        'D4:CA:6D:2C:EC:64':    { lat: 41.933865,       lng: 12.474301  },
        'D4:CA:6D:2E:CC:4E':    { lat: 41.893443,       lng: 12.478648  },
        'D4:CA:6D:2E:CB:88':    { lat: 41.890375,       lng: 12.468711  },
        '00:0C:42:71:4D:AE':    { lat: 41.94093,        lng: 12.419609  },
        'D4:CA:6D:2C:EF:2A':    { lat: 41.89694,        lng: 12.472531  },
        'D4:CA:6D:2C:EC:B4':    { lat: 41.93605,        lng: 12.53517   },
        'D4:CA:6D:2E:CA:8B':    { lat: 41.903603,       lng: 12.416131  },
        'centroimmigrazione':   { lat: 41.879165,       lng: 12.525374  },
        'D4:CA:6D:2E:CC:43':    { lat: 41.898444,       lng: 12.42482   },
        'D4:CA:6D:2E:CA:EE':    { lat: 41.841466,       lng: 12.483915  },
        'D4:CA:6D:71:2F:93':    { lat: 41.957243,       lng: 12.455391  },
        'D4:CA:6D:2E:CB:A1':    { lat: 41.73095,        lng: 12.279366  },
        'D4:CA:6D:71:2F:7D':    { lat: 41.888355,       lng: 12.482589  },
        '00:0C:42:A7:D5:B0':    { lat: 41.891113,       lng: 12.480419  },
        'D4:CA:6D:7B:A9:E1':    { lat: 41.892117,       lng: 12.482093  },
        'D4:CA:6D:7C:4D:7F':    { lat: 41.892117,       lng: 12.482093  },
        'D4:CA:6D:7B:AC:80':    { lat: 41.892117,       lng: 12.482093  },
        '00:0C:42:71:4B:38':    { lat: 41.891534,       lng: 12.482999  },
        'D4:CA:6D:55:27:6A':    { lat: 41.887291,       lng: 12.48205   },
        'D4:CA:6D:55:28:72':    { lat: 41.916613,       lng: 12.485446  },
        'D4:CA:6D:2E:CC:2D':    { lat: 41.818335,       lng: 12.448463  },
        '00:0C:42:71:4D:B8':    { lat: 41.877156,       lng: 12.453099  },
        'D4:CA:6D:2E:CB:67':    { lat: 41.929628,       lng: 12.518909  },
        'D4:CA:6D:2C:EC:BE':    { lat: 41.875798,       lng: 12.450843  },
        'D4:CA:6D:71:2F:CA':    { lat: 41.876479,       lng: 12.451925  },
        'D4:CA:6D:2E:CD:40':    { lat: 41.955235,       lng: 12.484777  },
        'D4:CA:6D:71:2F:D5':    { lat: 41.966596,       lng: 12.521453  },
        'D4:CA:6D:55:27:E3':    { lat: 41.896508,       lng: 12.485407  },
        'D4:CA:6D:2C:EF:34':    { lat: 41.850965,       lng: 12.453771  },
        'D4:CA:6D:2E:CB:04':    { lat: 41.727377,       lng: 12.339949  },
        'D4:CA:6D:55:2E:60':    { lat: 41.919432,       lng: 12.418868  },
        'D4:CA:6D:55:4C:28':    { lat: 41.85088,        lng: 12.41357   },
        '00:0C:42:71:4B:74':    { lat: 41.889454,       lng: 12.50334   },
        '00:0C:42:71:4B:60':    { lat: 41.849924,       lng: 12.452761  },
        'D4:CA:6D:60:DD:EA':    { lat: 41.910886,       lng: 12.5035    },
        'D4:CA:6D:60:DC:CC':    { lat: 41.867105,       lng: 12.485347  },
        'D4:CA:6D:2E:CB:0F':    { lat: 41.867105,       lng: 12.485347  },
        'D4:CA:6D:2E:CA:F9':    { lat: 41.900168,       lng: 12.566379  },
        'D4:CA:6D:2C:EC:A0':    { lat: 41.890852,       lng: 12.480525  },
        'petroselli50':         { lat: 41.89012,        lng: 12.480815  },
        'D4:CA:6D:2C:EE:F8':    { lat: 41.855314,       lng: 12.444641  },
        '00:0C:42:71:4B:4C':    { lat: 41.89462,        lng: 12.573951  },
        'D4:CA:6D:2E:CC:38':    { lat: 41.934839,       lng: 12.586674  },
        'D4:CA:6D:2E:CA:96':    { lat: 41.87027,        lng: 12.523015  },
        'viatiburtina':         { lat: 41.932994,       lng: 12.59895   },
        'D4:CA:6D:2C:EE:DA':    { lat: 41.890933,       lng: 12.549128  },
        'D4:CA:6D:7B:EC:BC':    { lat: 41.913156,       lng: 12.451786  },
        'D4:CA:6D:71:2F:3B':    { lat: 41.82806,        lng: 12.622511  },
        'D4:CA:6D:3B:87:3D':    { lat: 41.836297,       lng: 12.466288  },
        '00:0C:42:71:4D:D6':    { lat: 41.869467,       lng: 12.632678  },
        'D4:CA:6D:2E:CA:80':    { lat: 41.7755,         lng: 12.437256  },
        'D4:CA:6D:2E:CB:BF':    { lat: 41.729577,       lng: 12.287075  },
        '00:0C:42:71:4D:9A':    { lat: 41.839003,       lng: 12.466716  },
        'D4:CA:6D:2E:CB:1A':    { lat: 41.875726,       lng: 12.530444  },
        'D4:CA:6D:2C:EC:6E':    { lat: 41.853106,       lng: 12.569482  },
        'testpinti':            { lat: 41.8348,         lng: 12.469856  },
        'D4:CA:6D:60:DD:5B':    { lat: 41.785275,       lng: 12.361354  },
        'D4:CA:6D:2C:EC:96':    { lat: 45.503512,       lng:  9.184372  }
}

var _prevStartPoint      = { lat: 41.834972, lng: 12.4696 };
var _googleMapReady      = false;
var _googleMapInitalized = false;
var _apListInitalized    = false;

function distance(lat1, lon1, lat2, lon2) {

    var p = 0.017453292519943295;
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p)/2 + 
            c(lat1 * p) * c(lat2 * p) * 
            (1 - c((lon2 - lon1) * p))/2;

    return 12742 * Math.asin(Math.sqrt(a));
}

function getPopUpContent(name) {

    return  '<div class="ap-popup popupContent">'+
            '<div class="siteNotice"></div>'+
            '<h5 class="firstHeading">' + name + '</h5>'+
            '<div class="bodyContent">'+
            '<p>Hotspot WiFi attivo: <b>24 ore su 24</b>.</p>'+
            '</div>'+
            '</div>';
}

function googleMapCallback() {

        _googleMapReady = true;

        if (!_googleMapInitalized) {

          if (!_apListInitalized)
            setTimeout(googleMapCallback, 1000);
          else
            googleMapInit(_prevStartPoint);
        }
}

function googleMapInit(startPoint, force) {

        if (force !== true)
          force = false;

        if (!_googleMapReady)
          return;

        if (_googleMapInitalized && !force)
          return;
        else
          _googleMapInitalized = true;

        const customStyles = [
          {
            url: '/stock/roma/img/icon-hotspot-2.png',
            width: 48,
            height: 48,
            textColor: 'transparent'
          },
          {
            url: '/stock/roma/img/icon-hotspot-3.png',
            width: 48,
            height: 48,
            textColor: 'transparent'
          },
          {
            url: '/stock/roma/img/icon-hotspot-4.png',
            width: 48,
            height: 48,
            textColor: 'transparent'
          },
          {
            url: '/stock/roma/img/icon-hotspot-5.png',
            width: 48,
            height: 48,
            textColor: 'transparent'
          },
          {
            url: '/stock/roma/img/icon-hotspot-6.png',
            width: 48,
            height: 48,
            textColor: 'transparent'
          }
        ];

        var youPlaced = false;
        var youLocation = undefined;
        var map = new google.maps.Map(document.getElementById('ap-position-map'), {zoom: 16, center: startPoint});
        var markerIcon = {
            url: '/stock/roma/img/icon-hotspot.png',
            scaledSize: new google.maps.Size(48, 48),
            origin:     new google.maps.Point(0, 0),
            anchor:     new google.maps.Point(0, 0)
        };
        var prevOpenedIw = null;

        // Create markers.
        var markers = locations.map(function(location, i) {

          var marker;

          if (location.d < 0.05) {

            if (!youLocation || youLocation.d > location.d)
                youLocation = location;
        

            marker = new google.maps.Marker({
              position: location.geo,
              label: ' ',
              title: location.name,
              icon: { url: '/stock/roma/img/icon-blank.png' }
            });
          }
          else {

            marker = new google.maps.Marker({
              position: location.geo,
              label: ' ',
              title: location.name,
              icon: markerIcon
            });
          }

          marker.addListener('click', function() {
            if (prevOpenedIw !== null)
              prevOpenedIw.close();
            var iw = new google.maps.InfoWindow({content: getPopUpContent(location.name)});
            iw.open(map, marker);
            prevOpenedIw = iw;
          });
          return marker;
        });

        // Add a marker clusterer to manage the markers.
        var cluster = new MarkerClusterer(map, markers, {styles: customStyles});

        if (!youPlaced) {

            var you = new google.maps.Marker({
                position: startPoint,
                label: ' ',
                title: youLocation.name,
                icon: {
                    url: '/stock/roma/img/icon-hotspot-you.png',
                    scaledSize: new google.maps.Size(64, 64),
                    origin:     new google.maps.Point(0, 0),
                    anchor:     new google.maps.Point(0, 0)
                },
                map: map
            });
            if (youLocation.name) {

              you.addListener('click', function() {
                if (prevOpenedIw !== null)
                  prevOpenedIw.close();
                var iw = new google.maps.InfoWindow({content: getPopUpContent(youLocation.name)});
                iw.open(map, you);
                prevOpenedIw = iw;
              });
            }
        }

        map.setOptions({minZoom: 11, maxZoom: 22});
}

function apListInit(startPoint, force, limit, needle) {

        if (force !== true) force = false;
        if (typeof(limit) !== 'number') limit = 999;
        if (typeof(needle) !== 'string') needle = '';

        var lang = $("html").attr("lang");
        if (typeof(lang) === 'string' && lang.indexOf('it') >= 0) lang = 'it'; else lang = 'en';

        if (startPoint.lat !== _prevStartPoint.lat || startPoint.lng !== _prevStartPoint.lng) {

          _prevStartPoint = startPoint;

          // Calcolo la distanza per ogni location
          locations.map(function(location, i) { location.d = parseFloat(Math.round(distance(startPoint.lat, startPoint.lng, location.geo.lat, location.geo.lng) * 100) / 100).toFixed(2); });

          // Ordino l'array
          locations.sort(function(locationA, locationB) { const diff = locationA.d - locationB.d; return (diff === 0 ? 0 : (diff < 0 ? -1 : 1)); });
        }

        if (_apListInitalized && !force)
          return;
        else
          _apListInitalized = true;

        var apList = document.getElementById('ap-list');
        apList.innerHTML = '';

        var j = 0;

        locations.map(function(location, i) {

          var hasNeedle = true;

          if (needle.length > 0)
            hasNeedle = (location.name.toLowerCase().indexOf(needle) > 0);

          if (hasNeedle && j < limit) {

            var content = '';

            //console.log(location.d + ';' + location.geo.lat + ';' + location.geo.lng + ';' + location.name);

            content += '<div class="left-info"><h4>' + location.name + '</h4>' + '<p>' + location.name + ' - Rome, Metropolitan City of Rome - Italy<br>' + (lang === 'it' ? ' Utenti online: ' : ' Online users: ') + (location.online ? location.online : '0') + '</p></div>';
            content += '<div class="right-info"><p>' + location.d + ' km</p><img src="/stock/roma/img/icon-hotspot.png" alt="hotspot" width="48px"></div>';

            var el = document.createElement('div');
            el.classList.add('ap-element');
            el.innerHTML = content;
            apList.appendChild(el);
          }

          j++;
        });
}

// Main code (finder.html)

var latestSearchValue = "";
const basePoint = { lat: 41.834972, lng: 12.4696 };

function displayProblemBox() { $(".section.outwarning").show(); }
function displayBody() { $("body").show(); }
function displayMapView() { $("#list-container, #button-listview").hide(); $("#button-mapview").show(); }

function prepareElements() {

        const listContainer = $("#list-container");
        const buttonGoTop   = $("#button-backtotop");
        const buttonSearch  = $("#button-search");
        const fieldSearch   = $("#field-search");

        $(".custom-toolbar .button-toggle").click(function(){
            const sender = $(this);
            const companionId = sender.attr("data-companion");
            if (!companionId)
                return;
            const companion = $("#" + companionId); sender.hide(); companion.show();
            if (companionId === "button-listview") listContainer.show();
            else if (companionId === "button-mapview") listContainer.hide();
        });

        $(document).scroll(function() {
          if ($(this).scrollTop() <= 0) { if (buttonGoTop.is(":visible")) { buttonGoTop.fadeOut(); } }
          else { if (!buttonGoTop.is(":visible")) { buttonGoTop.fadeIn(); } }
        });

        buttonGoTop.click(function(){
            $("html, body").animate({ scrollTop: 0 }); return false;
        });

        setTimeout(function(){ if($(this).scrollTop() <= 0) buttonGoTop.fadeOut(); }, 2000);

        buttonSearch.click(function(e){
            const tempSearchValue = fieldSearch.val().toLowerCase();
            if (tempSearchValue === latestSearchValue)
                return;
            latestSearchValue = tempSearchValue;
            apListInit(basePoint, true, 999, latestSearchValue);
        });

        $(document).keypress(function(e) { if (e.which == 13) { buttonSearch.trigger("click"); } });
}

$(document).ready(function() {

        prepareElements();
        checkStatus(initReachingInternet, initNotOnInternet, initInCaseOfError);
});

function initReachingInternet() {

        var tempBasePoint = basePoint;

        $.ajax({
            url: "https://wp.digitromawifi.it/mgm?info=1&scope=gw",
            dataType: 'json',
            xhrFields: { withCredentials: true },
            success: function(response) {

                var newBasePoint = null;
                  
                if (response.success === true) {

                    try {
                        if (response.data.gw.apMac) {

                            newBasePoint = apl[response.data.gw.nasId];

                            if (newBasePoint)
                                tempBasePoint = newBasePoint;
                        }
                    }
                    catch(err) {}

                    try {
                        if (!newBasePoint && response.data.gw.nasId) {

                            newBasePoint = mkl[response.data.gw.nasId];

                            if (newBasePoint)
                                tempBasePoint = newBasePoint;
                        }
                    }
                    catch(err) {}
                }
                else {

                    console.log("No user data retrieved from captive...");
                }
            },
            error: function() {

                console.log("Error while retrieving data from captive...");
            },
            complete: function() {

                _initCallback(true, false, tempBasePoint);
            }
        });
}

function initNotOnInternet() {

        _initCallback(false, true, basePoint);
}

function initInCaseOfError() {

        _initCallback(false, true, basePoint);
}

function _initCallback(showMapView, showProblemBox, customBasePoint) {

        if (showMapView === true) {

            apListInit(customBasePoint, true);
            displayMapView();
        }
        else
            apListInit(customBasePoint, false);

        if (showProblemBox === true)
            displayProblemBox();

        displayBody();
}

// End main code (finder.html)
