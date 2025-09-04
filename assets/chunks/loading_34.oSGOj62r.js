const n=`.dots-loader_34 {
  height: 15px;
  aspect-ratio: 4;
  display: grid;
}

.dots-loader_34:before,
.dots-loader_34:after {
  content: "";
  grid-area: 1/1;
  --_g: no-repeat radial-gradient(farthest-side, #000 94%, #0000);
  background: var(--_g) left,
  var(--_g) right;
  background-size: 25% 100%;
  animation: dots-loader_34 1s infinite;
  transform: translate(var(--d, 0)) rotate(0);
}

.dots-loader_34:after {
  --d: 37.5%;
  animation-delay: .5s;
}

@keyframes dots-loader_34 {
  50%, 100% {
    transform: translate(var(--d, 0)) rotate(.5turn)
  }
}
`;export{n as default};
