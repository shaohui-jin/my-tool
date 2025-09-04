const n=`.classic-loader_37 {
  font-weight: bold;
  font-family: monospace;
  display: inline-grid;
  font-size: 30px;
}

.classic-loader_37:before,
.classic-loader_37:after {
  content: "Loading...";
  grid-area: 1/1;
  -webkit-mask-size: 2ch 100%, 100% 100%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: classic-loader_37 1s infinite;
}

.classic-loader_37:before {
  -webkit-mask-image: linear-gradient(#000 0 0),
  linear-gradient(#000 0 0);
}

.classic-loader_37:after {
  -webkit-mask-image: linear-gradient(#000 0 0);
  transform: scaleY(0.5);
}

@keyframes classic-loader_37 {
  0% {
    -webkit-mask-position: 1ch 0, 0 0
  }
  12.5% {
    -webkit-mask-position: 100% 0, 0 0
  }
  25% {
    -webkit-mask-position: 4ch 0, 0 0
  }
  37.5% {
    -webkit-mask-position: 8ch 0, 0 0
  }
  50% {
    -webkit-mask-position: 2ch 0, 0 0
  }
  62.5% {
    -webkit-mask-position: 100% 0, 0 0
  }
  75% {
    -webkit-mask-position: 0ch 0, 0 0
  }
  87.5% {
    -webkit-mask-position: 6ch 0, 0 0
  }
  100% {
    -webkit-mask-position: 3ch 0, 0 0
  }
}
`;export{n as default};
