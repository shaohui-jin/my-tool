const e=`.classic-loader_26 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  animation: classic-loader_26 2s infinite;
}

.classic-loader_26::before {
  content: "Loading...";
}

@keyframes classic-loader_26 {
  0%, 10% {
    transform: perspective(200px) rotateX(0) rotateY(0) scale(1)
  }
  30%, 36% {
    transform: perspective(200px) rotateX(180deg) rotateY(0) scale(1)
  }
  63%, 69% {
    transform: perspective(200px) rotateX(180deg) rotateY(180deg) scale(1)
  }
  90%, 100% {
    transform: perspective(200px) rotateX(180deg) rotateY(180deg) scale(-1)
  }
}
`;export{e as default};
