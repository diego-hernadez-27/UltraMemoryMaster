const { Router } = require('express');
const router = Router();

const { renderRutbajo, renderRutmedio, renderRutdificil, renderCodMensajes, renderInverBajo, renderInverMedio,
renderInverAlto, renderSodBajo, renderSodMedio, renderSodAlto, renderHexBajo, renderHexMedio, renderHexDificil,
renderSimonBajo, renderSimonMedio, renderSimonDificil, rendermemoramafacil, rendermemoramamedio, 
rendermemoramadificil, rendercarybajo, rendercarymedio, rendercarydificil, rendervelofacil, 
rendervelomedio, rendervelodificil, rendergalaxia} = require('../controllers/games.controller')

const { isAuthenticated } = require('../helpers/auth');

router.get('/games/auditiva/RepetirPalabra/Rutbajo', isAuthenticated, renderRutbajo);

router.get('/games/auditiva/RepetirPalabra/Rutmedio', isAuthenticated, renderRutmedio);

router.get('/games/auditiva/RepetirPalabra/Rutdificil', isAuthenticated, renderRutdificil);

router.get('/games/auditiva/CodMensajes/adivinando', isAuthenticated, renderCodMensajes);

router.get('/games/auditiva/Memorama/memoramafacil', isAuthenticated, rendermemoramafacil);

router.get('/games/auditiva/Memorama/memoramamedio', isAuthenticated, rendermemoramamedio);

router.get('/games/auditiva/Memorama/memoramadificil', isAuthenticated, rendermemoramadificil);

router.get('/games/visual/PalabrasInvertidas/inverbajo', isAuthenticated, renderInverBajo);

router.get('/games/visual/PalabrasInvertidas/invermedio', isAuthenticated, renderInverMedio);

router.get('/games/visual/PalabrasInvertidas/inveralto', isAuthenticated, renderInverAlto);

router.get('/games/visual/Sodoku/sodindex', isAuthenticated, renderSodBajo);

router.get('/games/visual/Sodoku/sodmedio', isAuthenticated, renderSodMedio);

router.get('/games/visual/Sodoku/sodalto', isAuthenticated, renderSodAlto);

router.get('/games/muscular/Hexamano/hexbajo', isAuthenticated, renderHexBajo);

router.get('/games/muscular/Hexamano/hexmedio', isAuthenticated, renderHexMedio);

router.get('/games/muscular/Hexamano/hexdificil', isAuthenticated, renderHexDificil);

router.get('/games/muscular/Sacry/scaryfacil' , isAuthenticated, rendercarybajo);

router.get('/games/muscular/Sacry/scarymedio', isAuthenticated, rendercarymedio);

router.get('/games/muscular/Sacry/scarydificil', isAuthenticated, rendercarydificil);

router.get('/games/muscular/test/testfacil', isAuthenticated, rendervelofacil);

router.get('/games/muscular/test/testmedio', isAuthenticated, rendervelomedio);

router.get('/games/muscular/test/testdificil', isAuthenticated, rendervelodificil);

router.get('/games/visual/Simon/simonbajo', isAuthenticated, renderSimonBajo);

router.get('/games/visual/Simon/simonmedio', isAuthenticated, renderSimonMedio);

router.get('/games/visual/Simon/simondificil', isAuthenticated, renderSimonDificil);

router.get('/games/estresado/canvasInvader', isAuthenticated, rendergalaxia);

module.exports = router;
