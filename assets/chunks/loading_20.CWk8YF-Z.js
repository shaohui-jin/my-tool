const n=`.dots-loader_20 {
  height: 15px;
  aspect-ratio: 6;
  display: flex;
}

.dots-loader_20:before,
.dots-loader_20:after {
  content: "";
  flex: 1;
  padding-left: calc(100% / 6);
  background: radial-gradient(closest-side at calc(100% / 3) 50%, #000 90%, #0000) 0/75% 100% content-box;
  animation: dots-loader_20 2s infinite;
}

.dots-loader_20:after {
  --_s: -1;
}

@keyframes dots-loader_20 {
  0% {
    transform: scale(var(--_s, 1)) translate(0) rotate(0)
  }
  25% {
    transform: scale(var(--_s, 1)) translate(-25%) rotate(0)
  }
  50% {
    transform: scale(var(--_s, 1)) translate(-25%) rotate(1turn)
  }
  75%, 100% {
    transform: scale(var(--_s, 1)) translate(0) rotate(1turn)
  }
}
`;export{n as default};
