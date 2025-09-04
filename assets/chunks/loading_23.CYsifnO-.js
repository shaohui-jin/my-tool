const n=`.dots-loader_23 {
  width: 50px;
  height: 28px;
  --_g: no-repeat radial-gradient(farthest-side, #000 94%, #0000);
  background: var(--_g) 50% 0,
  var(--_g) 100% 0;
  background-size: 12px 12px;
  position: relative;
  animation: dots-loader_23-0 1.5s linear infinite;
}

.dots-loader_23:before {
  content: "";
  position: absolute;
  height: 12px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #000;
  left: 0;
  top: 0;
  animation: l23-1 1.5s linear infinite,
  l23-2 0.5s cubic-bezier(0, 200, .8, 200) infinite;
}

@keyframes dots-loader_23-0 {
  0%, 31% {
    background-position: 50% 0, 100% 0
  }
  33% {
    background-position: 50% 100%, 100% 0
  }
  43%, 64% {
    background-position: 50% 0, 100% 0
  }
  66% {
    background-position: 50% 0, 100% 100%
  }
  79% {
    background-position: 50% 0, 100% 0
  }
  100% {
    transform: translateX(calc(-100% / 3))
  }
}

@keyframes dots-loader_23-1 {
  100% {
    left: calc(100% + 7px)
  }
}

@keyframes dots-loader_23-2 {
  100% {
    top: -0.1px
  }
}
`;export{n as default};
