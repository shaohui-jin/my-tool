const n=`.classic-loader_22 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  background: linear-gradient(135deg, #0000 calc(50% - 0.5em), #000 0 calc(50% + 0.5em), #0000 0) right/300% 100%;
  animation: classic-loader_22 2s infinite;
}

.classic-loader_22::before {
  content: "Loading...";
  color: #0000;
  padding: 0 5px;
  background: inherit;
  background-image: linear-gradient(135deg, #000 calc(50% - 0.5em), #fff 0 calc(50% + 0.5em), #000 0);
  -webkit-background-clip: text;
  background-clip: text;
}

@keyframes classic-loader_22 {
  100% {
    background-position: left
  }
}
`;export{n as default};
