const n=`.classic-loader_28 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  overflow: hidden;
  animation: classic-loader_28 2s infinite;
}

.classic-loader_28::before {
  content: "Loading...";
}

@keyframes classic-loader_28 {
  0%, 10% {
    transform: perspective(300px) rotate(0) rotateY(0) rotateX(0)
  }
  30%, 36% {
    transform: perspective(300px) rotate(.5turn) rotateY(0) rotateX(0)
  }
  63%, 69% {
    transform: perspective(300px) rotate(.5turn) rotateY(180deg) rotateX(0)
  }
  90%, 100% {
    transform: perspective(300px) rotate(.5turn) rotateY(180deg) rotateX(180deg)
  }
}
`;export{n as default};
