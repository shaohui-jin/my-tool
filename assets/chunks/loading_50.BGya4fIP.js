const n=`.dots-loader_50 {
  height: 15px;
  aspect-ratio: 4;
  --_g: no-repeat radial-gradient(farthest-side, #000 90%, #0000);
  background: var(--_g) left,
  var(--_g) right;
  background-size: 25% 100%;
  display: flex;
}

.dots-loader_50:before {
  content: "";
  flex: 1;
  background: inherit;
  animation: dots-loader_50 2s infinite;
}

@keyframes dots-loader_50 {
  0% {
    transform: translate(37.5%) rotate(0)
  }
  16.67% {
    transform: translate(37.5%) rotate(90deg)
  }
  33.33% {
    transform: translate(-37.5%) rotate(90deg)
  }
  50% {
    transform: translate(-37.5%) rotate(180deg)
  }
  66.67% {
    transform: translate(-37.5%) rotate(270deg)
  }
  83.33% {
    transform: translate(37.5%) rotate(270deg)
  }
  100% {
    transform: translate(37.5%) rotate(360deg)
  }
}
`;export{n as default};
