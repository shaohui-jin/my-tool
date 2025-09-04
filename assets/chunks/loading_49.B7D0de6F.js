const n=`.dots-loader_49 {
  height: 15px;
  aspect-ratio: 4;
  --_g: no-repeat radial-gradient(farthest-side, #000 90%, #0000);
  background: var(--_g) left,
  var(--_g) right;
  background-size: 25% 100%;
  display: grid;
}

.dots-loader_49:before,
.dots-loader_49:after {
  content: "";
  height: inherit;
  aspect-ratio: 1;
  grid-area: 1/1;
  margin: auto;
  border-radius: 50%;
  transform-origin: -100% 50%;
  background: #000;
  animation: dots-loader_49 1s infinite linear;
}

.dots-loader_49:after {
  transform-origin: 200% 50%;
  --s: -1;
  animation-delay: -.5s;
}

@keyframes dots-loader_49 {
  58%,
  100% {
    transform: rotate(calc(var(--s, 1) * 1turn))
  }
}
`;export{n as default};
