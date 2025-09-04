const n=`.dots-loader_32 {
  height: 15px;
  aspect-ratio: 5;
  display: grid;
  --_g: no-repeat radial-gradient(farthest-side, #000 94%, #0000);
}

.dots-loader_32:before,
.dots-loader_32:after {
  content: "";
  grid-area: 1/1;
  background: var(--_g) left,
  var(--_g) right;
  background-size: 20% 100%;
  animation: dots-loader_32 1s infinite;
}

.dots-loader_32:after {
  background: var(--_g) calc(1 * 100% / 3),
  var(--_g) calc(2 * 100% / 3);
  background-size: 20% 100%;
  animation-direction: reverse;
}

@keyframes dots-loader_32 {
  80%, 100% {
    transform: rotate(.5turn)
  }
}
`;export{n as default};
