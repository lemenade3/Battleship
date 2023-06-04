import "./style.scss";
import pageLoad from "./pageLoad";

pageLoad(); // should take no parameters

/* both dom and index need to call pageload, pageload currently calls the rendering functions
for the gameboard from dom.

could move the rendering functions from dom into game but which would remove pageLoads dependecy on dom,
dom could then call pageload

only issue with this is passing the game object into the rendering functions */
