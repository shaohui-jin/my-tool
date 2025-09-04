const n=`.dots-loader_33 {
  height: 15px;
  aspect-ratio: 5;
  display: flex;
  justify-content: space-between;
}

.dots-loader_33:before,
.dots-loader_33:after {
  content: "";
  width: calc(140% / 3);
  --_g: no-repeat radial-gradient(farthest-side, #000 94%, #0000);
  background: var(--_g) left,
  var(--_g) right;
  background-size: calc(300% / 7) 100%;
  transform-origin: calc(300% / 14) 50%;
  transform: translate(0) rotate(0);
  animation: dots-loader_33 1s infinite linear;
}

.dots-loader_33:after {
  --s: -1;
  transform-origin: calc(100% - calc(300% / 14)) 50%;
}

@keyframes dots-loader_33 {
  100% {
    transform: translate(calc(var(--s, 1) * (100% - calc(300% / 7)))) rotate(calc(var(--s, 1) * .5turn))
  }
}
`;export{n as default};
