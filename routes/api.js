const router = require("express").Router();
const { animevd } = require("../controllers/animevd");
const { mp3 } = require("../controllers/mp3");
const { nyadmin } = require("../controllers/nyadmin");
const { aodai } = require("../controllers/aodai");
const { chill } = require("../controllers/chill");
const { tet } = require("../controllers/tet");
const { phongcanh } = require("../controllers/phongcanh");
const { thinh } = require("../controllers/thinh");
const { canh } = require("../controllers/canh");
const { gai } = require("../controllers/gai");
const { onepice } = require("../controllers/onepice");
const { goku } = require("../controllers/goku");
const { loli } = require("../controllers/loli");
const { mirai } = require("../controllers/mirai");
const { mui } = require("../controllers/mui");
const { domixi } = require("../controllers/domixi");
const { meme } = require("../controllers/meme");
const { vdsex } = require("../controllers/vdsex");
const { bot } = require("../controllers/bot");
const { gura } = require("../controllers/gura");
const { trai } = require("../controllers/trai");
const { home } = require("../controllers/home");
const { up } = require("../controllers/up");
const { view } = require("../controllers/view");
const { randomfile } = require("../controllers/random");

router.post("/up", up);
router.get("/view", view);
router.get("/rdfile", randomfile);
router.get("/hsr/anime", animevd);
router.get("/mp3", mp3);
router.get("/maydoanxem", thinh);
router.get("/images/hentaigif", nyadmin);
router.get("/images/anhgai", aodai);
router.get("/video/nhaccover", chill);
router.get("/tet", tet);
router.get("/video/sex", vdsex);
router.get("/images/cosplay", bot);
router.get("/images/phongcanh", phongcanh);
router.get("/images/meme", meme);
router.get("/images/loli", loli);
router.get("/images/neko", domixi);
router.get("/images/onepice", onepice);
router.get("/images/femdom", canh);
router.get("/images/trai", trai);
router.get("/images/mong", mui);
router.get("/video/gai", gai);
router.get("/images/gura", gura);
router.get("/images/mirai", mirai);
router.get("/video/doraemon", goku);
router.get("/", home);
module.exports = router;