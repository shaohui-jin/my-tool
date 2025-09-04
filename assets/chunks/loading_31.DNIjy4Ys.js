const n=`.dots-loader_31 {
  height: 15px;
  aspect-ratio: 4;
  display: grid;
  animation: dots-loader_31-0 1s infinite;
}

.dots-loader_31:before,
.dots-loader_31:after {
  content: "";
  grid-area: 1/1;
  --_g: no-repeat radial-gradient(farthest-side, #000 94%, #0000);
  background: var(--_g) left,
  var(--_g) right;
  background-size: 25% 100%;
}

.dots-loader_31:after {
  transform: rotate(0) translate(37.5%) rotate(0);
  animation: inherit;
  animation-name: dots-loader_31-1;
}

@keyframes dots-loader_31-0 {
  100% {
    transform: translate(37.5%)
  }
}

@keyframes dots-loader_31-1 {
  100% {
    transform: rotate(-.5turn) translate(37.5%) rotate(.5turn)
  }
}
`;export{n as default};
