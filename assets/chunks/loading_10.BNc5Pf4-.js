const n=`.classic-loader_10 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  color: #0000;
  background: linear-gradient(90deg, #000 25%, #8A9B0F 0 50%, #C02942 0 75%, #00A0B0 0) 0 0/400% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: classic-loader_10 5s infinite cubic-bezier(0.3, 1, 0, 1);
}

.classic-loader_10:before {
  content: "Loading..."
}

@keyframes classic-loader_10 {
  25% {
    background-position: calc(1 * 100% / 3) 0
  }
  50% {
    background-position: calc(2 * 100% / 3) 0
  }
  75% {
    background-position: calc(3 * 100% / 3) 0
  }
  100% {
    background-position: calc(4 * 100% / 3) 0
  }
}
`;export{n as default};
