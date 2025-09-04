const n=`.dots-loader_25 {
  width: 50px;
  height: 12px;
  --_g: no-repeat radial-gradient(farthest-side, #000 94%, #0000);
  background: var(--_g) left,
  var(--_g) right;
  background-size: 12px 12px;
  position: relative;
}

.dots-loader_25:before {
  content: "";
  position: absolute;
  height: 12px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #000;
  inset: 0;
  margin: auto;
  animation: dots-loader_25-1 1s, l25-2 0.5s;
  animation-timing-function: cubic-bezier(.5, -900, .5, 900);
  animation-iteration-count: infinite;
}

@keyframes dots-loader_25-1 {
  100% {
    transform: translate(0.12px)
  }
}

@keyframes dots-loader_25-2 {
  100% {
    inset: -0.15px 0 0;
  }
}
`;export{n as default};
