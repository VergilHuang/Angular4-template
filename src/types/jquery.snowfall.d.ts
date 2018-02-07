declare const snowFall: snowFall;

interface JQuery {
  snowfall(flakeCount?:number , maxSpeed?:number , maxSize?:number): () => this;

}

interface snowFall {
  snow(els:any ,{minSize, maxSize})
}

// declare const snowFall : () => {
//   snow<T extends Function>() :
// };
