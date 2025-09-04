const n=`.dots-loader_39 {
  height: 15px;
  aspect-ratio: 5;
  display: grid;
  animation: dots-loader_39-0 1s infinite linear;
}

.dots-loader_39:before,
.dots-loader_39:after {
  content: "";
  width: calc(140% / 3);
  grid-area: 1/1;
  --_g: no-repeat radial-gradient(farthest-side, #000 94%, #0000);
  background: var(--_g) left,
  var(--_g) right;
  background-size: calc(300% / 7) 100%;
  animation: dots-loader_39-1 1s infinite linear;
}

.dots-loader_39:after {
  margin-left: auto;
  --s: -1;
}

@keyframes dots-loader_39-0 {
  0%, 30% {
    transform: rotate(0)
  }
  50%, 100% {
    transform: rotate(.5turn)
  }
}

@keyframes dots-loader_39-1 {
  30%, 70% {
    transform: translate(calc(var(--s, 1) * 400% / 14))
  }
}
`;export{n as default};
