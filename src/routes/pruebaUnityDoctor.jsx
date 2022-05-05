import React from "react";
import {Link } from "react-router-dom";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/UnityWebReto.loader.js",
  dataUrl: "build/UnityWebReto.data",
  frameworkUrl: "build/UnityWebReto.framework.js",
  codeUrl: "build/UnityWebReto.wasm",
});

export default function PruebaDoctor(){
    return( 
    <div>
        <Unity style={{
            width: "100%",
            height: "110%",
            justifySelf: "center",
            alignSelf: "center",
            display : "inline-block"

        }} 
        unityContext={unityContext}
         />
          <Link to="/menuDoctor">Volver al menú</Link>
     </div>
     );
   
}